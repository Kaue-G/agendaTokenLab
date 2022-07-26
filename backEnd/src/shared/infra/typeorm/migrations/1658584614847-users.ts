import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class users1658584614847 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                    },
                    {
                        name: 'nick_name',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                    },
                    {
                        name: 'role_id',
                        type: 'uuid',
                    },
                    {
                        name:  "created_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ],
                foreignKeys: [
                    {
                        name: 'fk_role',
                        referencedTableName: 'roles',
                        referencedColumnNames: ['id'],
                        columnNames: ['role_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
