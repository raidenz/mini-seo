"use strict";var _express=_interopRequireDefault(require("express"));var _expressHttpProxy=_interopRequireDefault(require("express-http-proxy"));var _cors=_interopRequireDefault(require("cors"));var _compression=_interopRequireDefault(require("compression"));var _morgan=_interopRequireDefault(require("morgan"));var _bodyParser=_interopRequireDefault(require("body-parser"));var _path=_interopRequireDefault(require("path"));var _ssr=_interopRequireDefault(require("./ssr"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const app=(0,_express.default)();app.use((0,_cors.default)());app.use((0,_compression.default)());app.use((0,_morgan.default)('dev'));app.use(_bodyParser.default.json());app.use(_bodyParser.default.urlencoded({extended:false}));app.use('/api',(0,_expressHttpProxy.default)('http://localhost:3004'));app.use(_express.default.static(_path.default.resolve(__dirname,'..','build'),{index:false,etag:false}));app.use(_ssr.default);console.log('path',_path.default.resolve(__dirname,'..','build'));const port=process.env.PORT||3030;app.listen(port,function listenHandler(){console.info(`Running on port ${port} ...`);});