import { container, inject, injectable } from "tsyringe";
import { IRequestCreateEvent } from "../../dtos/IRequestCreateEvent";
import { IEventRepository } from "../../repositories/IEventRepository";
import { CreateEventDaysUseCase } from "../createEventDaysUseCase/createEventDaysUseCase";

@injectable()
class CreateEventUseCase {
    constructor(
        @inject('EventRepository')
        private eventRepository: IEventRepository,
    ) {}
    
    async execute({
        description, 
        user_id,
        days,
    }: IRequestCreateEvent) {
        const eventExists = await this.eventRepository.findEventByUserId({
            id: user_id,
        });
        // usuario com evento ja cadastrado no mesmo horario
        if(true){
            const event = await this.eventRepository.create({
                description, 
                user_id,
            });

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
}

export { CreateEventUseCase };
