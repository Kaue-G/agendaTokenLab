import { inject, injectable } from "tsyringe";
import { ICreateEventDay } from "../../dtos/ICreateEventDay";
import { IEventDayRepository } from "../../repositories/IEventDayRepository";

@injectable()
class CreateEventDaysUseCase {
    constructor(
        @inject('EventDayRepository')
        private eventRepository: IEventDayRepository,
    ) {}

    async execute({ start_time, end_time, event_id }: ICreateEventDay): Promise<void> {
        await this.eventRepository.create({
            start_time, 
            end_time, 
            event_id
        });
    }
}

export { CreateEventDaysUseCase };