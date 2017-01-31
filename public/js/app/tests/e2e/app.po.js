import { browser, element, by } from 'protractor';
export var GameDevIoUsPage = (function () {
    function GameDevIoUsPage() {
    }
    GameDevIoUsPage.prototype.navigateTo = function () {
        return browser.get('/');
    };
    GameDevIoUsPage.prototype.getParagraphText = function () {
        return element(by.css('app-root h1')).getText();
    };
    return GameDevIoUsPage;
}());
//# sourceMappingURL=app.po.js.map