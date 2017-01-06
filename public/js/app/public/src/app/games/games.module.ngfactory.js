/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './games.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/forms/src/directives';
import * as import4 from '@angular/forms/src/form_providers';
import * as import5 from '@angular/common/src/localization';
import * as import6 from '@angular/forms/src/form_builder';
import * as import7 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import8 from './games.service';
import * as import10 from '@angular/core/src/i18n/tokens';
import * as import11 from '@angular/http/src/http';
import * as import12 from '../errors/error.service';
var GamesModuleInjector = (function (_super) {
    __extends(GamesModuleInjector, _super);
    function GamesModuleInjector(parent) {
        _super.call(this, parent, [], []);
    }
    Object.defineProperty(GamesModuleInjector.prototype, "_NgLocalization_4", {
        get: function () {
            if ((this.__NgLocalization_4 == null)) {
                (this.__NgLocalization_4 = new import5.NgLocaleLocalization(this.parent.get(import10.LOCALE_ID)));
            }
            return this.__NgLocalization_4;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GamesModuleInjector.prototype, "_FormBuilder_5", {
        get: function () {
            if ((this.__FormBuilder_5 == null)) {
                (this.__FormBuilder_5 = new import6.FormBuilder());
            }
            return this.__FormBuilder_5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GamesModuleInjector.prototype, "_RadioControlRegistry_6", {
        get: function () {
            if ((this.__RadioControlRegistry_6 == null)) {
                (this.__RadioControlRegistry_6 = new import7.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_6;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GamesModuleInjector.prototype, "_GamesService_7", {
        get: function () {
            if ((this.__GamesService_7 == null)) {
                (this.__GamesService_7 = new import8.GamesService(this.parent.get(import11.Http), this.parent.get(import12.ErrorService)));
            }
            return this.__GamesService_7;
        },
        enumerable: true,
        configurable: true
    });
    GamesModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._InternalFormsSharedModule_1 = new import3.InternalFormsSharedModule();
        this._ReactiveFormsModule_2 = new import4.ReactiveFormsModule();
        this._GamesModule_3 = new import1.GamesModule();
        return this._GamesModule_3;
    };
    GamesModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_1;
        }
        if ((token === import4.ReactiveFormsModule)) {
            return this._ReactiveFormsModule_2;
        }
        if ((token === import1.GamesModule)) {
            return this._GamesModule_3;
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
        if ((token === import8.GamesService)) {
            return this._GamesService_7;
        }
        return notFoundResult;
    };
    GamesModuleInjector.prototype.destroyInternal = function () {
    };
    return GamesModuleInjector;
}(import0.NgModuleInjector));
export var GamesModuleNgFactory = new import0.NgModuleFactory(GamesModuleInjector, import1.GamesModule);
//# sourceMappingURL=games.module.ngfactory.js.map