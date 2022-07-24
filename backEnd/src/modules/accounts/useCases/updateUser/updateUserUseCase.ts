import { inject, injectable } from "tsyringe";
import { IRequestUpdateUser } from "../../dtos/IRequestUpdateUser";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class UpdateUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) {}

    async execute({
        id,
        nick_name,
        email,
        role_id
    }: IRequestUpdateUser): Promise<void> {
        const user = await this.userRepository.findUserById({ id });

        user.nick_name = nick_name;
        user.email = email;
        user.role_id = role_id;

        await this.userRepository.save(user);
    }
}

export { UpdateUserUseCase };
