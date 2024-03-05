import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HelloService } from './hello.service';
import { HelloController } from './hello.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${process.env.NODE_ENV}`],
    }),
  ],
  controllers: [HelloController],
  providers: [HelloService],
  exports: [HelloService],
})
export class HelloModule {}
