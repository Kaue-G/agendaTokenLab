import { EventDay } from "../../entities/EventDay";
import { IEventDayRepository } from "../IEventDayRepository";

class EventDayRepository implements IEventDayRepository {
    create({ start_time, end_time, event }: { start_time: string; end_time: string; event: Event; }): Promise<EventDay> {
        throw new Error("Method not implemented.");
    }

    findEventDayById({ id }: { id: string; }): Promise<EventDay> {
        throw new Error("Method not implemented.");
    }

    listEventDay(): Promise<EventDay[]> {
        throw new Error("Method not implemented.");
    }
    
    save(eventDay: EventDay): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

export { EventDayRepository };
