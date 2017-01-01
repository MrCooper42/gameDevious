import { Component, OnInit } from '@angular/core';
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


  loggedIn() {
    if (this.profileService.isLoggedIn() === false) {
      this.router.navigate(['/auth']);
    } else {
      console.log(this.profileService.isLoggedIn());
      return true;
    }
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  linkFacebook() {
    this.profileService.facebook(this.useJwtHelper()._id)
      .subscribe(
      res => {
        console.log(res, "response in controller")
        this.router.navigate(["/"]).then(result=>{window.location.href = res;});
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

  ngOnInit() { }

}
