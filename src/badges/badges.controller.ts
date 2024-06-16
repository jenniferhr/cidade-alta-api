import { Controller, Get, Post, Query } from '@nestjs/common';
import { BadgesService } from './badges.service';
import { Badge } from 'src/entities/badge.entity';
import { User } from 'src/entities/user.entity';

@Controller('badges')
export class BadgesController {
  constructor(private badgeService: BadgesService) {}

  @Get('/')
  async getPaginatedBadges(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 5,
    @Query('name') name?: string,
  ): Promise<Badge[]> {
    return await this.badgeService.findPaginatedBadges(page, limit, name);
  }

  @Post('/redeem')
  async redeemBadge(
    @Query('userId') userId: number,
    @Query('slug') slug: string,
  ): Promise<User> {
    return await this.badgeService.redeemBadge(userId, slug);
  }
}
