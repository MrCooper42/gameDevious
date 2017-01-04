/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
import * as import0 from './games.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from './games.service';
import * as import9 from './games.component.css.shim';
import * as import10 from '../../../../node_modules/@angular/forms/src/directives/reactive_directives/form_group_directive.ngfactory';
import * as import11 from '../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import12 from '../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import13 from '../../../../node_modules/@angular/forms/src/directives/reactive_directives/form_control_name.ngfactory';
import * as import14 from '@angular/core/src/linker/element_ref';
import * as import15 from '@angular/forms/src/directives/default_value_accessor';
import * as import16 from '@angular/forms/src/directives/control_value_accessor';
import * as import17 from '@angular/forms/src/directives/reactive_directives/form_control_name';
import * as import18 from '@angular/forms/src/directives/ng_control';
import * as import19 from '@angular/forms/src/directives/ng_control_status';
import * as import20 from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import * as import21 from '@angular/forms/src/directives/control_container';
export class Wrapper_GamesComponent {
    constructor(p0) {
        this._changed = false;
        this.context = new import0.GamesComponent(p0);
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
    }
    ngDoCheck(view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
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
var renderType_GamesComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_GamesComponent_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_GamesComponent_Host0, renderType_GamesComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'app-games', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_GamesComponent0(this.viewUtils, this, 0, this._el_0);
        this._GamesComponent_0_3 = new Wrapper_GamesComponent(this.injectorGet(import8.GamesService, this.parentIndex));
        this.compView_0.create(this._GamesComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._GamesComponent_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.GamesComponent) && (0 === requestNodeIndex))) {
            return this._GamesComponent_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._GamesComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const GamesComponentNgFactory = new import7.ComponentFactory('app-games', View_GamesComponent_Host0, import0.GamesComponent);
const styles_GamesComponent = [import9.styles];
var renderType_GamesComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_GamesComponent, {});
export class View_GamesComponent0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_GamesComponent0, renderType_GamesComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._expr_22 = import6.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'form', import3.EMPTY_INLINE_ARRAY, null);
        this._FormGroupDirective_0_3 = new import10.Wrapper_FormGroupDirective(null, null);
        this._ControlContainer_0_4 = this._FormGroupDirective_0_3.context;
        this._NgControlStatusGroup_0_5 = new import11.Wrapper_NgControlStatusGroup(this._ControlContainer_0_4);
        this._text_1 = this.renderer.createText(this._el_0, '\n', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n      ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'label', new import3.InlineArray2(2, 'for', 'title'), null);
        this._text_5 = this.renderer.createText(this._el_4, 'Search:', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n      ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_2, 'input', new import3.InlineArray16(10, 'class', 'form-control', 'formControlName', 'game', 'id', 'game', 'placeholder', 'search for a game', 'type', 'text'), null);
        this._DefaultValueAccessor_7_3 = new import12.Wrapper_DefaultValueAccessor(this.renderer, new import14.ElementRef(this._el_7));
        this._NG_VALUE_ACCESSOR_7_4 = [this._DefaultValueAccessor_7_3.context];
        this._FormControlName_7_5 = new import13.Wrapper_FormControlName(this._ControlContainer_0_4, null, null, this._NG_VALUE_ACCESSOR_7_4);
        this._NgControl_7_6 = this._FormControlName_7_5.context;
        this._NgControlStatus_7_7 = new import11.Wrapper_NgControlStatus(this._NgControl_7_6);
        this._text_8 = this.renderer.createText(this._el_2, '\n  ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_2, 'button', new import3.InlineArray4(4, 'class', 'btn btn-lg btn-outline-primary', 'type', 'submit'), null);
        this._text_10 = this.renderer.createText(this._el_9, 'Submit', null);
        this._text_11 = this.renderer.createText(this._el_2, '\n        ', null);
        this._text_12 = this.renderer.createText(this._el_0, '\n', null);
        this._text_13 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray8(6, 'ngSubmit', null, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_0));
        this._FormGroupDirective_0_3.subscribe(this, this.eventHandler(this.handleEvent_0), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_7, new import3.InlineArray4(4, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_7));
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
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._text_13
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import15.DefaultValueAccessor) && (7 === requestNodeIndex))) {
            return this._DefaultValueAccessor_7_3.context;
        }
        if (((token === import16.NG_VALUE_ACCESSOR) && (7 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_7_4;
        }
        if (((token === import17.FormControlName) && (7 === requestNodeIndex))) {
            return this._FormControlName_7_5.context;
        }
        if (((token === import18.NgControl) && (7 === requestNodeIndex))) {
            return this._NgControl_7_6;
        }
        if (((token === import19.NgControlStatus) && (7 === requestNodeIndex))) {
            return this._NgControlStatus_7_7.context;
        }
        if (((token === import20.FormGroupDirective) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._FormGroupDirective_0_3.context;
        }
        if (((token === import21.ControlContainer) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._ControlContainer_0_4;
        }
        if (((token === import19.NgControlStatusGroup) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._NgControlStatusGroup_0_5.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_0_0_0 = this.context.searchGameForm;
        this._FormGroupDirective_0_3.check_form(currVal_0_0_0, throwOnChange, false);
        this._FormGroupDirective_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this._NgControlStatusGroup_0_5.ngDoCheck(this, this._el_0, throwOnChange);
        this._DefaultValueAccessor_7_3.ngDoCheck(this, this._el_7, throwOnChange);
        const currVal_7_1_0 = 'game';
        this._FormControlName_7_5.check_name(currVal_7_1_0, throwOnChange, false);
        this._FormControlName_7_5.ngDoCheck(this, this._el_7, throwOnChange);
        this._NgControlStatus_7_7.ngDoCheck(this, this._el_7, throwOnChange);
        this._NgControlStatusGroup_0_5.checkHost(this, this, this._el_0, throwOnChange);
        this._NgControlStatus_7_7.checkHost(this, this, this._el_7, throwOnChange);
        const currVal_22 = !this.context.searchGameForm.valid;
        if (import3.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this.renderer.setElementProperty(this._el_9, 'disabled', currVal_22);
            this._expr_22 = currVal_22;
        }
    }
    destroyInternal() {
        this._FormControlName_7_5.ngOnDestroy();
        this._FormGroupDirective_0_3.ngOnDestroy();
    }
    handleEvent_0(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._FormGroupDirective_0_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngSubmit')) {
            const pd_sub_0 = (this.context.seachGame() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_7(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_7_3.handleEvent(eventName, $event) && result);
        return result;
    }
}
//# sourceMappingURL=games.component.ngfactory.js.map