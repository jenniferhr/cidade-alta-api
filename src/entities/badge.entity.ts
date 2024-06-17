import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('badges')
export class Badge {
  @PrimaryGeneratedColumn({ name: 'id' })
  @ApiProperty({ example: '1' })
  id: number;

  @Column({ unique: true })
  @ApiProperty({ example: 'cda' })
  slug: string;

  @Column()
  @ApiProperty({ example: 'Cidade Alta' })
  name: string;

  @Column()
  @ApiProperty({
    example: 'https://cidadealtarp.com/imagens/challenge/cidade-alta.png',
  })
  image: string;
}
