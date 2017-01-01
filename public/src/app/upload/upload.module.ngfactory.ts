/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './upload.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from 'ng2-file-upload/file-upload/file-upload.module';
import * as import4 from '@angular/common/src/localization';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/i18n/tokens';
class UploadModuleInjector extends import0.NgModuleInjector<import1.UploadModule> {
  _CommonModule_0:import2.CommonModule;
  _FileUploadModule_1:import3.FileUploadModule;
  _UploadModule_2:import1.UploadModule;
  __NgLocalization_3:import4.NgLocaleLocalization;
  constructor(parent:import5.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _NgLocalization_3():import4.NgLocaleLocalization {
    if ((this.__NgLocalization_3 == null)) { (this.__NgLocalization_3 = new import4.NgLocaleLocalization(this.parent.get(import6.LOCALE_ID))); }
    return this.__NgLocalization_3;
  }
  createInternal():import1.UploadModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._FileUploadModule_1 = new import3.FileUploadModule();
    this._UploadModule_2 = new import1.UploadModule();
    return this._UploadModule_2;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.FileUploadModule)) { return this._FileUploadModule_1; }
    if ((token === import1.UploadModule)) { return this._UploadModule_2; }
    if ((token === import4.NgLocalization)) { return this._NgLocalization_3; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const UploadModuleNgFactory:import0.NgModuleFactory<import1.UploadModule> = new import0.NgModuleFactory(UploadModuleInjector,import1.UploadModule);