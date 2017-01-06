import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { ErrorService } from '../errors/error.service';
export var GamesService = (function () {
    function GamesService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
    }
    GamesService.prototype.getGame = function (body) {
        console.log(body, "body here");
        var reqBody = JSON.stringify(body);
        console.log(reqBody, "body here");
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('game', body);
        var options = new RequestOptions({ headers: headers });
        console.log(options, "headers");
        return this.http.get('/api/game', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    GamesService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GamesService.ctorParameters = [
        { type: Http, },
        { type: ErrorService, },
    ];
    return GamesService;
}());
//# sourceMappingURL=games.service.js.map