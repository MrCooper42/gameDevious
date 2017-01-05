import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { profileRouting } from './profile.routing'
import { ProfileEditComponent } from './profile-edit.component';
import { ProfileComponent } from './profile.component';
import { AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt';

import { UploadModule } from '../upload/upload.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UploadModule,
    profileRouting
  ],
  declarations: [
    ProfileComponent,
    ProfileEditComponent,
  ]
})
export class ProfileModule { }
