import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { ErrorService } from '../errors/error.service';

@Injectable()
export class GamesService {

  constructor(private http: Http, private errorService: ErrorService) { }

  getGame(body) {
    console.log(body, "body here");
    let reqBody = JSON.stringify(body);
    console.log(reqBody, "body here");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('game', body);
    let options = new RequestOptions({ headers: headers });
    console.log(options, "headers")
    return this.http.get('/api/game', {headers: headers})
    .map((res: Response) => res.json());
  }
}
