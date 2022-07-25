interface eventDays {
    start_time: string 
    end_time: string
}

interface IRequestCreateEvent {
    description: string;
    user_id: string;
    days: eventDays[];
}

export { IRequestCreateEvent, eventDays };
