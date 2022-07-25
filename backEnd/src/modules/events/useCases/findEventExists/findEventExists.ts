import { inject, injectable } from "tsyringe";
import { IEventFind } from "../../dtos/IEventFind";
import { EventDay } from "../../entities/EventDay";
import { IEventDayRepository } from "../../repositories/IEventDayRepository";

@injectable()
class FindEventExists {
    constructor(
        @inject('EventDayRepository')
        private eventRepository: IEventDayRepository,
    ) {}

    async execute({ user_id, days }: IEventFind): Promise<EventDay[]> {
        return Promise.all(days.map(async day => {
            const found = await this.eventRepository.findEventExistsByDays({
                start_time: new Date(day.start_time),
                end_time: new Date(day.end_time),
                user_id
            });

            return found;
        }));
    }
}

export { FindEventExists };