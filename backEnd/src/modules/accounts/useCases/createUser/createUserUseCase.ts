import { inject } from "tsyringe";
import { IRequestCreateUser } from "../../dtos/IRequestCreateUser";
import { IUserRepository } from "../../repositories/IUserRepository";

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
    }: IRequestCreateUser): Promise<void>{
        const userExists = await this.userRepository
    }
}

export { CreateUserUseCase };