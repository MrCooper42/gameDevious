import { Component } from '@angular/core';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt/angular2-jwt';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadComponent } from '../upload/upload.component';
export var ProfileEditComponent = (function () {
    function ProfileEditComponent(profileService, router, modalService) {
        this.profileService = profileService;
        this.router = router;
        this.modalService = modalService;
        this.jwtHelper = new JwtHelper();
    }
    ProfileEditComponent.prototype.hasSkill = function () {
        return this.user.profile.skills;
    };
    ProfileEditComponent.prototype.showWorkForm = function () {
        this.showWork = !this.showWork;
    };
    ProfileEditComponent.prototype.showTitle = function () {
        this.showTitleForm = !this.showTitleForm;
    };
    ProfileEditComponent.prototype.showEdu = function () {
        this.showEduForm = !this.showEduForm;
    };
    ProfileEditComponent.prototype.showXp = function () {
        this.showXpForm = !this.showXpForm;
    };
    ProfileEditComponent.prototype.refreshWorks = function () {
        var _this = this;
        this.returnUser().subscribe(function (res) { return _this.user = res; });
        this.showWork = !this.showWork;
        this.router.navigateByUrl('/profile');
    };
    ProfileEditComponent.prototype.hasWorks = function () {
        return this.user.profile.works;
    };
    ProfileEditComponent.prototype.submitTitle = function () {
        var _this = this;
        var title = this.titleForm.value.title;
        this.profileService.titleUpdate(this.useJwtHelper()._id, title)
            .subscribe(function (data) {
            _this.user.profile.title = data.title;
            _this.router.navigateByUrl('/profile');
        }, function (error) { return console.error(error); });
        this.titleForm.reset();
        this.showTitleForm = false;
    };
    ProfileEditComponent.prototype.submitAbout = function () {
        var _this = this;
        var about = this.aboutForm.value.about;
        this.profileService.aboutUpdate(this.useJwtHelper()._id, about)
            .subscribe(function (data) {
            _this.user.profile.summary = data.summary;
            // this.router.navigateByUrl('/profile');
        }, function (error) { return console.error(error); });
        this.aboutForm.reset();
    };
    ProfileEditComponent.prototype.submitSkill = function () {
        var _this = this;
        var skill = this.skillsForm.value.skills;
        this.profileService.skillUpdate(this.useJwtHelper()._id, skill)
            .subscribe(function (data) {
            console.log(data.skills);
            _this.user.profile.skills = data.skills;
            // this.router.navigateByUrl('/profile');
        }, function (error) { return console.error(error); });
        this.skillsForm.reset();
    };
    ProfileEditComponent.prototype.deleteSkill = function (skill) {
        var _this = this;
        this.profileService.killSkill(skill)
            .subscribe(function (data) { return _this.user.profile.skills = data.obj.skills; });
    };
    ProfileEditComponent.prototype.deleteWork = function (workId) {
        var _this = this;
        var works = this.user.profile.works;
        var filtered = works.filter(function (el) { return el._id != workId; });
        this.profileService.deleteWork(workId)
            .subscribe(function (data) { return _this.user.profile.works = filtered; });
    };
    ProfileEditComponent.prototype.getAvatar = function () {
        return this.user.profile.avatar;
    };
    ProfileEditComponent.prototype.updateAvatar = function () {
        var _this = this;
        this.returnUser().subscribe(function (res) { return _this.user = res; });
    };
    ProfileEditComponent.prototype.openAvatar = function () {
        var _this = this;
        setTimeout(function () {
            _this.returnUser().subscribe(function (res) { return _this.user = res; });
        }, 15000);
        var options = {
            size: 'lg'
        };
        var modalRef = this.modalService.open(UploadComponent, options);
    };
    // openWork() {
    //   let options: NgbModalOptions = {
    //     size: 'lg'
    //   };
    //   const modalWorkRef = this.modalService.open(UploadWorksComponent, options);
    //   modalWorkRef.componentInstance.name = 'World';
    // }
    //
    // openWorkAvatar() {
    //   let options: NgbModalOptions = {
    //     size: 'lg'
    //   };
    //   const modalWorkAvatarRef = this.modalService.open(UploadWorksAvatarComponent, options);
    //   modalWorkAvatarRef.componentInstance.name = 'World';
    // }
    ProfileEditComponent.prototype.useJwtHelper = function () {
        var token = localStorage.getItem('token');
        if (token == null) {
            this.router.navigate(['/login']);
            return false;
        }
        return this.jwtHelper.decodeToken(token).user;
    };
    ProfileEditComponent.prototype.returnUser = function () {
        var _this = this;
        var id = this.useJwtHelper()._id;
        return this.profileService.getUser(id)
            .map(function (res) {
            delete res.password;
            delete res.isAdmin;
            console.log(res, "user");
            return _this.user = res;
        })
            .catch(function (err) {
            console.log('error' + err);
            throw err;
        });
    };
    ProfileEditComponent.prototype.loggedIn = function () {
        if (this.profileService.isLoggedIn() === false) {
            this.router.navigate(['/login']);
        }
        else {
            console.log(this.profileService.isLoggedIn());
            return true;
        }
    };
    ProfileEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showWork = false;
        this.showTitleForm = false;
        this.showXpForm = false;
        this.showEduForm = false;
        this.titleForm = new FormGroup({
            title: new FormControl(null, Validators.required),
        });
        this.skillsForm = new FormGroup({
            skills: new FormControl(null, Validators.required),
        });
        this.aboutForm = new FormGroup({
            about: new FormControl(null, Validators.required),
        });
        this.xpForm = new FormGroup({
            company: new FormControl(null, Validators.required),
            roll: new FormControl(null, Validators.required),
            description: new FormControl('')
        });
        this.eduForm = new FormGroup({
            school: new FormControl(null, Validators.required),
            degree: new FormControl(null, Validators.required),
            extras: new FormControl(''),
        });
        this.returnUser().subscribe(function (res) { return _this.user = res; });
    };
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
    return ProfileEditComponent;
}());
//# sourceMappingURL=profile-edit.component.js.map