import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { JwtHelper } from 'angular2-jwt/angular2-jwt';
import { ErrorService } from '../errors/error.service';
export var ProfileService = (function () {
    function ProfileService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.skills = [];
        this.jwtHelper = new JwtHelper();
    }
    // public authHttp: AuthHttp
    ProfileService.prototype.useJwtHelper = function () {
        var token = localStorage.getItem('token');
        if (token == null) {
            return false;
        }
        return this.jwtHelper.decodeToken(token).user;
    };
    ProfileService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    // : Observable<User>
    ProfileService.prototype.getUser = function (userId) {
        return this.http.get("/user/" + userId)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable.throw(error.json().error || console.log(error, 'error')); });
    };
    ProfileService.prototype.aboutUpdate = function (userId, body) {
        var token = localStorage.getItem('token');
        var reqBody = JSON.stringify({ 'body': body });
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', token);
        var options = new RequestOptions({ headers: headers });
        return this.http.post("/profile/" + userId + "/about", reqBody, options)
            .map(function (res) { return res.json(); });
    };
    ProfileService.prototype.titleUpdate = function (userId, body) {
        var token = localStorage.getItem('token');
        var reqBody = JSON.stringify({ 'body': body });
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', token);
        var options = new RequestOptions({ headers: headers });
        return this.http.post("/profile/" + userId + "/title", reqBody, options)
            .map(function (res) { return res.json(); });
    };
    ProfileService.prototype.skillUpdate = function (userId, body) {
        var token = localStorage.getItem('token');
        var reqBody = JSON.stringify({ 'body': body });
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', token);
        var options = new RequestOptions({ headers: headers });
        return this.http.post("/profile/" + userId + "/skills", reqBody, options)
            .map(function (res) { return res.json(); });
    };
    ProfileService.prototype.killSkill = function (skill) {
        var token = localStorage.getItem('token');
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', token);
        var options = new RequestOptions({ headers: headers });
        return this.http.delete("/profile/skills/" + skill, options)
            .map(function (res) {
            console.log(res, "response delete sent back");
            return res.json();
        })
            .catch(function (error) { return Observable.throw(error.json().error || console.log(error, 'error')); });
    };
    ProfileService.prototype.goWork = function (body) {
        var token = localStorage.getItem('token');
        var reqBody = JSON.stringify(body);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', token);
        var options = new RequestOptions({ headers: headers });
        return this.http.post("/works", reqBody, options)
            .map(function (res) { return res.json(); });
    };
    ProfileService.prototype.deleteWork = function (workId) {
        var token = localStorage.getItem('token');
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', token);
        var options = new RequestOptions({ headers: headers });
        return this.http.delete("/works/" + workId, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable.throw(error.json().error || console.log(error, 'error')); });
    };
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
    return ProfileService;
}());
//# sourceMappingURL=profile.service.js.map