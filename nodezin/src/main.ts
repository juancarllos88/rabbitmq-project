import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );

  const configuration = app.get(ConfigService);
  const user = configuration.get('RABBITMQ_USER');
  const password = configuration.get('RABBITMQ_PASSWORD');
  const host = configuration.get('RABBITMQ_HOST');
  const queueName = configuration.get('RABBITMQ_QUEUE_NAME');

  // await app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: [`amqp://${user}:${password}@${host}`],
  //     queue: queueName,
  //     noAck: true,
  //     queueOptions: {
  //       durable: true,
  //     },
  //   },
  // });

  // await app.startAllMicroservices();

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Nodezin')
    .setDescription('Zero to Hero')
    .setVersion('1.0')
    .addTag('documentation')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  //await app.listen(3000);

  await app.listen(configuration.get('PORT'), '0.0.0.0');
  console.log(
    `Application started on enviroment: ${configuration.get(
      'ENVIROMENT',
    )} on port: ${configuration.get('PORT')}`,
  );
}
bootstrap();
