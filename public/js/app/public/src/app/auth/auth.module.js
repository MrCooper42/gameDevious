import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { authRouting } from './auth.routing';
import { AuthService } from './auth.service';
import { LogoutComponent } from './logout.component';
import { SignupComponent } from './signup.component';
import { SigninComponent } from './signin.component';
export class AuthModule {
}
AuthModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SignupComponent,
                    SigninComponent,
                    LogoutComponent
                ],
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    authRouting
                ],
                providers: [
                    AuthService
                ]
            },] },
];
/** @nocollapse */
AuthModule.ctorParameters = [];
//# sourceMappingURL=auth.module.js.map