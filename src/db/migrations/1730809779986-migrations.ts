import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1730809779986 implements MigrationInterface {
    name = 'Migrations1730809779986'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`asset\` DROP COLUMN \`createdAt\``);
        await queryRunner.query(`ALTER TABLE \`asset\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`asset\` DROP COLUMN \`locationId\``);
        await queryRunner.query(`ALTER TABLE \`asset\` ADD \`created_at\` bigint NULL`);
        await queryRunner.query(`ALTER TABLE \`asset\` ADD \`updated_at\` bigint NULL`);
        await queryRunner.query(`ALTER TABLE \`asset\` ADD \`location_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`asset\` CHANGE \`description\` \`description\` text NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`asset\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`asset\` DROP COLUMN \`location_id\``);
        await queryRunner.query(`ALTER TABLE \`asset\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`asset\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`asset\` ADD \`locationId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`asset\` ADD \`updatedAt\` bigint NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`asset\` ADD \`createdAt\` bigint NULL DEFAULT 'NULL'`);
    }

}
