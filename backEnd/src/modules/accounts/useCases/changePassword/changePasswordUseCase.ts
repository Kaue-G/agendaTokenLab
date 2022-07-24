import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class ChangePasswordUserCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) {}

    async execute({ password, id }: { password: string, id: string }) {
        const user = await this.userRepository.findUserById({ id });

        user.password = password;

        await this.userRepository.save(user);
    }
}

export { ChangePasswordUserCase };
