import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateEventUseCase } from './createEventUseCase';

class CreateEventController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { 
            description,
            days
        } = request.body;
        const { id } = request.user;

        const createEventUseCase = container.resolve(CreateEventUseCase);
        
        await createEventUseCase.execute({
            description, 
            user_id: id,
            days
        });
        return response.status(201).send();
    }
}

export { CreateEventController };