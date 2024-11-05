import { Module } from '@nestjs/common';
import { CronjobService } from './cronjob.service';
import { ApiModule } from '../axios/api.module';
import { ServiceModule } from 'src/service/service.module';
import { ScheduleModule } from '@nestjs/schedule';
@Module({
  imports: [ApiModule, ServiceModule, ScheduleModule.forRoot()],
  providers: [CronjobService],
})
export class CronjobModule { }
