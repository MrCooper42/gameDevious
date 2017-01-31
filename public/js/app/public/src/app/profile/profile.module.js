import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { profileRouting } from './profile.routing';
import { ProfileEditComponent } from './profile-edit.component';
import { ProfileComponent } from './profile.component';
import { UploadModule } from '../upload/upload.module';
import { WorkDetailsComponent } from './work-details.component';
export var ProfileModule = (function () {
    function ProfileModule() {
    }
    ProfileModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    /** @nocollapse */
    ProfileModule.ctorParameters = [];
    return ProfileModule;
}());
//# sourceMappingURL=profile.module.js.map