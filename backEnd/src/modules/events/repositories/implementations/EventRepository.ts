import { getRepository, Repository } from "typeorm";
import { Event } from "../../entities/Event";
import { IEventRepository } from "../IEventRepository";

class EventRepository implements IEventRepository {
    private repository: Repository<Event>;
    constructor() {
        this.repository =  getRepository(Event);
    }

    async create({ 
        description, 
        user_id 
    }: {
        description: string; 
        user_id: string; 
    }): Promise<Event> {
        throw new Error("Method not implemented.");
    }

    async findEventById({ id }: { id: string; }): Promise<Event> {
        throw new Error("Method not implemented.");
    }

    async listEvent(): Promise<Event[]> {
        return await this.repository.find();
    }

    async save(event: Event): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

export { EventRepository };
