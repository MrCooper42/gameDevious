import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { profileRouting } from './profile.routing'
import { ProfileEditComponent } from './profile-edit.component';
import { ProfileComponent } from './profile.component';
import { AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt';

import { UploadModule } from '../upload/upload.module';
import { WorkDetailsComponent } from './work-details.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UploadModule,
    profileRouting,
    NgbModule
  ],
  declarations: [
    ProfileComponent,
    ProfileEditComponent,
    WorkDetailsComponent
  ]
})
export class ProfileModule { }
