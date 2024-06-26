import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Badge } from 'src/entities/badge.entity';
import { User } from 'src/entities/user.entity';
import { DataSource } from 'typeorm';
import { CreateNewUserDto } from './dtos/create-new-user.dto';

@Injectable()
export class UsersService {
  private userRepository;
  private logger = new Logger();

  constructor(private dataSource: DataSource) {
    this.userRepository = this.dataSource.getRepository(User);
  }

  async createUser(createUser: CreateNewUserDto): Promise<User> {
    try {
      const user = await this.userRepository.create(createUser);
      return await this.userRepository.save(user);
    } catch (err) {
      if (err.code == 23505) {
        this.logger.error(err.message, err.stack);
        throw new HttpException('Username already exists', HttpStatus.CONFLICT);
      }
      this.logger.error(err.message, err.stack);
      throw new InternalServerErrorException(
        'Something went wrong, Try again!',
      );
    }
  }

  async findUserBadges(userId: number): Promise<Badge[]> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['badges'],
    });

    return user.badges;
  }
}
