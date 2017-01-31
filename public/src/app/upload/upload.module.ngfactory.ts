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
import * as import4 from '@ng-bootstrap/ng-bootstrap/accordion/accordion.module';
import * as import5 from '@ng-bootstrap/ng-bootstrap/alert/alert.module';
import * as import6 from '@ng-bootstrap/ng-bootstrap/buttons/radio.module';
import * as import7 from '@ng-bootstrap/ng-bootstrap/carousel/carousel.module';
import * as import8 from '@ng-bootstrap/ng-bootstrap/collapse/collapse.module';
import * as import9 from '@angular/forms/src/directives';
import * as import10 from '@angular/forms/src/form_providers';
import * as import11 from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module';
import * as import12 from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module';
import * as import13 from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import * as import14 from '@ng-bootstrap/ng-bootstrap/pagination/pagination.module';
import * as import15 from '@ng-bootstrap/ng-bootstrap/popover/popover.module';
import * as import16 from '@ng-bootstrap/ng-bootstrap/progressbar/progressbar.module';
import * as import17 from '@ng-bootstrap/ng-bootstrap/rating/rating.module';
import * as import18 from '@ng-bootstrap/ng-bootstrap/tabset/tabset.module';
import * as import19 from '@ng-bootstrap/ng-bootstrap/timepicker/timepicker.module';
import * as import20 from '@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module';
import * as import21 from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module';
import * as import22 from '@ng-bootstrap/ng-bootstrap/index';
import * as import23 from '@angular/common/src/localization';
import * as import24 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import25 from '@ng-bootstrap/ng-bootstrap/modal/modal';
import * as import26 from '@angular/core/src/di/injector';
import * as import27 from '../../../../node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.ngfactory';
import * as import28 from '../../../../node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.ngfactory';
import * as import29 from '../../../../node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.ngfactory';
import * as import30 from '../../../../node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.ngfactory';
import * as import31 from '../../../../node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.ngfactory';
import * as import32 from '../../../../node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.ngfactory';
import * as import33 from '../../../../node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.ngfactory';
import * as import34 from '@angular/core/src/i18n/tokens';
import * as import35 from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
class UploadModuleInjector extends import0.NgModuleInjector<import1.UploadModule> {
  _CommonModule_0:import2.CommonModule;
  _FileUploadModule_1:import3.FileUploadModule;
  _NgbAccordionModule_2:import4.NgbAccordionModule;
  _NgbAlertModule_3:import5.NgbAlertModule;
  _NgbButtonsModule_4:import6.NgbButtonsModule;
  _NgbCarouselModule_5:import7.NgbCarouselModule;
  _NgbCollapseModule_6:import8.NgbCollapseModule;
  _InternalFormsSharedModule_7:import9.InternalFormsSharedModule;
  _FormsModule_8:import10.FormsModule;
  _NgbDatepickerModule_9:import11.NgbDatepickerModule;
  _NgbDropdownModule_10:import12.NgbDropdownModule;
  _NgbModalModule_11:import13.NgbModalModule;
  _NgbPaginationModule_12:import14.NgbPaginationModule;
  _NgbPopoverModule_13:import15.NgbPopoverModule;
  _NgbProgressbarModule_14:import16.NgbProgressbarModule;
  _NgbRatingModule_15:import17.NgbRatingModule;
  _NgbTabsetModule_16:import18.NgbTabsetModule;
  _NgbTimepickerModule_17:import19.NgbTimepickerModule;
  _NgbTooltipModule_18:import20.NgbTooltipModule;
  _NgbTypeaheadModule_19:import21.NgbTypeaheadModule;
  _NgbModule_20:import22.NgbModule;
  _UploadModule_21:import1.UploadModule;
  __NgLocalization_22:import23.NgLocaleLocalization;
  __RadioControlRegistry_23:import24.RadioControlRegistry;
  __NgbModal_24:import25.NgbModal;
  constructor(parent:import26.Injector) {
    super(parent,[
      import27.NgbAlertNgFactory,
      import28.NgbDatepickerNgFactory,
      import29.NgbModalBackdropNgFactory,
      import30.NgbModalWindowNgFactory,
      import31.NgbPopoverWindowNgFactory,
      import32.NgbTooltipWindowNgFactory,
      import33.NgbTypeaheadWindowNgFactory
    ]
    ,([] as any[]));
  }
  get _NgLocalization_22():import23.NgLocaleLocalization {
    if ((this.__NgLocalization_22 == null)) { (this.__NgLocalization_22 = new import23.NgLocaleLocalization(this.parent.get(import34.LOCALE_ID))); }
    return this.__NgLocalization_22;
  }
  get _RadioControlRegistry_23():import24.RadioControlRegistry {
    if ((this.__RadioControlRegistry_23 == null)) { (this.__RadioControlRegistry_23 = new import24.RadioControlRegistry()); }
    return this.__RadioControlRegistry_23;
  }
  get _NgbModal_24():import25.NgbModal {
    if ((this.__NgbModal_24 == null)) { (this.__NgbModal_24 = new import25.NgbModal(this,this,this.parent.get(import35.NgbModalStack))); }
    return this.__NgbModal_24;
  }
  createInternal():import1.UploadModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._FileUploadModule_1 = new import3.FileUploadModule();
    this._NgbAccordionModule_2 = new import4.NgbAccordionModule();
    this._NgbAlertModule_3 = new import5.NgbAlertModule();
    this._NgbButtonsModule_4 = new import6.NgbButtonsModule();
    this._NgbCarouselModule_5 = new import7.NgbCarouselModule();
    this._NgbCollapseModule_6 = new import8.NgbCollapseModule();
    this._InternalFormsSharedModule_7 = new import9.InternalFormsSharedModule();
    this._FormsModule_8 = new import10.FormsModule();
    this._NgbDatepickerModule_9 = new import11.NgbDatepickerModule();
    this._NgbDropdownModule_10 = new import12.NgbDropdownModule();
    this._NgbModalModule_11 = new import13.NgbModalModule();
    this._NgbPaginationModule_12 = new import14.NgbPaginationModule();
    this._NgbPopoverModule_13 = new import15.NgbPopoverModule();
    this._NgbProgressbarModule_14 = new import16.NgbProgressbarModule();
    this._NgbRatingModule_15 = new import17.NgbRatingModule();
    this._NgbTabsetModule_16 = new import18.NgbTabsetModule();
    this._NgbTimepickerModule_17 = new import19.NgbTimepickerModule();
    this._NgbTooltipModule_18 = new import20.NgbTooltipModule();
    this._NgbTypeaheadModule_19 = new import21.NgbTypeaheadModule();
    this._NgbModule_20 = new import22.NgbModule();
    this._UploadModule_21 = new import1.UploadModule();
    return this._UploadModule_21;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.FileUploadModule)) { return this._FileUploadModule_1; }
    if ((token === import4.NgbAccordionModule)) { return this._NgbAccordionModule_2; }
    if ((token === import5.NgbAlertModule)) { return this._NgbAlertModule_3; }
    if ((token === import6.NgbButtonsModule)) { return this._NgbButtonsModule_4; }
    if ((token === import7.NgbCarouselModule)) { return this._NgbCarouselModule_5; }
    if ((token === import8.NgbCollapseModule)) { return this._NgbCollapseModule_6; }
    if ((token === import9.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_7; }
    if ((token === import10.FormsModule)) { return this._FormsModule_8; }
    if ((token === import11.NgbDatepickerModule)) { return this._NgbDatepickerModule_9; }
    if ((token === import12.NgbDropdownModule)) { return this._NgbDropdownModule_10; }
    if ((token === import13.NgbModalModule)) { return this._NgbModalModule_11; }
    if ((token === import14.NgbPaginationModule)) { return this._NgbPaginationModule_12; }
    if ((token === import15.NgbPopoverModule)) { return this._NgbPopoverModule_13; }
    if ((token === import16.NgbProgressbarModule)) { return this._NgbProgressbarModule_14; }
    if ((token === import17.NgbRatingModule)) { return this._NgbRatingModule_15; }
    if ((token === import18.NgbTabsetModule)) { return this._NgbTabsetModule_16; }
    if ((token === import19.NgbTimepickerModule)) { return this._NgbTimepickerModule_17; }
    if ((token === import20.NgbTooltipModule)) { return this._NgbTooltipModule_18; }
    if ((token === import21.NgbTypeaheadModule)) { return this._NgbTypeaheadModule_19; }
    if ((token === import22.NgbModule)) { return this._NgbModule_20; }
    if ((token === import1.UploadModule)) { return this._UploadModule_21; }
    if ((token === import23.NgLocalization)) { return this._NgLocalization_22; }
    if ((token === import24.RadioControlRegistry)) { return this._RadioControlRegistry_23; }
    if ((token === import25.NgbModal)) { return this._NgbModal_24; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const UploadModuleNgFactory:import0.NgModuleFactory<import1.UploadModule> = new import0.NgModuleFactory(UploadModuleInjector,import1.UploadModule);