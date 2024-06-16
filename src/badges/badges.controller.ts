import { Controller, Get, Post, Query } from '@nestjs/common';
import { BadgesService } from './badges.service';

@Controller('badges')
export class BadgesController {
  constructor(private badgeService: BadgesService) {}

  @Get('/')
  async getAllBadges() {
    return await this.badgeService.findAllBadges();
  }

  @Post('/redeem')
  async redeemBadge(
    @Query('userId') userId: number,
    @Query('slug') slug: string,
  ) {
    return await this.badgeService.redeemBadge(userId, slug);
  }
}
