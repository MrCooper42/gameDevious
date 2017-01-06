import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ProfileService } from '../profile/profile.service';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt/angular2-jwt';

const TOKEN = localStorage.getItem('token');

@Component({
  selector: 'app-upload-works-avatar',
  templateUrl: 'upload-works-avatar.component.html',
  styleUrls: ['./upload-works-avatar.component.css']
})
export class UploadWorksAvatarComponent implements OnInit {

  user: any;
  URL: string;
  chosenFile: string;

  constructor(private profileService: ProfileService, private router: Router) { }

  setURL(title) {
    this.chosenFile = title;
    this.URL =  `/upload/works/${title}/avatar`
    console.log(title, "title")
    console.log(this.URL, "this.URL")
  }

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
        console.log(res, "user sdfsdf")
        return this.user = res;
      })
      .catch((err: any) => {
        console.log('error' + err);
        throw err;
      });
  }


  public uploader: FileUploader = new FileUploader({url: this.URL, authToken: TOKEN});

  public hasBaseDropZoneOver: boolean = false;

  public hasAnotherDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  ngOnInit() {
    console.log(this.user, "user in file upload")
    this.returnUser().subscribe(res => this.user = res);
  }
}

// !uploader.getNotUploadedItems().length for html upload all
