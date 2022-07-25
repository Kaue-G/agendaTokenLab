import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateEventUseCase } from './createEventUseCase';

class CreateEventController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { 
            description, 
            user_id,
            days
        } = request.body;

        const createEventUseCase = container.resolve(CreateEventUseCase);
        
        await createEventUseCase.execute({
            description, 
            user_id,
            days
        });
        return response.status(201).send();
    }
}

export { CreateEventController };