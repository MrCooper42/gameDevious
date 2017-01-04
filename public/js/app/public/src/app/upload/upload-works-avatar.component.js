import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
const TOKEN = localStorage.getItem('token');
const URL = '/upload/works';
export class UploadWorksAvatarComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
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
UploadWorksAvatarComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-upload-works-avatar',
                templateUrl: 'upload-works-avatar.component.html',
                styleUrls: ['./upload-works-avatar.component.css']
            },] },
];
/** @nocollapse */
UploadWorksAvatarComponent.ctorParameters = [
    { type: NgbActiveModal, },
];
//# sourceMappingURL=upload-works-avatar.component.js.map