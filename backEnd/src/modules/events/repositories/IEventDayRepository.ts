import { ICreateEventDay } from "../dtos/ICreateEventDay";
import { EventDay } from "../entities/EventDay";

interface IEventDayRepository {
    create({
        start_time, 
        end_time,
        event_id,
    }: ICreateEventDay): Promise<void>;

    findEventDayById({ id }: { id: string }): Promise<EventDay>;

    listEventDay(): Promise<EventDay[]>;

    save(eventDay: EventDay): Promise<void>;
}

export { IEventDayRepository };
