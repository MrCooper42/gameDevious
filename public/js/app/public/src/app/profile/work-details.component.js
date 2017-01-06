import { Component } from '@angular/core';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JwtHelper } from 'angular2-jwt/angular2-jwt';
export var WorkDetailsComponent = (function () {
    function WorkDetailsComponent(profileService, router) {
        this.profileService = profileService;
        this.router = router;
        this.jwtHelper = new JwtHelper();
    }
    WorkDetailsComponent.prototype.useJwtHelper = function () {
        var token = localStorage.getItem('token');
        if (token == null) {
            this.router.navigate(['/login']);
            return false;
        }
        return this.jwtHelper.decodeToken(token).user;
    };
    WorkDetailsComponent.prototype.returnUser = function () {
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
    WorkDetailsComponent.prototype.submitWork = function () {
        var _this = this;
        var work = this.worksForm.value;
        var works = this.user.profile.works;
        this.profileService.goWork(work)
            .subscribe(function (data) {
            works.push(data);
            _this.user.profile.works = works;
        }, function (error) { return console.error(error); });
        this.worksForm.reset();
        // this.router.navigateByUrl('/profile');
    };
    WorkDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.user, "user in details");
        this.worksForm = new FormGroup({
            title: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            url: new FormControl(''),
            video: new FormControl('')
        });
        this.returnUser().subscribe(function (res) { return _this.user = res; });
    };
    WorkDetailsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-work-details',
                    templateUrl: './work-details.component.html',
                    styleUrls: ['./work-details.component.css']
                },] },
    ];
    /** @nocollapse */
    WorkDetailsComponent.ctorParameters = [
        { type: ProfileService, },
        { type: Router, },
    ];
    return WorkDetailsComponent;
}());
//# sourceMappingURL=work-details.component.js.map