import { Component, OnInit } from '@angular/core';
import { Observable }           from 'rxjs/Observable';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt/angular2-jwt';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


const TOKEN = localStorage.getItem('token');

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  user: string;

  closeResult: string;

  facebookRes: string;

  constructor(private profileService: ProfileService, private router: Router, private modalService: NgbModal) { }

  jwtHelper: JwtHelper = new JwtHelper();

  useJwtHelper() {
    var token = localStorage.getItem('token');

    if (token == null) {
      return false;
    }
    this.user = this.jwtHelper.decodeToken(token).user
    return this.jwtHelper.decodeToken(token).user
  }

  returnUser() {
    let id = this.useJwtHelper()._id

    this.profileService.getUser(id)
    .subscribe(res => {
      this.user = res;
    })
  }

  loggedIn() {
    if (this.profileService.isLoggedIn() === false) {
      this.router.navigate(['/login']);
    } else {
      console.log(this.profileService.isLoggedIn());
      return true;
    }
  }

  linkFacebook() {
    this.profileService.facebook(this.useJwtHelper()._id)
      .subscribe(
      res => {
        console.log(res, "response in controller")
        this.router.navigate(["/"]).then(result => {
          window.location.href = res;
        });
      },
      error => console.log(error)
      )
  }

  linkLinkedin() {
    this.profileService.linkedin(this.useJwtHelper()._id)
      .subscribe(
      res => {
        console.log(res, "response in controller")
        this.router.navigate(["/"]).then(result=>{window.location.href = res;});
      },
      error => console.log(error)
      )
  }

  linkGithub() {
    this.profileService.github(this.useJwtHelper()._id)
      .subscribe(
      res => {
        console.log(res, "response in controller")
        this.router.navigate(["/"]).then(result=>{window.location.href = res;});
      },
      error => console.log(error)
      )
  }

  ngOnInit() {
    // this.useJwtHelper();
    this.returnUser();
    console.log(this.user, "this user")
  }

}
