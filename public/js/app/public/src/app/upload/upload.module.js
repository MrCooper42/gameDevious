import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { UploadComponent } from './upload.component';
import { UploadWorksComponent } from './upload-works.component';
import { UploadWorksAvatarComponent } from './upload-works-avatar.component';
export class UploadModule {
}
UploadModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FileUploadModule
                ],
                declarations: [
                    UploadComponent,
                    UploadWorksComponent,
                    UploadWorksAvatarComponent
                ]
            },] },
];
/** @nocollapse */
UploadModule.ctorParameters = [];
//# sourceMappingURL=upload.module.js.map