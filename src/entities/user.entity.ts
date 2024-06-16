import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserBadge } from './user-badge.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => UserBadge, (userBadge) => userBadge.userId)
  badges: UserBadge[];
}
