import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';
import { Event } from "./Event";

@Entity('event_days')
class EventDay {
    @PrimaryColumn()
    id?: string;

    @Column()
    start_time: Date;
    
    @Column()
    end_time: Date;
    
    @Column()
    event_id: string;

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
