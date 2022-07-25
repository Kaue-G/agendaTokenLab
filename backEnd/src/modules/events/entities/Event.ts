import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { User } from '../../accounts/entities/User';
import { EventDay } from './EventDay';

@Entity('events')
class Event {
    @PrimaryColumn()
    id?: string;

    @Column()
    description: string;
    
    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id'})
    user: User;

    @OneToMany(() => EventDay, eventDay => eventDay.event)
    eventDays: EventDay[];

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export  { Event };
