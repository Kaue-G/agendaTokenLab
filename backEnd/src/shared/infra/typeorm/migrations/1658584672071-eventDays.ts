import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class eventDays1658584672071 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'event_days',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'start_time',
                        type: 'timestamp',
                    },
                    {
                        name: 'end_time',
                        type: 'timestamp',
                    },
                    {
                        name: 'event_id',
                        type: 'uuid',
                    }
                ],
                foreignKeys: [
                    {
                        name: 'fk_event',
                        referencedTableName: 'events',
                        referencedColumnNames: ['id'],
                        columnNames: ['event_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('event_days');
    }

}
