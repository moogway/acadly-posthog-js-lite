"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports.PostHogProvider=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _posthogRn=require("./posthog-rn");var _autocapture=require("./autocapture");var _useNavigationTracker=require("./hooks/useNavigationTracker");var _useLifecycleTracker=require("./hooks/useLifecycleTracker");var _PosthogContext=require("./PosthogContext");var _this=void 0,_jsxFileName="/Users/prashantgautam/dev/acadly-posthog-js-lite/posthog-react-native/lib/posthog-react-native/src/PostHogProvider.js";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function PostHogNavigationHook(_ref){var options=_ref.options;(0,_useNavigationTracker.useNavigationTracker)(options===null||options===void 0?void 0:options.navigation);return null;}function PostHogLifecycleHook(){(0,_useLifecycleTracker.useLifecycleTracker)();return null;}var PostHogProvider=function PostHogProvider(_ref2){var children=_ref2.children,client=_ref2.client,options=_ref2.options,apiKey=_ref2.apiKey,autocapture=_ref2.autocapture,style=_ref2.style;var _a,_b;var _useState=(0,_react.useState)(client),_useState2=(0,_slicedToArray2["default"])(_useState,2),posthog=_useState2[0],setPosthog=_useState2[1];(0,_react.useEffect)(function(){if(apiKey&&!posthog){_posthogRn.PostHog.initAsync(apiKey,options).then(setPosthog);}},[apiKey]);var autocaptureOptions=autocapture&&typeof autocapture!=='boolean'?autocapture:{};var captureTouches=posthog&&(autocapture===true||(autocaptureOptions===null||autocaptureOptions===void 0?void 0:autocaptureOptions.captureTouches));var captureScreens=posthog&&(autocapture===true||((_a=autocaptureOptions===null||autocaptureOptions===void 0?void 0:autocaptureOptions.captureScreens)!==null&&_a!==void 0?_a:true));var captureLifecycle=posthog&&(autocapture===true||((_b=autocaptureOptions===null||autocaptureOptions===void 0?void 0:autocaptureOptions.captureLifecycleEvents)!==null&&_b!==void 0?_b:true));var onTouch=(0,_react.useCallback)(function(type,e){if(!captureTouches){return;}if(type==='end'){(0,_autocapture.autocaptureFromTouchEvent)(e,posthog,autocaptureOptions);}},[posthog,autocapture]);return _react["default"].createElement(_reactNative.View,{"ph-label":"PostHogProvider",style:style||{flex:1},onTouchEndCapture:captureTouches?function(e){return onTouch('end',e);}:undefined,__self:_this,__source:{fileName:_jsxFileName,lineNumber:37,columnNumber:13}},_react["default"].createElement(_PosthogContext.PostHogContext.Provider,{value:{client:posthog},__self:_this,__source:{fileName:_jsxFileName,lineNumber:38,columnNumber:7}},_react["default"].createElement(_react["default"].Fragment,null,captureScreens?_react["default"].createElement(PostHogNavigationHook,{options:autocaptureOptions,__self:_this,__source:{fileName:_jsxFileName,lineNumber:40,columnNumber:29}}):null,captureLifecycle?_react["default"].createElement(PostHogLifecycleHook,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:41,columnNumber:31}}):null),children));};exports.PostHogProvider=PostHogProvider;