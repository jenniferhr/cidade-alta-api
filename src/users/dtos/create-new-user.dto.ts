import { ApiProperty } from '@nestjs/swagger';

export class CreateNewUserDto {
  @ApiProperty({
    description: 'The username of the user',
    example: 'john_doe',
    required: false,
  })
  username?: string;

  @ApiProperty({
    description: 'The password for the user',
    example: 'strongpassword123',
    required: false,
  })
  password?: string;
}
