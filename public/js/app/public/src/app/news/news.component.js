import { Component } from '@angular/core';
import { NewsService } from './news.service';
export var NewsComponent = (function () {
    function NewsComponent(newsService) {
        var _this = this;
        this.news = [];
        newsService.getPulse()
            .subscribe(function (res) {
            _this.news = res.body;
            // news => this.news = news,
        });
    }
    ;
    // ngOnInit() {
    // }
    NewsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-news',
                    templateUrl: './news.component.html',
                    styleUrls: ['./news.component.css'],
                },] },
    ];
    /** @nocollapse */
    NewsComponent.ctorParameters = [
        { type: NewsService, },
    ];
    return NewsComponent;
}());
//# sourceMappingURL=news.component.js.map