import { Module } from '@nestjs/common';
import { DatabaseModule } from './db/config/database.module';
import { CronjobModule } from './cronjobs/cronjob.module';
import { ApiModule } from './axios/api.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [
    DatabaseModule,
    CronjobModule,
    ApiModule,
    ServiceModule
  ],
})
export class AppModule { }
