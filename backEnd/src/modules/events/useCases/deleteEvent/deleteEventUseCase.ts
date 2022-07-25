import { inject, injectable } from "tsyringe";
import { IEventRepository } from "../../repositories/IEventRepository";

@injectable()
class DeleteEventUseCase {
    constructor(
        @inject('EventRepository')
        private eventRepository: IEventRepository,
    ) {}

    async execute({ id }: { id: string }): Promise<void> {        
        await this.eventRepository.deleteEvent({ id });
    }
}

export { DeleteEventUseCase };