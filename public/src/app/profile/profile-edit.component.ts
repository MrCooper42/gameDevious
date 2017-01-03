import { Component, OnInit } from '@angular/core';
import { Observable }           from 'rxjs/Observable';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt/angular2-jwt';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { UploadComponent } from '../upload/upload.component';
import { User } from './user.model';

const TOKEN = localStorage.getItem('token');

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  titleForm: FormGroup;

  user: any;

  constructor(private profileService: ProfileService, private router: Router, private modalService: NgbModal) { }

  jwtHelper: JwtHelper = new JwtHelper();

  submitTitle() {
      let title = this.titleForm.value.title
      this.profileService.titleUpdate(this.useJwtHelper()._id, title)
          .subscribe(
          data => {
              this.user.profile.title = data.title
              this.router.navigateByUrl('/profile');
          },
          error => console.error(error));
      this.titleForm.reset();
  }

  getAvatar() {
    return this.user.profile.avatar
  }

  open() {
    let options: NgbModalOptions = {
      size: 'lg'
    };
    const modalRef = this.modalService.open(UploadComponent, options);
    modalRef.componentInstance.name = 'World';
}
  useJwtHelper() {
    var token = localStorage.getItem('token');

    if (token == null) {
      this.router.navigate(['/login'])
      return false;
    }
    // this.user = this.jwtHelper.decodeToken(token).user
    return this.jwtHelper.decodeToken(token).user
  }

  returnUser() {
    let id = this.useJwtHelper()._id

    return this.profileService.getUser(id)
      .map(res => {
        delete res.password
        delete res.isAdmin
        return this.user = res
      })
      .catch((err: any) => {
        console.log('error' + err);
        throw err;
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
        this.router.navigate(["/"]).then(result => { window.location.href = res; });
      },
      error => console.log(error)
      )
  }

  linkGithub() {
    this.profileService.github(this.useJwtHelper()._id)
      .subscribe(
      res => {
        console.log(res, "response in controller")
        this.router.navigate(["/"]).then(result => { window.location.href = res; });
      },
      error => console.log(error)
      )
  }

  ngOnInit() {
    console.log(this.user, "user before")
    this.titleForm = new FormGroup({
        title: new FormControl(null, [
            Validators.required,
        ]),
    });
    this.returnUser().subscribe(_ => {
      console.log(this.user, 'ngoninit after getuser()' + this.user.github)
    });
  }

}
