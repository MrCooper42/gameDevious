import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { AuthHttp } from 'angular2-jwt';
import { JwtHelper } from 'angular2-jwt/angular2-jwt';

import { Skill } from "./skill.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class ProfileService {

  private skills: Skill[] = [];

  jwtHelper: JwtHelper = new JwtHelper();


  constructor(private http: Http, private errorService: ErrorService, public authHttp: AuthHttp) { }

  useJwtHelper() {
    var token = localStorage.getItem('token');

    if (token == null) {
      return false;
    }
    return this.jwtHelper.decodeToken(token).user
  }

  addSkill(skill: String) {
    const body = JSON.stringify(skill);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const token = localStorage.getItem('token') ? `?tokens=${localStorage.getItem('token')}` : '';
    return this.http.post(`/profile/skills/${token}`, body, { headers: headers })
      .map((response: Response) => {
        const result = response.json();
        const skill = new Skill(
          result.obj.skill,
          result.obj.user._id);
        this.skills.push(skill);
        return skill;
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json())
      });
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  // profileEdit() {
  //   const token = localStorage.getItem('token')
  //
  //   return this.http.get(`/profile/user/${token}`)
  // } angular2-jwt

  facebook(userId) {
    console.log(userId, "userId")
    let headers = new Headers()
    headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept, Content-Type')
    headers.append('Access-Control-Allow-Origin', '*')
    headers.append('user_id', userId)
    let options = new RequestOptions({ headers: headers })
    console.log(options, "options")
    return this.authHttp.get(`/facebook/${userId}`, options)
    .map((res: Response) => {
      console.log(res.url, "server response")
      return res.url
    })
    .catch((error: any) => Observable.throw(error.json().error || console.log(error, "error")))
  }

  linkedin(userId) {
    return this.authHttp.get(`/linkedin/${userId}`)
    .map((res: Response) => {
      console.log(res.url, "server response")
      return res.url
    })
    .catch((error: any) => Observable.throw(error.json().error || console.log(error, "error")))
  }

  github(userId) {
    let headers = new Headers()
    headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept, Content-Type')
    headers.append('Access-Control-Allow-Origin', '')
    headers.append('user_id', userId)
    let options = new RequestOptions({ headers: headers })
    console.log(options, "options")
    return this.authHttp.get(`/github/${userId}`, options)
    .map((res: Response) => {
      console.log(res.url, "server response")
      return res.url
    })
    .catch((error: any) => Observable.throw(error.json().error || console.log(error, "error")))
  }
}
