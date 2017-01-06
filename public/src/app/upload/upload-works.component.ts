import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ProfileService } from '../profile/profile.service';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt/angular2-jwt';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap'

const URL = '/upload/works/586d650f40dbc42a1646864a/file'
const TOKEN = localStorage.getItem('token');

@Component({
  selector: 'app-upload-works',
  templateUrl: 'upload-works.component.html',
  styleUrls: ['./upload-works.component.css']
})
export class UploadWorksComponent implements OnInit {

  user: any;
  URL: string;
  chosenFile: string;
  works: any;

  constructor(private profileService: ProfileService, private router: Router) { }

  setURL(id, title) {
    this.chosenFile = title;
    URL =  `/upload/works/${id}/file`
    console.log(title, "title")
    console.log(URL, "URL")
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
    console.log(this.user, "user in file upload");
    this.returnUser().subscribe((res: any) => {
      this.user = res
      this.works = res.profile.works
    });
  }
}

// !uploader.getNotUploadedItems().length for html upload all
