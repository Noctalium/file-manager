import { Page } from './../entity/Page.entity';
import { PageService } from './page.service';
import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { InsertResult, DeleteResult } from 'typeorm';

@Controller('pages')
export class PageController {
    constructor(private readonly pageService: PageService) {}

    @Get('findAll')
    async getAllPages(): Promise<Page[]> {
        return await this.pageService.getAll();
    }

    @Get('findPage/:id')
    async getPageById(@Param('id') id:number): Promise<Page> {
        return await this.pageService.getById(id);
    }

    @Get('findByBook/:id')
    async getPagesByBook(@Param('id') id: number): Promise<Page[]> {
        return await this.pageService.getByBook(id);
    }

    @Post('addPage')
    async addPageByBook(@Body("path") path: string, @Body("book_id") bookId: number): Promise<InsertResult> {
        return await this.pageService.addPage(path, bookId);
    }

    @Put('setPage')
    async setPage(@Body("page") page: Page): Promise<any> {
        return await this.pageService.setPage(page);
    }

    @Delete('deletePage')
    async deletePage(@Body('page') page: Page): Promise<DeleteResult> {
        return await this.pageService.deletePage(page);
    }
}