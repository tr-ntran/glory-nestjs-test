import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Asset {
  @PrimaryGeneratedColumn()
  id: number; 

  @Column({ type: 'varchar', length: 50 })
  type: string; 

  @Column({ type: 'varchar', length: 50 })
  serial: string; 

  @Column({ type: 'varchar', length: 20 })
  status: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'bigint' })
  createdAt: number;

  @Column({ type: 'bigint' })
  updatedAt: number; 

  @Column({ type: 'int' })
  locationId: number;
}



