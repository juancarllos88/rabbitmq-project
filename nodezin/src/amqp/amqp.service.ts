import { Injectable, Inject } from '@nestjs/common';
import { AmqpDto } from './dto/amqp.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AmqpService {
  constructor(
    @Inject('SUBSCRIBERS_AMQP')
    private readonly subscribersService: ClientProxy,
  ) {}

  async sendMessage(amqpDto: AmqpDto) {
    this.subscribersService.emit('hello', amqpDto);
  }
}
