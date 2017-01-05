import { GameDevIoUsPage } from './app.po';
describe('GameDev_io.us App', function () {
    let page;
    beforeEach(() => {
        page = new GameDevIoUsPage();
    });
    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map