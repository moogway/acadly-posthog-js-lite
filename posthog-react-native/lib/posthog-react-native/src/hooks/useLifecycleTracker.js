"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.useLifecycleTracker=useLifecycleTracker;var _react=require("react");var _reactNative=require("react-native");var _usePostHog=require("./usePostHog");function useLifecycleTracker(client){var openTrackedRef=(0,_react.useRef)(false);var contextClient=(0,_usePostHog.usePostHog)();var posthog=client||contextClient;return(0,_react.useEffect)(function(){if(!posthog){return;}if(!openTrackedRef.current){openTrackedRef.current=true;posthog.capture('Application Opened');}var subscription=_reactNative.AppState.addEventListener('change',function(nextAppState){switch(nextAppState){case'active':return posthog.capture('Application Became Active');case'background':return posthog.capture('Application Backgrounded');default:return;}});return function(){return subscription.remove();};},[posthog]);}