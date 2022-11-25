"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.getAppProperties=exports.buildOptimisiticAsyncStorage=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _OptionalAsyncStorage=require("./optional/OptionalAsyncStorage");var _OptionalExpoApplication=require("./optional/OptionalExpoApplication");var _OptionalExpoDevice=require("./optional/OptionalExpoDevice");var _OptionalExpoFileSystem=require("./optional/OptionalExpoFileSystem");var _OptionalExpoLocalization=require("./optional/OptionalExpoLocalization");var _OptionalReactNativeDeviceInfo=require("./optional/OptionalReactNativeDeviceInfo");var getAppProperties=function getAppProperties(){var properties={};if(_OptionalExpoApplication.OptionalExpoApplication){properties.$app_build=_OptionalExpoApplication.OptionalExpoApplication.nativeBuildVersion;properties.$app_name=_OptionalExpoApplication.OptionalExpoApplication.applicationName;properties.$app_namespace=_OptionalExpoApplication.OptionalExpoApplication.applicationId;properties.$app_version=_OptionalExpoApplication.OptionalExpoApplication.nativeApplicationVersion;}if(_OptionalExpoDevice.OptionalExpoDevice){properties.$device_manufacturer=_OptionalExpoDevice.OptionalExpoDevice.manufacturer;properties.$device_name=_OptionalExpoDevice.OptionalExpoDevice.modelName;properties.$os_name=_OptionalExpoDevice.OptionalExpoDevice.osName;properties.$os_version=_OptionalExpoDevice.OptionalExpoDevice.osVersion;}if(_OptionalExpoLocalization.OptionalExpoLocalization){properties.$locale=_OptionalExpoLocalization.OptionalExpoLocalization.locale;properties.$timezone=_OptionalExpoLocalization.OptionalExpoLocalization.timezone;}if(_OptionalReactNativeDeviceInfo.OptionalReactNativeDeviceInfo){properties.$app_build=_OptionalReactNativeDeviceInfo.OptionalReactNativeDeviceInfo.getBuildIdSync();properties.$app_name=_OptionalReactNativeDeviceInfo.OptionalReactNativeDeviceInfo.getApplicationName();properties.$app_namespace=_OptionalReactNativeDeviceInfo.OptionalReactNativeDeviceInfo.getBundleId();properties.$app_version=_OptionalReactNativeDeviceInfo.OptionalReactNativeDeviceInfo.getVersion();properties.$device_manufacturer=_OptionalReactNativeDeviceInfo.OptionalReactNativeDeviceInfo.getManufacturerSync();properties.$device_name=_OptionalReactNativeDeviceInfo.OptionalReactNativeDeviceInfo.getDeviceNameSync();properties.$os_name=_OptionalReactNativeDeviceInfo.OptionalReactNativeDeviceInfo.getSystemName();properties.$os_version=_OptionalReactNativeDeviceInfo.OptionalReactNativeDeviceInfo.getSystemVersion();}return properties;};exports.getAppProperties=getAppProperties;var buildOptimisiticAsyncStorage=function buildOptimisiticAsyncStorage(){if(_OptionalExpoFileSystem.OptionalExpoFileSystem){var filesystem=_OptionalExpoFileSystem.OptionalExpoFileSystem;return{getItem:function getItem(key){return(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(){var uri,stringContent;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:uri=(filesystem.documentDirectory||'')+key;_context.prev=1;_context.next=4;return filesystem.readAsStringAsync(uri);case 4:stringContent=_context.sent;return _context.abrupt("return",stringContent);case 8:_context.prev=8;_context.t0=_context["catch"](1);return _context.abrupt("return",null);case 11:case"end":return _context.stop();}}},_callee,null,[[1,8]]);}))();},setItem:function setItem(key,value){return(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(){var uri;return _regenerator["default"].wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:uri=(filesystem.documentDirectory||'')+key;_context2.next=3;return filesystem.writeAsStringAsync(uri,value);case 3:case"end":return _context2.stop();}}},_callee2);}))();}};}if(_OptionalAsyncStorage.OptionalAsyncStorage){return _OptionalAsyncStorage.OptionalAsyncStorage;}throw new Error('PostHog: No storage available. Please install expo-filesystem or react-native-async-storage OR implement a custom storage provider.');};exports.buildOptimisiticAsyncStorage=buildOptimisiticAsyncStorage;