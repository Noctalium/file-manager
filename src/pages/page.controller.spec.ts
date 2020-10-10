/*import { Page } from './../entity/Page.entity';
import { PageService } from './page.service';
import { PageController } from './page.controller';

describe('PageController', () => {
    let pageController: PageController;
    let pageService: PageService;

    beforeEach(async () => {
        pageService = new PageService();
        pageController = new PageController(pageService);
    });

    describe('findAll', () => {
        it('should return an array of pages', async () => {
            const result: Page[] = [new Page];
            jest.spyOn(pageService, 'getAll').mockImplementation(() => result);

            expect(await pageController.getAllPages()).toBe(result);
        });
    });
});