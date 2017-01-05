import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { JwtHelper } from 'angular2-jwt/angular2-jwt';
import { ErrorService } from '../errors/error.service';
export class ProfileService {
    constructor(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.skills = [];
        this.jwtHelper = new JwtHelper();
    }
    // public authHttp: AuthHttp
    useJwtHelper() {
        let token = localStorage.getItem('token');
        if (token == null) {
            return false;
        }
        return this.jwtHelper.decodeToken(token).user;
    }
    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
    // : Observable<User>
    getUser(userId) {
        return this.http.get(`/user/${userId}`)
            .map((res) => res.json())
            .catch(error => Observable.throw(error.json().error || console.log(error, 'error')));
    }
    aboutUpdate(userId, body) {
        let token = localStorage.getItem('token');
        let reqBody = JSON.stringify({ 'body': body });
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', token);
        let options = new RequestOptions({ headers: headers });
        return this.http.post(`/profile/${userId}/about`, reqBody, options)
            .map((res) => res.json());
    }
    titleUpdate(userId, body) {
        let token = localStorage.getItem('token');
        let reqBody = JSON.stringify({ 'body': body });
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', token);
        let options = new RequestOptions({ headers: headers });
        return this.http.post(`/profile/${userId}/title`, reqBody, options)
            .map((res) => res.json());
    }
    skillUpdate(userId, body) {
        let token = localStorage.getItem('token');
        let reqBody = JSON.stringify({ 'body': body });
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', token);
        let options = new RequestOptions({ headers: headers });
        return this.http.post(`/profile/${userId}/skills`, reqBody, options)
            .map((res) => res.json());
    }
    killSkill(skill) {
        let token = localStorage.getItem('token');
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', token);
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(`/profile/skills/${skill}`, options)
            .map((res) => {
            console.log(res, "response delete sent back");
            return res.json();
        })
            .catch((error) => Observable.throw(error.json().error || console.log(error, 'error')));
    }
    goWork(body) {
        let token = localStorage.getItem('token');
        let reqBody = JSON.stringify(body);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', token);
        let options = new RequestOptions({ headers: headers });
        return this.http.post(`/works`, reqBody, options)
            .map((res) => res.json());
    }
    deleteWork(workId) {
        let token = localStorage.getItem('token');
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', token);
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(`/works/${workId}`, options)
            .map((res) => res.json())
            .catch((error) => Observable.throw(error.json().error || console.log(error, 'error')));
    }
}
// github(userId) {
//   let headers = new Headers();
//   headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept, Content-Type');
//   headers.append('Access-Control-Allow-Origin', '*');
//   headers.append('user_id', userId);
//   let options = new RequestOptions({ headers: headers });
//   console.log(options, 'options');
//   return this.http.get(`/github/${userId}`, options)
//     .map((res: Response) => {
//       console.log(res.url, 'server response');
//       return res.url;
//     })
//     .catch((error: any) => Observable.throw(error.json().error || console.log(error, 'error')));
// }
//
// facebook(userId) {
//   let headers = new Headers();
//   headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept, Content-Type');
//   headers.append('Access-Control-Allow-Origin', '*');
//   headers.append('user_id', userId);
//   let options = new RequestOptions({ headers: headers });
//   // ${userId}`, options
//   return this.http.get(`/facebook/${userId}`, options)
//     .map((res: Response) => {
//       console.log(res.url, 'server response');
//       return res.url;
//     })
//     .catch((error: any) => Observable.throw(error.json().error || console.log(error, 'error')));
// }
//
// linkedin(userId) {
//   let headers = new Headers();
//   headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept, Content-Type');
//   headers.append('Access-Control-Allow-Origin', '*');
//   headers.append('user_id', userId);
//   let options = new RequestOptions({ headers: headers });
//   return this.http.get(`/linkedin/${userId}`)
//     .map((res: Response) => {
//       console.log(res.url, 'server response');
//       return res.url;
//     })
//     .catch((error: any) => Observable.throw(error.json().error || console.log(error, 'error')));
// }
ProfileService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ProfileService.ctorParameters = [
    { type: Http, },
    { type: ErrorService, },
];
//# sourceMappingURL=profile.service.js.map