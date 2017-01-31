import { Component } from '@angular/core';
import { NewsService } from './news.service';
export var NewsComponent = (function () {
    function NewsComponent(newsService) {
        var _this = this;
        this.news = [];
        newsService.getPulse()
            .subscribe(function (data) {
            data = JSON.parse(data.body).filter(function (pulse) { return pulse.image != undefined; });
            _this.news = data;
            console.log(data[7].image, "data");
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