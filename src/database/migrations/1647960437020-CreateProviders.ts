/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProviders1647960437020 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'providers',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'nome_vendedor',
                        type: 'varchar',
                    },
                    {
                        name: 'email_vendedor',
                        type: 'varchar',
                    },
                    {
                        name: 'cnpj',
                        type: 'varchar',
                    },
                    {
                        name: 'razao_social',
                        type: 'varchar',
                    },
                    {
                        name: 'nome_fantasia',
                        type: 'varchar',
                    },
                    {
                        name: 'telefone',
                        type: 'varchar',
                    },
                    {
                        name: 'celular_vendedor',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('providers');
    }
}
