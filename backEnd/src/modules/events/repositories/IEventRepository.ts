import { Event } from "../entities/Event";

interface IEventRepository {
    create({
        description, user_id 
    }: {
        description: string, 
        user_id: string
    }): Promise<Event>;

    deleteEvent({ id }: { id: string }): Promise<void>;

    findEventById({ id }: { id: string }): Promise<Event>;
    
    listEvent(): Promise<Event[]>;

    save(event: Event): Promise<Event>
}

export { IEventRepository };
