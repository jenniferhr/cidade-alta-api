import { Controller, Get, Post, Query } from '@nestjs/common';
import { BadgesService } from './badges.service';
import { Badge } from 'src/entities/badge.entity';
import { User } from 'src/entities/user.entity';

@Controller('badges')
export class BadgesController {
  constructor(private badgeService: BadgesService) {}

  @Get('/')
  async getAllBadges(@Query('name') name?: string): Promise<Badge[]> {
    return await this.badgeService.findAllBadges(name);
  }

  @Post('/redeem')
  async redeemBadge(
    @Query('userId') userId: number,
    @Query('slug') slug: string,
  ): Promise<User> {
    return await this.badgeService.redeemBadge(userId, slug);
  }
}
