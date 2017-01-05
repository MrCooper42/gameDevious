/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './profile.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/forms/src/directives';
import * as import4 from '@angular/forms/src/form_providers';
import * as import5 from '@angular/common/src/localization';
import * as import6 from '@angular/forms/src/form_builder';
import * as import7 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import9 from '@angular/core/src/i18n/tokens';
class ProfileModuleInjector extends import0.NgModuleInjector {
    constructor(parent) {
        super(parent, [], []);
    }
    get _NgLocalization_4() {
        if ((this.__NgLocalization_4 == null)) {
            (this.__NgLocalization_4 = new import5.NgLocaleLocalization(this.parent.get(import9.LOCALE_ID)));
        }
        return this.__NgLocalization_4;
    }
    get _FormBuilder_5() {
        if ((this.__FormBuilder_5 == null)) {
            (this.__FormBuilder_5 = new import6.FormBuilder());
        }
        return this.__FormBuilder_5;
    }
    get _RadioControlRegistry_6() {
        if ((this.__RadioControlRegistry_6 == null)) {
            (this.__RadioControlRegistry_6 = new import7.RadioControlRegistry());
        }
        return this.__RadioControlRegistry_6;
    }
    createInternal() {
        this._CommonModule_0 = new import2.CommonModule();
        this._InternalFormsSharedModule_1 = new import3.InternalFormsSharedModule();
        this._ReactiveFormsModule_2 = new import4.ReactiveFormsModule();
        this._ProfileModule_3 = new import1.ProfileModule();
        return this._ProfileModule_3;
    }
    getInternal(token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_1;
        }
        if ((token === import4.ReactiveFormsModule)) {
            return this._ReactiveFormsModule_2;
        }
        if ((token === import1.ProfileModule)) {
            return this._ProfileModule_3;
        }
        if ((token === import5.NgLocalization)) {
            return this._NgLocalization_4;
        }
        if ((token === import6.FormBuilder)) {
            return this._FormBuilder_5;
        }
        if ((token === import7.RadioControlRegistry)) {
            return this._RadioControlRegistry_6;
        }
        return notFoundResult;
    }
    destroyInternal() {
    }
}
export const ProfileModuleNgFactory = new import0.NgModuleFactory(ProfileModuleInjector, import1.ProfileModule);
//# sourceMappingURL=profile.module.ngfactory.js.map