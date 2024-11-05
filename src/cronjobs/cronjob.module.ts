import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CronjobService } from './cronjob.service';
import { ApiModule } from '../axios/api.module';

@Module({
  imports: [ScheduleModule.forRoot(), ApiModule],
  providers: [CronjobService],
})
export class CronjobModule {}
