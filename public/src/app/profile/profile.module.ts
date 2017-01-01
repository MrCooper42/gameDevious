import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileEditComponent } from './profile-edit.component';
import { ProfileComponent } from './profile.component';
import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProfileComponent,
    ProfileEditComponent
  ],
  providers: [
    // AuthHttp,
    // provideAuth({
    //         headerName: 'Authorization',
    //         tokenName: 'token',
    //         tokenGetter: (() => localStorage.getItem('token')),
    //         globalHeaders: [{ 'Content-Type': 'application/json' }],
    //         noJwtError: true
    //     })
  ]
})
export class ProfileModule { }
