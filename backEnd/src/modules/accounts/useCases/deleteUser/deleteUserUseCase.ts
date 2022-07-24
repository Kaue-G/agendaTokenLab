import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class DeleteUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) {}
    
    async execute({ id }: { id: string }): Promise<void> {        
        await this.userRepository.deleteUser({ id });
    }
}

export { DeleteUserUseCase };
