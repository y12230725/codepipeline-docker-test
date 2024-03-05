import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongoClient } from 'mongodb';

@Module({})
export class DatabaseModule {
  static forRoot(options?: any): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: 'MONGO_CLIENT',
          useFactory: async (configService: ConfigService) => {
            return await MongoClient.connect(configService.get<string>('DB_URI'), { ...options });
          },
          inject: [ConfigService],
        },
      ],
      exports: ['MONGO_CLIENT'],
    };
  }
}
