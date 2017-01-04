import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { ErrorService } from '../errors/error.service';
export class GamesService {
    constructor(http, errorService) {
        this.http = http;
        this.errorService = errorService;
    }
    getGame(body) {
        console.log(body, "body here");
        let reqBody = JSON.stringify(body);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('game', reqBody);
        let options = new RequestOptions({ headers: headers });
        return this.http.get('/api/game', options);
    }
}
GamesService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
GamesService.ctorParameters = [
    { type: Http, },
    { type: ErrorService, },
];
//# sourceMappingURL=games.service.js.map