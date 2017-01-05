/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './header.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
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
export class Wrapper_HeaderComponent {
  /*private*/ _eventHandler:Function;
  context:import0.HeaderComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.HeaderComponent(p0,p1);
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
var renderType_HeaderComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_HeaderComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.HeaderComponent>;
  _HeaderComponent_0_3:Wrapper_HeaderComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_HeaderComponent_Host0,renderType_HeaderComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'app-header',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_HeaderComponent0(this.viewUtils,this,0,this._el_0);
    this._HeaderComponent_0_3 = new Wrapper_HeaderComponent(this.injectorGet(import8.AuthService,this.parentIndex),this.injectorGet(import9.Router,this.parentIndex));
    this.compView_0.create(this._HeaderComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._HeaderComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.HeaderComponent) && (0 === requestNodeIndex))) { return this._HeaderComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._HeaderComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const HeaderComponentNgFactory:import7.ComponentFactory<import0.HeaderComponent> = new import7.ComponentFactory<import0.HeaderComponent>('app-header',View_HeaderComponent_Host0,import0.HeaderComponent);
const styles_HeaderComponent:any[] = [import10.styles];
var renderType_HeaderComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_HeaderComponent,{});
export class View_HeaderComponent0 extends import1.AppView<import0.HeaderComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _text_20:any;
  _text_21:any;
  _el_22:any;
  _NgClass_22_3:import11.Wrapper_NgClass;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _el_26:any;
  _el_27:any;
  _text_28:any;
  _el_29:any;
  _text_30:any;
  _text_31:any;
  _el_32:any;
  _el_33:any;
  _text_34:any;
  _text_35:any;
  _text_36:any;
  _text_37:any;
  _text_38:any;
  _el_39:any;
  _text_40:any;
  _el_41:any;
  _anchor_42:any;
  /*private*/ _vc_42:import12.ViewContainer;
  _TemplateRef_42_5:any;
  _NgIf_42_6:import13.Wrapper_NgIf;
  _text_43:any;
  _anchor_44:any;
  /*private*/ _vc_44:import12.ViewContainer;
  _TemplateRef_44_5:any;
  _NgIf_44_6:import13.Wrapper_NgIf;
  _text_45:any;
  _text_46:any;
  _text_47:any;
  _text_48:any;
  _text_49:any;
  _map_57:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_HeaderComponent0,renderType_HeaderComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._map_57 = import3.pureProxy1((p0:any):{[key: string]:any} => {
      return {in: p0};
    });
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'nav',new import3.InlineArray2(2,'class','navbar navbar-default'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','container-fluid'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','navbar-header'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'button',new import3.InlineArray16(10,'aria-expanded','false','class','navbar-toggle collapsed','data-target','#navbar-mobile-collapse','data-toggle','collapse','type','button'),(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_6,'span',new import3.InlineArray2(2,'class','sr-only'),(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'Toggle navigation',(null as any));
    this._text_10 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_6,'span',new import3.InlineArray2(2,'class','icon-bar'),(null as any));
    this._text_12 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._el_13 = import3.createRenderElement(this.renderer,this._el_6,'span',new import3.InlineArray2(2,'class','icon-bar'),(null as any));
    this._text_14 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._el_15 = import3.createRenderElement(this.renderer,this._el_6,'span',new import3.InlineArray2(2,'class','icon-bar'),(null as any));
    this._text_16 = this.renderer.createText(this._el_6,'\n      ',(null as any));
    this._text_17 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._el_18 = import3.createRenderElement(this.renderer,this._el_4,'a',new import3.InlineArray4(4,'class','navbar-brand','href','/'),(null as any));
    this._text_19 = this.renderer.createText(this._el_18,'GameDev_io.us',(null as any));
    this._text_20 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_21 = this.renderer.createText(this._el_2,'\n\n    ',(null as any));
    this._el_22 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray4(4,'class','collapse navbar-collapse','id','navbar-mobile-collapse'),(null as any));
    this._NgClass_22_3 = new import11.Wrapper_NgClass(this.parentView.injectorGet(import14.IterableDiffers,this.parentIndex),this.parentView.injectorGet(import15.KeyValueDiffers,this.parentIndex),new import16.ElementRef(this._el_22),this.renderer);
    this._text_23 = this.renderer.createText(this._el_22,'\n      ',(null as any));
    this._el_24 = import3.createRenderElement(this.renderer,this._el_22,'ul',new import3.InlineArray2(2,'class','nav navbar-nav'),(null as any));
    this._text_25 = this.renderer.createText(this._el_24,'\n        ',(null as any));
    this._el_26 = import3.createRenderElement(this.renderer,this._el_24,'li',new import3.InlineArray2(2,'class','active'),(null as any));
    this._el_27 = import3.createRenderElement(this.renderer,this._el_26,'a',new import3.InlineArray2(2,'href','/news'),(null as any));
    this._text_28 = this.renderer.createText(this._el_27,'News ',(null as any));
    this._el_29 = import3.createRenderElement(this.renderer,this._el_27,'span',new import3.InlineArray2(2,'class','sr-only'),(null as any));
    this._text_30 = this.renderer.createText(this._el_29,'(current)',(null as any));
    this._text_31 = this.renderer.createText(this._el_24,'\n        ',(null as any));
    this._el_32 = import3.createRenderElement(this.renderer,this._el_24,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_33 = import3.createRenderElement(this.renderer,this._el_32,'a',new import3.InlineArray2(2,'href','/games'),(null as any));
    this._text_34 = this.renderer.createText(this._el_33,'Games',(null as any));
    this._text_35 = this.renderer.createText(this._el_24,'\n        ',(null as any));
    this._text_36 = this.renderer.createText(this._el_24,'\n      ',(null as any));
    this._text_37 = this.renderer.createText(this._el_22,'\n      ',(null as any));
    this._text_38 = this.renderer.createText(this._el_22,'\n      ',(null as any));
    this._el_39 = import3.createRenderElement(this.renderer,this._el_22,'ul',new import3.InlineArray2(2,'class','nav navbar-nav navbar-right'),(null as any));
    this._text_40 = this.renderer.createText(this._el_39,'\n        ',(null as any));
    this._el_41 = import3.createRenderElement(this.renderer,this._el_39,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._anchor_42 = this.renderer.createTemplateAnchor(this._el_41,(null as any));
    this._vc_42 = new import12.ViewContainer(42,41,this,this._anchor_42);
    this._TemplateRef_42_5 = new import17.TemplateRef_(this,42,this._anchor_42);
    this._NgIf_42_6 = new import13.Wrapper_NgIf(this._vc_42.vcRef,this._TemplateRef_42_5);
    this._text_43 = this.renderer.createText(this._el_39,'\n        ',(null as any));
    this._anchor_44 = this.renderer.createTemplateAnchor(this._el_39,(null as any));
    this._vc_44 = new import12.ViewContainer(44,39,this,this._anchor_44);
    this._TemplateRef_44_5 = new import17.TemplateRef_(this,44,this._anchor_44);
    this._NgIf_44_6 = new import13.Wrapper_NgIf(this._vc_44.vcRef,this._TemplateRef_44_5);
    this._text_45 = this.renderer.createText(this._el_39,'\n      ',(null as any));
    this._text_46 = this.renderer.createText(this._el_22,'\n    ',(null as any));
    this._text_47 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_48 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_49 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_6,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_6));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
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
      this._text_38,
      this._el_39,
      this._text_40,
      this._el_41,
      this._anchor_42,
      this._text_43,
      this._anchor_44,
      this._text_45,
      this._text_46,
      this._text_47,
      this._text_48,
      this._text_49
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.TemplateRef) && (42 === requestNodeIndex))) { return this._TemplateRef_42_5; }
    if (((token === import18.NgIf) && (42 === requestNodeIndex))) { return this._NgIf_42_6.context; }
    if (((token === import17.TemplateRef) && (44 === requestNodeIndex))) { return this._TemplateRef_44_5; }
    if (((token === import18.NgIf) && (44 === requestNodeIndex))) { return this._NgIf_44_6.context; }
    if (((token === import19.NgClass) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 46)))) { return this._NgClass_22_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_22_0_0:any = 'collapse navbar-collapse';
    this._NgClass_22_3.check_klass(currVal_22_0_0,throwOnChange,false);
    const currVal_22_0_1:any = this._map_57(this.context.isIn);
    this._NgClass_22_3.check_ngClass(currVal_22_0_1,throwOnChange,false);
    this._NgClass_22_3.ngDoCheck(this,this._el_22,throwOnChange);
    const currVal_42_0_0:boolean = !this.context.belongsToUser();
    this._NgIf_42_6.check_ngIf(currVal_42_0_0,throwOnChange,false);
    this._NgIf_42_6.ngDoCheck(this,this._anchor_42,throwOnChange);
    const currVal_44_0_0:any = this.context.belongsToUser();
    this._NgIf_44_6.check_ngIf(currVal_44_0_0,throwOnChange,false);
    this._NgIf_44_6.ngDoCheck(this,this._anchor_44,throwOnChange);
    this._vc_42.detectChangesInNestedViews(throwOnChange);
    this._vc_44.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_42.destroyNestedViews();
    this._vc_44.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 42)) { return new View_HeaderComponent1(this.viewUtils,this,42,this._anchor_42,this._vc_42); }
    if ((nodeIndex == 44)) { return new View_HeaderComponent2(this.viewUtils,this,44,this._anchor_44,this._vc_44); }
    return (null as any);
  }
  handleEvent_6(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.toggleState()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_HeaderComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_HeaderComponent1,renderType_HeaderComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import6.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'a',new import3.InlineArray2(2,'href','/login'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = import3.inlineInterpolate(1,'Login ',this.parentView.context.belongsToUser(),'');
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_1,currVal_2);
      this._expr_2 = currVal_2;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_HeaderComponent2 extends import1.AppView<any> {
  _el_0:any;
  _NgbDropdown_0_3:import20.Wrapper_NgbDropdown;
  _text_1:any;
  _el_2:any;
  _NgbDropdownToggle_2_3:import20.Wrapper_NgbDropdownToggle;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _el_12:any;
  _text_13:any;
  _text_14:any;
  _el_15:any;
  _el_16:any;
  _text_17:any;
  _text_18:any;
  _el_19:any;
  _text_20:any;
  _el_21:any;
  _el_22:any;
  _text_23:any;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _el_27:any;
  _el_28:any;
  _text_29:any;
  _text_30:any;
  _text_31:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_HeaderComponent2,renderType_HeaderComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'li',new import3.InlineArray4(4,'class','dropdown','ngbDropdown',''),(null as any));
    this._NgbDropdown_0_3 = new import20.Wrapper_NgbDropdown(this.parentView.parentView.injectorGet(import21.NgbDropdownConfig,this.parentView.parentIndex));
    this._text_1 = this.renderer.createText(this._el_0,'\n          ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'a',new import3.InlineArray16(12,'aria-expanded','false','aria-haspopup','true','class','dropdown-toggle dropdown-toggle','data-toggle','dropdown','ngbDropdownToggle','','role','button'),(null as any));
    this._NgbDropdownToggle_2_3 = new import20.Wrapper_NgbDropdownToggle(this._NgbDropdown_0_3.context,new import16.ElementRef(this._el_2));
    this._text_3 = this.renderer.createText(this._el_2,'Profile ',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n          ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_0,'ul',new import3.InlineArray2(2,'class','dropdown-menu'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n            ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_5,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_7,'a',new import3.InlineArray2(2,'href','/profile'),(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'Profile',(null as any));
    this._text_10 = this.renderer.createText(this._el_5,'\n            ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_5,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_11,'a',new import3.InlineArray2(2,'href','#'),(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'Saved Jobs',(null as any));
    this._text_14 = this.renderer.createText(this._el_5,'\n            ',(null as any));
    this._el_15 = import3.createRenderElement(this.renderer,this._el_5,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_16 = import3.createRenderElement(this.renderer,this._el_15,'a',new import3.InlineArray2(2,'href','#'),(null as any));
    this._text_17 = this.renderer.createText(this._el_16,'Saved Blogs',(null as any));
    this._text_18 = this.renderer.createText(this._el_5,'\n            ',(null as any));
    this._el_19 = import3.createRenderElement(this.renderer,this._el_5,'li',new import3.InlineArray4(4,'class','divider','role','separator'),(null as any));
    this._text_20 = this.renderer.createText(this._el_5,'\n            ',(null as any));
    this._el_21 = import3.createRenderElement(this.renderer,this._el_5,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_22 = import3.createRenderElement(this.renderer,this._el_21,'a',new import3.InlineArray2(2,'href','/upload'),(null as any));
    this._text_23 = this.renderer.createText(this._el_22,'Submit New',(null as any));
    this._text_24 = this.renderer.createText(this._el_5,'\n            ',(null as any));
    this._el_25 = import3.createRenderElement(this.renderer,this._el_5,'li',new import3.InlineArray4(4,'class','divider','role','separator'),(null as any));
    this._text_26 = this.renderer.createText(this._el_5,'\n            ',(null as any));
    this._el_27 = import3.createRenderElement(this.renderer,this._el_5,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_28 = import3.createRenderElement(this.renderer,this._el_27,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_29 = this.renderer.createText(this._el_28,'Logout',(null as any));
    this._text_30 = this.renderer.createText(this._el_5,'\n          ',(null as any));
    this._text_31 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray4(4,'keyup.esc',(null as any),'click','document'),this.eventHandler(this.handleEvent_0));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_2,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_2));
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_28,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_28));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
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
    if (((token === import22.NgbDropdownToggle) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._NgbDropdownToggle_2_3.context; }
    if (((token === import22.NgbDropdown) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 31)))) { return this._NgbDropdown_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._NgbDropdown_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this._NgbDropdownToggle_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    this._NgbDropdown_0_3.checkHost(this,this,this._el_0,throwOnChange);
    this._NgbDropdownToggle_2_3.checkHost(this,this,this._el_2,throwOnChange);
  }
  destroyInternal():void {
    this._NgbDropdown_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._NgbDropdown_0_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._NgbDropdownToggle_2_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_28(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.onLogout()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}