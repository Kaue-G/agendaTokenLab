import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IAuthenticateUser } from "../../dtos/IAuthenticateUser";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import authentication from "../../../../../config/authentication";

interface IRequest {
    nickOrEmail: string;
    password: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) {}

    async execute({
        nickOrEmail,
        password,
    }: IRequest): Promise<IAuthenticateUser> {

        const user = await this.userAlreadyExists(nickOrEmail);

        if (!user) {
            throw new AppError('Incorrect nickname/email or password');
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError('Incorrect nickname/email or password');
        }

        const { secret_token, expires_in_token } = authentication;

        const token = sign({}, secret_token, {
            subject: user.id,
            expiresIn: expires_in_token,
        });

        return {
            user: {
                nick_name: user.nick_name,
                email: user.email,
            },
            token
        };
    }

    async userAlreadyExists(nickOrEmail: string): Promise<User> {
        const user = await this.userRepository.findUserNickName({ nick_name: nickOrEmail });

        if (user) {
            return user;
        }

        return await this.userRepository.findUserByEmail({ email: nickOrEmail });
    }
}

export { AuthenticateUserUseCase };
