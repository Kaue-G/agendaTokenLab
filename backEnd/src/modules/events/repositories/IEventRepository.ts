import { Event } from "../entities/Event";

interface IEventRepository {
    create({
        description, user_id 
    }: {
        description: string, 
        user_id: string
    }): Promise<Event>;

    findEventById({ id }: { id: string }): Promise<Event>;

    listEvent(): Promise<Event[]>;

    save(event: Event): Promise<void>;
}

export { IEventRepository };
