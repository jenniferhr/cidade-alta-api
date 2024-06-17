import { ApiProperty } from '@nestjs/swagger';
import { Badge } from 'src/entities/badge.entity';

export class PaginationMetadataDTO {
  @ApiProperty({
    example: 1,
  })
  itemCount: number;

  @ApiProperty({
    example: 1,
  })
  totalItems: number;

  @ApiProperty({
    example: 5,
  })
  itemsPerPage: number;

  @ApiProperty({
    example: 1,
  })
  totalPages: number;

  @ApiProperty({
    example: 1,
  })
  currentPage: number;
}

export class PaginationResultDTO<T> {
  @ApiProperty({ type: PaginationMetadataDTO })
  metadata: PaginationMetadataDTO;

  @ApiProperty({ type: [Badge] })
  results: T[];
}
