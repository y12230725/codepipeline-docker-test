import { ApiProperty } from '@nestjs/swagger';
import { ClientSession } from 'mongodb';
import { Request } from 'express';

export class WithSession {
  @ApiProperty()
  session?: ClientSession;
}

export class WithTenant {
  @ApiProperty()
  tenantName?: string;
  @ApiProperty()
  tenantUrn?: string;
}

export class WithUrn {
  @ApiProperty()
  urn: string;
}

export class FindRequest {
  @ApiProperty()
  query?: string;
}

export class FindRequestWithSession {
  @ApiProperty()
  query?: string;
  @ApiProperty()
  session?: ClientSession;
}

export class DeleteRequest {
  @ApiProperty()
  urn: string;
}

export class DeleteRequestWithSession {
  @ApiProperty()
  urn: string;
  @ApiProperty()
  session?: ClientSession;
}
