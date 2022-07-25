import { getRepository, Repository, Between } from "typeorm";
import { ICreateEventDay } from "../../dtos/ICreateEventDay";
import { IEventFind } from "../../dtos/IEventFind";
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

    async findEventExistsByDays({ user_id, start_time, end_time }: IEventFind): Promise<EventDay> {
        return await this.repository.findOne({
            relations: ['event'],
            where: {
                start_time: Between(
                    start_time,
                    end_time
                ),
                end_time: Between(
                    start_time,
                    end_time
                ),
                event: {
                    user_id,
                }
            
            }
        });
    }

    async listEventDay(): Promise<EventDay[]> {
        throw new Error("Method not implemented.");
    }

    async save(eventDay: EventDay): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

export { EventDayRepository };
