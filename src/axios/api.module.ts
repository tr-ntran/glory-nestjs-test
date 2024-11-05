import { Module } from '@nestjs/common';
import { ApiService } from './axios.service';

@Module({
  providers: [ApiService],
  exports: [ApiService],
})
export class ApiModule {}
