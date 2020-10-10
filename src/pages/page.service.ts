import { Injectable, Inject } from '@nestjs/common';
import { Repository, InsertResult, DeleteResult } from 'typeorm';
import { Page } from './../entity/Page.entity';

@Injectable()
export class PageService {
    constructor(
        @Inject('PAGE_REPOSITORY')
        private pageRepository: Repository<Page>,
    ) {}

    async getAll(): Promise<Page[]> {
        return this.pageRepository.find();
    }

    async getById(id: number): Promise<Page> {
        const page = this.pageRepository.findOne({ id: id })
        
        return page;
    }

    async getByBook(id: number): Promise<Page[]> {
        return this.pageRepository.find({ bookId: id })
    }

    async addPage(path: string, id: number): Promise<InsertResult> {
        return this.pageRepository.insert({
            pagePath: path,
            bookId: id
        })
    }

    async setPage(page: Page): Promise<any> {
        let pageToUpdate: Page = await this.pageRepository.findOne({ id: page.id })
        pageToUpdate = page;
        return await this.pageRepository.save(pageToUpdate);
        
    }

    async deletePage(page: Page): Promise<DeleteResult> {
        const pageToDelete: Page = await this.pageRepository.findOne({ id: page.id })
        return await this.pageRepository.delete(pageToDelete);
    }

}