import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: [`.env.${process.env.NODE_ENV}`],
    }),
    HelloModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
