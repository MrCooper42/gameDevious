import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { worksRouting } from './works.routing';
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
    ReactiveFormsModule,
    worksRouting
  ]
})

export class AuthModule {

}
