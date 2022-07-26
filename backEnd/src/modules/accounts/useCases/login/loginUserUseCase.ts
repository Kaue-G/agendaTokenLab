import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ILogin } from "../../dtos/ILogin";
import { IRequestCreateUser } from "../../dtos/IRequestCreateUser";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class LoginUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) {}

    async execute({
        nick_name,
        password,
    }: IRequestCreateUser): Promise<ILogin> {
        const user = await this.userRepository.findUserNickName({ nick_name });
console.log(user);

        if(user){
            if(user.password !== password){
                throw new AppError('Senha incorreta', 400);
            }

            return {
                id: user.id,
                nick_name: user.nick_name,
                role_id: user.role_id
            };
        }

        throw new AppError('Usuário não encontrado', 400);
    }
}

export { LoginUserUseCase };