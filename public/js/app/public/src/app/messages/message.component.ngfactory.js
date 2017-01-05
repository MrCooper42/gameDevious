/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
import * as import0 from './message.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from './message.service';
import * as import9 from '../../../../node_modules/@angular/common/src/directives/ng_style.ngfactory';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import12 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import13 from '@angular/core/src/linker/element_ref';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/common/src/directives/ng_if';
import * as import16 from '@angular/common/src/directives/ng_style';
export class Wrapper_MessageComponent {
    constructor(p0) {
        this._changed = false;
        this.context = new import0.MessageComponent(p0);
        this._expr_0 = import1.UNINITIALIZED;
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
    }
    check_message(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.message = currValue;
            this._expr_0 = currValue;
        }
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
var renderType_MessageComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
class View_MessageComponent_Host0 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_MessageComponent_Host0, renderType_MessageComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'app-message', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_MessageComponent0(this.viewUtils, this, 0, this._el_0);
        this._MessageComponent_0_3 = new Wrapper_MessageComponent(this.injectorGet(import8.MessageService, this.parentIndex));
        this.compView_0.create(this._MessageComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._MessageComponent_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.MessageComponent) && (0 === requestNodeIndex))) {
            return this._MessageComponent_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._MessageComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const MessageComponentNgFactory = new import7.ComponentFactory('app-message', View_MessageComponent_Host0, import0.MessageComponent);
const styles_MessageComponent = ['.author[_ngcontent-%COMP%] {\n      display: inline-block;\n      font-style: italic;\n      font-size: 12px;\n      width: 80%;\n    }\n    .config[_ngcontent-%COMP%] {\n      display: inline-block;\n      text-align: right;\n      font-size: 12px;\n      width: 19%;\n    }'];
var renderType_MessageComponent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.Emulated, styles_MessageComponent, {});
export class View_MessageComponent0 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_MessageComponent0, renderType_MessageComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways);
        this._map_18 = import3.pureProxy1((p0) => {
            return { backgroundColor: p0 };
        });
        this._expr_19 = import1.UNINITIALIZED;
        this._expr_20 = import1.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'article', new import3.InlineArray2(2, 'class', 'panel panel-default'), null);
        this._NgStyle_0_3 = new import9.Wrapper_NgStyle(this.parentView.injectorGet(import12.KeyValueDiffers, this.parentIndex), new import13.ElementRef(this._el_0), this.renderer);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'footer', new import3.InlineArray2(2, 'class', 'panel-footer'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n        ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'div', new import3.InlineArray2(2, 'class', 'author'), null);
        this._text_8 = this.renderer.createText(this._el_7, '', null);
        this._text_9 = this.renderer.createText(this._el_5, '\n        ', null);
        this._anchor_10 = this.renderer.createTemplateAnchor(this._el_5, null);
        this._vc_10 = new import10.ViewContainer(10, 5, this, this._anchor_10);
        this._TemplateRef_10_5 = new import14.TemplateRef_(this, 10, this._anchor_10);
        this._NgIf_10_6 = new import11.Wrapper_NgIf(this._vc_10.vcRef, this._TemplateRef_10_5);
        this._text_11 = this.renderer.createText(this._el_5, '\n    ', null);
        this._text_12 = this.renderer.createText(this._el_0, '\n', null);
        this._text_13 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'mouseenter', null), this.eventHandler(this.handleEvent_0));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._anchor_10,
            this._text_11,
            this._text_12,
            this._text_13
        ]), [disposable_0]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (10 === requestNodeIndex))) {
            return this._TemplateRef_10_5;
        }
        if (((token === import15.NgIf) && (10 === requestNodeIndex))) {
            return this._NgIf_10_6.context;
        }
        if (((token === import16.NgStyle) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._NgStyle_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_0_0_0 = this._map_18(this.context.color);
        this._NgStyle_0_3.check_ngStyle(currVal_0_0_0, throwOnChange, false);
        this._NgStyle_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        const currVal_10_0_0 = this.context.belongsToUser();
        this._NgIf_10_6.check_ngIf(currVal_10_0_0, throwOnChange, false);
        this._NgIf_10_6.ngDoCheck(this, this._anchor_10, throwOnChange);
        this._vc_10.detectChangesInNestedViews(throwOnChange);
        const currVal_19 = import3.inlineInterpolate(1, '\n        ', this.context.message.content, '\n    ');
        if (import3.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setText(this._text_3, currVal_19);
            this._expr_19 = currVal_19;
        }
        const currVal_20 = import3.inlineInterpolate(1, '\n            ', this.context.message.username, '\n        ');
        if (import3.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this.renderer.setText(this._text_8, currVal_20);
            this._expr_20 = currVal_20;
        }
    }
    destroyInternal() {
        this._vc_10.destroyNestedViews();
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 10)) {
            return new View_MessageComponent1(this.viewUtils, this, 10, this._anchor_10, this._vc_10);
        }
        return null;
    }
    handleEvent_0(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'mouseenter')) {
            const pd_sub_0 = ((this.context.color = 'green') !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
class View_MessageComponent1 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_MessageComponent1, renderType_MessageComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'config'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'Edit', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, 'Delete', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_5, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_5));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
    handleEvent_2(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.parentView.context.onEdit() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_5(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.parentView.context.onDelete() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
//# sourceMappingURL=message.component.ngfactory.js.map