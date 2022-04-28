import { Module } from '@nestjs/common';
import { amqpProviders } from './amqp.provider';
import { AmqpController } from './amqp.controller';
import { AmqpService } from './amqp.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  // imports: [
  //   ClientsModule.register([
  //     {
  //       name: 'SUBSCRIBERS_AMQP',
  //       transport: Transport.RMQ,
  //       options: {
  //         urls: ['amqp://admin:admin@localhost:5672'],
  //         queue: 'fila.nestjs',
  //         noAck: true,
  //         queueOptions: {
  //           durable: true,
  //         },
  //       },
  //     },
  //   ]),
  // ],
  providers: [AmqpService, ...amqpProviders],
  controllers: [AmqpController],
})
export class AmqpModule {}
