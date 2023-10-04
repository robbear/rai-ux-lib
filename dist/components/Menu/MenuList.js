"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:true,get:all[name]})}_export(exports,{MenuList:function(){return MenuList},default:function(){return _default}});var _react=_interopRequireDefault(require("react"));var _react1=require("@floating-ui/react");var _framerMotion=require("framer-motion");var _classnames=_interopRequireDefault(require("classnames"));var _tailwindMerge=require("tailwind-merge");var _objectsToString=_interopRequireDefault(require("../../utils/objectsToString"));var _theme=require("../../context/theme");var _menuContext=require("./MenuContext");var _menu=require("../../types/components/menu");function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}var MenuList=_react.default.forwardRef(function(_param,ref){var children=_param.children,className=_param.className,rest=_objectWithoutProperties(_param,["children","className"]);var menu=(0,_theme.useTheme)().menu;var base=menu.styles.base;var _useMenu=(0,_menuContext.useMenu)(),open=_useMenu.open,handler=_useMenu.handler,strategy=_useMenu.strategy,x=_useMenu.x,y=_useMenu.y,floating=_useMenu.floating,listItemsRef=_useMenu.listItemsRef,getFloatingProps=_useMenu.getFloatingProps,getItemProps=_useMenu.getItemProps,appliedAnimation=_useMenu.appliedAnimation,lockScroll=_useMenu.lockScroll,context=_useMenu.context,activeIndex=_useMenu.activeIndex,tree=_useMenu.tree,allowHover=_useMenu.allowHover,internalAllowHover=_useMenu.internalAllowHover,setActiveIndex=_useMenu.setActiveIndex,nested=_useMenu.nested;className=className!==null&&className!==void 0?className:"";var menuClasses=(0,_tailwindMerge.twMerge)((0,_classnames.default)((0,_objectsToString.default)(base.menu)),className);var mergedRef=(0,_react1.useMergeRefs)([ref,floating]);var NewAnimatePresence=_framerMotion.AnimatePresence;var menuComponent=_react.default.createElement(_framerMotion.m.div,_extends({},rest,{ref:mergedRef,style:{position:strategy,top:y!==null&&y!==void 0?y:0,left:x!==null&&x!==void 0?x:0},className:menuClasses},getFloatingProps({onKeyDown:function onKeyDown(event){if(event.key==="Tab"){handler(false);if(event.shiftKey){event.preventDefault()}}}}),{initial:"unmount",exit:"unmount",animate:open?"mount":"unmount",variants:appliedAnimation}),_react.default.Children.map(children,function(child,index){return _react.default.isValidElement(child)&&_react.default.cloneElement(child,getItemProps({tabIndex:activeIndex===index?0:-1,role:"menuitem",className:child.props.className,ref:function ref(node){listItemsRef.current[index]=node},onClick:function onClick(event){if(child.props.onClick){var _child_props,_child_props_onClick;(_child_props_onClick=(_child_props=child.props).onClick)===null||_child_props_onClick===void 0?void 0:_child_props_onClick.call(_child_props,event)}tree===null||tree===void 0?void 0:tree.events.emit("click")},onMouseEnter:function onMouseEnter(){if(allowHover&&open||internalAllowHover&&open){setActiveIndex(index)}}}))}));return _react.default.createElement(_framerMotion.LazyMotion,{features:_framerMotion.domAnimation},_react.default.createElement(_react1.FloatingPortal,null,_react.default.createElement(NewAnimatePresence,null,open&&_react.default.createElement(_react.default.Fragment,null,lockScroll?_react.default.createElement(_react1.FloatingOverlay,{lockScroll:true},_react.default.createElement(_react1.FloatingFocusManager,{context:context,modal:!nested,initialFocus:nested?-1:0,returnFocus:!nested,visuallyHiddenDismiss:true},menuComponent)):_react.default.createElement(_react1.FloatingFocusManager,{context:context,modal:!nested,initialFocus:nested?-1:0,returnFocus:!nested,visuallyHiddenDismiss:true},menuComponent)))))});MenuList.propTypes={className:_menu.propTypesClassName,children:_menu.propTypesChildren};MenuList.displayName="MaterialTailwind.MenuList";var _default=MenuList;