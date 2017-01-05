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
        console.log(reqBody, "body here");
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('game', body);
        let options = new RequestOptions({ headers: headers });
        console.log(options, "headers");
        return this.http.get('/api/game', { headers: headers })
            .map((res) => res.json());
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