import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1743638569117 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "active" boolean NOT NULL default true`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "active"`);
  }
}
