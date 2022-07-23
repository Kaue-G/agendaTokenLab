import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from './createUserUseCase';

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { nick_name, email, password, role_id } = request.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);

        await createUserUseCase.execute({ 
            nick_name, 
            email, 
            password, 
            role_id 
        });
        
        return response.status(201).send();
    }
}

export { CreateUserController };
