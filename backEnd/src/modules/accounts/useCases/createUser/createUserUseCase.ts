import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IRequestCreateUser } from "../../dtos/IRequestCreateUser";
import { IUserRepository } from "../../repositories/IUserRepository";
import { hash } from "bcrypt";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) {}

    async execute({
        nick_name,
        email,
        password,
        role_id
    }: IRequestCreateUser): Promise<void> {
        const userAlreadyExists = await this.userRepository.findUserByEmail({ email });

        if (userAlreadyExists) {
            throw new AppError("Email already registered")
        }

        const passwordHash = await hash(password, 8);

        await this.userRepository.create({
            nick_name,
            email,
            password: passwordHash,
            role_id
        });
    }
}

export { CreateUserUseCase };