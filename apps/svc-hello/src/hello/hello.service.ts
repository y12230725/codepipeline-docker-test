import { SvcResponse } from '@libs/common';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class HelloService {
  constructor(private readonly config: ConfigService) {}

  async find(): Promise<SvcResponse> {
    try {
      return {
        statusCode: HttpStatus.OK,
        data: 'hello',
      };
    } catch (err) {
      return {
        error: err,
        message: 'find tenant fail',
        statusCode: HttpStatus.BAD_REQUEST,
      };
    }
  }
}
