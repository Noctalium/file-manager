import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { pageProviders } from './page.providers';
import { PageService } from './page.service';

@Module({
    imports: [DatabaseModule],
    providers: [
        ...pageProviders,
    ],
    exports: [
        ...pageProviders
    ]
})
export class PageModule {}