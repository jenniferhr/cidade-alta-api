import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Badge } from './badge.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ name: 'id' })
  @ApiProperty({ example: '1' })
  id: number;

  @Column()
  @ApiProperty({ example: 'john_doe', required: false })
  username?: string;

  @Column()
  @ApiProperty({ example: 'strongpassword123', required: false })
  password?: string;

  @ManyToMany(() => Badge, { cascade: true })
  @JoinTable()
  badges: Badge[];
}
