import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from './datasource/typeorm.module';
import { UsersModule } from './users/users.module';
import { BadgesModule } from './badges/badges.module';

@Module({
  imports: [TypeOrmModule, UsersModule, BadgesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
