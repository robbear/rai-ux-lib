"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:true,get:all[name]})}_export(exports,{TabsContext:function(){return TabsContext},useTabs:function(){return useTabs},TabsContextProvider:function(){return TabsContextProvider},setId:function(){return setId},setActive:function(){return setActive},setAnimation:function(){return setAnimation},setIndicator:function(){return setIndicator},setIsInitial:function(){return setIsInitial},setOrientation:function(){return setOrientation}});var _react=_interopRequireDefault(require("react"));var _tabs=require("../../types/components/tabs");function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==="function"){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))}ownKeys.forEach(function(key){_defineProperty(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})}keys.push.apply(keys,symbols)}return keys}function _objectSpreadProps(target,source){source=source!=null?source:{};if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}return target}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(n);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function reducer(state,action){switch(action.type){case"SET_ID":{return _objectSpreadProps(_objectSpread({},state),{id:action.value})}case"SET_ACTIVE":{return _objectSpreadProps(_objectSpread({},state),{active:action.value})}case"SET_ANIMATION":{return _objectSpreadProps(_objectSpread({},state),{appliedAnimation:action.value})}case"SET_INDICATOR":{return _objectSpreadProps(_objectSpread({},state),{indicatorProps:action.value})}case"SET_IS_INITIAL":{return _objectSpreadProps(_objectSpread({},state),{isInitial:action.value})}case"SET_ORIENTATION":{return _objectSpreadProps(_objectSpread({},state),{orientation:action.value})}default:{throw new Error("Unhandled action type: ".concat(action.type))}}}var TabsContext=_react.default.createContext(null);TabsContext.displayName="MaterialTailwind.TabsContext";function useTabs(){var context=_react.default.useContext(TabsContext);if(!context){throw new Error("useTabs() must be used within a Tabs. It happens when you use TabsHeader, TabsBody, Tab or TabPanel outside the Tabs component.")}return context}var TabsContextProvider=function(param){var id=param.id,value=param.value,orientation=param.orientation,children=param.children;var initialState=_react.default.useMemo(function(){return{id:id!==null&&id!==void 0?id:"indicator",active:value,orientation:orientation,isInitial:true,appliedAnimation:{initial:{},unmount:{},mount:{}},indicatorProps:undefined}},[id,value,orientation]);var _React_useReducer=_slicedToArray(_react.default.useReducer(reducer,initialState),2),state=_React_useReducer[0],dispatch=_React_useReducer[1];var contextValue=_react.default.useMemo(function(){return{state:state,dispatch:dispatch}},[state]);return _react.default.createElement(TabsContext.Provider,{value:contextValue},children)};var setId=function(dispatch,value){return dispatch({type:"SET_ID",value:value})};var setActive=function(dispatch,value){return dispatch({type:"SET_ACTIVE",value:value})};var setAnimation=function(dispatch,value){return dispatch({type:"SET_ANIMATION",value:value})};var setIndicator=function(dispatch,value){return dispatch({type:"SET_INDICATOR",value:value})};var setIsInitial=function(dispatch,value){return dispatch({type:"SET_IS_INITIAL",value:value})};var setOrientation=function(dispatch,value){return dispatch({type:"SET_ORIENTATION",value:value})};TabsContextProvider.propTypes={id:_tabs.propTypesId,value:_tabs.propTypesValue,orientation:_tabs.propTypesOrientation,children:_tabs.propTypesChildren};TabsContextProvider.displayName="MaterialTailwind.TabsContextProvider";