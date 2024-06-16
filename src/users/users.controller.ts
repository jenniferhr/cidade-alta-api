import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateUser, UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/create')
  async signUp(@Body() user: CreateUser) {
    return await this.userService.createUser(user);
  }

  @Get('/badges')
  async getUserBadges(@Query('userId') userId: number) {
    return await this.userService.findUserBadges(userId);
  }
}
