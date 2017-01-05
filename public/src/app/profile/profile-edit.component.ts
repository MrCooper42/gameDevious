import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt/angular2-jwt';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { UploadComponent } from '../upload/upload.component';
import { UploadWorksComponent } from '../upload/upload-works.component';
import { UploadWorksAvatarComponent } from '../upload/upload-works-avatar.component';
import { User } from './user.model';

@Component({
  selector: 'app-profile-edit',
  // template: `<router-outlet></router-outlet>`,
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  titleForm: FormGroup;
  aboutForm: FormGroup;
  skillsForm: FormGroup;
  worksForm: FormGroup;

  showWork: Boolean;

  user: any;

  constructor(private profileService: ProfileService, private router: Router, private modalService: NgbModal) { }

  jwtHelper: JwtHelper = new JwtHelper();

  hasSkill() {
    return this.user.profile.skills;
  }

  showWorkForm() {
    this.showWork = !this.showWork;
    // this.worksForm.reset();
  }

  hasWorks() {
    return this.user.profile.works;
  }

  submitTitle() {
    let title = this.titleForm.value.title;
    this.profileService.titleUpdate(this.useJwtHelper()._id, title)
      .subscribe(
      data => {
        this.user.profile.title = data.title;
        this.router.navigateByUrl('/profile');
      },
      error => console.error(error));
    this.titleForm.reset();
  }

  submitAbout() {
    let about = this.aboutForm.value.about;
    this.profileService.aboutUpdate(this.useJwtHelper()._id, about)
      .subscribe(
      data => {
        this.user.profile.summary = data.summary;
        // this.router.navigateByUrl('/profile');
      },
      error => console.error(error));
    this.aboutForm.reset();
  }

  submitSkill() {
    let skill = this.skillsForm.value.skills;
    this.profileService.skillUpdate(this.useJwtHelper()._id, skill)
      .subscribe(
      data => {
        console.log(data.skills)
        this.user.profile.skills = data.skills;
        // this.router.navigateByUrl('/profile');
      },
      error => console.error(error));
    this.skillsForm.reset();
  }

  deleteSkill(skill) {
    this.profileService.killSkill(skill)
      .subscribe(
      data => this.user.profile.skills = data.obj.skills)
  }

  submitWork() {
    let work = this.worksForm.value;
    let works = this.user.profile.works
    this.profileService.goWork(work)
      .subscribe(
      data => {
        works.push(data)
        this.user.profile.works = works
      },
      error => console.error(error));
  }

  deleteWork(workId) {
    let works = this.user.profile.works;
    let filtered = works.filter(el => el._id != workId);
    this.profileService.deleteWork(workId)
      .subscribe(
      data => this.user.profile.works = filtered)
  }

  getAvatar() {
    return this.user.profile.avatar;
  }

  updateAvatar() {
    this.returnUser().subscribe(res => this.user = res);
  }

  openAvatar() {
    setTimeout(() => {
      this.returnUser().subscribe(res => this.user = res);
    }, 15000);
    let options: NgbModalOptions = {
      size: 'lg'
    };
    const modalRef = this.modalService.open(UploadComponent, options)
  }

  openWork() {
    let options: NgbModalOptions = {
      size: 'lg'
    };
    const modalWorkRef = this.modalService.open(UploadWorksComponent, options);
    modalWorkRef.componentInstance.name = 'World';
  }

  openWorkAvatar() {
    let options: NgbModalOptions = {
      size: 'lg'
    };
    const modalWorkAvatarRef = this.modalService.open(UploadWorksAvatarComponent, options);
    modalWorkAvatarRef.componentInstance.name = 'World';
  }

  useJwtHelper() {
    let token = localStorage.getItem('token');

    if (token == null) {
      this.router.navigate(['/login']);
      return false;
    }
    return this.jwtHelper.decodeToken(token).user;
  }

  returnUser() {
    let id = this.useJwtHelper()._id;

    return this.profileService.getUser(id)
      .map(res => {
        delete res.password;
        delete res.isAdmin;
        console.log(res, "user")
        return this.user = res;
      })
      .catch((err: any) => {
        console.log('error' + err);
        throw err;
      });
  }

  loggedIn() {
    if (this.profileService.isLoggedIn() === false) {
      this.router.navigate(['/login']);
    } else {
      console.log(this.profileService.isLoggedIn());
      return true;
    }
  }

  ngOnInit() {
    this.showWork = false;
    this.titleForm = new FormGroup({
      title: new FormControl(null, Validators.required),
    });
    this.skillsForm = new FormGroup({
      skills: new FormControl(null, Validators.required),
    });
    this.aboutForm = new FormGroup({
      about: new FormControl(null, Validators.required),
    });
    this.worksForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      url: new FormControl(''),
      video: new FormControl('')
    });
    this.returnUser().subscribe(res => this.user = res);
  }

}


// will have to get working
  // linkFacebook() {
  //   this.profileService.facebook(this.useJwtHelper()._id)
  //     .subscribe(
  //     res => {
  //       console.log(res, "response in controller")
  //       this.router.navigate(["/"]).then(result => {
  //         window.location.href = res;
  //       });
  //     },
  //     error => console.log(error)
  //     )
  // }
  //
  // linkLinkedin() {
  //   this.profileService.linkedin(this.useJwtHelper()._id)
  //     .subscribe(
  //     res => {
  //       console.log(res, "response in controller")
  //       this.router.navigate(["/"]).then(result => { window.location.href = res; });
  //     },
  //     error => console.log(error)
  //     )
  // }
  //
  // linkGithub() {
  //   this.profileService.github(this.useJwtHelper()._id)
  //     .subscribe(
  //     res => {
  //       console.log(res, "response in controller")
  //       this.router.navigate(["/"]).then(result => { window.location.href = res; });
  //     },
  //     error => console.log(error)
  //     )
  // }
