import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { LoginUserUseCase } from './loginUserUseCase';

class LoginUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { nick_name, password} = request.body;

        const loginUserUseCase = container.resolve(LoginUserUseCase);

        return response.json(
            await loginUserUseCase.execute({
                nick_name,
                password,
            })
        ).status(200);
    }
}

export { LoginUserController };
