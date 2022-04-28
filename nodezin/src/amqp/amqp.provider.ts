import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

export const amqpProviders = [
  {
    provide: 'SUBSCRIBERS_AMQP',
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
      const user = configService.get('RABBITMQ_USER');
      const password = configService.get('RABBITMQ_PASSWORD');
      const host = configService.get('RABBITMQ_HOST');
      const queueName = configService.get('RABBITMQ_QUEUE_NAME');

      const proxy = ClientProxyFactory.create({
        transport: Transport.RMQ,
        options: {
          urls: [`amqp://${user}:${password}@${host}`],
          queue: queueName,
          noAck: true,
          queueOptions: {
            durable: true,
          },
        },
      });
      return proxy;
    },
  },
];
