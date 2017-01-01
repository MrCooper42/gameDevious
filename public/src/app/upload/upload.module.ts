import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { UploadComponent } from './upload.component'

@NgModule({
  imports: [
    CommonModule,
    FileUploadModule
  ],
  declarations: [
    UploadComponent
  ]
})
export class UploadModule { }
