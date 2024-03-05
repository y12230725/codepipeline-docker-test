import { HELLO, SvcResponse } from '@libs/common';
import { Controller, Inject, Get, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, timeout } from 'rxjs';

@Controller('hello')
export class HelloController {
  constructor(@Inject(HELLO) private helloClient: ClientProxy) {}

  @Get()
  private async findTenant(): Promise<SvcResponse> {
    return await firstValueFrom(this.helloClient.send('hello', {}).pipe(timeout(5000)));
  }
}
