import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { authRouting } from './auth.routing';
import { LogoutComponent } from './logout.component';
import { SignupComponent } from './signup.component';
import { SigninComponent } from './signin.component';
export class AuthModule {
}
AuthModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    LogoutComponent,
                    SignupComponent,
                    SigninComponent
                ],
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    authRouting
                ]
            },] },
];
/** @nocollapse */
AuthModule.ctorParameters = [];
//# sourceMappingURL=auth.module.js.map