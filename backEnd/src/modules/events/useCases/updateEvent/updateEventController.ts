import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateEventUseCase } from './updateEventUseCase';

class UpdateEventController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { event_id, description, days } = request.body

        const updateEventUseCase = container.resolve(UpdateEventUseCase);

        await updateEventUseCase.execute({
            event_id, 
            description, 
            days
        });

        return response.status(200).send();
    }
}

export { UpdateEventController };
