import { Component } from '@angular/core';
import { NewsService } from './news.service';
export class NewsComponent {
    constructor(newsService) {
        this.news = [];
        newsService.getPulse()
            .subscribe((res) => {
            this.news = res.body;
            // news => this.news = news,
        });
    }
    ;
}
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
//# sourceMappingURL=news.component.js.map