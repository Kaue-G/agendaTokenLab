import { getRepository, Repository } from "typeorm";
import { IRequestCreateUser } from "../../dtos/IRequestCreateUser";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
    private repository: Repository<User>;
    constructor() {
        this.repository = getRepository(User);
    }

    async create({ nick_name, email, password, role_id }: IRequestCreateUser): Promise<void> {
        const user = this.repository.create({
            nick_name, email, password, role_id
        });

        this.save(user);
    }
    async deleteUser({ user_id }: { user_id: any; }): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async findUserById({ id }: { id: any; }): Promise<User> {
        throw new Error("Method not implemented.");
    }
    async findUserByEmail({ email }: { email: string; }): Promise<User> {
        return await this.repository.findOne({
            where: {
                email
            }
        });
    }
    async listUser(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    async save(user: User): Promise<void> {
        await this.repository.save(user);
    }
    
   
}

export { UserRepository };