import { eventDays } from './IRequestCreateEvent'

interface IUpdateEvent {
    event_id: string;
    description: string;
    days: eventDays[];
}

export { IUpdateEvent };