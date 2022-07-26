import { ICreateEventDay } from "../dtos/ICreateEventDay";
import { IEventFind } from "../dtos/IEventFind";
import { EventDay } from "../entities/EventDay";

interface IEventDayRepository {
    create({
        start_time, 
        end_time,
        event_id,
    }: ICreateEventDay): Promise<void>;

    deleteDays(id: string): Promise<void>;

    findEventExistsByDays({ user_id, start_time, end_time }: IEventFind): Promise<EventDay>;

    listEventDay(id: string): Promise<EventDay[]>;

    save(eventDay: EventDay): Promise<void>;
}

export { IEventDayRepository };
