import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { HelloService } from './hello.service';

@Controller()
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @MessagePattern('hello')
  find() {
    return this.helloService.find();
  }
}
