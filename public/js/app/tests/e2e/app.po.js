import { browser, element, by } from 'protractor';
export class MEAN2SeedPage {
    navigateTo() {
        return browser.get('/');
    }
    getParagraphText() {
        return element(by.css('app-root h1')).getText();
    }
}
//# sourceMappingURL=app.po.js.map