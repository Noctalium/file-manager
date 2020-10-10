/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Page } from './../entity/Page.entity';
import { PageService } from './page.service';
import { Controller, Get, Param, Post, Body, Put, Delete, UseInterceptors, UploadedFile, Header, Res } from "@nestjs/common";
import { InsertResult, DeleteResult } from 'typeorm';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer'
import { editFileName, imageFileFilter } from '../utils/file-uploading.utils';

@Controller('pages')
export class PageController {
    constructor(private readonly pageService: PageService) {}

    @Get('findAll')
    @Header('content-type', 'image/jpeg')
    async getAllPages(): Promise<Page[]> {
        return await this.pageService.getAll();
    }

    @Get('findPage/:id')
    async getPageById(@Param('id') id:number): Promise<any> {
        return (await (await this.pageService.getById(id)).pagePath);
    }

    @Get('findByBook/:id')
    async getPagesByBook(@Param('id') id: number): Promise<Page[]> {
        return await this.pageService.getByBook(id);
    }


    @Post('addPage')
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async addPageByBook(file: string, @Body('bookId') bookId: number): Promise<InsertResult> {
        return await this.pageService.addPage(file, bookId);
    }

    
    // may have some problem with this one, TCL
    @Put('setPage')
    async setPage(@Body("page") page: Page): Promise<any> {
        return await this.pageService.setPage(page);
    }

    @Delete('deletePage')
    async deletePage(@Body('page') page: Page): Promise<DeleteResult> {
        return await this.pageService.deletePage(page);
    }
}