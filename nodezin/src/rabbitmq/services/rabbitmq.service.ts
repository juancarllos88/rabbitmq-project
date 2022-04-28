import { RabbitSubscribe, AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RabbitmqService {
  @RabbitSubscribe({
    exchange: 'amq.direct',
    routingKey: 'fila.estoque',
    queue: 'fila.estoque',
  })
  async subscribe(msg: any) {
    console.log(`Received message: ${JSON.stringify(msg)}`);
  }
}
