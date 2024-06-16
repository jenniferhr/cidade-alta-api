import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateUser, UsersService } from './users.service';
import { User } from 'src/entities/user.entity';
import { Badge } from 'src/entities/badge.entity';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/create')
  async signUp(@Body() user: CreateUser): Promise<User> {
    return await this.userService.createUser(user);
  }

  @Get('/badges')
  async getUserBadges(@Query('userId') userId: number): Promise<Badge[]> {
    return await this.userService.findUserBadges(userId);
  }
}
