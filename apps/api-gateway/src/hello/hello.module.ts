import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HELLO, RmqModule } from '@libs/common';

@Module({
  imports: [RmqModule.register({ name: HELLO })],
  controllers: [HelloController],
})
export class HelloModule {}
