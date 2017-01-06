import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { JwtHelper } from 'angular2-jwt/angular2-jwt';
import { ProfileEditComponent } from './profile-edit.component';


@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.css']
})
export class WorkDetailsComponent implements OnInit {

  user: any;
  worksForm: FormGroup;

  constructor(private profileService: ProfileService, private router: Router) { }

  jwtHelper: JwtHelper = new JwtHelper();

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
      this.worksForm.reset();
      // this.router.navigateByUrl('/profile');
  }

  ngOnInit() {
    console.log(this.user, "user in details")
    this.worksForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      url: new FormControl(''),
      video: new FormControl('')
    });
    this.returnUser().subscribe(res => this.user = res);
  }

}
