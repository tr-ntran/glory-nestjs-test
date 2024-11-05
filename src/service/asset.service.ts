import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Asset } from 'src/entities/asset.entity';
import { QueryRunner, Repository } from 'typeorm';

@Injectable()
export class AssetService {
  constructor(
    @InjectRepository(Asset)
    private readonly assetRepository: Repository<Asset>,
  ) { }

  async addAssets(assets: Asset[]) {
    const queryRunner: QueryRunner = this.assetRepository.manager.connection.createQueryRunner();

    await queryRunner.startTransaction();

    try {
      const newAsset = this.assetRepository.upsert(assets, ['id']);
      const savedAsset = await queryRunner.manager.save(newAsset);

      await queryRunner.commitTransaction();
      return savedAsset;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
