"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:true,get:all[name]})}_export(exports,{propTypesColor:function(){return propTypesColor},propTypesSize:function(){return propTypesSize},propTypesClassName:function(){return propTypesClassName},propTypesTrackClassName:function(){return propTypesTrackClassName},propTypesThumbClassName:function(){return propTypesThumbClassName},propTypesBarClassName:function(){return propTypesBarClassName},propTypesDefaultValue:function(){return propTypesDefaultValue},propTypesValue:function(){return propTypesValue},propTypesOnChange:function(){return propTypesOnChange},propTypesMin:function(){return propTypesMin},propTypesMax:function(){return propTypesMax},propTypesStep:function(){return propTypesStep},propTypesInputRef:function(){return propTypesInputRef},propTypesInputProps:function(){return propTypesInputProps}});var _propTypes=_interopRequireDefault(require("prop-types"));var _generic=require("../generic");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var propTypesColor=_generic.propTypesColors;var propTypesSize=["sm","md","lg"];var propTypesClassName=_propTypes.default.string;var propTypesTrackClassName=_propTypes.default.string;var propTypesThumbClassName=_propTypes.default.string;var propTypesBarClassName=_propTypes.default.string;var propTypesDefaultValue=_propTypes.default.oneOfType([_propTypes.default.number,_propTypes.default.string]);var propTypesValue=_propTypes.default.oneOfType([_propTypes.default.number,_propTypes.default.string]);var propTypesOnChange=_propTypes.default.func;var propTypesMin=_propTypes.default.oneOfType([_propTypes.default.number,_propTypes.default.string]);var propTypesMax=_propTypes.default.oneOfType([_propTypes.default.number,_propTypes.default.string]);var propTypesStep=_propTypes.default.oneOfType([_propTypes.default.number,_propTypes.default.string]);var propTypesInputRef=_propTypes.default.oneOfType([_propTypes.default.func,_propTypes.default.shape({current:_propTypes.default.any})]);var propTypesInputProps=_propTypes.default.instanceOf(Object);