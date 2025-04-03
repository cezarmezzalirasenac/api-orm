import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('atms')
export class Atm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  location: string;

  @Column()
  active: boolean;

  @Column()
  updated_at: Date;
}
