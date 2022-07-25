import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListUserUseCase } from './listUsersUseCase';

class ListUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listUserUseCase = container.resolve(ListUserUseCase);

        return response.json(
            await listUserUseCase.execute(),
        );
    }
}

export { ListUserController };
