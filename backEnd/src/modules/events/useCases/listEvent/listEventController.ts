import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListEcentUserCase } from './listEventUseCase';

class ListEventController {
    async handle(request: Request, response: Response): Promise<Response> {
     
        const listEventUseCase = container.resolve(ListEcentUserCase);

        return response.json(
            await listEventUseCase.execute(), 
        );
    }
}

export { ListEventController };
