import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Asset } from 'src/entities/asset.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AssetService {
  constructor(
    @InjectRepository(Asset) 
    private readonly assetRepository: Repository<Asset>,
  ) {}

  async addAssets(assets: Asset[]): Promise<Asset[]> {
    return this.assetRepository.save(assets);
  }
}
