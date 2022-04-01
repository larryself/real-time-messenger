import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = await app.get(ConfigService);
  const configSwagger = new DocumentBuilder()
    .setTitle('Realtime chat')
    .setDescription('Документация REST API')
    .setVersion('1.0.0')
    .build();
  app.setGlobalPrefix('api');
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('/api/docs', app, document);
  await app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port ${process.env.PORT}`);
  });
}

start();
