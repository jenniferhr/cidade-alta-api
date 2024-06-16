import { Injectable, Logger } from '@nestjs/common';
import { Badge } from 'src/entities/badge.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class BadgesService {
  private badgeRepository;
  private logger = new Logger();

  constructor(private dataSource: DataSource) {
    this.badgeRepository = this.dataSource.getRepository(Badge);
  }

  async findAllBadges(): Promise<Badge[]> {
    return await this.badgeRepository.find();
  }
}
