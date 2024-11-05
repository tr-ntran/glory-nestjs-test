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

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'bigint', nullable: true })
  created_at: number;

  @Column({ type: 'bigint', nullable: true })
  updated_at: number;

  @Column({ type: 'int', nullable: true })
  location_id: number;
}



