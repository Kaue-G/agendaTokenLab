import { getRepository, MigrationInterface, QueryRunner } from "typeorm";
import { UserSeed } from "../seed/user.seed";

export class seedUser1658627817379 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const users: any = getRepository("users").create(UserSeed);


        const adminRole: any = await getRepository("roles").find();

        users[0].role_id = adminRole[0].id;

        users[1].role_id = adminRole[1].id;

        await getRepository("users").save(users);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
