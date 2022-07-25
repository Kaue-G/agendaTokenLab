import { container, inject, injectable } from "tsyringe";
import { IUpdateEvent } from "../../dtos/IUpdateEvent";
import { IEventRepository } from "../../repositories/IEventRepository";
import { CreateEventDaysUseCase } from "../createEventDaysUseCase/createEventDaysUseCase";

@injectable()
class UpdateEventUseCase {
    constructor(
        @inject('EventRepository')
        private eventRepository: IEventRepository,
    ) {}
    
    async execute({
        event_id,
        description,
        days
    }: IUpdateEvent): Promise<void> {
        const event = await this.eventRepository.findEventById({
            id: event_id,
        });

        event.description = description;

        await this.eventRepository.save(event);
        
        const createEventDay = container.resolve(CreateEventDaysUseCase);

        Promise.all(
            days.map(async day => {
                await createEventDay.execute({
                    start_time: new Date(day.start_time),
                    end_time: new Date(day.end_time),
                    event_id: event.id,
                });
            })
        );

    }
}

export { UpdateEventUseCase };
