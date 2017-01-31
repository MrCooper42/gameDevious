import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { WorksComponent } from './works.component';
import { UploadModule } from '../upload/upload.module';
export var WorksModule = (function () {
    function WorksModule() {
    }
    WorksModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        WorksComponent
                    ],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        UploadModule
                    ]
                },] },
    ];
    /** @nocollapse */
    WorksModule.ctorParameters = [];
    return WorksModule;
}());
//# sourceMappingURL=works.module.js.map