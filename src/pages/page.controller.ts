import { Page } from './../entity/Page.entity';
import { PageService } from './page.service';
import { Controller, Get, Param, Post, Body, Put, Delete, UseInterceptors, UploadedFile, Header } from "@nestjs/common";
import { InsertResult, DeleteResult } from 'typeorm';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer'
import { editFileName, imageFileFilter } from '../utils/file-uploading.utils';

@Controller('pages')
export class PageController {
    constructor(private readonly pageService: PageService) {}

   /* @Get('findAll')
    async getAllPages(): Promise<Page[]> {
        return await this.pageService.getAll();
    }*/

    @Get('findAll')
    @Header('content-type', 'image/jpeg')
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
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: './files/pages',
                filename: editFileName,
            }),
            fileFilter: imageFileFilter,
        }),
    )
    async addPageByBook(@UploadedFile() file, @Body('bookId') bookId: number): Promise<InsertResult> {
        return await this.pageService.addPage(file.filename, bookId);
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