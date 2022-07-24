import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import { PermissionsSeed } from "../seed/permissions.seed";
import { RolesSeed } from "../seed/roles.seed";

export class seedPermissionsAndRoles1658626200256 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const permissions = getRepository("permissions").create(PermissionsSeed);

        await getRepository("permissions").save(permissions);
        
        const roles: any = RolesSeed;

        roles[0].permissions = permissions;

        const rolesSeed = getRepository("roles").create(roles);
        await getRepository("roles").save(rolesSeed);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
