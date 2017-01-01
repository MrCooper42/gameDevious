import { Http, Response, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { ErrorService } from '../errors/error.service';

@Injectable()
export class NewsService {

  constructor(private http: Http, private errorService: ErrorService) { }

  getPulse() {
    return this.http.get('/api/pulse')
    .map(res => {
      return res.json();
    });
  };
}
