import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import { config } from './configuration/config';
import { AmqpModule } from './amqp/amqp.module';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    UsersModule,
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    RabbitmqModule,
    //AmqpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
