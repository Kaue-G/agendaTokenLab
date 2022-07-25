import { eventDays } from "./IRequestCreateEvent";

interface IEventFind {
    user_id: string; 
    start_time?: Date; 
    end_time?: Date;
    days?: eventDays[];
    day?: eventDays;
}

export { IEventFind };