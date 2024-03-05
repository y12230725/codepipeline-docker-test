import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RmqService } from '@libs/common';
import { HelloModule } from './hello/hello.module';

@Module({
  imports: [HelloModule],
  providers: [RmqService],
})
export class AppModule {}
