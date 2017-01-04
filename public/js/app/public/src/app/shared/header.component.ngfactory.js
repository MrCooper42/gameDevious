/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
import * as import0 from './header.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../auth/auth.service';
import * as import9 from '@angular/router/src/router';
import * as import10 from './header.component.css.shim';
import * as import11 from '../../../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import12 from '../../../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import13 from '../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import14 from '@angular/core/src/linker/view_container';
import * as import15 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import16 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import17 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from '@angular/core/src/linker/template_ref';
import * as import20 from '@angular/forms/src/directives/ng_form';
import * as import21 from '@angular/forms/src/directives/control_container';
import * as import22 from '@angular/forms/src/directives/ng_control_status';
import * as import23 from '@angular/common/src/directives/ng_if';
import * as import24 from '@angular/common/src/directives/ng_class';
import * as import25 from '../../../../node_modules/@ng-bootstrap/ng-bootstrap/dropdown/dropdown.ngfactory';
import * as import26 from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config';
import * as import27 from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown';
export class Wrapper_HeaderComponent {
    constructor(p0, p1) {
        this._changed = false;
        this.context = new import0.HeaderComponent(p0, p1);
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
    }
    ngDoCheck(view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    }
    checkHost(view, componentView, el, throwOnChange) {
    }
    handleEvent(eventName, $event) {
        var result = true;
        return result;
    }
    subscribe(view, _eventHandler) {
        this._eventHandler = _eventHandler;
    }
}
var renderType_HeaderComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_HeaderComponent_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_HeaderComponent_Host0, renderType_HeaderComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'app-header', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_HeaderComponent0(this.viewUtils, this, 0, this._el_0);
        this._HeaderComponent_0_3 = new Wrapper_HeaderComponent(this.injectorGet(import8.AuthService, this.parentIndex), this.injectorGet(import9.Router, this.parentIndex));
        this.compView_0.create(this._HeaderComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._HeaderComponent_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.HeaderComponent) && (0 === requestNodeIndex))) {
            return this._HeaderComponent_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._HeaderComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const HeaderComponentNgFactory = new import7.ComponentFactory('app-header', View_HeaderComponent_Host0, import0.HeaderComponent);
const styles_HeaderComponent = [import10.styles];
var renderType_HeaderComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_HeaderComponent, {});
export class View_HeaderComponent0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_HeaderComponent0, renderType_HeaderComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._map_70 = import3.pureProxy1((p0) => {
            return { in: p0 };
        });
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'nav', new import3.InlineArray2(2, 'class', 'navbar navbar-default'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'container-fluid'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'navbar-header'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'button', new import3.InlineArray16(10, 'aria-expanded', 'false', 'class', 'navbar-toggle collapsed', 'data-target', '#navbar-mobile-collapse', 'data-toggle', 'collapse', 'type', 'button'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n        ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'span', new import3.InlineArray2(2, 'class', 'sr-only'), null);
        this._text_9 = this.renderer.createText(this._el_8, 'Toggle navigation', null);
        this._text_10 = this.renderer.createText(this._el_6, '\n        ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_6, 'span', new import3.InlineArray2(2, 'class', 'icon-bar'), null);
        this._text_12 = this.renderer.createText(this._el_6, '\n        ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_6, 'span', new import3.InlineArray2(2, 'class', 'icon-bar'), null);
        this._text_14 = this.renderer.createText(this._el_6, '\n        ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_6, 'span', new import3.InlineArray2(2, 'class', 'icon-bar'), null);
        this._text_16 = this.renderer.createText(this._el_6, '\n      ', null);
        this._text_17 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_4, 'a', new import3.InlineArray4(4, 'class', 'navbar-brand', 'href', '/'), null);
        this._text_19 = this.renderer.createText(this._el_18, 'GameDev_io.us', null);
        this._text_20 = this.renderer.createText(this._el_4, '\n    ', null);
        this._text_21 = this.renderer.createText(this._el_2, '\n\n    ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray4(4, 'class', 'collapse navbar-collapse', 'id', 'navbar-mobile-collapse'), null);
        this._NgClass_22_3 = new import11.Wrapper_NgClass(this.parentView.injectorGet(import16.IterableDiffers, this.parentIndex), this.parentView.injectorGet(import17.KeyValueDiffers, this.parentIndex), new import18.ElementRef(this._el_22), this.renderer);
        this._text_23 = this.renderer.createText(this._el_22, '\n      ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_22, 'ul', new import3.InlineArray2(2, 'class', 'nav navbar-nav'), null);
        this._text_25 = this.renderer.createText(this._el_24, '\n        ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_24, 'li', new import3.InlineArray2(2, 'class', 'active'), null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_26, 'a', new import3.InlineArray2(2, 'href', '/news'), null);
        this._text_28 = this.renderer.createText(this._el_27, 'News ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_27, 'span', new import3.InlineArray2(2, 'class', 'sr-only'), null);
        this._text_30 = this.renderer.createText(this._el_29, '(current)', null);
        this._text_31 = this.renderer.createText(this._el_24, '\n        ', null);
        this._el_32 = import3.createRenderElement(this.renderer, this._el_24, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_33 = import3.createRenderElement(this.renderer, this._el_32, 'a', new import3.InlineArray2(2, 'href', '/games'), null);
        this._text_34 = this.renderer.createText(this._el_33, 'Games', null);
        this._text_35 = this.renderer.createText(this._el_24, '\n        ', null);
        this._text_36 = this.renderer.createText(this._el_24, '\n      ', null);
        this._text_37 = this.renderer.createText(this._el_22, '\n      ', null);
        this._el_38 = import3.createRenderElement(this.renderer, this._el_22, 'form', new import3.InlineArray2(2, 'class', 'navbar-form navbar-left'), null);
        this._NgForm_38_3 = new import12.Wrapper_NgForm(null, null);
        this._ControlContainer_38_4 = this._NgForm_38_3.context;
        this._NgControlStatusGroup_38_5 = new import13.Wrapper_NgControlStatusGroup(this._ControlContainer_38_4);
        this._text_39 = this.renderer.createText(this._el_38, '\n        ', null);
        this._el_40 = import3.createRenderElement(this.renderer, this._el_38, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_41 = this.renderer.createText(this._el_40, '\n          ', null);
        this._el_42 = import3.createRenderElement(this.renderer, this._el_40, 'input', new import3.InlineArray8(6, 'class', 'form-control', 'placeholder', 'Search', 'type', 'text'), null);
        this._text_43 = this.renderer.createText(this._el_40, '\n        ', null);
        this._text_44 = this.renderer.createText(this._el_38, '\n        ', null);
        this._el_45 = import3.createRenderElement(this.renderer, this._el_38, 'button', new import3.InlineArray4(4, 'class', 'btn btn-default', 'type', 'submit'), null);
        this._text_46 = this.renderer.createText(this._el_45, 'Submit', null);
        this._text_47 = this.renderer.createText(this._el_38, '\n      ', null);
        this._text_48 = this.renderer.createText(this._el_22, '\n      ', null);
        this._el_49 = import3.createRenderElement(this.renderer, this._el_22, 'ul', new import3.InlineArray2(2, 'class', 'nav navbar-nav navbar-right'), null);
        this._text_50 = this.renderer.createText(this._el_49, '\n        ', null);
        this._el_51 = import3.createRenderElement(this.renderer, this._el_49, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._anchor_52 = this.renderer.createTemplateAnchor(this._el_51, null);
        this._vc_52 = new import14.ViewContainer(52, 51, this, this._anchor_52);
        this._TemplateRef_52_5 = new import19.TemplateRef_(this, 52, this._anchor_52);
        this._NgIf_52_6 = new import15.Wrapper_NgIf(this._vc_52.vcRef, this._TemplateRef_52_5);
        this._text_53 = this.renderer.createText(this._el_49, '\n        ', null);
        this._anchor_54 = this.renderer.createTemplateAnchor(this._el_49, null);
        this._vc_54 = new import14.ViewContainer(54, 49, this, this._anchor_54);
        this._TemplateRef_54_5 = new import19.TemplateRef_(this, 54, this._anchor_54);
        this._NgIf_54_6 = new import15.Wrapper_NgIf(this._vc_54.vcRef, this._TemplateRef_54_5);
        this._text_55 = this.renderer.createText(this._el_49, '\n      ', null);
        this._text_56 = this.renderer.createText(this._el_22, '\n    ', null);
        this._text_57 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_58 = this.renderer.createText(this._el_0, '\n', null);
        this._text_59 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_6, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_6));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_38, new import3.InlineArray4(4, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_38));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._el_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._text_31,
            this._el_32,
            this._el_33,
            this._text_34,
            this._text_35,
            this._text_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._el_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._text_44,
            this._el_45,
            this._text_46,
            this._text_47,
            this._text_48,
            this._el_49,
            this._text_50,
            this._el_51,
            this._anchor_52,
            this._text_53,
            this._anchor_54,
            this._text_55,
            this._text_56,
            this._text_57,
            this._text_58,
            this._text_59
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import20.NgForm) && ((38 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._NgForm_38_3.context;
        }
        if (((token === import21.ControlContainer) && ((38 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._ControlContainer_38_4;
        }
        if (((token === import22.NgControlStatusGroup) && ((38 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._NgControlStatusGroup_38_5.context;
        }
        if (((token === import19.TemplateRef) && (52 === requestNodeIndex))) {
            return this._TemplateRef_52_5;
        }
        if (((token === import23.NgIf) && (52 === requestNodeIndex))) {
            return this._NgIf_52_6.context;
        }
        if (((token === import19.TemplateRef) && (54 === requestNodeIndex))) {
            return this._TemplateRef_54_5;
        }
        if (((token === import23.NgIf) && (54 === requestNodeIndex))) {
            return this._NgIf_54_6.context;
        }
        if (((token === import24.NgClass) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 56)))) {
            return this._NgClass_22_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_22_0_0 = 'collapse navbar-collapse';
        this._NgClass_22_3.check_klass(currVal_22_0_0, throwOnChange, false);
        const currVal_22_0_1 = this._map_70(this.context.isIn);
        this._NgClass_22_3.check_ngClass(currVal_22_0_1, throwOnChange, false);
        this._NgClass_22_3.ngDoCheck(this, this._el_22, throwOnChange);
        this._NgForm_38_3.ngDoCheck(this, this._el_38, throwOnChange);
        this._NgControlStatusGroup_38_5.ngDoCheck(this, this._el_38, throwOnChange);
        const currVal_52_0_0 = !this.context.belongsToUser();
        this._NgIf_52_6.check_ngIf(currVal_52_0_0, throwOnChange, false);
        this._NgIf_52_6.ngDoCheck(this, this._anchor_52, throwOnChange);
        const currVal_54_0_0 = this.context.belongsToUser();
        this._NgIf_54_6.check_ngIf(currVal_54_0_0, throwOnChange, false);
        this._NgIf_54_6.ngDoCheck(this, this._anchor_54, throwOnChange);
        this._vc_52.detectChangesInNestedViews(throwOnChange);
        this._vc_54.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatusGroup_38_5.checkHost(this, this, this._el_38, throwOnChange);
    }
    destroyInternal() {
        this._vc_52.destroyNestedViews();
        this._vc_54.destroyNestedViews();
        this._NgForm_38_3.ngOnDestroy();
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 52)) {
            return new View_HeaderComponent1(this.viewUtils, this, 52, this._anchor_52, this._vc_52);
        }
        if ((nodeIndex == 54)) {
            return new View_HeaderComponent2(this.viewUtils, this, 54, this._anchor_54, this._vc_54);
        }
        return null;
    }
    handleEvent_6(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.context.toggleState() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_38(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_38_3.handleEvent(eventName, $event) && result);
        return result;
    }
}
class View_HeaderComponent1 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_HeaderComponent1, renderType_HeaderComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_2 = import6.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', new import3.InlineArray2(2, 'href', '/login'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_2 = import3.inlineInterpolate(1, 'Login ', this.parentView.context.belongsToUser(), '');
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
class View_HeaderComponent2 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_HeaderComponent2, renderType_HeaderComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', new import3.InlineArray4(4, 'class', 'dropdown', 'ngbDropdown', ''), null);
        this._NgbDropdown_0_3 = new import25.Wrapper_NgbDropdown(this.parentView.parentView.injectorGet(import26.NgbDropdownConfig, this.parentView.parentIndex));
        this._text_1 = this.renderer.createText(this._el_0, '\n          ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'a', new import3.InlineArray16(12, 'aria-expanded', 'false', 'aria-haspopup', 'true', 'class', 'dropdown-toggle dropdown-toggle', 'data-toggle', 'dropdown', 'ngbDropdownToggle', '', 'role', 'button'), null);
        this._NgbDropdownToggle_2_3 = new import25.Wrapper_NgbDropdownToggle(this._NgbDropdown_0_3.context, new import18.ElementRef(this._el_2));
        this._text_3 = this.renderer.createText(this._el_2, 'Profile ', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n          ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'ul', new import3.InlineArray2(2, 'class', 'dropdown-menu'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_7, 'a', new import3.InlineArray2(2, 'href', '/profile'), null);
        this._text_9 = this.renderer.createText(this._el_8, 'Profile', null);
        this._text_10 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_5, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_11, 'a', new import3.InlineArray2(2, 'href', '#'), null);
        this._text_13 = this.renderer.createText(this._el_12, 'Saved Jobs', null);
        this._text_14 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_5, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_15, 'a', new import3.InlineArray2(2, 'href', '#'), null);
        this._text_17 = this.renderer.createText(this._el_16, 'Saved Blogs', null);
        this._text_18 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_5, 'li', new import3.InlineArray4(4, 'class', 'divider', 'role', 'separator'), null);
        this._text_20 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_5, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_21, 'a', new import3.InlineArray2(2, 'href', '/upload'), null);
        this._text_23 = this.renderer.createText(this._el_22, 'Submit New', null);
        this._text_24 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_5, 'li', new import3.InlineArray4(4, 'class', 'divider', 'role', 'separator'), null);
        this._text_26 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_5, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_27, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_29 = this.renderer.createText(this._el_28, 'Logout', null);
        this._text_30 = this.renderer.createText(this._el_5, '\n          ', null);
        this._text_31 = this.renderer.createText(this._el_0, '\n        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray4(4, 'keyup.esc', null, 'click', 'document'), this.eventHandler(this.handleEvent_0));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_28, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_28));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._el_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._el_28,
            this._text_29,
            this._text_30,
            this._text_31
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import27.NgbDropdownToggle) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._NgbDropdownToggle_2_3.context;
        }
        if (((token === import27.NgbDropdown) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 31)))) {
            return this._NgbDropdown_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._NgbDropdown_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this._NgbDropdownToggle_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        this._NgbDropdown_0_3.checkHost(this, this, this._el_0, throwOnChange);
        this._NgbDropdownToggle_2_3.checkHost(this, this, this._el_2, throwOnChange);
    }
    destroyInternal() {
        this._NgbDropdown_0_3.ngOnDestroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
    handleEvent_0(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgbDropdown_0_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_2(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgbDropdownToggle_2_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_28(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.parentView.context.onLogout() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
//# sourceMappingURL=header.component.ngfactory.js.map