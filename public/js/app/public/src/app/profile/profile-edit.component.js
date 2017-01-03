import { Component } from '@angular/core';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt/angular2-jwt';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadComponent } from '../upload/upload.component';
const TOKEN = localStorage.getItem('token');
export class ProfileEditComponent {
    constructor(profileService, router, modalService) {
        this.profileService = profileService;
        this.router = router;
        this.modalService = modalService;
        this.jwtHelper = new JwtHelper();
    }
    getAvatar() {
        console.log(this.user.profile.avatar, "user profile here");
        return this.user.profile.avatar;
    }
    open() {
        let options = {
            size: 'lg'
        };
        const modalRef = this.modalService.open(UploadComponent, options);
        modalRef.componentInstance.name = 'World';
    }
    //
    // private getDismissReason(reason: any): string {
    //   if (reason === ModalDismissReasons.ESC) {
    //     return 'by pressing ESC';
    //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //     return 'by clicking on a backdrop';
    //   } else {
    //     return  `with: ${reason}`;
    //   }
    // }
    useJwtHelper() {
        var token = localStorage.getItem('token');
        if (token == null) {
            this.router.navigate(['/login']);
            return false;
        }
        // this.user = this.jwtHelper.decodeToken(token).user
        return this.jwtHelper.decodeToken(token).user;
    }
    returnUser() {
        let id = this.useJwtHelper()._id;
        return this.profileService.getUser(id)
            .map(res => {
            delete res.password;
            delete res.isAdmin;
            return this.user = res;
        })
            .catch((err) => {
            console.log('error' + err);
            throw err;
        });
    }
    loggedIn() {
        if (this.profileService.isLoggedIn() === false) {
            this.router.navigate(['/login']);
        }
        else {
            console.log(this.profileService.isLoggedIn());
            return true;
        }
    }
    linkFacebook() {
        this.profileService.facebook(this.useJwtHelper()._id)
            .subscribe(res => {
            console.log(res, "response in controller");
            this.router.navigate(["/"]).then(result => {
                window.location.href = res;
            });
        }, error => console.log(error));
    }
    linkLinkedin() {
        this.profileService.linkedin(this.useJwtHelper()._id)
            .subscribe(res => {
            console.log(res, "response in controller");
            this.router.navigate(["/"]).then(result => { window.location.href = res; });
        }, error => console.log(error));
    }
    linkGithub() {
        this.profileService.github(this.useJwtHelper()._id)
            .subscribe(res => {
            console.log(res, "response in controller");
            this.router.navigate(["/"]).then(result => { window.location.href = res; });
        }, error => console.log(error));
    }
    ngOnInit() {
        console.log(this.user, "user before");
        this.returnUser().subscribe(_ => {
            console.log(this.user, 'ngoninit after getuser()' + this.user.github);
        });
    }
}
ProfileEditComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-profile-edit',
                templateUrl: './profile-edit.component.html',
                styleUrls: ['./profile-edit.component.css']
            },] },
];
/** @nocollapse */
ProfileEditComponent.ctorParameters = [
    { type: ProfileService, },
    { type: Router, },
    { type: NgbModal, },
];
//# sourceMappingURL=profile-edit.component.js.map