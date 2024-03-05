import { ApiProperty, ApiExtraModels, getSchemaPath } from '@nestjs/swagger';

// https://keyhyuk-kim.medium.com/nest-js-generic-type-dto-swagger-적용하기-3b914887ec0c
export class ResponseDto<T> {
  @ApiProperty({
    example: 200,
    description: 'The HTTP status code of the response',
  })
  statusCode: number;
  @ApiProperty({
    example: 'Success!',
    description: 'An message in case of success',
  })
  message?: string;
  @ApiProperty({
    example: 'Something went wrong...',
    description: 'An message in case of failure',
  })
  error?: string;
  data?: T;
}

export class RevisionProps {
  @ApiProperty({ example: '2023-05-24T12:34:56Z' })
  revisionDate: string;

  @ApiProperty({ example: '1' })
  revisionSequence: string;
}

export class UrnProps {
  @ApiProperty({ example: 'urn:example:123' })
  urn: string;

  @ApiProperty({ example: 'static' })
  savePolicy: string;

  @ApiProperty({ type: () => RevisionProps })
  revision: RevisionProps;
}
