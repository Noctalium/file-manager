import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import "reflect-metadata";

require('dotenv').config()

async function fileManager() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('ninart api')
    .setDescription('The ninart API microservice book')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.API_PORT || 2000);
}

fileManager();
