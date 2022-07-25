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
        const event = this.repository.create({
            description, 
            user_id 
        });

        return this.save(event);        

    }

    async deleteEvent({ id }: { id: string }): Promise<void>{
        await this.repository.delete(id);
    };

    async findEventById({ id }: { id: string; }): Promise<Event> {
        return this.repository.findOne(id);
    }

    async listEvent(): Promise<Event[]> {
        return await this.repository.find({
            relations: ['eventDays']
        });
    }

    async save(event: Event): Promise<Event>{
        return this.repository.save(event);  
    }
}

export { EventRepository };
