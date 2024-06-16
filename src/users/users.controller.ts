import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/create')
  async signUp(@Body() user: CreateUserDto) {
    if (!user) {
      throw new BadRequestException(
        'Request body with username and password is required',
      );
    }
    return await this.userService.createUser(user);
  }
}
