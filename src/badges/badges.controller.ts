import { Controller, Get } from '@nestjs/common';
import { BadgesService } from './badges.service';

@Controller('badges')
export class BadgesController {
  constructor(private badgeService: BadgesService) {}

  @Get('/')
  async getAllBadges() {
    return await this.badgeService.findAllBadges();
  }
}
