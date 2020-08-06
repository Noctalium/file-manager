import { PageController } from './pages/page.controller';
import { PageService } from './pages/page.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PageModule } from './pages/page.module';

@Module({
  imports: [PageModule],
  controllers: [AppController, PageController],
  providers: [AppService, PageService],
})
export class AppModule {}
