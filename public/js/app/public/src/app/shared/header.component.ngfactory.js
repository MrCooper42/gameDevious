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
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import14 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import15 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '@angular/common/src/directives/ng_if';
import * as import19 from '@angular/common/src/directives/ng_class';
import * as import20 from '../../../../node_modules/@ng-bootstrap/ng-bootstrap/dropdown/dropdown.ngfactory';
import * as import21 from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config';
import * as import22 from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown';
export var Wrapper_HeaderComponent = (function () {
    function Wrapper_HeaderComponent(p0, p1) {
        this._changed = false;
        this.context = new import0.HeaderComponent(p0, p1);
    }
    Wrapper_HeaderComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_HeaderComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_HeaderComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_HeaderComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_HeaderComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_HeaderComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_HeaderComponent;
}());
var renderType_HeaderComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_HeaderComponent_Host0 = (function (_super) {
    __extends(View_HeaderComponent_Host0, _super);
    function View_HeaderComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_HeaderComponent_Host0, renderType_HeaderComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_HeaderComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'app-header', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_HeaderComponent0(this.viewUtils, this, 0, this._el_0);
        this._HeaderComponent_0_3 = new Wrapper_HeaderComponent(this.injectorGet(import8.AuthService, this.parentIndex), this.injectorGet(import9.Router, this.parentIndex));
        this.compView_0.create(this._HeaderComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._HeaderComponent_0_3.context);
    };
    View_HeaderComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.HeaderComponent) && (0 === requestNodeIndex))) {
            return this._HeaderComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_HeaderComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._HeaderComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_HeaderComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_HeaderComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_HeaderComponent_Host0;
}(import1.AppView));
export var HeaderComponentNgFactory = new import7.ComponentFactory('app-header', View_HeaderComponent_Host0, import0.HeaderComponent);
var styles_HeaderComponent = [import10.styles];
var renderType_HeaderComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_HeaderComponent, {});
export var View_HeaderComponent0 = (function (_super) {
    __extends(View_HeaderComponent0, _super);
    function View_HeaderComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_HeaderComponent0, renderType_HeaderComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._map_44 = import3.pureProxy1(function (p0) {
            return { in: p0 };
        });
    }
    View_HeaderComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'nav', new import3.InlineArray2(2, 'class', 'navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'button', new import3.InlineArray16(12, 'aria-controls', 'navbar-mobile-collapse', 'aria-expanded', 'false', 'class', 'navbar-toggler navbar-toggler-right', 'data-target', '#navbar-mobile-collapse', 'data-toggle', 'collapse', 'type', 'button'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n      ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'span', new import3.InlineArray2(2, 'class', 'navbar-toggler-icon'), null);
        this._text_5 = this.renderer.createText(this._el_2, '\n      ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_0, 'a', new import3.InlineArray4(4, 'class', 'navbar-brand', 'href', '/'), null);
        this._text_8 = this.renderer.createText(this._el_7, 'GameDev_io.us', null);
        this._text_9 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray4(4, 'class', 'collapse navbar-collapse', 'id', 'navbar-mobile-collapse'), null);
        this._NgClass_10_3 = new import11.Wrapper_NgClass(this.parentView.injectorGet(import14.IterableDiffers, this.parentIndex), this.parentView.injectorGet(import15.KeyValueDiffers, this.parentIndex), new import16.ElementRef(this._el_10), this.renderer);
        this._text_11 = this.renderer.createText(this._el_10, '\n      ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'ul', new import3.InlineArray2(2, 'class', 'nav navbar-nav'), null);
        this._text_13 = this.renderer.createText(this._el_12, '\n        ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_12, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_14, 'a', new import3.InlineArray2(2, 'href', '/news'), null);
        this._text_16 = this.renderer.createText(this._el_15, 'News ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_15, 'span', new import3.InlineArray2(2, 'class', 'sr-only'), null);
        this._text_18 = this.renderer.createText(this._el_17, '(current)', null);
        this._text_19 = this.renderer.createText(this._el_12, '\n        ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_12, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_20, 'a', new import3.InlineArray2(2, 'href', '/games'), null);
        this._text_22 = this.renderer.createText(this._el_21, 'Games', null);
        this._text_23 = this.renderer.createText(this._el_12, '\n      ', null);
        this._text_24 = this.renderer.createText(this._el_10, '\n      ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_10, 'ul', new import3.InlineArray2(2, 'class', 'nav navbar-nav navbar-right'), null);
        this._text_26 = this.renderer.createText(this._el_25, '\n        ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_25, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._anchor_28 = this.renderer.createTemplateAnchor(this._el_27, null);
        this._vc_28 = new import12.ViewContainer(28, 27, this, this._anchor_28);
        this._TemplateRef_28_5 = new import17.TemplateRef_(this, 28, this._anchor_28);
        this._NgIf_28_6 = new import13.Wrapper_NgIf(this._vc_28.vcRef, this._TemplateRef_28_5);
        this._text_29 = this.renderer.createText(this._el_25, '\n        ', null);
        this._anchor_30 = this.renderer.createTemplateAnchor(this._el_25, null);
        this._vc_30 = new import12.ViewContainer(30, 25, this, this._anchor_30);
        this._TemplateRef_30_5 = new import17.TemplateRef_(this, 30, this._anchor_30);
        this._NgIf_30_6 = new import13.Wrapper_NgIf(this._vc_30.vcRef, this._TemplateRef_30_5);
        this._text_31 = this.renderer.createText(this._el_25, '\n      ', null);
        this._text_32 = this.renderer.createText(this._el_10, '\n    ', null);
        this._text_33 = this.renderer.createText(this._el_0, '\n', null);
        this._text_34 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._text_35 = this.renderer.createText(parentRenderNode, '\n\n    ', null);
        this._text_36 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._anchor_28,
            this._text_29,
            this._anchor_30,
            this._text_31,
            this._text_32,
            this._text_33,
            this._text_34,
            this._text_35,
            this._text_36
        ]), [disposable_0]);
        return null;
    };
    View_HeaderComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.TemplateRef) && (28 === requestNodeIndex))) {
            return this._TemplateRef_28_5;
        }
        if (((token === import18.NgIf) && (28 === requestNodeIndex))) {
            return this._NgIf_28_6.context;
        }
        if (((token === import17.TemplateRef) && (30 === requestNodeIndex))) {
            return this._TemplateRef_30_5;
        }
        if (((token === import18.NgIf) && (30 === requestNodeIndex))) {
            return this._NgIf_30_6.context;
        }
        if (((token === import19.NgClass) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._NgClass_10_3.context;
        }
        return notFoundResult;
    };
    View_HeaderComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_10_0_0 = 'collapse navbar-collapse';
        this._NgClass_10_3.check_klass(currVal_10_0_0, throwOnChange, false);
        var currVal_10_0_1 = this._map_44(this.context.isIn);
        this._NgClass_10_3.check_ngClass(currVal_10_0_1, throwOnChange, false);
        this._NgClass_10_3.ngDoCheck(this, this._el_10, throwOnChange);
        var currVal_28_0_0 = !this.context.belongsToUser();
        this._NgIf_28_6.check_ngIf(currVal_28_0_0, throwOnChange, false);
        this._NgIf_28_6.ngDoCheck(this, this._anchor_28, throwOnChange);
        var currVal_30_0_0 = this.context.belongsToUser();
        this._NgIf_30_6.check_ngIf(currVal_30_0_0, throwOnChange, false);
        this._NgIf_30_6.ngDoCheck(this, this._anchor_30, throwOnChange);
        this._vc_28.detectChangesInNestedViews(throwOnChange);
        this._vc_30.detectChangesInNestedViews(throwOnChange);
    };
    View_HeaderComponent0.prototype.destroyInternal = function () {
        this._vc_28.destroyNestedViews();
        this._vc_30.destroyNestedViews();
    };
    View_HeaderComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 28)) {
            return new View_HeaderComponent1(this.viewUtils, this, 28, this._anchor_28, this._vc_28);
        }
        if ((nodeIndex == 30)) {
            return new View_HeaderComponent2(this.viewUtils, this, 30, this._anchor_30, this._vc_30);
        }
        return null;
    };
    View_HeaderComponent0.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.toggleState() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_HeaderComponent0;
}(import1.AppView));
var View_HeaderComponent1 = (function (_super) {
    __extends(View_HeaderComponent1, _super);
    function View_HeaderComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_HeaderComponent1, renderType_HeaderComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_2 = import6.UNINITIALIZED;
    }
    View_HeaderComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', new import3.InlineArray2(2, 'href', '/login'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_HeaderComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = import3.inlineInterpolate(1, 'Login ', this.parentView.context.belongsToUser(), '');
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_HeaderComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_HeaderComponent1;
}(import1.AppView));
var View_HeaderComponent2 = (function (_super) {
    __extends(View_HeaderComponent2, _super);
    function View_HeaderComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_HeaderComponent2, renderType_HeaderComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_HeaderComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', new import3.InlineArray4(4, 'class', 'dropdown', 'ngbDropdown', ''), null);
        this._NgbDropdown_0_3 = new import20.Wrapper_NgbDropdown(this.parentView.parentView.injectorGet(import21.NgbDropdownConfig, this.parentView.parentIndex));
        this._text_1 = this.renderer.createText(this._el_0, '\n          ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'a', new import3.InlineArray16(12, 'aria-expanded', 'false', 'aria-haspopup', 'true', 'class', 'dropdown-toggle dropdown-toggle', 'data-toggle', 'dropdown', 'ngbDropdownToggle', '', 'role', 'button'), null);
        this._NgbDropdownToggle_2_3 = new import20.Wrapper_NgbDropdownToggle(this._NgbDropdown_0_3.context, new import16.ElementRef(this._el_2));
        this._text_3 = this.renderer.createText(this._el_2, 'Profile ', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n          ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'ul', new import3.InlineArray2(2, 'class', 'dropdown-menu'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_7, 'a', new import3.InlineArray2(2, 'href', '/profile'), null);
        this._text_9 = this.renderer.createText(this._el_8, 'Profile', null);
        this._text_10 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_5, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_11, 'a', new import3.InlineArray4(4, 'class', 'nav-link disabled', 'href', '#'), null);
        this._text_13 = this.renderer.createText(this._el_12, 'Saved Jobs', null);
        this._text_14 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_5, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_15, 'a', new import3.InlineArray4(4, 'class', 'nav-link disabled', 'href', '#'), null);
        this._text_17 = this.renderer.createText(this._el_16, 'Saved Blogs', null);
        this._text_18 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_5, 'li', new import3.InlineArray4(4, 'class', 'divider', 'role', 'separator'), null);
        this._text_20 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_5, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_21, 'a', new import3.InlineArray4(4, 'class', 'nav-link disabled', 'href', '/upload'), null);
        this._text_23 = this.renderer.createText(this._el_22, 'Submit New', null);
        this._text_24 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_5, 'li', new import3.InlineArray4(4, 'class', 'divider', 'role', 'separator'), null);
        this._text_26 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_5, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_27, 'a', new import3.InlineArray2(2, 'href', '/login'), null);
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
    };
    View_HeaderComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import22.NgbDropdownToggle) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._NgbDropdownToggle_2_3.context;
        }
        if (((token === import22.NgbDropdown) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 31)))) {
            return this._NgbDropdown_0_3.context;
        }
        return notFoundResult;
    };
    View_HeaderComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        this._NgbDropdown_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this._NgbDropdownToggle_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        this._NgbDropdown_0_3.checkHost(this, this, this._el_0, throwOnChange);
        this._NgbDropdownToggle_2_3.checkHost(this, this, this._el_2, throwOnChange);
    };
    View_HeaderComponent2.prototype.destroyInternal = function () {
        this._NgbDropdown_0_3.ngOnDestroy();
    };
    View_HeaderComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_HeaderComponent2.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgbDropdown_0_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_HeaderComponent2.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgbDropdownToggle_2_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_HeaderComponent2.prototype.handleEvent_28 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.onLogout() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_HeaderComponent2;
}(import1.AppView));
//# sourceMappingURL=header.component.ngfactory.js.map