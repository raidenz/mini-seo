"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(require("react"));var _reactRouterDom=require("react-router-dom");var _reactHelmet=_interopRequireDefault(require("react-helmet"));var _routes=_interopRequireDefault(require("./routes"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}class App extends _react.Component{render(){return _react.default.createElement(_react.Fragment,null,_react.default.createElement(_reactHelmet.default,null,_react.default.createElement("title",null,"My Title"),_react.default.createElement("meta",{charSet:"utf-8"}),_react.default.createElement("meta",{name:"description",content:"Mini Seo App"}),"link rel=\"manifest\" href=\"/manifest.json\" />",_react.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"}),_react.default.createElement("meta",{name:"googlebot-news",content:"index,follow"}),_react.default.createElement("meta",{name:"mobile-web-app-capable",content:"yes"}),_react.default.createElement("meta",{name:"application-name",content:"Seo App"})),_react.default.createElement("div",{className:"container"},_react.default.createElement("nav",null,_react.default.createElement(_reactRouterDom.Link,{to:"/"},"Homepage"),_react.default.createElement(_reactRouterDom.Link,{to:"/about"},"About"),_react.default.createElement(_reactRouterDom.Link,{to:"/posts"},"Posts")),_react.default.createElement("div",{className:"main-content"},_react.default.createElement(_reactRouterDom.Switch,null,_routes.default.map((route,i)=>_react.default.createElement(_reactRouterDom.Route,_extends({key:i},route)))))));}}exports.default=App;