"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(require("react"));var _reactHelmet=_interopRequireDefault(require("react-helmet"));var _axios=_interopRequireDefault(require("axios"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}class componentName extends _react.Component{constructor(){super();_defineProperty(this,"getPost",async()=>{const isBrowser=window!==undefined;if(isBrowser){await _axios.default.get(`http://localhost:3004/posts/${this.props.match.params.title}`).then(res=>{if(res.status===200){this.setState({postContent:res.data[0]});console.log(res);}});}});this.state={postContent:{}};}componentDidMount(){this.getPost();}render(){const{postContent}=this.state;return _react.default.createElement("div",null,postContent&&postContent.title&&_react.default.createElement(_reactHelmet.default,null,_react.default.createElement("title",null,postContent.title),_react.default.createElement("meta",{name:"description",content:postContent.meta.description})),postContent&&postContent.title&&_react.default.createElement("div",null,_react.default.createElement("h3",null,postContent.title),_react.default.createElement("div",{className:"main-content"},postContent.body)));}}exports.default=componentName;