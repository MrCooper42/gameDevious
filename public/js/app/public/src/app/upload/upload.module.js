import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { UploadComponent } from './upload.component';
export class UploadModule {
}
UploadModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FileUploadModule
                ],
                declarations: [
                    UploadComponent
                ]
            },] },
];
/** @nocollapse */
UploadModule.ctorParameters = [];
//# sourceMappingURL=upload.module.js.map