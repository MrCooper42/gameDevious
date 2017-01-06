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
import * as import0 from './files.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from './files.component.css.shim';
export var Wrapper_FilesComponent = (function () {
    function Wrapper_FilesComponent() {
        this._changed = false;
        this.context = new import0.FilesComponent();
    }
    Wrapper_FilesComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_FilesComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_FilesComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_FilesComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_FilesComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_FilesComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_FilesComponent;
}());
var renderType_FilesComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_FilesComponent_Host0 = (function (_super) {
    __extends(View_FilesComponent_Host0, _super);
    function View_FilesComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_FilesComponent_Host0, renderType_FilesComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_FilesComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'app-files', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_FilesComponent0(this.viewUtils, this, 0, this._el_0);
        this._FilesComponent_0_3 = new Wrapper_FilesComponent();
        this.compView_0.create(this._FilesComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._FilesComponent_0_3.context);
    };
    View_FilesComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.FilesComponent) && (0 === requestNodeIndex))) {
            return this._FilesComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_FilesComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._FilesComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_FilesComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_FilesComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_FilesComponent_Host0;
}(import1.AppView));
export var FilesComponentNgFactory = new import7.ComponentFactory('app-files', View_FilesComponent_Host0, import0.FilesComponent);
var styles_FilesComponent = [import8.styles];
var renderType_FilesComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_FilesComponent, {});
export var View_FilesComponent0 = (function (_super) {
    __extends(View_FilesComponent0, _super);
    function View_FilesComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_FilesComponent0, renderType_FilesComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_FilesComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  files works!\n', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2
        ]), null);
        return null;
    };
    return View_FilesComponent0;
}(import1.AppView));
//# sourceMappingURL=files.component.ngfactory.js.map