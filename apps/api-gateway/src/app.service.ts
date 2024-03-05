import { Injectable } from '@nestjs/common';
import { EC2Client, DescribeRegionsCommand } from '@aws-sdk/client-ec2'; // ES Modules import

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
