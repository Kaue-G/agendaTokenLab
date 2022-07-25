import { getRepository, Repository } from "typeorm";
import { ICreateEventDay } from "../../dtos/ICreateEventDay";
import { EventDay } from "../../entities/EventDay";
import { IEventDayRepository } from "../IEventDayRepository";

class EventDayRepository implements IEventDayRepository {
    private repository: Repository<EventDay>;
    constructor() {
        this.repository =  getRepository(EventDay);
    }

    async create({ 
        start_time, 
        end_time, 
        event_id 
    }: ICreateEventDay): Promise<void> {
        const dayEvent = this.repository.create({
            start_time, 
            end_time, 
            event_id
        });

        this.repository.save(dayEvent);
    }

    async findEventDayById({ id }: { id: string; }): Promise<EventDay> {
        throw new Error("Method not implemented.");
    }

    async listEventDay(): Promise<EventDay[]> {
        throw new Error("Method not implemented.");
    }

    async save(eventDay: EventDay): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

export { EventDayRepository };
