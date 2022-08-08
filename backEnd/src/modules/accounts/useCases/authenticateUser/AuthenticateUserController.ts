import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

class AuthenticateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { nick_name, password} = request.body;

        const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

        return response.json(
            await authenticateUserUseCase.execute({
                nick_name,
                password,
            })
        ).status(200);
    }
}

export { AuthenticateUserController };
