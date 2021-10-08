import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersProviders } from './users.provider';
import { UserScheduler } from './users.scheduler';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ...usersProviders, UserScheduler],
})
export class UsersModule {}
