import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';
import { Event } from "../../events/entities/Event";
import { Role } from "./Role";

@Entity('users')
class User {
    @PrimaryColumn()
    id?: string;

    @Column()
    nick_name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    role_id: string;
    
    @Column()
    created_at: Date;

    @ManyToOne(() => Role)
    @JoinColumn({ name: 'role_id'})
    role: Role;

    @OneToMany(() => Event, event => event.user)
    events: Event[];
    
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { User };