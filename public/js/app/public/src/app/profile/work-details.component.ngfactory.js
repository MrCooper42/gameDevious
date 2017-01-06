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
import * as import0 from './work-details.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from './profile.service';
import * as import9 from '@angular/router/src/router';
import * as import10 from './work-details.component.css.shim';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/common/src/directives/ng_if';
import * as import15 from '../../../../node_modules/@angular/forms/src/directives/reactive_directives/form_group_directive.ngfactory';
import * as import16 from '../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import17 from '../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import18 from '../../../../node_modules/@angular/forms/src/directives/reactive_directives/form_control_name.ngfactory';
import * as import19 from '@angular/core/src/linker/element_ref';
import * as import20 from '@angular/forms/src/directives/default_value_accessor';
import * as import21 from '@angular/forms/src/directives/control_value_accessor';
import * as import22 from '@angular/forms/src/directives/reactive_directives/form_control_name';
import * as import23 from '@angular/forms/src/directives/ng_control';
import * as import24 from '@angular/forms/src/directives/ng_control_status';
import * as import25 from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import * as import26 from '@angular/forms/src/directives/control_container';
export var Wrapper_WorkDetailsComponent = (function () {
    function Wrapper_WorkDetailsComponent(p0, p1) {
        this._changed = false;
        this.context = new import0.WorkDetailsComponent(p0, p1);
    }
    Wrapper_WorkDetailsComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_WorkDetailsComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_WorkDetailsComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_WorkDetailsComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_WorkDetailsComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_WorkDetailsComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_WorkDetailsComponent;
}());
var renderType_WorkDetailsComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_WorkDetailsComponent_Host0 = (function (_super) {
    __extends(View_WorkDetailsComponent_Host0, _super);
    function View_WorkDetailsComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_WorkDetailsComponent_Host0, renderType_WorkDetailsComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_WorkDetailsComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'app-work-details', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_WorkDetailsComponent0(this.viewUtils, this, 0, this._el_0);
        this._WorkDetailsComponent_0_3 = new Wrapper_WorkDetailsComponent(this.injectorGet(import8.ProfileService, this.parentIndex), this.injectorGet(import9.Router, this.parentIndex));
        this.compView_0.create(this._WorkDetailsComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._WorkDetailsComponent_0_3.context);
    };
    View_WorkDetailsComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.WorkDetailsComponent) && (0 === requestNodeIndex))) {
            return this._WorkDetailsComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_WorkDetailsComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._WorkDetailsComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_WorkDetailsComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_WorkDetailsComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_WorkDetailsComponent_Host0;
}(import1.AppView));
export var WorkDetailsComponentNgFactory = new import7.ComponentFactory('app-work-details', View_WorkDetailsComponent_Host0, import0.WorkDetailsComponent);
var styles_WorkDetailsComponent = [import10.styles];
var renderType_WorkDetailsComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_WorkDetailsComponent, {});
export var View_WorkDetailsComponent0 = (function (_super) {
    __extends(View_WorkDetailsComponent0, _super);
    function View_WorkDetailsComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_WorkDetailsComponent0, renderType_WorkDetailsComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_WorkDetailsComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_0 = new import11.ViewContainer(0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new import13.TemplateRef_(this, 0, this._anchor_0);
        this._NgIf_0_6 = new import12.Wrapper_NgIf(this._vc_0.vcRef, this._TemplateRef_0_5);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._anchor_0,
            this._text_1
        ]), null);
        return null;
    };
    View_WorkDetailsComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === import14.NgIf) && (0 === requestNodeIndex))) {
            return this._NgIf_0_6.context;
        }
        return notFoundResult;
    };
    View_WorkDetailsComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.user;
        this._NgIf_0_6.check_ngIf(currVal_0_0_0, throwOnChange, false);
        this._NgIf_0_6.ngDoCheck(this, this._anchor_0, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
    };
    View_WorkDetailsComponent0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
    };
    View_WorkDetailsComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 0)) {
            return new View_WorkDetailsComponent1(this.viewUtils, this, 0, this._anchor_0, this._vc_0);
        }
        return null;
    };
    return View_WorkDetailsComponent0;
}(import1.AppView));
var View_WorkDetailsComponent1 = (function (_super) {
    __extends(View_WorkDetailsComponent1, _super);
    function View_WorkDetailsComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_WorkDetailsComponent1, renderType_WorkDetailsComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_57 = import6.UNINITIALIZED;
        this._expr_58 = import6.UNINITIALIZED;
    }
    View_WorkDetailsComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'form', import3.EMPTY_INLINE_ARRAY, null);
        this._FormGroupDirective_5_3 = new import15.Wrapper_FormGroupDirective(null, null);
        this._ControlContainer_5_4 = this._FormGroupDirective_5_3.context;
        this._NgControlStatusGroup_5_5 = new import16.Wrapper_NgControlStatusGroup(this._ControlContainer_5_4);
        this._text_6 = this.renderer.createText(this._el_5, '\n  ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n    ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_7, 'label', new import3.InlineArray2(2, 'for', 'title'), null);
        this._text_10 = this.renderer.createText(this._el_9, 'Title', null);
        this._text_11 = this.renderer.createText(this._el_7, '\n    ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_7, 'input', new import3.InlineArray16(10, 'class', 'form-control', 'formControlName', 'title', 'id', 'title', 'placeholder', 'work title here', 'type', 'text'), null);
        this._DefaultValueAccessor_12_3 = new import17.Wrapper_DefaultValueAccessor(this.renderer, new import19.ElementRef(this._el_12));
        this._NG_VALUE_ACCESSOR_12_4 = [this._DefaultValueAccessor_12_3.context];
        this._FormControlName_12_5 = new import18.Wrapper_FormControlName(this._ControlContainer_5_4, null, null, this._NG_VALUE_ACCESSOR_12_4);
        this._NgControl_12_6 = this._FormControlName_12_5.context;
        this._NgControlStatus_12_7 = new import16.Wrapper_NgControlStatus(this._NgControl_12_6);
        this._text_13 = this.renderer.createText(this._el_7, '\n    ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_7, 'label', new import3.InlineArray2(2, 'for', 'description'), null);
        this._text_15 = this.renderer.createText(this._el_14, 'Description', null);
        this._text_16 = this.renderer.createText(this._el_7, '\n    ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_7, 'textarea', new import3.InlineArray16(10, 'class', 'form-control', 'formControlName', 'description', 'id', 'description', 'placeholder', 'work description here', 'rows', '4'), null);
        this._DefaultValueAccessor_17_3 = new import17.Wrapper_DefaultValueAccessor(this.renderer, new import19.ElementRef(this._el_17));
        this._NG_VALUE_ACCESSOR_17_4 = [this._DefaultValueAccessor_17_3.context];
        this._FormControlName_17_5 = new import18.Wrapper_FormControlName(this._ControlContainer_5_4, null, null, this._NG_VALUE_ACCESSOR_17_4);
        this._NgControl_17_6 = this._FormControlName_17_5.context;
        this._NgControlStatus_17_7 = new import16.Wrapper_NgControlStatus(this._NgControl_17_6);
        this._text_18 = this.renderer.createText(this._el_7, '\n    ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_7, 'label', new import3.InlineArray2(2, 'for', 'url'), null);
        this._text_20 = this.renderer.createText(this._el_19, 'Link', null);
        this._text_21 = this.renderer.createText(this._el_7, '\n    ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_7, 'input', new import3.InlineArray16(10, 'class', 'form-control', 'formControlName', 'url', 'id', 'url', 'placeholder', 'work url here', 'type', 'text'), null);
        this._DefaultValueAccessor_22_3 = new import17.Wrapper_DefaultValueAccessor(this.renderer, new import19.ElementRef(this._el_22));
        this._NG_VALUE_ACCESSOR_22_4 = [this._DefaultValueAccessor_22_3.context];
        this._FormControlName_22_5 = new import18.Wrapper_FormControlName(this._ControlContainer_5_4, null, null, this._NG_VALUE_ACCESSOR_22_4);
        this._NgControl_22_6 = this._FormControlName_22_5.context;
        this._NgControlStatus_22_7 = new import16.Wrapper_NgControlStatus(this._NgControl_22_6);
        this._text_23 = this.renderer.createText(this._el_7, '\n    ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_7, 'label', new import3.InlineArray2(2, 'for', 'video'), null);
        this._text_25 = this.renderer.createText(this._el_24, 'Youtube Link', null);
        this._text_26 = this.renderer.createText(this._el_7, '\n    ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_7, 'input', new import3.InlineArray16(10, 'class', 'form-control', 'formControlName', 'video', 'id', 'video', 'placeholder', 'work video here', 'type', 'text'), null);
        this._DefaultValueAccessor_27_3 = new import17.Wrapper_DefaultValueAccessor(this.renderer, new import19.ElementRef(this._el_27));
        this._NG_VALUE_ACCESSOR_27_4 = [this._DefaultValueAccessor_27_3.context];
        this._FormControlName_27_5 = new import18.Wrapper_FormControlName(this._ControlContainer_5_4, null, null, this._NG_VALUE_ACCESSOR_27_4);
        this._NgControl_27_6 = this._FormControlName_27_5.context;
        this._NgControlStatus_27_7 = new import16.Wrapper_NgControlStatus(this._NgControl_27_6);
        this._text_28 = this.renderer.createText(this._el_7, '\n    ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_7, 'button', new import3.InlineArray4(4, 'class', 'btn btn-lg btn-outline-primary', 'type', 'submit'), null);
        this._text_30 = this.renderer.createText(this._el_29, 'Submit', null);
        this._text_31 = this.renderer.createText(this._el_7, '\n  ', null);
        this._text_32 = this.renderer.createText(this._el_5, '\n', null);
        this._text_33 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_5, new import3.InlineArray8(6, 'ngSubmit', null, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_5));
        this._FormGroupDirective_5_3.subscribe(this, this.eventHandler(this.handleEvent_5), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_12, new import3.InlineArray4(4, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_12));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_17, new import3.InlineArray4(4, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_17));
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_22, new import3.InlineArray4(4, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_22));
        var disposable_4 = import3.subscribeToRenderElement(this, this._el_27, new import3.InlineArray4(4, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_27));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._text_31,
            this._text_32,
            this._text_33
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4
        ]);
        return null;
    };
    View_WorkDetailsComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import20.DefaultValueAccessor) && (12 === requestNodeIndex))) {
            return this._DefaultValueAccessor_12_3.context;
        }
        if (((token === import21.NG_VALUE_ACCESSOR) && (12 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_12_4;
        }
        if (((token === import22.FormControlName) && (12 === requestNodeIndex))) {
            return this._FormControlName_12_5.context;
        }
        if (((token === import23.NgControl) && (12 === requestNodeIndex))) {
            return this._NgControl_12_6;
        }
        if (((token === import24.NgControlStatus) && (12 === requestNodeIndex))) {
            return this._NgControlStatus_12_7.context;
        }
        if (((token === import20.DefaultValueAccessor) && (17 === requestNodeIndex))) {
            return this._DefaultValueAccessor_17_3.context;
        }
        if (((token === import21.NG_VALUE_ACCESSOR) && (17 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_17_4;
        }
        if (((token === import22.FormControlName) && (17 === requestNodeIndex))) {
            return this._FormControlName_17_5.context;
        }
        if (((token === import23.NgControl) && (17 === requestNodeIndex))) {
            return this._NgControl_17_6;
        }
        if (((token === import24.NgControlStatus) && (17 === requestNodeIndex))) {
            return this._NgControlStatus_17_7.context;
        }
        if (((token === import20.DefaultValueAccessor) && (22 === requestNodeIndex))) {
            return this._DefaultValueAccessor_22_3.context;
        }
        if (((token === import21.NG_VALUE_ACCESSOR) && (22 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_22_4;
        }
        if (((token === import22.FormControlName) && (22 === requestNodeIndex))) {
            return this._FormControlName_22_5.context;
        }
        if (((token === import23.NgControl) && (22 === requestNodeIndex))) {
            return this._NgControl_22_6;
        }
        if (((token === import24.NgControlStatus) && (22 === requestNodeIndex))) {
            return this._NgControlStatus_22_7.context;
        }
        if (((token === import20.DefaultValueAccessor) && (27 === requestNodeIndex))) {
            return this._DefaultValueAccessor_27_3.context;
        }
        if (((token === import21.NG_VALUE_ACCESSOR) && (27 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_27_4;
        }
        if (((token === import22.FormControlName) && (27 === requestNodeIndex))) {
            return this._FormControlName_27_5.context;
        }
        if (((token === import23.NgControl) && (27 === requestNodeIndex))) {
            return this._NgControl_27_6;
        }
        if (((token === import24.NgControlStatus) && (27 === requestNodeIndex))) {
            return this._NgControlStatus_27_7.context;
        }
        if (((token === import25.FormGroupDirective) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._FormGroupDirective_5_3.context;
        }
        if (((token === import26.ControlContainer) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._ControlContainer_5_4;
        }
        if (((token === import24.NgControlStatusGroup) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._NgControlStatusGroup_5_5.context;
        }
        return notFoundResult;
    };
    View_WorkDetailsComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_5_0_0 = this.parentView.context.worksForm;
        this._FormGroupDirective_5_3.check_form(currVal_5_0_0, throwOnChange, false);
        this._FormGroupDirective_5_3.ngDoCheck(this, this._el_5, throwOnChange);
        this._NgControlStatusGroup_5_5.ngDoCheck(this, this._el_5, throwOnChange);
        this._DefaultValueAccessor_12_3.ngDoCheck(this, this._el_12, throwOnChange);
        var currVal_12_1_0 = 'title';
        this._FormControlName_12_5.check_name(currVal_12_1_0, throwOnChange, false);
        this._FormControlName_12_5.ngDoCheck(this, this._el_12, throwOnChange);
        this._NgControlStatus_12_7.ngDoCheck(this, this._el_12, throwOnChange);
        this._DefaultValueAccessor_17_3.ngDoCheck(this, this._el_17, throwOnChange);
        var currVal_17_1_0 = 'description';
        this._FormControlName_17_5.check_name(currVal_17_1_0, throwOnChange, false);
        this._FormControlName_17_5.ngDoCheck(this, this._el_17, throwOnChange);
        this._NgControlStatus_17_7.ngDoCheck(this, this._el_17, throwOnChange);
        this._DefaultValueAccessor_22_3.ngDoCheck(this, this._el_22, throwOnChange);
        var currVal_22_1_0 = 'url';
        this._FormControlName_22_5.check_name(currVal_22_1_0, throwOnChange, false);
        this._FormControlName_22_5.ngDoCheck(this, this._el_22, throwOnChange);
        this._NgControlStatus_22_7.ngDoCheck(this, this._el_22, throwOnChange);
        this._DefaultValueAccessor_27_3.ngDoCheck(this, this._el_27, throwOnChange);
        var currVal_27_1_0 = 'video';
        this._FormControlName_27_5.check_name(currVal_27_1_0, throwOnChange, false);
        this._FormControlName_27_5.ngDoCheck(this, this._el_27, throwOnChange);
        this._NgControlStatus_27_7.ngDoCheck(this, this._el_27, throwOnChange);
        var currVal_57 = import3.inlineInterpolate(1, '', this.parentView.context.user.firstName, '');
        if (import3.checkBinding(throwOnChange, this._expr_57, currVal_57)) {
            this.renderer.setText(this._text_3, currVal_57);
            this._expr_57 = currVal_57;
        }
        this._NgControlStatusGroup_5_5.checkHost(this, this, this._el_5, throwOnChange);
        this._NgControlStatus_12_7.checkHost(this, this, this._el_12, throwOnChange);
        this._NgControlStatus_17_7.checkHost(this, this, this._el_17, throwOnChange);
        this._NgControlStatus_22_7.checkHost(this, this, this._el_22, throwOnChange);
        this._NgControlStatus_27_7.checkHost(this, this, this._el_27, throwOnChange);
        var currVal_58 = !this.parentView.context.worksForm.valid;
        if (import3.checkBinding(throwOnChange, this._expr_58, currVal_58)) {
            this.renderer.setElementProperty(this._el_29, 'disabled', currVal_58);
            this._expr_58 = currVal_58;
        }
    };
    View_WorkDetailsComponent1.prototype.destroyInternal = function () {
        this._FormControlName_12_5.ngOnDestroy();
        this._FormControlName_17_5.ngOnDestroy();
        this._FormControlName_22_5.ngOnDestroy();
        this._FormControlName_27_5.ngOnDestroy();
        this._FormGroupDirective_5_3.ngOnDestroy();
    };
    View_WorkDetailsComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_WorkDetailsComponent1.prototype.handleEvent_5 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._FormGroupDirective_5_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngSubmit')) {
            var pd_sub_0 = (this.parentView.context.submitWork() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_WorkDetailsComponent1.prototype.handleEvent_12 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_12_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_WorkDetailsComponent1.prototype.handleEvent_17 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_17_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_WorkDetailsComponent1.prototype.handleEvent_22 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_22_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_WorkDetailsComponent1.prototype.handleEvent_27 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_27_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_WorkDetailsComponent1;
}(import1.AppView));
//# sourceMappingURL=work-details.component.ngfactory.js.map