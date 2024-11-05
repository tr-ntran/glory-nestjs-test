import { DataSource } from 'typeorm';
import { Asset } from '../entities/asset.entity'; 

export const ormConfig = new DataSource({
  type: 'mysql',
  host: 'localhost', 
  port: 3306, 
  username: 'root',
  password: '',
  database: 'test-glory', 
  entities: [Asset], 
  migrations: ['src/migrations/*.ts'], 
  synchronize: false,
  logging: true, 
});
