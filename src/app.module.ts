import { PageController } from './pages/page.controller';
import { PageService } from './pages/page.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PageModule } from './pages/page.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [PageModule, MulterModule.register({
    dest: './files',
  })],
  controllers: [AppController, PageController],
  providers: [AppService, PageService],
})
export class AppModule {}
