import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersProviders } from './users.provider';
import { UserScheduler } from './users.scheduler';
import { amqpProviders } from 'src/amqp/amqp.provider';
import { RabbitmqService } from './../rabbitmq/services/rabbitmq.service';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ...usersProviders, UserScheduler],
})
export class UsersModule {}
