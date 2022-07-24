import { EventDay } from "../entities/EventDay";

interface IEventDayRepository {
    create({
        start_time, 
        end_time,
        event 
    }: {
        start_time: string, 
        end_time: string,
        event: Event,
    }): Promise<EventDay>;

    findEventDayById({ id }: { id: string }): Promise<EventDay>;

    listEventDay(): Promise<EventDay[]>;

    save(eventDay: EventDay): Promise<void>;
}

export { IEventDayRepository };
