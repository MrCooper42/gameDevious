import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { WorksComponent } from './works.component';
import { UploadWorksComponent } from '../upload/upload-works.component';
import { UploadWorksAvatarComponent } from '../upload/upload-works-avatar.component';

@NgModule({
  declarations: [
    WorksComponent,
    UploadWorksComponent,
    UploadWorksAvatarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})

export class AuthModule {

}
