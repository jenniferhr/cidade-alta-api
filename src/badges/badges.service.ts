import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Badge } from 'src/entities/badge.entity';
import { User } from 'src/entities/user.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class BadgesService {
  private badgeRepository;
  private userRepository;
  private logger = new Logger();

  constructor(private dataSource: DataSource) {
    this.badgeRepository = this.dataSource.getRepository(Badge);
    this.userRepository = this.dataSource.getRepository(User);
  }

  async findPaginatedBadges(
    page: number,
    limit: number,
    name?: string,
  ): Promise<Badge[]> {
    const skip = (page - 1) * limit;
    const queryBuilder = this.badgeRepository.createQueryBuilder('badge');

    if (name) {
      queryBuilder.where('badge.name LIKE :name', { name: `%${name}%` });
    }

    return queryBuilder.skip(skip).take(limit).getMany();
  }

  async redeemBadge(userId: number, slug: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['badges'],
    });

    if (!user) {
      throw new NotFoundException('User not found!');
    }

    const badge = await this.badgeRepository.findOne({ where: { slug } });

    if (!badge) {
      throw new NotFoundException('Badge not found!');
    }

    if (user.badges.some((b) => b.id === badge.id)) {
      throw new ConflictException('Badge already redeemed');
    }

    user.badges.push(badge);
    return this.userRepository.save(user);
  }
}
