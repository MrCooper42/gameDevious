import { GameDevIoUsPage } from './app.po';
describe('GameDev_io.us App', function () {
    var page;
    beforeEach(function () {
        page = new GameDevIoUsPage();
    });
    it('should display message saying app works', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map