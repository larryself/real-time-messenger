import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { AppGateway } from './app.gateway';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'frontend/build'),
    }),
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '../.env' }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: config.get<'aurora-data-api'>('POSTGRES_CONNECTION'),
        username: config.get<string>('POSTGRES_USER'),
        password: config.get<string>('POSTGRES_PW'),
        database: config.get<string>('POSTGRES_DB'),
        host: config.get<string>('POSTGRES_HOST'),
        ssl: {
          rejectUnauthorized: false,
        },
        port: 5432,
        autoLoadEntities: true,
        synchronize: true,
        entities: [__dirname + '**/*.entities{.ts,.js}'],
      }),
    }),
    UsersModule,
    PostsModule,
    AuthModule,
  ],
  providers: [AppGateway],
})
export class AppModule {}
