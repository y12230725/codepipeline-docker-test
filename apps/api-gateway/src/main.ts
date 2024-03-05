import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get('GATEWAY_PORT');

  await app.listen(port);
  console.log(`🚀: Your application is running on port ${port}`);
}
bootstrap();
