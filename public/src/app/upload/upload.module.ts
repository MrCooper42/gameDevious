import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { UploadComponent } from './upload.component';
import { UploadWorksComponent } from './upload-works.component';
import { UploadWorksAvatarComponent } from './upload-works-avatar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FileUploadModule,
    NgbModule
  ],
  declarations: [
    UploadComponent,
    UploadWorksComponent,
    UploadWorksAvatarComponent
  ]
})
export class UploadModule { }
