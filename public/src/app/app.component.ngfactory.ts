/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from './app.component.css.shim';
import * as import9 from './shared/header.component';
import * as import10 from './shared/header.component.ngfactory';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import13 from './errors/error.component';
import * as import14 from './errors/error.component.ngfactory';
import * as import15 from '../../../node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-container.ngfactory';
import * as import16 from './auth/auth.service';
import * as import17 from '@angular/router/src/router';
import * as import18 from '@angular/router/src/router_outlet_map';
import * as import19 from '@angular/core/src/linker/component_factory_resolver';
import * as import20 from './errors/error.service';
import * as import21 from '@angular/core/src/linker/template_ref';
import * as import22 from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import * as import23 from '@angular/router/src/directives/router_outlet';
import * as import24 from '@ng-bootstrap/ng-bootstrap/modal/modal-container';
export class Wrapper_AppComponent {
  /*private*/ _eventHandler:Function;
  context:import0.AppComponent;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.AppComponent();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_AppComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_AppComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.AppComponent>;
  _AppComponent_0_3:Wrapper_AppComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AppComponent_Host0,renderType_AppComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'app-root',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_AppComponent0(this.viewUtils,this,0,this._el_0);
    this._AppComponent_0_3 = new Wrapper_AppComponent();
    this.compView_0.create(this._AppComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._AppComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AppComponent) && (0 === requestNodeIndex))) { return this._AppComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AppComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const AppComponentNgFactory:import7.ComponentFactory<import0.AppComponent> = new import7.ComponentFactory<import0.AppComponent>('app-root',View_AppComponent_Host0,import0.AppComponent);
const styles_AppComponent:any[] = [import8.styles];
var renderType_AppComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_AppComponent,{});
export class View_AppComponent0 extends import1.AppView<import0.AppComponent> {
  _el_0:any;
  compView_0:import1.AppView<import9.HeaderComponent>;
  _HeaderComponent_0_3:import10.Wrapper_HeaderComponent;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  /*private*/ _vc_6:import11.ViewContainer;
  _RouterOutlet_6_5:import12.Wrapper_RouterOutlet;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  compView_9:import1.AppView<import13.ErrorComponent>;
  _ErrorComponent_9_3:import14.Wrapper_ErrorComponent;
  _text_10:any;
  _anchor_11:any;
  /*private*/ _vc_11:import11.ViewContainer;
  _TemplateRef_11_5:any;
  _NgbModalContainer_11_6:import15.Wrapper_NgbModalContainer;
  _text_12:any;
  _text_13:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AppComponent0,renderType_AppComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'app-header',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_0 = new import10.View_HeaderComponent0(this.viewUtils,this,0,this._el_0);
    this._HeaderComponent_0_3 = new import10.Wrapper_HeaderComponent(this.parentView.injectorGet(import16.AuthService,this.parentIndex),this.parentView.injectorGet(import17.Router,this.parentIndex));
    this.compView_0.create(this._HeaderComponent_0_3.context);
    this._text_1 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','container'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'hr',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_5 = this.renderer.createText(this._el_2,'\n',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_2,'router-outlet',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_6 = new import11.ViewContainer(6,2,this,this._el_6);
    this._RouterOutlet_6_5 = new import12.Wrapper_RouterOutlet(this.parentView.injectorGet(import18.RouterOutletMap,this.parentIndex),this._vc_6.vcRef,this.parentView.injectorGet(import19.ComponentFactoryResolver,this.parentIndex),(null as any));
    this._text_7 = this.renderer.createText(this._el_2,'\n',(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,parentRenderNode,'app-error',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_9 = new import14.View_ErrorComponent0(this.viewUtils,this,9,this._el_9);
    this._ErrorComponent_9_3 = new import14.Wrapper_ErrorComponent(this.parentView.injectorGet(import20.ErrorService,this.parentIndex));
    this.compView_9.create(this._ErrorComponent_9_3.context);
    this._text_10 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._anchor_11 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_11 = new import11.ViewContainer(11,(null as any),this,this._anchor_11);
    this._TemplateRef_11_5 = new import21.TemplateRef_(this,11,this._anchor_11);
    this._NgbModalContainer_11_6 = new import15.Wrapper_NgbModalContainer(this.injector(11),this.renderer,this._vc_11.vcRef,this.parentView.injectorGet(import19.ComponentFactoryResolver,this.parentIndex),this.parentView.injectorGet(import22.NgbModalStack,this.parentIndex));
    this._text_12 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._text_13 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._anchor_11,
      this._text_12,
      this._text_13
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.HeaderComponent) && (0 === requestNodeIndex))) { return this._HeaderComponent_0_3.context; }
    if (((token === import23.RouterOutlet) && (6 === requestNodeIndex))) { return this._RouterOutlet_6_5.context; }
    if (((token === import13.ErrorComponent) && (9 === requestNodeIndex))) { return this._ErrorComponent_9_3.context; }
    if (((token === import21.TemplateRef) && (11 === requestNodeIndex))) { return this._TemplateRef_11_5; }
    if (((token === import24.NgbModalContainer) && (11 === requestNodeIndex))) { return this._NgbModalContainer_11_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._HeaderComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this._RouterOutlet_6_5.ngDoCheck(this,this._el_6,throwOnChange);
    this._ErrorComponent_9_3.ngDoCheck(this,this._el_9,throwOnChange);
    this._NgbModalContainer_11_6.ngDoCheck(this,this._anchor_11,throwOnChange);
    this._vc_6.detectChangesInNestedViews(throwOnChange);
    this._vc_11.detectChangesInNestedViews(throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
    this.compView_9.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_6.destroyNestedViews();
    this._vc_11.destroyNestedViews();
    this.compView_0.destroy();
    this.compView_9.destroy();
    this._RouterOutlet_6_5.ngOnDestroy();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 11)) { return new View_AppComponent1(this.viewUtils,this,11,this._anchor_11,this._vc_11); }
    return (null as any);
  }
}
class View_AppComponent1 extends import1.AppView<any> {
  _el_0:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import11.ViewContainer) {
    super(View_AppComponent1,renderType_AppComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): ([] as any[])),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}