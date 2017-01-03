import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileEditComponent } from './profile-edit.component';
import { ProfileComponent } from './profile.component';
export class ProfileModule {
}
ProfileModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule
                ],
                declarations: [
                    ProfileComponent,
                    ProfileEditComponent
                ],
                providers: []
            },] },
];
/** @nocollapse */
ProfileModule.ctorParameters = [];
//# sourceMappingURL=profile.module.js.map