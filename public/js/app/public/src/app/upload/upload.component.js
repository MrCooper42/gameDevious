import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
const TOKEN = localStorage.getItem('token');
const URL = '/upload/avatar';
export class UploadComponent {
    constructor() {
        this.uploader = new FileUploader({ url: URL, authToken: TOKEN });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    fileOverBase(e) {
        this.hasBaseDropZoneOver = e;
    }
    fileOverAnother(e) {
        this.hasAnotherDropZoneOver = e;
    }
}
UploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-upload',
                templateUrl: 'upload.component.html',
                styleUrls: ['./upload.component.css']
            },] },
];
/** @nocollapse */
UploadComponent.ctorParameters = [];
//# sourceMappingURL=upload.component.js.map