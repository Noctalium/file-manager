import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata";

async function fileManager() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

fileManager();
