import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import "reflect-metadata";

require('dotenv').config()

async function fileManager() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.API_PORT || 2000);
}

fileManager();
