import { IRequestCreateUser } from "../dtos/IRequestCreateUser";
import { User } from "../entities/User";

interface IUserRepository {
    create({ 
        nick_name, 
        email, 
        password, 
        role_id 
    }: IRequestCreateUser): Promise<void>;

    deleteUser({ id }: { id: string }): Promise<void>;

    findUserById({ id }: { id: string }): Promise<User>;

    findUserByEmail({ email: string }): Promise<User>;

    listUser(): Promise<User[]>;

    save(user: User): Promise<void>;
}

export { IUserRepository };