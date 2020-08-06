import { Page } from './../entity/Page.entity';
import { Connection } from 'typeorm';

export const pageProviders = [
    {
        provide: 'PAGE_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Page),
        inject: ['DATABASE_CONNECTION']
    }
]