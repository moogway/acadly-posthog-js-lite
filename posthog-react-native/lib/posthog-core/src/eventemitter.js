"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.SimpleEventEmitter=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));function _createForOfIteratorHelper(o,allowArrayLike){var it=typeof Symbol!=="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;var F=function F(){};return{s:F,n:function n(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]};},e:function e(_e){throw _e;},f:F};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion=true,didErr=false,err;return{s:function s(){it=it.call(o);},n:function n(){var step=it.next();normalCompletion=step.done;return step;},e:function e(_e2){didErr=true;err=_e2;},f:function f(){try{if(!normalCompletion&&it["return"]!=null)it["return"]();}finally{if(didErr)throw err;}}};}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}var SimpleEventEmitter=function(){function SimpleEventEmitter(){(0,_classCallCheck2["default"])(this,SimpleEventEmitter);this.events={};this.events={};}(0,_createClass2["default"])(SimpleEventEmitter,[{key:"on",value:function on(event,listener){var _this=this;if(!this.events[event]){this.events[event]=[];}this.events[event].push(listener);return function(){_this.events[event]=_this.events[event].filter(function(x){return x!==listener;});};}},{key:"emit",value:function emit(event,payload){var _iterator=_createForOfIteratorHelper(this.events[event]||[]),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var listener=_step.value;listener(payload);}}catch(err){_iterator.e(err);}finally{_iterator.f();}var _iterator2=_createForOfIteratorHelper(this.events['*']||[]),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var _listener=_step2.value;_listener(event,payload);}}catch(err){_iterator2.e(err);}finally{_iterator2.f();}}}]);return SimpleEventEmitter;}();exports.SimpleEventEmitter=SimpleEventEmitter;