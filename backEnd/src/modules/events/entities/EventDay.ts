import { Column, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';
import { Event } from "./Event";

class EventDay {
    @PrimaryColumn()
    id?: string;

    @Column()
    start_time: string;
    
    @Column()
    end_time: string;
    
    @Column()
    envent_id: string;

    @ManyToOne(() => Event)
    @JoinColumn({ name: 'event_id'})
    event: Event;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { EventDay };
