import { Body, Controller, Post } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AmqpService } from './amqp.service';
import { AmqpDto } from './dto/amqp.dto';

@Controller('amqp')
export class AmqpController {
  constructor(private readonly service: AmqpService) {}

  @Post()
  async sendMessage(@Body() amqpDto: AmqpDto) {
    await this.service.sendMessage(amqpDto);
  }

  @EventPattern('hello')
  async hello(data: any) {
    console.log(data);
  }
}
