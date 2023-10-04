"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:true,get:all[name]})}_export(exports,{Chip:function(){return Chip},default:function(){return _default}});var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _framerMotion=require("framer-motion");var _classnames=_interopRequireDefault(require("classnames"));var _deepmerge=_interopRequireDefault(require("deepmerge"));var _tailwindMerge=require("tailwind-merge");var _findMatch=_interopRequireDefault(require("../../utils/findMatch"));var _objectsToString=_interopRequireDefault(require("../../utils/objectsToString"));var _theme=require("../../context/theme");var _chip=require("../../types/components/chip");var _iconButton=_interopRequireDefault(require("../IconButton"));function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}var Chip=_react.default.forwardRef(function(_param,ref){var variant=_param.variant,size=_param.size,color=_param.color,icon=_param.icon,open=_param.open,onClose=_param.onClose,action=_param.action,animate=_param.animate,className=_param.className,value=_param.value,rest=_objectWithoutProperties(_param,["variant","size","color","icon","open","onClose","action","animate","className","value"]);var chip=(0,_theme.useTheme)().chip;var defaultProps=chip.defaultProps,valid=chip.valid,styles=chip.styles;var base=styles.base,variants=styles.variants,sizes=styles.sizes;variant=variant!==null&&variant!==void 0?variant:defaultProps.variant;size=size!==null&&size!==void 0?size:defaultProps.size;color=color!==null&&color!==void 0?color:defaultProps.color;className=className!==null&&className!==void 0?className:defaultProps.className;animate=animate!==null&&animate!==void 0?animate:defaultProps.animate;open=open!==null&&open!==void 0?open:defaultProps.open;action=action!==null&&action!==void 0?action:defaultProps.action;onClose=onClose!==null&&onClose!==void 0?onClose:defaultProps.onClose;var chipBase=(0,_objectsToString.default)(base.chip);var chipAction=(0,_objectsToString.default)(base.action);var chipIcon=(0,_objectsToString.default)(base.icon);var chipVariant=(0,_objectsToString.default)(variants[(0,_findMatch.default)(valid.variants,variant,"filled")][(0,_findMatch.default)(valid.colors,color,"gray")]);var chipSize=(0,_objectsToString.default)(sizes[(0,_findMatch.default)(valid.sizes,size,"md")]["chip"]);var actionSize=(0,_objectsToString.default)(sizes[(0,_findMatch.default)(valid.sizes,size,"md")]["action"]);var iconSize=(0,_objectsToString.default)(sizes[(0,_findMatch.default)(valid.sizes,size,"md")]["icon"]);var classes=(0,_tailwindMerge.twMerge)((0,_classnames.default)(chipBase,chipVariant,chipSize),className);var actionClasses=(0,_classnames.default)(chipAction,actionSize);var iconClasses=(0,_classnames.default)(chipIcon,iconSize);var contentClasses=(0,_classnames.default)({"ml-4":icon&&size==="sm","ml-[18px]":icon&&size==="md","ml-5":icon&&size==="lg","mr-5":onClose});var mainAnimation={unmount:{opacity:0},mount:{opacity:1}};var appliedAnimation=(0,_deepmerge.default)(mainAnimation,animate);var iconTemplate=_react.default.createElement("div",{className:iconClasses},icon);var NewAnimatePresence=_framerMotion.AnimatePresence;return _react.default.createElement(_framerMotion.LazyMotion,{features:_framerMotion.domAnimation},_react.default.createElement(NewAnimatePresence,null,open&&_react.default.createElement(_framerMotion.m.div,_extends({},rest,{ref:ref,className:classes,initial:"unmount",exit:"unmount",animate:open?"mount":"unmount",variants:appliedAnimation}),icon&&iconTemplate,_react.default.createElement("span",{className:contentClasses},value),onClose&&!action&&_react.default.createElement(_iconButton.default,{onClick:onClose,size:"sm",variant:"text",color:variant==="outlined"||variant==="ghost"?color:"white",className:actionClasses},_react.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:(0,_classnames.default)({"h-3.5 w-3.5":size==="sm","h-4 w-4":size==="md","h-5 w-5":size==="lg"}),strokeWidth:2},_react.default.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))),action||null)))});Chip.propTypes={variant:_propTypes.default.oneOf(_chip.propTypesVariant),size:_propTypes.default.oneOf(_chip.propTypesSize),color:_propTypes.default.oneOf(_chip.propTypesColor),icon:_chip.propTypesIcon,open:_chip.propTypesOpen,onClose:_chip.propTypesOnClose,action:_chip.propTypesAction,animate:_chip.propTypesAnimate,className:_chip.propTypesClassName,value:_chip.propTypesValue};Chip.displayName="MaterialTailwind.Chip";var _default=Chip;