import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';
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

    @ManyToOne(() => Role)
    @JoinColumn({ name: 'role_id'})
    role: Role;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { User };