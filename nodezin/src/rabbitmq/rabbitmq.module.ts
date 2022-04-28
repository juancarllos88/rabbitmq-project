import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { RabbitmqService } from './services/rabbitmq.service';
import { RabbitmqController } from './rabbitmq.controller';
@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'amq.direct',
          type: 'direct',
        },
      ],
      uri: 'amqp://admin:admin@localhost:5672',
    }),
    RabbitmqModule,
  ],
  providers: [RabbitmqService],
  controllers: [RabbitmqController],
})
export class RabbitmqModule {}
