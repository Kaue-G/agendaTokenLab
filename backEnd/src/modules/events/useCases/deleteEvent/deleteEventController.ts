import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteEventUseCase } from './deleteEventUseCase';

class DeleteEventController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;

        const deleteEventUseCase = container.resolve(DeleteEventUseCase);

        await deleteEventUseCase.execute({
            id: id as string, 
        })

        return response.status(200).send();
    }
}

export { DeleteEventController };