import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { ErrorService } from '../errors/error.service';
export class AuthService {
    constructor(http, errorService) {
        this.http = http;
        this.errorService = errorService;
    }
    signup(user) {
        const body = JSON.stringify(user);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('/user', body, { headers: headers })
            .map((response) => response.json())
            .catch((error) => {
            console.log(error, 'error happened');
            this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    }
    signin(user) {
        const body = JSON.stringify(user);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('/user/signin', body, { headers: headers })
            .map((response) => response.json())
            .catch((error) => {
            this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    }
    logout() {
        localStorage.clear();
    }
    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
}
AuthService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AuthService.ctorParameters = [
    { type: Http, },
    { type: ErrorService, },
];
//# sourceMappingURL=auth.service.js.map