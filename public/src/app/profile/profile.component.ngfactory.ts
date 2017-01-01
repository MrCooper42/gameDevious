/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './profile.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from './profile.service';
import * as import9 from '@angular/router/src/router';
import * as import10 from './profile.component.css.shim';
export class Wrapper_ProfileComponent {
  /*private*/ _eventHandler:Function;
  context:import0.ProfileComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.ProfileComponent(p0,p1);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
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
var renderType_ProfileComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_ProfileComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.ProfileComponent>;
  _ProfileComponent_0_3:Wrapper_ProfileComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ProfileComponent_Host0,renderType_ProfileComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'app-profile',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_ProfileComponent0(this.viewUtils,this,0,this._el_0);
    this._ProfileComponent_0_3 = new Wrapper_ProfileComponent(this.injectorGet(import8.ProfileService,this.parentIndex),this.injectorGet(import9.Router,this.parentIndex));
    this.compView_0.create(this._ProfileComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._ProfileComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ProfileComponent) && (0 === requestNodeIndex))) { return this._ProfileComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ProfileComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const ProfileComponentNgFactory:import7.ComponentFactory<import0.ProfileComponent> = new import7.ComponentFactory<import0.ProfileComponent>('app-profile',View_ProfileComponent_Host0,import0.ProfileComponent);
const styles_ProfileComponent:any[] = [import10.styles];
var renderType_ProfileComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_ProfileComponent,{});
export class View_ProfileComponent0 extends import1.AppView<import0.ProfileComponent> {
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
  _text_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _text_20:any;
  _el_21:any;
  _text_22:any;
  _el_23:any;
  _text_24:any;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _text_28:any;
  _el_29:any;
  _text_30:any;
  _text_31:any;
  _el_32:any;
  _text_33:any;
  _el_34:any;
  _text_35:any;
  _text_36:any;
  _text_37:any;
  _text_38:any;
  _text_39:any;
  _el_40:any;
  _text_41:any;
  _el_42:any;
  _text_43:any;
  _el_44:any;
  _text_45:any;
  _text_46:any;
  _text_47:any;
  _el_48:any;
  _text_49:any;
  _el_50:any;
  _text_51:any;
  _el_52:any;
  _text_53:any;
  _text_54:any;
  _text_55:any;
  _el_56:any;
  _text_57:any;
  _el_58:any;
  _text_59:any;
  _el_60:any;
  _text_61:any;
  _text_62:any;
  _text_63:any;
  _el_64:any;
  _text_65:any;
  _el_66:any;
  _text_67:any;
  _el_68:any;
  _text_69:any;
  _text_70:any;
  _text_71:any;
  _el_72:any;
  _text_73:any;
  _el_74:any;
  _text_75:any;
  _el_76:any;
  _text_77:any;
  _text_78:any;
  _text_79:any;
  _text_80:any;
  _el_81:any;
  _text_82:any;
  /*private*/ _expr_83:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ProfileComponent0,renderType_ProfileComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._expr_83 = import6.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','container'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','row'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','col-lg-12'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'h1',new import3.InlineArray2(2,'class','page-header'),(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'Portfolio Item\n        ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_6,'small',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'Item Subheading',(null as any));
    this._text_10 = this.renderer.createText(this._el_6,'\n      ',(null as any));
    this._text_11 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_12 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_13 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','row'),(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'\n    ',(null as any));
    this._el_16 = import3.createRenderElement(this.renderer,this._el_14,'div',new import3.InlineArray2(2,'class','col-md-8'),(null as any));
    this._text_17 = this.renderer.createText(this._el_16,'\n      ',(null as any));
    this._el_18 = import3.createRenderElement(this.renderer,this._el_16,'img',new import3.InlineArray8(6,'alt','','class','img-responsive','src','http://placehold.it/750x500'),(null as any));
    this._text_19 = this.renderer.createText(this._el_16,'\n    ',(null as any));
    this._text_20 = this.renderer.createText(this._el_14,'\n    ',(null as any));
    this._el_21 = import3.createRenderElement(this.renderer,this._el_14,'div',new import3.InlineArray2(2,'class','col-md-4'),(null as any));
    this._text_22 = this.renderer.createText(this._el_21,'\n      ',(null as any));
    this._el_23 = import3.createRenderElement(this.renderer,this._el_21,'h3',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_24 = this.renderer.createText(this._el_23,'',(null as any));
    this._text_25 = this.renderer.createText(this._el_21,'\n      glyphicon glyphicon-pencil\n      ',(null as any));
    this._el_26 = import3.createRenderElement(this.renderer,this._el_21,'p',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_27 = this.renderer.createText(this._el_26,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.',(null as any));
    this._text_28 = this.renderer.createText(this._el_21,'\n      ',(null as any));
    this._el_29 = import3.createRenderElement(this.renderer,this._el_21,'h3',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_30 = this.renderer.createText(this._el_29,'Skills',(null as any));
    this._text_31 = this.renderer.createText(this._el_21,'\n      ',(null as any));
    this._el_32 = import3.createRenderElement(this.renderer,this._el_21,'ul',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_33 = this.renderer.createText(this._el_32,'\n        ',(null as any));
    this._el_34 = import3.createRenderElement(this.renderer,this._el_32,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_35 = this.renderer.createText(this._el_34,'List Skills here as tags',(null as any));
    this._text_36 = this.renderer.createText(this._el_32,'\n      ',(null as any));
    this._text_37 = this.renderer.createText(this._el_21,'\n    ',(null as any));
    this._text_38 = this.renderer.createText(this._el_14,'\n  ',(null as any));
    this._text_39 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_40 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','row'),(null as any));
    this._text_41 = this.renderer.createText(this._el_40,'\n    ',(null as any));
    this._el_42 = import3.createRenderElement(this.renderer,this._el_40,'div',new import3.InlineArray2(2,'class','col-lg-12'),(null as any));
    this._text_43 = this.renderer.createText(this._el_42,'\n      ',(null as any));
    this._el_44 = import3.createRenderElement(this.renderer,this._el_42,'h3',new import3.InlineArray2(2,'class','page-header'),(null as any));
    this._text_45 = this.renderer.createText(this._el_44,'NAMEHERE \'s Games',(null as any));
    this._text_46 = this.renderer.createText(this._el_42,'\n    ',(null as any));
    this._text_47 = this.renderer.createText(this._el_40,'\n    ',(null as any));
    this._el_48 = import3.createRenderElement(this.renderer,this._el_40,'div',new import3.InlineArray2(2,'class','col-sm-3 col-xs-6'),(null as any));
    this._text_49 = this.renderer.createText(this._el_48,'\n      ',(null as any));
    this._el_50 = import3.createRenderElement(this.renderer,this._el_48,'a',new import3.InlineArray2(2,'href','#'),(null as any));
    this._text_51 = this.renderer.createText(this._el_50,'\n        ',(null as any));
    this._el_52 = import3.createRenderElement(this.renderer,this._el_50,'img',new import3.InlineArray8(6,'alt','','class','img-responsive portfolio-item','src','http://placehold.it/500x300'),(null as any));
    this._text_53 = this.renderer.createText(this._el_50,'\n      ',(null as any));
    this._text_54 = this.renderer.createText(this._el_48,'\n    ',(null as any));
    this._text_55 = this.renderer.createText(this._el_40,'\n\n    ',(null as any));
    this._el_56 = import3.createRenderElement(this.renderer,this._el_40,'div',new import3.InlineArray2(2,'class','col-sm-3 col-xs-6'),(null as any));
    this._text_57 = this.renderer.createText(this._el_56,'\n      ',(null as any));
    this._el_58 = import3.createRenderElement(this.renderer,this._el_56,'a',new import3.InlineArray2(2,'href','#'),(null as any));
    this._text_59 = this.renderer.createText(this._el_58,'\n        ',(null as any));
    this._el_60 = import3.createRenderElement(this.renderer,this._el_58,'img',new import3.InlineArray8(6,'alt','','class','img-responsive portfolio-item','src','http://placehold.it/500x300'),(null as any));
    this._text_61 = this.renderer.createText(this._el_58,'\n      ',(null as any));
    this._text_62 = this.renderer.createText(this._el_56,'\n    ',(null as any));
    this._text_63 = this.renderer.createText(this._el_40,'\n\n    ',(null as any));
    this._el_64 = import3.createRenderElement(this.renderer,this._el_40,'div',new import3.InlineArray2(2,'class','col-sm-3 col-xs-6'),(null as any));
    this._text_65 = this.renderer.createText(this._el_64,'\n      ',(null as any));
    this._el_66 = import3.createRenderElement(this.renderer,this._el_64,'a',new import3.InlineArray2(2,'href','#'),(null as any));
    this._text_67 = this.renderer.createText(this._el_66,'\n        ',(null as any));
    this._el_68 = import3.createRenderElement(this.renderer,this._el_66,'img',new import3.InlineArray8(6,'alt','','class','img-responsive portfolio-item','src','http://placehold.it/500x300'),(null as any));
    this._text_69 = this.renderer.createText(this._el_66,'\n      ',(null as any));
    this._text_70 = this.renderer.createText(this._el_64,'\n    ',(null as any));
    this._text_71 = this.renderer.createText(this._el_40,'\n\n    ',(null as any));
    this._el_72 = import3.createRenderElement(this.renderer,this._el_40,'div',new import3.InlineArray2(2,'class','col-sm-3 col-xs-6'),(null as any));
    this._text_73 = this.renderer.createText(this._el_72,'\n      ',(null as any));
    this._el_74 = import3.createRenderElement(this.renderer,this._el_72,'a',new import3.InlineArray2(2,'href','#'),(null as any));
    this._text_75 = this.renderer.createText(this._el_74,'\n        ',(null as any));
    this._el_76 = import3.createRenderElement(this.renderer,this._el_74,'img',new import3.InlineArray8(6,'alt','','class','img-responsive portfolio-item','src','http://placehold.it/500x300'),(null as any));
    this._text_77 = this.renderer.createText(this._el_74,'\n      ',(null as any));
    this._text_78 = this.renderer.createText(this._el_72,'\n    ',(null as any));
    this._text_79 = this.renderer.createText(this._el_40,'\n  ',(null as any));
    this._text_80 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_81 = import3.createRenderElement(this.renderer,this._el_0,'hr',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_82 = this.renderer.createText(this._el_0,'\n',(null as any));
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
      this._text_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._text_28,
      this._el_29,
      this._text_30,
      this._text_31,
      this._el_32,
      this._text_33,
      this._el_34,
      this._text_35,
      this._text_36,
      this._text_37,
      this._text_38,
      this._text_39,
      this._el_40,
      this._text_41,
      this._el_42,
      this._text_43,
      this._el_44,
      this._text_45,
      this._text_46,
      this._text_47,
      this._el_48,
      this._text_49,
      this._el_50,
      this._text_51,
      this._el_52,
      this._text_53,
      this._text_54,
      this._text_55,
      this._el_56,
      this._text_57,
      this._el_58,
      this._text_59,
      this._el_60,
      this._text_61,
      this._text_62,
      this._text_63,
      this._el_64,
      this._text_65,
      this._el_66,
      this._text_67,
      this._el_68,
      this._text_69,
      this._text_70,
      this._text_71,
      this._el_72,
      this._text_73,
      this._el_74,
      this._text_75,
      this._el_76,
      this._text_77,
      this._text_78,
      this._text_79,
      this._text_80,
      this._el_81,
      this._text_82
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_83:any = import3.inlineInterpolate(1,'Snippit\'s of ',this.context.user,'');
    if (import3.checkBinding(throwOnChange,this._expr_83,currVal_83)) {
      this.renderer.setText(this._text_24,currVal_83);
      this._expr_83 = currVal_83;
    }
  }
}