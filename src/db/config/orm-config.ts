import { DataSource } from 'typeorm';
import { Asset } from '../../entities/asset.entity';
import { Migrations1730809386721 } from '../migrations/1730809386721-migrations';
import { Migrations1730809779986 } from '../migrations/1730809779986-migrations';

export const ormConfig = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'test-glory',
  entities: [Asset],
  migrations: [Migrations1730809386721, Migrations1730809779986],
  synchronize: false,
  logging: true,
});
