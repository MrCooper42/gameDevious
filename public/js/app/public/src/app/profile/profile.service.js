import { Http, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { JwtHelper } from 'angular2-jwt/angular2-jwt';
import { Skill } from "./skill.model";
import { ErrorService } from "../errors/error.service";
export class ProfileService {
    constructor(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.skills = [];
        this.jwtHelper = new JwtHelper();
    }
    // public authHttp: AuthHttp
    useJwtHelper() {
        var token = localStorage.getItem('token');
        if (token == null) {
            return false;
        }
        return this.jwtHelper.decodeToken(token).user;
    }
    addSkill(skill) {
        const body = JSON.stringify(skill);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        const token = localStorage.getItem('token') ? `?tokens=${localStorage.getItem('token')}` : '';
        return this.http.post(`/profile/skills/${token}`, body, { headers: headers })
            .map((response) => {
            const result = response.json();
            const skill = new Skill(result.obj.skill, result.obj.user._id);
            this.skills.push(skill);
            return skill;
        })
            .catch((error) => {
            this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    }
    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
    // : Observable<User>
    getUser(userId) {
        return this.http.get(`/user/${userId}`)
            .map((res) => res.json())
            .catch(error => Observable.throw(error.json().error || console.log(error, "error")));
    }
    titleUpdate(userId, body) {
        let token = localStorage.getItem('token');
        let reqBody = JSON.stringify({ 'body': body });
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept, Content-Type');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
        headers.append('token', token);
        let options = new RequestOptions({ headers: headers });
        console.log(options, "options");
        console.log(body, "body in service");
        console.log(reqBody, "req body in service");
        return this.http.post(`/profile/${userId}/title`, reqBody, options)
            .map((res) => res.json());
    }
    facebook(userId) {
        console.log(userId, "userId");
        let headers = new Headers();
        headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept, Content-Type');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('user_id', userId);
        let options = new RequestOptions({ headers: headers });
        // ${userId}`, options
        return this.http.get(`/facebook/${userId}`, options)
            .map((res) => {
            console.log(res.url, "server response");
            return res.url;
        })
            .catch((error) => Observable.throw(error.json().error || console.log(error, "error")));
    }
    linkedin(userId) {
        return this.http.get(`/linkedin/${userId}`)
            .map((res) => {
            console.log(res.url, "server response");
            return res.url;
        })
            .catch((error) => Observable.throw(error.json().error || console.log(error, "error")));
    }
    github(userId) {
        let headers = new Headers();
        headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept, Content-Type');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('user_id', userId);
        let options = new RequestOptions({ headers: headers });
        console.log(options, "options");
        return this.http.get(`/github/${userId}`, options)
            .map((res) => {
            console.log(res.url, "server response");
            return res.url;
        })
            .catch((error) => Observable.throw(error.json().error || console.log(error, "error")));
    }
}
ProfileService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ProfileService.ctorParameters = [
    { type: Http, },
    { type: ErrorService, },
];
//# sourceMappingURL=profile.service.js.map