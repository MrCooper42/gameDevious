import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ProfileService } from '../profile/profile.service';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt/angular2-jwt';
var TOKEN = localStorage.getItem('token');
export var UploadWorksAvatarComponent = (function () {
    function UploadWorksAvatarComponent(profileService, router) {
        this.profileService = profileService;
        this.router = router;
        this.jwtHelper = new JwtHelper();
        this.uploader = new FileUploader({ url: this.URL, authToken: TOKEN });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    UploadWorksAvatarComponent.prototype.setURL = function (title) {
        this.chosenFile = title;
        this.URL = "/upload/works/" + title + "/avatar";
        console.log(title, "title");
        console.log(this.URL, "this.URL");
    };
    UploadWorksAvatarComponent.prototype.useJwtHelper = function () {
        var token = localStorage.getItem('token');
        if (token == null) {
            this.router.navigate(['/login']);
            return false;
        }
        return this.jwtHelper.decodeToken(token).user;
    };
    UploadWorksAvatarComponent.prototype.returnUser = function () {
        var _this = this;
        var id = this.useJwtHelper()._id;
        return this.profileService.getUser(id)
            .map(function (res) {
            delete res.password;
            delete res.isAdmin;
            console.log(res, "user sdfsdf");
            return _this.user = res;
        })
            .catch(function (err) {
            console.log('error' + err);
            throw err;
        });
    };
    UploadWorksAvatarComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    UploadWorksAvatarComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    UploadWorksAvatarComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.user, "user in file upload");
        this.returnUser().subscribe(function (res) { return _this.user = res; });
    };
    UploadWorksAvatarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-upload-works-avatar',
                    templateUrl: 'upload-works-avatar.component.html',
                    styleUrls: ['./upload-works-avatar.component.css']
                },] },
    ];
    /** @nocollapse */
    UploadWorksAvatarComponent.ctorParameters = [
        { type: ProfileService, },
        { type: Router, },
    ];
    return UploadWorksAvatarComponent;
}());
//# sourceMappingURL=upload-works-avatar.component.js.map