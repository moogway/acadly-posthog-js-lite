"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.autocaptureFromTouchEvent=void 0;var _typeof2=_interopRequireDefault(require("@babel/runtime/helpers/typeof"));function _createForOfIteratorHelper(o,allowArrayLike){var it=typeof Symbol!=="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;var F=function F(){};return{s:F,n:function n(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]};},e:function e(_e){throw _e;},f:F};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion=true,didErr=false,err;return{s:function s(){it=it.call(o);},n:function n(){var step=it.next();normalCompletion=step.done;return step;},e:function e(_e2){didErr=true;err=_e2;},f:function f(){try{if(!normalCompletion&&it["return"]!=null)it["return"]();}finally{if(didErr)throw err;}}};}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}var flattenStyles=function flattenStyles(styles){var flattened={};if(Array.isArray(styles)){var _iterator=_createForOfIteratorHelper(styles),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var style=_step.value;Object.assign(flattened,flattenStyles(style));}}catch(err){_iterator.e(err);}finally{_iterator.f();}}else{Object.assign(flattened,styles);}return flattened;};var stringifyStyle=function stringifyStyle(styles){var flattened=flattenStyles(styles);var str=Object.keys(flattened).map(function(x){return"".concat(x,":").concat(flattened[x]);}).join(';');return str;};var sanitiseLabel=function sanitiseLabel(label){return label.replace(/[^a-z0-9]+/gi,'-');};var autocaptureFromTouchEvent=function autocaptureFromTouchEvent(e,posthog){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var _a,_b;var _options$noCapturePro=options.noCaptureProp,noCaptureProp=_options$noCapturePro===void 0?'ph-no-capture':_options$noCapturePro,_options$customLabelP=options.customLabelProp,customLabelProp=_options$customLabelP===void 0?'ph-label':_options$customLabelP,_options$maxElementsC=options.maxElementsCaptured,maxElementsCaptured=_options$maxElementsC===void 0?20:_options$maxElementsC,_options$ignoreLabels=options.ignoreLabels,ignoreLabels=_options$ignoreLabels===void 0?[]:_options$ignoreLabels,_options$propsToCaptu=options.propsToCapture,propsToCapture=_options$propsToCaptu===void 0?['style','testID','accessibilityLabel','ph-label']:_options$propsToCaptu;if(!e._targetInst){return;}var elements=[];var currentInst=e._targetInst;var _loop=function _loop(){var el={tag_name:''};var props=currentInst.memoizedProps;if(props===null||props===void 0?void 0:props[noCaptureProp]){return{v:void 0};}if(props){Object.keys(props).forEach(function(key){if(!propsToCapture.includes(key)){return;}var value=props[key];if(key==='style'){el.attr__style=stringifyStyle(value);}else if(['string','number','boolean'].includes((0,_typeof2["default"])(value))){if(key==='children'){el.$el_text=typeof value==='string'?value:JSON.stringify(value);}else{el["attr__".concat(key)]=value;}}});}var label=typeof(props===null||props===void 0?void 0:props[customLabelProp])!=='undefined'?"".concat(props[customLabelProp]):((_a=currentInst.elementType)===null||_a===void 0?void 0:_a.displayName)||((_b=currentInst.elementType)===null||_b===void 0?void 0:_b.name);if(label&&!ignoreLabels.includes(label)){el.tag_name=sanitiseLabel(label);elements.push(el);}currentInst=currentInst["return"];};while(currentInst&&elements.length<maxElementsCaptured){var _ret=_loop();if((0,_typeof2["default"])(_ret)==="object")return _ret.v;}if(elements.length){posthog.autocapture('touch',elements,{$touch_x:e.nativeEvent.pageX,$touch_y:e.nativeEvent.pageY});}};exports.autocaptureFromTouchEvent=autocaptureFromTouchEvent;