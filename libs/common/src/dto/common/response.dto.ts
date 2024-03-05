import { ApiProperty } from '@nestjs/swagger';

export class SvcResponse {
  @ApiProperty()
  statusCode: number;
  @ApiProperty()
  error?: string | undefined;
  @ApiProperty()
  message?: string | undefined;
  @ApiProperty()
  data?: any;
}
