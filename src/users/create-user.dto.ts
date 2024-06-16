import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Please include a username!' })
  username: string;

  @IsNotEmpty({ message: 'Please include a password!' })
  password: string;
}
