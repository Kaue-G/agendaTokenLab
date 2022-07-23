import { getRepository, Repository } from "typeorm";
import { IRequestCreateUser } from "../../dtos/IRequestCreateUser";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
    private repository: Repository<User>;
    constructor() {
        this.repository = getRepository(User);
    }
    
    create({ nick_name, email, password, role_id }: IRequestCreateUser): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteUser({ user_id }: { user_id: any; }): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findProfile({ id: string }: { id: any; }): Promise<User> {
        throw new Error("Method not implemented.");
    }
    listUser(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    save(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

export { UserRepository };