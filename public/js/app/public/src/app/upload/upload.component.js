import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
var TOKEN = localStorage.getItem('token');
var URL = '/upload/avatar';
export var UploadComponent = (function () {
    function UploadComponent() {
        this.uploader = new FileUploader({ url: URL, authToken: TOKEN });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    UploadComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    UploadComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    UploadComponent.prototype.ngOnInit = function () {
        console.log(TOKEN, "token here");
    };
    UploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-upload',
                    templateUrl: 'upload.component.html',
                    styleUrls: ['./upload.component.css']
                },] },
    ];
    /** @nocollapse */
    UploadComponent.ctorParameters = [];
    return UploadComponent;
}());
//# sourceMappingURL=upload.component.js.map