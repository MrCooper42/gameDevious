/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './auth.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/forms/src/directives';
import * as import4 from '@angular/forms/src/form_providers';
import * as import5 from '@angular/router/src/router_module';
import * as import6 from '@angular/common/src/localization';
import * as import7 from '@angular/forms/src/form_builder';
import * as import8 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import9 from './auth.service';
import * as import10 from '@angular/core/src/di/injector';
import * as import11 from './signup.component.ngfactory';
import * as import12 from './signin.component.ngfactory';
import * as import13 from './logout.component.ngfactory';
import * as import14 from '@angular/core/src/i18n/tokens';
import * as import15 from './signup.component';
import * as import16 from './signin.component';
import * as import17 from './logout.component';
import * as import18 from '@angular/http/src/http';
import * as import19 from '../errors/error.service';
import * as import20 from '@angular/router/src/router_config_loader';
class AuthModuleInjector extends import0.NgModuleInjector<import1.AuthModule> {
  _CommonModule_0:import2.CommonModule;
  _InternalFormsSharedModule_1:import3.InternalFormsSharedModule;
  _ReactiveFormsModule_2:import4.ReactiveFormsModule;
  _RouterModule_3:import5.RouterModule;
  _AuthModule_4:import1.AuthModule;
  __NgLocalization_5:import6.NgLocaleLocalization;
  __FormBuilder_6:import7.FormBuilder;
  __RadioControlRegistry_7:import8.RadioControlRegistry;
  __ROUTES_8:any[];
  __AuthService_9:import9.AuthService;
  constructor(parent:import10.Injector) {
    super(parent,[
      import11.SignupComponentNgFactory,
      import12.SigninComponentNgFactory,
      import13.LogoutComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _NgLocalization_5():import6.NgLocaleLocalization {
    if ((this.__NgLocalization_5 == null)) { (this.__NgLocalization_5 = new import6.NgLocaleLocalization(this.parent.get(import14.LOCALE_ID))); }
    return this.__NgLocalization_5;
  }
  get _FormBuilder_6():import7.FormBuilder {
    if ((this.__FormBuilder_6 == null)) { (this.__FormBuilder_6 = new import7.FormBuilder()); }
    return this.__FormBuilder_6;
  }
  get _RadioControlRegistry_7():import8.RadioControlRegistry {
    if ((this.__RadioControlRegistry_7 == null)) { (this.__RadioControlRegistry_7 = new import8.RadioControlRegistry()); }
    return this.__RadioControlRegistry_7;
  }
  get _ROUTES_8():any[] {
      if ((this.__ROUTES_8 == null)) { (this.__ROUTES_8 = [[
        {
          path: '',
          redirectTo: 'signup',
          pathMatch: 'full'
        }
        ,
        {
          path: 'signup',
          component: import15.SignupComponent
        }
        ,
        {
          path: 'signin',
          component: import16.SigninComponent
        }
        ,
        {
          path: 'logout',
          component: import17.LogoutComponent
        }

      ]
    ]); }
    return this.__ROUTES_8;
  }
  get _AuthService_9():import9.AuthService {
    if ((this.__AuthService_9 == null)) { (this.__AuthService_9 = new import9.AuthService(this.parent.get(import18.Http),this.parent.get(import19.ErrorService))); }
    return this.__AuthService_9;
  }
  createInternal():import1.AuthModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._InternalFormsSharedModule_1 = new import3.InternalFormsSharedModule();
    this._ReactiveFormsModule_2 = new import4.ReactiveFormsModule();
    this._RouterModule_3 = new import5.RouterModule(this.parent.get(import5.ROUTER_FORROOT_GUARD,(null as any)));
    this._AuthModule_4 = new import1.AuthModule();
    return this._AuthModule_4;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_1; }
    if ((token === import4.ReactiveFormsModule)) { return this._ReactiveFormsModule_2; }
    if ((token === import5.RouterModule)) { return this._RouterModule_3; }
    if ((token === import1.AuthModule)) { return this._AuthModule_4; }
    if ((token === import6.NgLocalization)) { return this._NgLocalization_5; }
    if ((token === import7.FormBuilder)) { return this._FormBuilder_6; }
    if ((token === import8.RadioControlRegistry)) { return this._RadioControlRegistry_7; }
    if ((token === import20.ROUTES)) { return this._ROUTES_8; }
    if ((token === import9.AuthService)) { return this._AuthService_9; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const AuthModuleNgFactory:import0.NgModuleFactory<import1.AuthModule> = new import0.NgModuleFactory(AuthModuleInjector,import1.AuthModule);