import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Badge } from './badge.entity';

@Entity('user_badges')
export class UserBadge {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'redeemed_at' })
  redeemedAt: Date;

  @ManyToOne(() => User, (user) => user.badges)
  @JoinColumn({ name: 'user_id' })
  userId: User;

  @ManyToOne(() => Badge, (badge) => badge.users)
  @JoinColumn({ name: 'badge_id' })
  badgeId: Badge;
}
