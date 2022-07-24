import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IRequestCreateUser } from "../../dtos/IRequestCreateUser";
import { IUserRepository } from "../../repositories/IUserRepository";

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
        const userExists = await this.userRepository.findUserByEmail({ email });

        if (!userExists) {
            await this.userRepository.create({
                nick_name, 
                email, 
                password, 
                role_id
            });
        } else {
            throw new AppError("Email already registered")
        }

    }
}

export { CreateUserUseCase };