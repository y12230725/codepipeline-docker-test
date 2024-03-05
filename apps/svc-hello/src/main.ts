import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RmqOptions } from '@nestjs/microservices';
import { HELLO } from '@libs/common/constants/queue-name';
import { RmqService } from '@libs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);

  const rmqService = app.get(RmqService);
  app.connectMicroservice<RmqOptions>(rmqService.getOptions(HELLO));

  await app.startAllMicroservices().then(() => {
    console.log(`🚀: Svc Hello server is opened`);
  });
}
bootstrap();
