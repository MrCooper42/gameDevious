/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './authentication.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from './auth.service';
import * as import9 from '../../../../node_modules/@angular/router/src/directives/router_link_active.ngfactory';
import * as import10 from '@angular/core/src/linker/query_list';
import * as import11 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import14 from '../../../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import15 from '@angular/router/src/router';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '@angular/router/src/router_state';
import * as import18 from '@angular/common/src/location/location_strategy';
import * as import19 from '@angular/core/src/linker/template_ref';
import * as import20 from '@angular/router/src/router_outlet_map';
import * as import21 from '@angular/core/src/linker/component_factory_resolver';
import * as import22 from '@angular/router/src/directives/router_link';
import * as import23 from '@angular/router/src/directives/router_link_active';
import * as import24 from '@angular/common/src/directives/ng_if';
import * as import25 from '@angular/router/src/directives/router_outlet';
export class Wrapper_AuthenticationComponent {
  /*private*/ _eventHandler:Function;
  context:import0.AuthenticationComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.AuthenticationComponent(p0);
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
var renderType_AuthenticationComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_AuthenticationComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.AuthenticationComponent>;
  _AuthenticationComponent_0_3:Wrapper_AuthenticationComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AuthenticationComponent_Host0,renderType_AuthenticationComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'app-authentication',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_AuthenticationComponent0(this.viewUtils,this,0,this._el_0);
    this._AuthenticationComponent_0_3 = new Wrapper_AuthenticationComponent(this.injectorGet(import8.AuthService,this.parentIndex));
    this.compView_0.create(this._AuthenticationComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._AuthenticationComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AuthenticationComponent) && (0 === requestNodeIndex))) { return this._AuthenticationComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AuthenticationComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const AuthenticationComponentNgFactory:import7.ComponentFactory<import0.AuthenticationComponent> = new import7.ComponentFactory<import0.AuthenticationComponent>('app-authentication',View_AuthenticationComponent_Host0,import0.AuthenticationComponent);
const styles_AuthenticationComponent:any[] = ([] as any[]);
var renderType_AuthenticationComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_AuthenticationComponent,{});
export class View_AuthenticationComponent0 extends import1.AppView<import0.AuthenticationComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _RouterLinkActive_7_3:import9.Wrapper_RouterLinkActive;
  _query_RouterLink_7_0:import10.QueryList<any>;
  _query_RouterLinkWithHref_7_1:import10.QueryList<any>;
  _el_8:any;
  _RouterLinkWithHref_8_3:import11.Wrapper_RouterLinkWithHref;
  _text_9:any;
  _text_10:any;
  _anchor_11:any;
  /*private*/ _vc_11:import12.ViewContainer;
  _TemplateRef_11_5:any;
  _NgIf_11_6:import13.Wrapper_NgIf;
  _text_12:any;
  _anchor_13:any;
  /*private*/ _vc_13:import12.ViewContainer;
  _TemplateRef_13_5:any;
  _NgIf_13_6:import13.Wrapper_NgIf;
  _text_14:any;
  _el_15:any;
  _RouterLinkActive_15_3:import9.Wrapper_RouterLinkActive;
  _query_RouterLink_15_0:import10.QueryList<any>;
  _query_RouterLinkWithHref_15_1:import10.QueryList<any>;
  _el_16:any;
  _RouterLinkWithHref_16_3:import11.Wrapper_RouterLinkWithHref;
  _text_17:any;
  _text_18:any;
  _text_19:any;
  _text_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _el_24:any;
  /*private*/ _vc_24:import12.ViewContainer;
  _RouterOutlet_24_5:import14.Wrapper_RouterOutlet;
  _text_25:any;
  _text_26:any;
  _el_27:any;
  _text_28:any;
  _el_29:any;
  _text_30:any;
  _anchor_31:any;
  /*private*/ _vc_31:import12.ViewContainer;
  _TemplateRef_31_5:any;
  _NgIf_31_6:import13.Wrapper_NgIf;
  _text_32:any;
  _el_33:any;
  _text_34:any;
  _arr_54:any;
  _arr_55:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AuthenticationComponent0,renderType_AuthenticationComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._arr_54 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._arr_55 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'header',new import3.InlineArray2(2,'class','row spacing'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'nav',new import3.InlineArray2(2,'class','col-md-8 col-md-offset-2'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'ul',new import3.InlineArray2(2,'class','nav nav-tabs'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n          ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_5,'li',new import3.InlineArray2(2,'routerLinkActive','active'),(null as any));
    this._RouterLinkActive_7_3 = new import9.Wrapper_RouterLinkActive(this.parentView.injectorGet(import15.Router,this.parentIndex),new import16.ElementRef(this._el_7),this.renderer);
    this._query_RouterLink_7_0 = new import10.QueryList<any>();
    this._query_RouterLinkWithHref_7_1 = new import10.QueryList<any>();
    this._el_8 = import3.createRenderElement(this.renderer,this._el_7,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_8_3 = new import11.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import15.Router,this.parentIndex),this.parentView.injectorGet(import17.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import18.LocationStrategy,this.parentIndex));
    this._text_9 = this.renderer.createText(this._el_8,'Signup',(null as any));
    this._text_10 = this.renderer.createText(this._el_5,'\n          ',(null as any));
    this._anchor_11 = this.renderer.createTemplateAnchor(this._el_5,(null as any));
    this._vc_11 = new import12.ViewContainer(11,5,this,this._anchor_11);
    this._TemplateRef_11_5 = new import19.TemplateRef_(this,11,this._anchor_11);
    this._NgIf_11_6 = new import13.Wrapper_NgIf(this._vc_11.vcRef,this._TemplateRef_11_5);
    this._text_12 = this.renderer.createText(this._el_5,'\n          ',(null as any));
    this._anchor_13 = this.renderer.createTemplateAnchor(this._el_5,(null as any));
    this._vc_13 = new import12.ViewContainer(13,5,this,this._anchor_13);
    this._TemplateRef_13_5 = new import19.TemplateRef_(this,13,this._anchor_13);
    this._NgIf_13_6 = new import13.Wrapper_NgIf(this._vc_13.vcRef,this._TemplateRef_13_5);
    this._text_14 = this.renderer.createText(this._el_5,'\n          ',(null as any));
    this._el_15 = import3.createRenderElement(this.renderer,this._el_5,'li',new import3.InlineArray2(2,'routerLinkActive','active'),(null as any));
    this._RouterLinkActive_15_3 = new import9.Wrapper_RouterLinkActive(this.parentView.injectorGet(import15.Router,this.parentIndex),new import16.ElementRef(this._el_15),this.renderer);
    this._query_RouterLink_15_0 = new import10.QueryList<any>();
    this._query_RouterLinkWithHref_15_1 = new import10.QueryList<any>();
    this._el_16 = import3.createRenderElement(this.renderer,this._el_15,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_16_3 = new import11.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import15.Router,this.parentIndex),this.parentView.injectorGet(import17.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import18.LocationStrategy,this.parentIndex));
    this._text_17 = this.renderer.createText(this._el_16,'Contact',(null as any));
    this._text_18 = this.renderer.createText(this._el_5,'\n        ',(null as any));
    this._text_19 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._text_20 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_21 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_22 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','row spacing'),(null as any));
    this._text_23 = this.renderer.createText(this._el_22,'\n      ',(null as any));
    this._el_24 = import3.createRenderElement(this.renderer,this._el_22,'router-outlet',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_24 = new import12.ViewContainer(24,22,this,this._el_24);
    this._RouterOutlet_24_5 = new import14.Wrapper_RouterOutlet(this.parentView.injectorGet(import20.RouterOutletMap,this.parentIndex),this._vc_24.vcRef,this.parentView.injectorGet(import21.ComponentFactoryResolver,this.parentIndex),(null as any));
    this._text_25 = this.renderer.createText(this._el_22,'\n    ',(null as any));
    this._text_26 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_27 = import3.createRenderElement(this.renderer,parentRenderNode,'hr',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_28 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_29 = import3.createRenderElement(this.renderer,parentRenderNode,'br',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_30 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._anchor_31 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_31 = new import12.ViewContainer(31,(null as any),this,this._anchor_31);
    this._TemplateRef_31_5 = new import19.TemplateRef_(this,31,this._anchor_31);
    this._NgIf_31_6 = new import13.Wrapper_NgIf(this._vc_31.vcRef,this._TemplateRef_31_5);
    this._text_32 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_33 = import3.createRenderElement(this.renderer,parentRenderNode,'hr',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_34 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_8,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_8));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_15,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_15));
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_16,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_16));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._anchor_11,
      this._text_12,
      this._anchor_13,
      this._text_14,
      this._el_15,
      this._el_16,
      this._text_17,
      this._text_18,
      this._text_19,
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
      this._anchor_31,
      this._text_32,
      this._el_33,
      this._text_34
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import22.RouterLinkWithHref) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._RouterLinkWithHref_8_3.context; }
    if (((token === import23.RouterLinkActive) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._RouterLinkActive_7_3.context; }
    if (((token === import19.TemplateRef) && (11 === requestNodeIndex))) { return this._TemplateRef_11_5; }
    if (((token === import24.NgIf) && (11 === requestNodeIndex))) { return this._NgIf_11_6.context; }
    if (((token === import19.TemplateRef) && (13 === requestNodeIndex))) { return this._TemplateRef_13_5; }
    if (((token === import24.NgIf) && (13 === requestNodeIndex))) { return this._NgIf_13_6.context; }
    if (((token === import22.RouterLinkWithHref) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._RouterLinkWithHref_16_3.context; }
    if (((token === import23.RouterLinkActive) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._RouterLinkActive_15_3.context; }
    if (((token === import25.RouterOutlet) && (24 === requestNodeIndex))) { return this._RouterOutlet_24_5.context; }
    if (((token === import19.TemplateRef) && (31 === requestNodeIndex))) { return this._TemplateRef_31_5; }
    if (((token === import24.NgIf) && (31 === requestNodeIndex))) { return this._NgIf_31_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_7_0_0:any = 'active';
    this._RouterLinkActive_7_3.check_routerLinkActive(currVal_7_0_0,throwOnChange,false);
    this._RouterLinkActive_7_3.ngDoCheck(this,this._el_7,throwOnChange);
    const currVal_8_0_0:any = this._arr_54('signup');
    this._RouterLinkWithHref_8_3.check_routerLink(currVal_8_0_0,throwOnChange,false);
    this._RouterLinkWithHref_8_3.ngDoCheck(this,this._el_8,throwOnChange);
    const currVal_11_0_0:boolean = !this.context.isLoggedIn();
    this._NgIf_11_6.check_ngIf(currVal_11_0_0,throwOnChange,false);
    this._NgIf_11_6.ngDoCheck(this,this._anchor_11,throwOnChange);
    const currVal_13_0_0:any = this.context.isLoggedIn();
    this._NgIf_13_6.check_ngIf(currVal_13_0_0,throwOnChange,false);
    this._NgIf_13_6.ngDoCheck(this,this._anchor_13,throwOnChange);
    const currVal_15_0_0:any = 'active';
    this._RouterLinkActive_15_3.check_routerLinkActive(currVal_15_0_0,throwOnChange,false);
    this._RouterLinkActive_15_3.ngDoCheck(this,this._el_15,throwOnChange);
    const currVal_16_0_0:any = this._arr_55('logout');
    this._RouterLinkWithHref_16_3.check_routerLink(currVal_16_0_0,throwOnChange,false);
    this._RouterLinkWithHref_16_3.ngDoCheck(this,this._el_16,throwOnChange);
    this._RouterOutlet_24_5.ngDoCheck(this,this._el_24,throwOnChange);
    const currVal_31_0_0:any = this.context.showContact;
    this._NgIf_31_6.check_ngIf(currVal_31_0_0,throwOnChange,false);
    this._NgIf_31_6.ngDoCheck(this,this._anchor_31,throwOnChange);
    this._vc_11.detectChangesInNestedViews(throwOnChange);
    this._vc_13.detectChangesInNestedViews(throwOnChange);
    this._vc_24.detectChangesInNestedViews(throwOnChange);
    this._vc_31.detectChangesInNestedViews(throwOnChange);
    if (!throwOnChange) {
      if (this._query_RouterLink_7_0.dirty) {
        this._query_RouterLink_7_0.reset(([] as any[]));
        this._RouterLinkActive_7_3.context.links = this._query_RouterLink_7_0;
        this._query_RouterLink_7_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_7_1.dirty) {
        this._query_RouterLinkWithHref_7_1.reset([this._RouterLinkWithHref_8_3.context]);
        this._RouterLinkActive_7_3.context.linksWithHrefs = this._query_RouterLinkWithHref_7_1;
        this._query_RouterLinkWithHref_7_1.notifyOnChanges();
      }
      if (this._query_RouterLink_15_0.dirty) {
        this._query_RouterLink_15_0.reset(([] as any[]));
        this._RouterLinkActive_15_3.context.links = this._query_RouterLink_15_0;
        this._query_RouterLink_15_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_15_1.dirty) {
        this._query_RouterLinkWithHref_15_1.reset([this._RouterLinkWithHref_16_3.context]);
        this._RouterLinkActive_15_3.context.linksWithHrefs = this._query_RouterLinkWithHref_15_1;
        this._query_RouterLinkWithHref_15_1.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_7_3.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_15_3.context.ngAfterContentInit(); }
    }
    this._RouterLinkWithHref_8_3.checkHost(this,this,this._el_8,throwOnChange);
    this._RouterLinkWithHref_16_3.checkHost(this,this,this._el_16,throwOnChange);
  }
  destroyInternal():void {
    this._vc_11.destroyNestedViews();
    this._vc_13.destroyNestedViews();
    this._vc_24.destroyNestedViews();
    this._vc_31.destroyNestedViews();
    this._RouterLinkWithHref_8_3.ngOnDestroy();
    this._RouterLinkActive_7_3.ngOnDestroy();
    this._RouterLinkWithHref_16_3.ngOnDestroy();
    this._RouterLinkActive_15_3.ngOnDestroy();
    this._RouterOutlet_24_5.ngOnDestroy();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 11)) { return new View_AuthenticationComponent1(this.viewUtils,this,11,this._anchor_11,this._vc_11); }
    if ((nodeIndex == 13)) { return new View_AuthenticationComponent2(this.viewUtils,this,13,this._anchor_13,this._vc_13); }
    if ((nodeIndex == 31)) { return new View_AuthenticationComponent3(this.viewUtils,this,31,this._anchor_31,this._vc_31); }
    return (null as any);
  }
  handleEvent_8(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_8_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_15(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.contact()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_16(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_16_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
class View_AuthenticationComponent1 extends import1.AppView<any> {
  _el_0:any;
  _RouterLinkActive_0_3:import9.Wrapper_RouterLinkActive;
  _query_RouterLink_0_0:import10.QueryList<any>;
  _query_RouterLinkWithHref_0_1:import10.QueryList<any>;
  _el_1:any;
  _RouterLinkWithHref_1_3:import11.Wrapper_RouterLinkWithHref;
  _text_2:any;
  _arr_7:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_AuthenticationComponent1,renderType_AuthenticationComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._arr_7 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'li',new import3.InlineArray2(2,'routerLinkActive','active'),(null as any));
    this._RouterLinkActive_0_3 = new import9.Wrapper_RouterLinkActive(this.parentView.parentView.injectorGet(import15.Router,this.parentView.parentIndex),new import16.ElementRef(this._el_0),this.renderer);
    this._query_RouterLink_0_0 = new import10.QueryList<any>();
    this._query_RouterLinkWithHref_0_1 = new import10.QueryList<any>();
    this._el_1 = import3.createRenderElement(this.renderer,this._el_0,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_1_3 = new import11.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import15.Router,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import17.ActivatedRoute,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import18.LocationStrategy,this.parentView.parentIndex));
    this._text_2 = this.renderer.createText(this._el_1,'Signin',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_1,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_1));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._el_1,
      this._text_2
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import22.RouterLinkWithHref) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 2)))) { return this._RouterLinkWithHref_1_3.context; }
    if (((token === import23.RouterLinkActive) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 2)))) { return this._RouterLinkActive_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = 'active';
    this._RouterLinkActive_0_3.check_routerLinkActive(currVal_0_0_0,throwOnChange,false);
    this._RouterLinkActive_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_1_0_0:any = this._arr_7('signin');
    this._RouterLinkWithHref_1_3.check_routerLink(currVal_1_0_0,throwOnChange,false);
    this._RouterLinkWithHref_1_3.ngDoCheck(this,this._el_1,throwOnChange);
    if (!throwOnChange) {
      if (this._query_RouterLink_0_0.dirty) {
        this._query_RouterLink_0_0.reset(([] as any[]));
        this._RouterLinkActive_0_3.context.links = this._query_RouterLink_0_0;
        this._query_RouterLink_0_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_0_1.dirty) {
        this._query_RouterLinkWithHref_0_1.reset([this._RouterLinkWithHref_1_3.context]);
        this._RouterLinkActive_0_3.context.linksWithHrefs = this._query_RouterLinkWithHref_0_1;
        this._query_RouterLinkWithHref_0_1.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_0_3.context.ngAfterContentInit(); }
    }
    this._RouterLinkWithHref_1_3.checkHost(this,this,this._el_1,throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_1_3.ngOnDestroy();
    this._RouterLinkActive_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_1(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_1_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
class View_AuthenticationComponent2 extends import1.AppView<any> {
  _el_0:any;
  _RouterLinkActive_0_3:import9.Wrapper_RouterLinkActive;
  _query_RouterLink_0_0:import10.QueryList<any>;
  _query_RouterLinkWithHref_0_1:import10.QueryList<any>;
  _el_1:any;
  _RouterLinkWithHref_1_3:import11.Wrapper_RouterLinkWithHref;
  _text_2:any;
  _arr_7:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_AuthenticationComponent2,renderType_AuthenticationComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._arr_7 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'li',new import3.InlineArray2(2,'routerLinkActive','active'),(null as any));
    this._RouterLinkActive_0_3 = new import9.Wrapper_RouterLinkActive(this.parentView.parentView.injectorGet(import15.Router,this.parentView.parentIndex),new import16.ElementRef(this._el_0),this.renderer);
    this._query_RouterLink_0_0 = new import10.QueryList<any>();
    this._query_RouterLinkWithHref_0_1 = new import10.QueryList<any>();
    this._el_1 = import3.createRenderElement(this.renderer,this._el_0,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_1_3 = new import11.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import15.Router,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import17.ActivatedRoute,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import18.LocationStrategy,this.parentView.parentIndex));
    this._text_2 = this.renderer.createText(this._el_1,'Logout',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_1,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_1));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._el_1,
      this._text_2
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import22.RouterLinkWithHref) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 2)))) { return this._RouterLinkWithHref_1_3.context; }
    if (((token === import23.RouterLinkActive) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 2)))) { return this._RouterLinkActive_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = 'active';
    this._RouterLinkActive_0_3.check_routerLinkActive(currVal_0_0_0,throwOnChange,false);
    this._RouterLinkActive_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_1_0_0:any = this._arr_7('logout');
    this._RouterLinkWithHref_1_3.check_routerLink(currVal_1_0_0,throwOnChange,false);
    this._RouterLinkWithHref_1_3.ngDoCheck(this,this._el_1,throwOnChange);
    if (!throwOnChange) {
      if (this._query_RouterLink_0_0.dirty) {
        this._query_RouterLink_0_0.reset(([] as any[]));
        this._RouterLinkActive_0_3.context.links = this._query_RouterLink_0_0;
        this._query_RouterLink_0_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_0_1.dirty) {
        this._query_RouterLinkWithHref_0_1.reset([this._RouterLinkWithHref_1_3.context]);
        this._RouterLinkActive_0_3.context.linksWithHrefs = this._query_RouterLinkWithHref_0_1;
        this._query_RouterLinkWithHref_0_1.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_0_3.context.ngAfterContentInit(); }
    }
    this._RouterLinkWithHref_1_3.checkHost(this,this,this._el_1,throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_1_3.ngOnDestroy();
    this._RouterLinkActive_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_1(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_1_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
class View_AuthenticationComponent3 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_AuthenticationComponent3,renderType_AuthenticationComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','containter text-center'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'h1',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'Matthew Cooper',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_0,'h3',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'email: mr.cooper42co@gmail.com',(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_0,'h3',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'github: https://github.com/MrCooper42',(null as any));
    this._text_10 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_0,'h3',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'linkedin: https://www.linkedin.com/in/mrcooper42',(null as any));
    this._text_13 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13
    ]
    ),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}