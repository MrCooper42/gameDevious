import { Component } from '@angular/core';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt/angular2-jwt';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    hasSkill() {
        return this.user.profile.skills;
    }
    submitTitle() {
        let title = this.titleForm.value.title;
        this.profileService.titleUpdate(this.useJwtHelper()._id, title)
            .subscribe(data => {
            this.user.profile.title = data.title;
            this.router.navigateByUrl('/profile');
        }, error => console.error(error));
        this.titleForm.reset();
    }
    submitAbout() {
        let about = this.aboutForm.value.about;
        this.profileService.aboutUpdate(this.useJwtHelper()._id, about)
            .subscribe(data => {
            this.user.profile.summary = data.summary;
            // this.router.navigateByUrl('/profile');
        }, error => console.error(error));
        this.titleForm.reset();
    }
    submitSkill() {
        let skill = this.aboutForm.value.skill;
        this.profileService.aboutUpdate(this.useJwtHelper()._id, skill)
            .subscribe(data => {
            this.user.profile.summary = data.skills;
            this.router.navigateByUrl('/profile');
        }, error => console.error(error));
        this.titleForm.reset();
    }
    getAvatar() {
        return this.user.profile.avatar;
    }
    open() {
        let options = {
            size: 'lg'
        };
        const modalRef = this.modalService.open(UploadComponent, options);
        modalRef.componentInstance.name = 'World';
    }
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
        this.titleForm = new FormGroup({
            title: new FormControl(null, [
                Validators.required,
            ]),
        });
        this.skillsForm = new FormGroup({
            skills: new FormControl(null, [
                Validators.required,
            ]),
        });
        this.aboutForm = new FormGroup({
            about: new FormControl(null, [
                Validators.required,
            ]),
        });
        this.returnUser().subscribe(res => this.user = res);
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