import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { Permission } from './Permission';
import { User } from './User';

@Entity('roles')
class Role {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @OneToMany(() => User, user => user.role)
    users: User[];

    @ManyToMany(() => Permission)
    @JoinTable({
        name: 'roles_has_permissions',
        joinColumns: [{ name: 'role_id' }],
        inverseJoinColumns: [{ name: 'permission_id' }],
    })
    permissions: Permission[];

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Role };
