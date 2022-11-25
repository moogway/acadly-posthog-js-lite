"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.PostHog=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _get2=_interopRequireDefault(require("@babel/runtime/helpers/get"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _reactNative=require("react-native");var _src=require("../../posthog-core/src");var _storageMemory=require("../../posthog-core/src/storage-memory");var _legacy=require("./legacy");var _storage=require("./storage");var _version=require("./version");var _nativeDeps=require("./native-deps");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2["default"])(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2["default"])(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2["default"])(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var PostHog=function(_PostHogCore){(0,_inherits2["default"])(PostHog,_PostHogCore);var _super=_createSuper(PostHog);function PostHog(apiKey,options,storage){var _this;(0,_classCallCheck2["default"])(this,PostHog);_this=_super.call(this,apiKey,options);_this._memoryStorage=new _storageMemory.PostHogMemoryStorage();_this._appProperties={};_this._persistence=options===null||options===void 0?void 0:options.persistence;_this._appProperties=(options===null||options===void 0?void 0:options.customAppProperties)||(0,_nativeDeps.getAppProperties)();_this._semiAsyncStorage=storage||new _storage.SemiAsyncStorage((options===null||options===void 0?void 0:options.customAsyncStorage)||(0,_nativeDeps.buildOptimisiticAsyncStorage)());_reactNative.AppState.addEventListener('change',function(){_this.flush();});var setupFromStorage=function setupFromStorage(){_this.setupBootstrap(options);if(!_this._semiAsyncStorage.getItem(_src.PostHogPersistedProperty.AnonymousId)){(0,_legacy.getLegacyValues)().then(function(legacyValues){if(legacyValues===null||legacyValues===void 0?void 0:legacyValues.distinctId){_this._semiAsyncStorage.setItem(_src.PostHogPersistedProperty.DistinctId,legacyValues.distinctId);_this._semiAsyncStorage.setItem(_src.PostHogPersistedProperty.AnonymousId,legacyValues.anonymousId);}});}};if(_this._semiAsyncStorage.isPreloaded){setupFromStorage();}else{void _this._semiAsyncStorage.preloadAsync().then(function(){setupFromStorage();});}return _this;}(0,_createClass2["default"])(PostHog,[{key:"getPersistedProperty",value:function getPersistedProperty(key){if(this._persistence==='memory'){return this._memoryStorage.getProperty(key);}return this._semiAsyncStorage.getItem(key)||undefined;}},{key:"setPersistedProperty",value:function setPersistedProperty(key,value){if(this._persistence==='memory'){return this._memoryStorage.setProperty(key,value);}return value!==null?this._semiAsyncStorage.setItem(key,value):this._semiAsyncStorage.removeItem(key);}},{key:"fetch",value:function(_fetch){function fetch(_x,_x2){return _fetch.apply(this,arguments);}fetch.toString=function(){return _fetch.toString();};return fetch;}(function(url,options){return fetch(url,options);})},{key:"getLibraryId",value:function getLibraryId(){return'posthog-react-native';}},{key:"getLibraryVersion",value:function getLibraryVersion(){return _version.version;}},{key:"getCustomUserAgent",value:function getCustomUserAgent(){return;}},{key:"getCommonEventProperties",value:function getCommonEventProperties(){return _objectSpread(_objectSpread(_objectSpread({},(0,_get2["default"])((0,_getPrototypeOf2["default"])(PostHog.prototype),"getCommonEventProperties",this).call(this)),this._appProperties),{},{$device_type:_reactNative.Platform.OS,$screen_height:_reactNative.Dimensions.get('screen').height,$screen_width:_reactNative.Dimensions.get('screen').width});}},{key:"screen",value:function screen(name,properties){return this.capture('$screen',_objectSpread(_objectSpread({},properties),{},{$screen_name:name}));}}],[{key:"initAsync",value:function(){var _initAsync=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(apiKey,options){var storage,posthog;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:storage=new _storage.SemiAsyncStorage((options===null||options===void 0?void 0:options.customAsyncStorage)||(0,_nativeDeps.buildOptimisiticAsyncStorage)());posthog=new PostHog(apiKey,options,storage);_context.next=4;return posthog._semiAsyncStorage.preloadAsync();case 4:return _context.abrupt("return",posthog);case 5:case"end":return _context.stop();}}},_callee);}));function initAsync(_x3,_x4){return _initAsync.apply(this,arguments);}return initAsync;}()}]);return PostHog;}(_src.PostHogCore);exports.PostHog=PostHog;