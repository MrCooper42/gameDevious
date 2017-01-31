import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { ErrorService } from '../errors/error.service';
export var NewsService = (function () {
    function NewsService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
    }
    NewsService.prototype.getPulse = function () {
        return this.http.get('/api/pulse')
            .map(function (res) {
            return res.json();
        });
    };
    ;
    NewsService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NewsService.ctorParameters = [
        { type: Http, },
        { type: ErrorService, },
    ];
    return NewsService;
}());
//# sourceMappingURL=news.service.js.map