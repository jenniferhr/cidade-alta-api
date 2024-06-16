import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Badge } from './badge.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @ManyToMany(() => Badge, { cascade: true })
  @JoinTable()
  badges: Badge[];
}
