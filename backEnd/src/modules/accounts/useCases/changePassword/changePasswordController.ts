import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ChangePasswordUserCase } from './changePasswordUseCase';

class ChangePasswordController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id, password } = request.body;

        const changePasswordUseCase = container.resolve(ChangePasswordUserCase);

        await changePasswordUseCase.execute({ id, password });

        return response.status(200).send();
    }
}

export { ChangePasswordController };
