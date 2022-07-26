import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class rolesHasPermissions1658584603150 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'roles_has_permissions',
                columns: [
                    {
                        name: 'role_id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'permission_id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid'
                    },
                ],
                foreignKeys: [
                    {
                        name: 'fk_roles',
                        referencedTableName: 'roles',
                        referencedColumnNames: ['id'],
                        columnNames: ['role_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    },
                    {
                        name: 'fk_permissions',
                        referencedTableName: 'permissions',
                        referencedColumnNames: ['id'],
                        columnNames: ['permission_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('roles_has_permissions');
    }

}
