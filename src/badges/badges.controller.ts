import { Controller, Get, Post, Query } from '@nestjs/common';
import { BadgesService } from './badges.service';
import { User } from 'src/entities/user.entity';
import { PaginationResult } from 'src/utils/pagination.util';
import { PaginationResultDTO } from 'src/utils/pagination.dto';
import { Badge } from 'src/entities/badge.entity';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  getSchemaPath,
} from '@nestjs/swagger';

@Controller('badges')
export class BadgesController {
  constructor(private badgeService: BadgesService) {}

  @Get('/')
  @ApiOperation({
    summary: 'Endpoint to search the existing badges',
  })
  @ApiQuery({
    name: 'page',
    description: 'Page of results to be shown. Default value: 1',
    required: false,
    example: 1,
  })
  @ApiQuery({
    name: 'limit',
    description: 'Number of results to be shown in a page. Default value: 5',
    required: false,
    example: 5,
  })
  @ApiQuery({
    name: 'name',
    description: 'String to search through in badge names.',
    required: false,
    example: 'Cidade',
  })
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
    description: 'Badges that were found',
    type: PaginationResultDTO,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
  })
  async getPaginatedBadges(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 5,
    @Query('name') name?: string,
  ): Promise<PaginationResult<Badge>> {
    return await this.badgeService.findPaginatedBadges(page, limit, name);
  }

  @Post('/redeem')
  @ApiOperation({
    summary: 'Endpoint for a user to redeem a badge.',
  })
  @ApiQuery({
    name: 'userId',
    description: 'Id of the user  that will redeem a badge',
    example: 1,
  })
  @ApiQuery({
    name: 'slug',
    description: 'slug value of the badge to be redeemed',
    example: 'cda',
  })
  @ApiCreatedResponse({
    description: 'Badge was successfully redeemed',
    schema: {
      allOf: [
        { $ref: getSchemaPath(User) },
        {
          properties: {
            badges: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'number', example: 1 },
                  slug: { type: 'string', example: 'cda' },
                  name: { type: 'string', example: 'Cidade Alta' },
                  image: {
                    type: 'string',
                    example:
                      'https://cidadealtarp.com/imagens/challenge/cidade-alta.png',
                  },
                },
              },
            },
          },
        },
      ],
    },
  })
  @ApiNotFoundResponse({
    description: "User or badge don't exist",
  })
  @ApiConflictResponse({
    description: 'User already redeemed this badge',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
  })
  async redeemBadge(
    @Query('userId') userId: number,
    @Query('slug') slug: string,
  ): Promise<User> {
    return await this.badgeService.redeemBadge(userId, slug);
  }
}
