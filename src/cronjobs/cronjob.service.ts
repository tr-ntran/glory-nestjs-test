import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ApiService } from '../axios/axios.service';
import { AssetService } from '../service/asset.service';

@Injectable()
export class CronjobService {
  constructor(
    private readonly apiService: ApiService,
    private readonly assetService: AssetService,
  ) { }

  @Cron(CronExpression.EVERY_30_SECONDS) //Use EVERY_30_SECONDS instead of EVERY_DAY_AT_MIDNIGHT to test 
  handleCron() {
    console.log('Cron job is running...');
    this.apiService.fetchData()
      .then(data => {
        return this.assetService.addAssets(data)
      })
      .catch(err => console.error(err));
  }
}
