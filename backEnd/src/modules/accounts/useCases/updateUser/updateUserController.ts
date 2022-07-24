import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateUserUseCase } from './updateUserUseCase';

class UpdateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id, nick_name, email, role_id } = request.body;

        const updateUserUseCase = container.resolve(UpdateUserUseCase);

        await updateUserUseCase.execute({
            id,
            nick_name, 
            email, 
            role_id 
        });
        
        return response.status(200).send();
    }
}

export { UpdateUserController };
