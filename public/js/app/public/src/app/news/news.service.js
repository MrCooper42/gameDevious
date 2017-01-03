import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { ErrorService } from '../errors/error.service';
export class NewsService {
    constructor(http, errorService) {
        this.http = http;
        this.errorService = errorService;
    }
    getPulse() {
        return this.http.get('/api/pulse')
            .map(res => {
            return res.json();
        });
    }
    ;
}
NewsService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NewsService.ctorParameters = [
    { type: Http, },
    { type: ErrorService, },
];
//# sourceMappingURL=news.service.js.map