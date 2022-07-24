import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteUserUseCase } from './deleteUserUseCase';

class DeleteUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;

        const deleteUserUseCase = container.resolve(DeleteUserUseCase);

        await deleteUserUseCase.execute({ 
            id: id as string, 
        });

        return response.status(200).send();
    }
}

export { DeleteUserController };
