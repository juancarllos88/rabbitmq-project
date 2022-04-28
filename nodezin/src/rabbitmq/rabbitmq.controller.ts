import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Controller, Post } from '@nestjs/common';
import { RabbitmqService } from './services/rabbitmq.service';

@Controller('rabbitmq')
export class RabbitmqController {
  constructor(
    private readonly service: RabbitmqService,
    private readonly amqpConnection: AmqpConnection,
  ) {}

  @Post()
  async publish() {
    // this.amqpConnection.publish('some-exchange', 'routing-key', {
    //   msg: 'hello world',
    // });
    this.amqpConnection.publish('amq.direct', 'fila.estoque', {
      msg: 'hello world',
    });
  }
}
