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
        const days = await this.eventRepository.listEventDay(event_id);

        if (days) {
            await this.eventRepository.deleteDays(event_id);
        }
        
        await this.eventRepository.create({
            start_time,
            end_time,
            event_id
        });
    }
}

export { CreateEventDaysUseCase };