import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/entities/user.entity';
import { Badge } from 'src/entities/badge.entity';
import {
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
} from '@nestjs/swagger';
import { CreateNewUserDto } from './dtos/create-new-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/create')
  @ApiOperation({
    summary: 'Endpoint to create a new user.',
  })
  @ApiBody({ type: CreateNewUserDto, required: false })
  @ApiCreatedResponse({
    description: 'User was successfully created',
    type: User,
  })
  @ApiConflictResponse({
    description:
      'User is already associated to one or more of the applications',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
  })
  async signUp(@Body() user: CreateNewUserDto): Promise<User> {
    return await this.userService.createUser(user);
  }

  @Get('/badges')
  @ApiOperation({
    summary:
      'Endpoint to get all badges that have been redeemed by a  specific user.',
  })
  @ApiQuery({
    name: 'userId',
    description: 'Id of the user  whose badges will be shown',
    example: 1,
  })
  @ApiOkResponse({
    description: 'Badges of that specific user were found',
    type: Badge,
    isArray: true,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
  })
  async getUserBadges(@Query('userId') userId: number): Promise<Badge[]> {
    return await this.userService.findUserBadges(userId);
  }
}
