import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1730809386721 implements MigrationInterface {
    name = 'Migrations1730809386721'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`asset\` (\`id\` int NOT NULL AUTO_INCREMENT, \`type\` varchar(50) NOT NULL, \`serial\` varchar(50) NOT NULL, \`status\` varchar(20) NOT NULL, \`description\` text NULL, \`createdAt\` bigint NULL, \`updatedAt\` bigint NULL, \`locationId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`asset\``);
    }

}
