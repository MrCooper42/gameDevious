import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { ErrorService } from '../errors/error.service';

@Injectable()
export class GamesService {

  constructor(private http: Http, private errorService: ErrorService) { }

  getGame(body) {
    let reqBody = JSON.stringify(body);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('game', body);
    let options = new RequestOptions({ headers: headers });
    return this.http.get('/api/game', {headers: headers})
    .map((res: Response) => res.json());
  }
}
