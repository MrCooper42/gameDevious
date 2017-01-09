import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
// import { AuthHttp } from 'angular2-jwt';
import { JwtHelper } from 'angular2-jwt/angular2-jwt';
import { UploadModule } from '../upload/upload.module';

import { User } from './user.model';
import { Skill } from './skill.model';
import { ErrorService } from '../errors/error.service';

@Injectable()
export class ProfileService {

  private skills: Skill[] = [];

  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private http: Http, private errorService: ErrorService) { }
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
      .map((res: Response) => res.json())
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
      .map((res: Response) => res.json());
  }

  titleUpdate(userId, body) {
    let token = localStorage.getItem('token');
    let reqBody = JSON.stringify({ 'body': body });
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', token);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`/profile/${userId}/title`, reqBody, options)
      .map((res: Response) => res.json());
  }

  addEdu(userId, body) {
    let token = localStorage.getItem('token');
    let reqBody = JSON.stringify({ 'body': body });
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', token);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`/profile/${userId}/education`, reqBody, options)
      .map((res: Response) => res.json());
  }

  skillUpdate(userId, body) {
    let token = localStorage.getItem('token');
    let reqBody = JSON.stringify({ 'body': body });
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', token);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`/profile/${userId}/skills`, reqBody, options)
      .map((res: Response) => res.json());
  }

  killSkill(skill) {
    let token = localStorage.getItem('token');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', token);
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(`/profile/skills/${skill}`, options)
      .map((res: Response) => {
        console.log(res, "response delete sent back")
        return res.json()
      })
      .catch((error: any) => Observable.throw(error.json().error || console.log(error, 'error')));
  }

  goWork(body) {
    let token = localStorage.getItem('token');
    let reqBody = JSON.stringify(body);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', token);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`/works`, reqBody, options)
      .map((res: Response) => res.json());
  }

  deleteWork(workId) {
    let token = localStorage.getItem('token');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', token);
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(`/works/${workId}`, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || console.log(error, 'error')));
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

}
