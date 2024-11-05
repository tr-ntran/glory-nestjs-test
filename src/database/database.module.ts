import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './orm-config';
import { Asset } from 'src/entities/asset.entity';


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        ...ormConfig.options, 
      }),
    }),
    TypeOrmModule.forFeature([Asset]), 
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
