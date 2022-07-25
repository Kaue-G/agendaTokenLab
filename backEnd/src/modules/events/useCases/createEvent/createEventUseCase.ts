import { container, inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IRequestCreateEvent } from "../../dtos/IRequestCreateEvent";
import { IEventRepository } from "../../repositories/IEventRepository";
import { CreateEventDaysUseCase } from "../createEventDaysUseCase/createEventDaysUseCase";
import { FindEventExists } from "../findEventExists/findEventExists";

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
    }: IRequestCreateEvent): Promise<void> {

        const findEventByDays = container.resolve(FindEventExists);

        const eventExists = await findEventByDays.execute({ user_id, days});

        if(eventExists.some(event => event !== undefined)){
            throw new AppError("there is already an event for this time", 400);
        } else {
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
