import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ProfileService } from '../profile/profile.service';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt/angular2-jwt';
var URL = '/upload/works/file';
var TOKEN = localStorage.getItem('token');
export var UploadWorksComponent = (function () {
    function UploadWorksComponent(profileService, router) {
        this.profileService = profileService;
        this.router = router;
        this.jwtHelper = new JwtHelper();
        this.uploader = new FileUploader({ url: URL, authToken: this.token });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    UploadWorksComponent.prototype.setURL = function (id, title) {
        this.chosenFile = title;
        this.token = {
            token: TOKEN,
            workId: id
        };
        this.URL = "/upload/works/" + id + "/file";
        console.log(title, "title");
        console.log(this.workId, "id");
    };
    UploadWorksComponent.prototype.getURL = function () {
        return this.URL;
    };
    UploadWorksComponent.prototype.useJwtHelper = function () {
        var token = localStorage.getItem('token');
        if (token == null) {
            this.router.navigate(['/login']);
            return false;
        }
        return this.jwtHelper.decodeToken(token).user;
    };
    UploadWorksComponent.prototype.returnUser = function () {
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
    UploadWorksComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    UploadWorksComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    UploadWorksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.URL = '';
        this.workId = '';
        console.log(this.user, "user in file upload");
        this.returnUser().subscribe(function (res) {
            _this.user = res;
            _this.works = res.profile.works;
        });
    };
    UploadWorksComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-upload-works',
                    templateUrl: 'upload-works.component.html',
                    styleUrls: ['./upload-works.component.css']
                },] },
    ];
    /** @nocollapse */
    UploadWorksComponent.ctorParameters = [
        { type: ProfileService, },
        { type: Router, },
    ];
    return UploadWorksComponent;
}());
//# sourceMappingURL=upload-works.component.js.map