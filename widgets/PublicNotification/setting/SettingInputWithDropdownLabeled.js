// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define(["dojo/_base/declare","./SettingDropdown","./SettingInputLabeled","./SettingObject"],function(c,d,e,f){return c(f,{_inputControl:null,_inputModifier:null,constructor:function(a,b,g,h,k,l,m,n,p,q,r,t,u){this._inputModifier=new d(null,q,r,t);this._inputControl=new e(null,b,g,h,k,l,m,n,p,this._inputModifier,u);this._mainDiv=this._inputControl.div()},setValue:function(a){this._inputControl&&this._inputControl.setValue(a)},setModifier:function(a){this._inputModifier&&this._inputModifier.setValue(a)},
getValue:function(){return this._inputControl?this._inputControl.getValue():null},getModifier:function(){return this._inputModifier?this._inputModifier.getValue():null},setConfig:function(){this._inputControl&&this._config&&this.setValue(this._config)},getConfig:function(a,b){this._inputControl&&(this._config=this.getValue())}})});