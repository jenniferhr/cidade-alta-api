import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserBadge } from './user-badge.entity';

@Entity('badges')
export class Badge {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ unique: true })
  slug: string;

  @Column()
  name: string;

  @Column()
  image: string;

  @OneToMany(() => UserBadge, (userBadge) => userBadge.badge)
  users: UserBadge[];
}
