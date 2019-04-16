(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectSpread");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(21);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(39);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(41);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(23);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(30);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(42);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(22);

var _helpers = __webpack_require__(43);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20)(module)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(22);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(40)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_6__);








var Index =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Index, _React$Component);

  function Index() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Index);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Index).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.changeDirectory();
    }
  }, {
    key: "changeDirectory",
    value: function changeDirectory() {
      if (typeof window !== "undefined") {
        var userLang = window.navigator.language || window.navigator.userLanguage;

        if (userLang === "da-DK") {
          window.location.href = "/da/";
        } else {
          window.location.href = "/en/";
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null);
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_facebook_pixel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony import */ var react_facebook_pixel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_facebook_pixel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17);








function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_2__["Root"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null, "Loading...")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_3__["Router"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "default": true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_2__["Routes"], {
    path: "*"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_3__["LocationProvider"], null, function (_ref) {
    var location = _ref.location;

    if (typeof window !== "undefined") {
      // Google analytics
      react_ga__WEBPACK_IMPORTED_MODULE_5___default.a.initialize("UA-70000511-1");
      react_ga__WEBPACK_IMPORTED_MODULE_5___default.a.pageview(location.pathname); // Facebook pixel

      react_facebook_pixel__WEBPACK_IMPORTED_MODULE_4___default.a.init("219644851800920");
      react_facebook_pixel__WEBPACK_IMPORTED_MODULE_4___default.a.pageView();
      return null;
    }
  }));
} // Default expert for static rendering


/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(21);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(15);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-facebook-pixel");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("emailjs-com");

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "../node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "../node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "../node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "..",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("/Users/kyle/Projects/ticketbutler/billetfix-homepage/node_modules/react-static/lib/browser");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_kyle_Projects_ticketbutler_billetfix_homepage_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _Users_kyle_Projects_ticketbutler_billetfix_homepage_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_kyle_Projects_ticketbutler_billetfix_homepage_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__);








Object(_Users_kyle_Projects_ticketbutler_billetfix_homepage_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = _Users_kyle_Projects_ticketbutler_billetfix_homepage_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../node_modules/react-static/lib/browser/components/Default404",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 31, 7))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../node_modules/react-static/lib/browser/components/Default404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(31);
  },
  chunkName: function chunkName() {
    return "node_modules/react-static/lib/browser/components/Default404";
  }
}), universalOptions);
t_0.template = '../node_modules/react-static/lib/browser/components/Default404';
var t_1 = _Users_kyle_Projects_ticketbutler_billetfix_homepage_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 17))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(17);
  },
  chunkName: function chunkName() {
    return "src/pages/index";
  }
}), universalOptions);
t_1.template = '../src/pages/index.js';
var t_2 = _Users_kyle_Projects_ticketbutler_billetfix_homepage_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/layouts/cms_page",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/layouts/cms_page */).then(__webpack_require__.bind(null, 33))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/layouts/cms_page');
  },
  resolve: function resolve() {
    return /*require.resolve*/(33);
  },
  chunkName: function chunkName() {
    return "src/layouts/cms_page";
  }
}), universalOptions);
t_2.template = '../src/layouts/cms_page'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '../node_modules/react-static/lib/browser/components/Default404': t_0,
  '../src/pages/index.js': t_1,
  '../src/layouts/cms_page': t_2 // Not Found Template

});
var notFoundTemplate = "../node_modules/react-static/lib/browser/components/Default404";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("/Users/kyle/Projects/ticketbutler/billetfix-homepage/node_modules/react-static/lib/browser/components/Default404");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700);", ""]);

// Module
exports.push([module.i, "* {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    \n}\n\nhtml {\n\n        scroll-behavior: smooth;\n     \n    height: 100%;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n    font-family: Quicksand, sans-serif;\n    height: 100%;\n}\n\n\na:hover {\n    color: #ff4a6e !important;\n    text-decoration: none\n}\n\n\n.scroll-header :nth-child(n + 2){\n    color: black!important;\n\n}\n\nsvg{\n fill: #ff4a6e;\n    display: inline-block;\n    vertical-align: middle;\n}\n.menuVisible{\nright: 250px!important;\n    \n\n}\n\n.visible{\n    visibility: visible !important;\n    opacity: 1 !important;\n}", ""]);



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(9);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(11);

// EXTERNAL MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/layouts/styles/layout-overide.css
var layout_overide = __webpack_require__(32);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectSpread"
var objectSpread_ = __webpack_require__(1);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(4);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(5);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(6);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(8);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(7);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(2);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/components/helpers.js








var helpers_WindowHelper =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(WindowHelper, _React$Component);

  function WindowHelper() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, WindowHelper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(WindowHelper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      width: null,
      scrollY: 0
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setWidth", function () {
      _this.setState({
        width: window.innerWidth
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setScroll", function () {
      _this.setState({
        scrollY: window.scrollY
      });
    });

    return _this;
  }

  createClass_default()(WindowHelper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setWidth();
      window.addEventListener("resize", function () {
        _this2.setWidth();
      });
      window.addEventListener("scroll", function () {
        _this2.setScroll();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children(this.state);
    }
  }]);

  return WindowHelper;
}(external_react_["Component"]);
// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/components/partners.js




var partners_Partners = function Partners(_ref) {
  var images = _ref.images;
  return external_react_default.a.createElement(helpers_WindowHelper, null, function (window) {
    return external_react_default.a.createElement("section", null, external_react_default.a.createElement("div", {
      style: objectSpread_default()({
        display: "flex",
        background: "#fff",
        zIndex: "1",
        flexFlow: "row wrap",
        width: "100%",
        justifyContent: "space-around"
      }, window.width > 980 ? {
        padding: "32px"
      } : {
        padding: "35px"
      })
    }, images.map(function (img) {
      return external_react_default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: img.href
      }, external_react_default.a.createElement("img", {
        alt: "partners-logo",
        style: {
          objectFit: "contain",
          maxHeight: "80px",
          maxWidth: "192px",
          padding: "16px",
          filter: "grayscale(100%)"
        },
        src: img.src
      }));
    })));
  });
};

/* harmony default export */ var partners = (partners_Partners);
// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/components/icons/smileyHiIcon.js


var smileyHiIcon_SmileyHiIcon = function SmileyHiIcon(_ref) {
  var style = _ref.style;
  return external_react_default.a.createElement("svg", {
    style: objectSpread_default()({
      width: '15em',
      fill: '#ff4a6e',
      display: 'inline-block',
      verticalAlign: 'middle',
      margin: ' 0 5px',
      height: '15em'
    }, style),
    version: "1.1",
    id: "Layer_1",
    x: "0px",
    y: "0px",
    width: "25.75px",
    height: "30.75px",
    viewBox: "0 0 25.75 30.75",
    "enable-background": "new 0 0 25.75 30.75"
  }, external_react_default.a.createElement("g", null, external_react_default.a.createElement("g", null, external_react_default.a.createElement("path", {
    fill: "#EF4C6F",
    d: "M12.41,6c-5.336,0-9.66,4.324-9.66,9.66c0,2.762,1.164,5.242,3.02,7.004l-0.325,5.379l4.59-3.025 c0.762,0.189,1.555,0.308,2.375,0.308c5.336,0,9.66-4.328,9.66-9.664S17.746,6,12.41,6L12.41,6z M15.664,10.73h1.125l-0.793,3.293 h-0.805L15.664,10.73z M15.461,14.387c0.355,0,0.602,0.254,0.602,0.609c0,0.414-0.305,0.711-0.711,0.711 c-0.354,0-0.59-0.254-0.59-0.594C14.762,14.727,15.055,14.387,15.461,14.387L15.461,14.387z M14.254,10.527 c0.305,0,0.523,0.203,0.523,0.516c0,0.371-0.285,0.59-0.617,0.59c-0.293,0-0.508-0.196-0.508-0.508 C13.656,10.77,13.934,10.527,14.254,10.527L14.254,10.527z M14.551,12.074l-0.676,3.551h-1.047l0.676-3.551H14.551z M8.961,10.73 h1.047l-0.363,1.911h1.781l0.363-1.911h1.047l-0.93,4.899h-1.047l0.383-2.059H9.473l-0.395,2.059H8.031L8.961,10.73z M12.41,22.186c-2.668,0-4.832-2.119-4.832-3.336c0-1.221,2.164,0.049,4.832,0.049s4.832-1.27,4.832-0.049 C17.242,20.066,15.078,22.186,12.41,22.186L12.41,22.186z"
  })), external_react_default.a.createElement("g", null, external_react_default.a.createElement("path", {
    d: "M12.41,6c-5.336,0-9.66,4.324-9.66,9.66c0,2.762,1.164,5.242,3.02,7.004l-0.325,5.379l4.59-3.025 c0.762,0.189,1.555,0.308,2.375,0.308c5.336,0,9.66-4.328,9.66-9.664S17.746,6,12.41,6L12.41,6z M15.664,10.73h1.125l-0.793,3.293 h-0.805L15.664,10.73z M15.461,14.387c0.355,0,0.602,0.254,0.602,0.609c0,0.414-0.305,0.711-0.711,0.711 c-0.354,0-0.59-0.254-0.59-0.594C14.762,14.727,15.055,14.387,15.461,14.387L15.461,14.387z M14.254,10.527 c0.305,0,0.523,0.203,0.523,0.516c0,0.371-0.285,0.59-0.617,0.59c-0.293,0-0.508-0.196-0.508-0.508 C13.656,10.77,13.934,10.527,14.254,10.527L14.254,10.527z M14.551,12.074l-0.676,3.551h-1.047l0.676-3.551H14.551z M8.961,10.73 h1.047l-0.363,1.911h1.781l0.363-1.911h1.047l-0.93,4.899h-1.047l0.383-2.059H9.473l-0.395,2.059H8.031L8.961,10.73z M12.41,22.186c-2.668,0-4.832-2.119-4.832-3.336c0-1.221,2.164,0.049,4.832,0.049s4.832-1.27,4.832-0.049 C17.242,20.066,15.078,22.186,12.41,22.186L12.41,22.186z"
  }))));
};
// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/components/picture-right.js





var picture_right_PictureRight = function PictureRight(_ref) {
  var heading = _ref.heading,
      texts = _ref.texts;
  return external_react_default.a.createElement(helpers_WindowHelper, null, function (window) {
    return external_react_default.a.createElement("section", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
        background: "#f7f7f7",
        padding: "100px 6%",
        position: "relative"
      },
      id: "teaser"
    }, external_react_default.a.createElement("div", {
      style: objectSpread_default()({
        padding: "0 10px"
      }, window.width > 980 ? {
        maxWidth: "50%",
        minWidth: "33%"
      } : {
        width: "100%"
      }),
      className: "details"
    }, external_react_default.a.createElement("h3", {
      style: objectSpread_default()({
        fontSize: "30px",
        letterSpacing: "3px",
        lineHeight: "1.2em",
        margin: ".25em 0",
        color: "#ff4a6e",
        fontWeight: "400"
      }, window.width > 980 ? {
        fontSize: "30px",
        lineHeight: "40px"
      } : window.widht > 450 ? {
        fontSize: "22px",
        lineHeight: "27px"
      } : {
        fontSize: "21px",
        lineHeight: "26px",
        fontWeight: "500"
      })
    }, heading), texts.map(function (text) {
      return external_react_default.a.createElement("p", {
        style: {
          lineHeight: "25px",
          letterSpacing: "2px",
          marginTop: "16px",
          fontSize: "17px",
          color: "#333",
          fontWeight: "100"
        }
      }, text);
    })), external_react_default.a.createElement("div", {
      className: "icon",
      style: objectSpread_default()({
        minWidth: "33%",
        padding: "0 10px"
      }, window.width > 680 ? {} : {
        display: "none"
      })
    }, external_react_default.a.createElement(smileyHiIcon_SmileyHiIcon, null)));
  });
};

/* harmony default export */ var picture_right = (picture_right_PictureRight);
// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/components/features.js




var features_Features = function Features(_ref) {
  var features = _ref.features;
  return external_react_default.a.createElement(helpers_WindowHelper, null, function (window) {
    return external_react_default.a.createElement("section", {
      id: "features",
      style: objectSpread_default()({
        flexFlow: "row nowrap",
        justyfy: "space-between",
        alignItems: "flex-start",
        textAlign: "center",
        padding: "100px 2vw"
      }, window.width > 980 ? {
        display: "flex"
      } : {
        display: "block"
      })
    }, features.map(function (feature) {
      return external_react_default.a.createElement("div", {
        style: objectSpread_default()({
          margin: "0 auto",
          padding: "0 1vw"
        }, window.width > 980 ? {
          maxWidth: "30%",
          padding: "0 1vw"
        } : {
          maxWidth: "100%",
          padding: "20px 2%"
        })
      }, external_react_default.a.createElement("img", {
        src: feature.image,
        style: {
          width: "7.5em"
        },
        alt: "features1"
      }), external_react_default.a.createElement("h4", {
        style: objectSpread_default()({
          textTransform: "uppercase",
          fontWeight: "500",
          letterSpacing: "2px",
          marginTop: "19px"
        }, window.width > 980 ? {
          fontSize: "21px",
          lineHeight: "38px"
        } : {
          fontSize: "20px",
          lineHeight: "28px"
        })
      }, feature.title), external_react_default.a.createElement("p", {
        style: {
          fontSize: "16px",
          lineHeight: "24.64px",
          fontWeight: "100",
          letterSpacing: "2px",
          textAlign: "justify",
          margin: "10px"
        },
        dangerouslySetInnerHTML: {
          __html: feature.text
        }
      }));
    }));
  });
};

/* harmony default export */ var components_features = (features_Features);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(23);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectWithoutProperties"
var objectWithoutProperties_ = __webpack_require__(10);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties_);

// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/components/elements/elements.js











var elements_Button =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Button, _React$Component);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      hover: false
    });

    return _this;
  }

  createClass_default()(Button, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          style = _this$props.style,
          children = _this$props.children,
          props = objectWithoutProperties_default()(_this$props, ["style", "children"]);

      return external_react_default.a.createElement("button", extends_default()({
        style: objectSpread_default()({
          letterSpacing: '3px',
          padding: '16px 17px',
          margin: '0',
          borderTopLeftRadius: '0',
          borderBottomLeftRadius: '0',
          fontSize: '15px',
          border: '1px solid #ff4a6e',
          transition: 'all .15s',
          outline: 'none',
          textTransform: 'uppercase',
          cursor: 'pointer'
        }, style, this.state.hover ? {
          background: 'white',
          color: '#ff4a6e'
        } : {
          background: '#ff4a6e',
          color: '#fff'
        }),
        onMouseEnter: function onMouseEnter() {
          _this2.setState({
            hover: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          _this2.setState({
            hover: false
          });
        }
      }, props), children);
    }
  }]);

  return Button;
}(external_react_default.a.Component);

defineProperty_default()(elements_Button, "defaultProps", {
  style: {}
});

var elements_Switch =
/*#__PURE__*/
function (_React$Component2) {
  inherits_default()(Switch, _React$Component2);

  function Switch() {
    var _getPrototypeOf3;

    var _this3;

    classCallCheck_default()(this, Switch);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = possibleConstructorReturn_default()(this, (_getPrototypeOf3 = getPrototypeOf_default()(Switch)).call.apply(_getPrototypeOf3, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this3), "state", {
      on: false
    });

    defineProperty_default()(assertThisInitialized_default()(_this3), "toggle", function () {
      _this3.setState(function (_ref) {
        var on = _ref.on;
        return {
          on: !on
        };
      });
    });

    return _this3;
  }

  createClass_default()(Switch, [{
    key: "render",
    value: function render() {
      return this.props.children(objectSpread_default()({}, this.state, {
        toggle: this.toggle
      }));
    }
  }]);

  return Switch;
}(external_react_default.a.Component);
// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/components/icons/fbIcon.js

var fbIcon_FBIcon = function FBIcon(_ref) {
  var style = _ref.style;
  return external_react_default.a.createElement("svg", {
    style: {
      height: '24px',
      width: '24px',
      display: 'inline-block',
      verticalAlign: 'middle',
      margin: '0 5px'
    },
    version: "1.1",
    id: "Layer_1",
    x: "0px",
    y: "0px",
    width: "82px",
    height: "82px",
    viewBox: "0 0 82 82",
    "enable-background": "new 0 0 82 82"
  }, external_react_default.a.createElement("g", null, external_react_default.a.createElement("g", null, external_react_default.a.createElement("path", {
    fill: "#EF4C6F",
    d: "M77,17c0-6.305-5.691-12-12-12H17C10.691,5,5,10.695,5,17v48c0,6.307,5.691,12,12,12h24V49.801h-8.801v-12 H41v-4.676c0-8.063,6.055-15.324,13.5-15.324h9.699v12H54.5c-1.062,0-2.301,1.289-2.301,3.219v4.781h12v12h-12V77H65 c6.309,0,12-5.693,12-12V17z"
  })), external_react_default.a.createElement("g", null, external_react_default.a.createElement("path", {
    d: "M77,17c0-6.305-5.691-12-12-12H17C10.691,5,5,10.695,5,17v48c0,6.307,5.691,12,12,12h24V49.801h-8.801v-12H41v-4.676 c0-8.063,6.055-15.324,13.5-15.324h9.699v12H54.5c-1.062,0-2.301,1.289-2.301,3.219v4.781h12v12h-12V77H65c6.309,0,12-5.693,12-12 V17z"
  }))));
};
// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/components/footer.js





var footer_Footer = function Footer(_ref) {
  var links = _ref.links;
  return external_react_default.a.createElement(helpers_WindowHelper, null, function (window) {
    return external_react_default.a.createElement("footer", {
      style: {
        display: "flex",
        flexFlow: "row wrap",
        textAlign: "center",
        justifyContent: "space-between",
        backgroundColor: " #f7f7f7",
        width: "100%"
      }
    }, links.filter(function (_ref2) {
      var type = _ref2.type;
      return type === "leftSection";
    }).map(function (data) {
      return external_react_default.a.createElement("div", {
        style: objectSpread_default()({
          fontWeight: "100",
          lineHeight: "20px",
          fontSize: "13px",
          letterSpacing: "1px",
          textAlign: "left",
          padding: "25px"
        }, window.width > 980 ? {
          marginLeft: "92px"
        } : {
          display: "block",
          width: "100%",
          textAlign: "center"
        })
      }, external_react_default.a.createElement("p", {
        style: {
          margin: "0"
        }
      }, " ", data.line1), external_react_default.a.createElement("a", {
        style: {
          color: "#ff4a6e",
          textDecoration: "none"
        },
        href: data.linkTicketbutler,
        target: "_blank",
        rel: "noopener noreferrer"
      }, data.linkText), external_react_default.a.createElement("span", null, " ", data.cvr));
    }), external_react_default.a.createElement("div", {
      style: objectSpread_default()({
        fontWeight: "700",
        fontSize: "14px",
        textAlign: "center",
        lineHeight: "1.8em",
        letterSpacing: "1px"
      }, window.width > 980 ? {} : {
        display: "block",
        width: "100%",
        textAlign: "center"
      })
    }, external_react_default.a.createElement("ul", {
      style: {
        listStyleType: "none",
        margin: "0",
        padding: "25px",
        minWidth: "300px"
      },
      className: "middle-column"
    }, links.filter(function (_ref3) {
      var type = _ref3.type;
      return type === "centerSection";
    }).map(function (data) {
      return external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        style: {
          color: "#ff4a6e",
          textDecoration: "none",
          fontSize: "16px"
        },
        href: data.link
      }, data.caption));
    }), links.filter(function (_ref4) {
      var type = _ref4.type;
      return type === "icon";
    }).map(function (data) {
      return external_react_default.a.createElement("li", null, external_react_default.a.createElement(fbIcon_FBIcon, null), external_react_default.a.createElement("a", {
        style: {
          color: "#ff4a6e",
          textDecoration: "none",
          fontSize: "16px"
        },
        href: data.link,
        target: "_blank",
        rel: "noopener noreferrer"
      }, data.caption));
    }))), external_react_default.a.createElement("div", {
      style: objectSpread_default()({
        textAlign: "right",
        listStyleType: "none",
        padding: "25px",
        minWidth: "300px"
      }, window.width > 980 ? {
        marginRight: "92px"
      } : {
        display: "block",
        width: "100%",
        textAlign: "center"
      }),
      className: "right-column"
    }, links.filter(function (_ref5) {
      var type = _ref5.type;
      return type === "rightSection";
    }).map(function (data) {
      return external_react_default.a.createElement("p", {
        style: {
          margin: "0",
          fontWeight: "100",
          lineHeight: "20px",
          fontSize: "13px",
          letterSpacing: "1px"
        }
      }, data.text);
    }), links.filter(function (_ref6) {
      var type = _ref6.type;
      return type === "rightSectionMail";
    }).map(function (data) {
      return external_react_default.a.createElement("p", {
        style: {
          margin: "0",
          fontWeight: "100",
          lineHeight: "20px",
          fontSize: "13px",
          letterSpacing: "1px"
        }
      }, external_react_default.a.createElement("a", {
        style: {
          color: "#ff4a6e"
        },
        href: data.href
      }, data.text));
    })));
  });
};

/* harmony default export */ var footer = (footer_Footer);
// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(35);

// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/components/languageLink.js











var languageLink_LanguageLink =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(LanguageLink, _React$Component);

  function LanguageLink() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, LanguageLink);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(LanguageLink)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      hovered: false
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "hoveredTimeout", null);

    return _this;
  }

  createClass_default()(LanguageLink, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement(helpers_WindowHelper, null, function (window) {
        return external_react_default.a.createElement("li", {
          style: objectSpread_default()({
            textDecoration: "none",
            transition: "all 0.5s",
            cursor: "pointer",
            display: "inline-block"
          }, window.width > 980 ? {
            marginLeft: "16px",
            fontSize: "13px",
            color: "#f7f7f7",
            // marginLeft: '8px',
            fontWeight: "500",
            padding: "0 10px"
          } : {
            marginLeft: "21px",
            padding: "15px 20px",
            fontSize: "15px",
            fontWeight: "600",
            color: "#333",
            display: "block"
          })
        }, external_react_default.a.createElement("div", {
          style: objectSpread_default()({}, window.width > 980 ? objectSpread_default()({
            marginLeft: "0",
            display: "flex"
          }, _this2.props.fadeHeader ? window.scrollY >= 10 ? {
            color: "black"
          } : {
            color: "white"
          } : {
            color: "black"
          }) : {
            display: "block",
            marginLeft: "-33px"
          }),
          onMouseOver: function onMouseOver() {
            if (_this2.hoveredTimeout) clearTimeout(_this2.hoveredTimeout);

            _this2.setState({
              hovered: true
            });
          },
          onMouseLeave: function onMouseLeave() {
            _this2.hoveredTimeout = setTimeout(function () {
              _this2.setState({
                hovered: false
              });
            }, 1000);
          }
        }, external_react_default.a.createElement("span", {
          style: {
            marginRight: "10px"
          }
        }, _this2.props.currentLanguage.label), external_react_default.a.createElement("span", null, external_react_default.a.createElement("img", {
          alt: "current-language-icon",
          src: _this2.props.currentLanguage.icon,
          style: {
            height: "20px"
          }
        }))), external_react_default.a.createElement("li", {
          id: "anotherLanguage",
          className: _this2.state.hovered ? "visible" : "",
          style: objectSpread_default()({
            cursor: "pointer"
          }, window.width > 980 ? {
            opacity: "0",
            visibility: "hidden",
            position: " absolute",
            display: "inline-block",
            padding: "3px 15px",
            transform: "translate(-50%)",
            cursor: "pointer",
            boxShadow: " 0 1px 7px 2px rgba(0,0,0,.2)",
            top: "65px",
            right: "2.2%",
            background: "#fff",
            transition: "all .25s"
          } : {
            marginLeft: "-33px",
            padding: "15px 20px",
            fontSize: "15px",
            fontWeight: "600",
            color: "#333",
            display: "block",
            marginTop: "10px"
          })
        }, external_react_default.a.createElement("div", null, _this2.props.otherLanguages.map(function (language) {
          return external_react_default.a.createElement("a", {
            href: language.link,
            style: {
              textDecoration: "none"
            }
          }, external_react_default.a.createElement("span", {
            style: objectSpread_default()({
              whiteSpace: "nowrap"
            }, window.width > 980 ? {
              display: "flex"
            } : {}, {
              padding: "9px 0"
            })
          }, external_react_default.a.createElement("span", {
            style: {
              color: "black",
              marginRight: "6px"
            }
          }, language.label), external_react_default.a.createElement("img", {
            alt: "other-language-icon",
            src: language.icon,
            style: {
              display: "inline-block",
              width: "30px",
              height: "20px"
            }
          })));
        }))));
      });
    }
  }]);

  return LanguageLink;
}(external_react_default.a.Component);

/* harmony default export */ var languageLink = (languageLink_LanguageLink);
// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/layouts/index.js










var styles = {
  hamburger: {
    backgroundColor: "#333",
    width: "22px",
    height: "2px",
    borderRadius: "1px",
    margin: "4px 0"
  }
};
var layouts_Layout = function Layout(_ref) {
  var children = _ref.children,
      data = _ref.data,
      metaData = _ref.metaData,
      fadeHeader = _ref.fadeHeader,
      target = _ref.target,
      title = _ref.title,
      metadescription = _ref.metadescription,
      nav = _ref.nav,
      currentLocal = _ref.currentLocal,
      locales = _ref.locales;
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_react_helmet_["Helmet"], null, external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    href: "/assets/img/favicon.png",
    type: "image/png"
  }), external_react_default.a.createElement("meta", {
    property: "og:image",
    content: "billetfix.dk/img/SEOimg.jpg"
  }), external_react_default.a.createElement("meta", {
    property: "og:site_name",
    content: "".concat(metaData.companyName)
  }), external_react_default.a.createElement("meta", {
    name: "theme-color",
    content: "#ef4c6f"
  }), external_react_default.a.createElement("meta", {
    name: "msapplication-navbutton-color",
    content: "#ef4c6f"
  }), external_react_default.a.createElement("meta", {
    name: "apple-mobile-web-app-status-bar-style",
    content: "#ef4c6f"
  }), external_react_default.a.createElement("title", null, "".concat(title)), external_react_default.a.createElement("meta", {
    name: "description",
    content: "".concat(metadescription)
  }), external_react_default.a.createElement("meta", {
    property: "og:type",
    content: "business.business"
  }), external_react_default.a.createElement("meta", {
    property: "og:url",
    content: "".concat(metaData.url)
  }), external_react_default.a.createElement("meta", {
    property: "business:contact_data:street_address",
    content: "".concat(metaData.address)
  }), external_react_default.a.createElement("meta", {
    property: "business:contact_data:locality",
    content: "".concat(metaData.locality)
  }), external_react_default.a.createElement("meta", {
    property: "business:contact_data:region",
    content: "".concat(metaData.region)
  }), external_react_default.a.createElement("meta", {
    property: "business:contact_data:postal_code",
    content: "".concat(metaData.postalCode)
  }), external_react_default.a.createElement("meta", {
    property: "business:contact_data:country_name",
    content: "".concat(metaData.country)
  }), external_react_default.a.createElement("script", {
    type: "application/ld+json"
  }, "\n\n        {\n            \"@context\": \"http://schema.org\",\n            \"@type\": \"LocalBusiness\",\n            \"name\": \"Billetfix\",\n           \n            \"image\": \"/assets/img/logox400.png\",\n            \"@id\": \"\",\n            \"url\": \"billetfix.dk\",\n            \"telephone\": \"89 80 12 80\",\n            \"address\": {\n                \"@type\": \"PostalAddress\",\n                \"streetAddress\": \"Esplanaden 7, K\xF8benhavn K\",\n                \"addressLocality\": \"K\xF8benhavn\",\n                \"postalCode\": \"1263\",\n                \"addressCountry\": \"DA\"\n            },\n            \"sameAs\": [\n                \"https://www.facebook.com/BilletFix/\",\n                \"https://www.linkedin.com/company/billetfix/\"\n            ], \n            \n            \"founders\": [\n            {\n              \"@type\": \"Person\",\n              \"name\": \"Mads Kjer\",\n              \"sameAs\": \n              \"https://www.linkedin.com/in/madskjer/\"\n          \n          },\n          {\n              \"@type\": \"Person\",\n              \"name\": \"Emil Br\xF8gger Kjer\",\n              \"sameAs\": \n              \"https://www.linkedin.com/in/emilkjer/\"\n              \n          },\n          {\n              \"@type\": \"Person\",\n              \"name\": \"Kyle Thomson\",\n              \"sameAs\":\n              \"https://www.linkedin.com/in/kyle-thomson/\"\n              \n          }\n          ]\n        }\n        ")), external_react_default.a.createElement("div", null, external_react_default.a.createElement(helpers_WindowHelper, null, function (window) {
    return external_react_default.a.createElement("nav", {
      id: "nav",
      style: objectSpread_default()({
        top: "0",
        width: "100%",
        display: "flex",
        position: "fixed",
        justifyContent: "space-between",
        zIndex: "999",
        transition: "all 0.5s",
        padding: "15px 5%"
      }, fadeHeader ? window.scrollY >= 10 ? {
        backgroundColor: "#f5f5f5"
      } : {
        backgroundColor: "transparent"
      } : {
        backgroundColor: "#f5f5f5"
      })
    }, external_react_default.a.createElement("a", {
      href: "/" + currentLocal.id
    }, external_react_default.a.createElement("img", {
      src: "/assets/img/logox400.png",
      alt: "Logo",
      style: {
        margin: "0",
        maxWidth: "160px",
        maxHeight: "70px"
      }
    })), external_react_default.a.createElement("div", {
      id: "navDiv",
      style: objectSpread_default()({
        padding: "0",
        transition: "all .25s"
      }, window.width > 980 ? {
        margin: "10px"
      } : {
        transform: "translateX(100%)",
        position: "absolute",
        textAlign: "center",
        top: "75px",
        right: "-140px",
        width: "80%",
        maxWidth: "250px",
        alignItems: "baseline",
        background: "#f5f5f5",
        boxShadow: "0 3px 5px rgba(60,60,60,.03)"
      })
    }, nav.topNav.map(function (_ref2) {
      var type = _ref2.type,
          link = _ref2.link,
          caption = _ref2.caption,
          _ref2$attributes = _ref2.attributes,
          attributes = _ref2$attributes === void 0 ? {} : _ref2$attributes,
          buttonText = _ref2.buttonText;

      if (type === "buttonLink") {
        return external_react_default.a.createElement("a", {
          style: objectSpread_default()({}, window.width < 980 ? {
            paddingBottom: "10px",
            display: "block",
            marginTop: "30px"
          } : {}),
          href: "https://billetfix.dk/event/create_event/"
        }, external_react_default.a.createElement(elements_Button, {
          style: {
            margin: "-11px auto",
            padding: "8px 13px",
            borderRadius: "2px",
            cursor: "pointer",
            fontSize: "13px",
            textAlign: "center",
            fontWeight: "400"
          }
        }, buttonText));
      } else {
        return external_react_default.a.createElement("a", extends_default()({
          style: objectSpread_default()({
            textDecoration: "none",
            transition: "all 0.5s"
          }, window.width > 980 ? objectSpread_default()({
            fontWeight: "500",
            marginLeft: "16px",
            fontSize: "13px",
            color: "#f7f7f7",
            padding: "0 10px"
          }, fadeHeader ? window.scrollY >= 10 ? {
            color: "black"
          } : {
            color: "white"
          } : {
            color: "black"
          }) : {
            marginLeft: "0",
            padding: "15px 20px",
            fontSize: "15px",
            fontWeight: "600",
            color: "#333",
            display: "block"
          }),
          href: link
        }, attributes), caption);
      }
    }), external_react_default.a.createElement(languageLink, {
      fadeHeader: fadeHeader,
      currentLanguage: currentLocal,
      otherLanguages: locales.filter(function (local) {
        return local.id !== currentLocal.id;
      })
    })), external_react_default.a.createElement("div", {
      style: objectSpread_default()({
        backgroundColor: "#ddd",
        borderRadius: "4px",
        padding: "5px 10px",
        cursor: "pointer",
        position: "fixed",
        right: "30px"
      }, window.width > 980 ? {
        marginTop: "6px",
        display: "none"
      } : window.width > 450 ? {
        marginTop: "6px"
      } : {
        marginTop: "5px",
        display: "block"
      }),
      onClick: function onClick() {
        document.getElementById("navDiv").classList.toggle("menuVisible");
      }
    }, external_react_default.a.createElement("div", {
      style: styles.hamburger
    }), external_react_default.a.createElement("div", {
      style: styles.hamburger
    }), external_react_default.a.createElement("div", {
      style: styles.hamburger
    })));
  })), children, external_react_default.a.createElement(footer, {
    links: nav.footerNav
  }), external_react_default.a.createElement("script", {
    id: "hs-script-loader",
    async: true,
    defer: true,
    src: "//js.hs-scripts.com/3835323.js"
  }));
};
// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/components/elements/overlay.js




var overlay_Overlay = function Overlay(_ref) {
  var _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === void 0 ? "rgba(0, 0, 0, .5)" : _ref$backgroundColor,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      children = _ref.children,
      props = objectWithoutProperties_default()(_ref, ["backgroundColor", "style", "children"]);

  return external_react_default.a.createElement("div", extends_default()({
    style: objectSpread_default()({
      position: "relative",
      overflow: "hidden"
    }, style)
  }, props), external_react_default.a.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: backgroundColor
    }
  }, children && children));
};
// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/components/icons/closeCross.js









var closeCross_Cross =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Cross, _React$Component);

  function Cross() {
    classCallCheck_default()(this, Cross);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Cross).apply(this, arguments));
  }

  createClass_default()(Cross, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          props = objectWithoutProperties_default()(_this$props, ["style"]);

      return external_react_default.a.createElement("svg", extends_default()({}, props, {
        style: objectSpread_default()({
          cursor: 'pointer',
          width: '56px'
        }, style),
        version: "1.1",
        id: "Layer_1",
        x: "0px",
        y: "0px",
        width: "960px",
        height: "560px",
        viewBox: "0 0 960 560",
        "enable-background": "new 0 0 960 560"
      }), external_react_default.a.createElement("g", null, external_react_default.a.createElement("g", null, external_react_default.a.createElement("path", {
        fill: "#FFFFFF",
        stroke: "#FFFFFF",
        "stroke-width": "30",
        "stroke-miterlimit": "10",
        d: "M224.72,118.38 c-12.363-10.68-18.048-26.891-8.095-41.646c8.325-12.342,29.25-18.806,41.647-8.095c0.697,0.601,1.392,1.202,2.09,1.803 c104.99,90.714,209.976,181.425,314.966,272.136c12.363,10.68,18.048,26.891,8.095,41.647 c-8.325,12.342-29.25,18.806-41.647,8.095c-0.697-0.601-1.392-1.203-2.089-1.803C434.696,299.803,329.709,209.091,224.72,118.38 L224.72,118.38z"
      }))), external_react_default.a.createElement("g", null, external_react_default.a.createElement("g", null, external_react_default.a.createElement("path", {
        fill: "#FFFFFF",
        stroke: "#FFFFFF",
        "stroke-width": "30",
        "stroke-miterlimit": "10",
        d: "M575.326,118.38 C470.337,209.091,365.35,299.803,260.36,390.516c-0.698,0.601-1.392,1.202-2.09,1.803c-12.396,10.71-33.322,4.247-41.647-8.095 c-9.952-14.755-4.268-30.966,8.095-41.647c104.989-90.711,209.976-181.422,314.966-272.136c0.698-0.601,1.392-1.202,2.09-1.803 c12.396-10.71,33.322-4.247,41.646,8.095C593.374,91.489,587.689,107.7,575.326,118.38L575.326,118.38z"
      }))));
    }
  }]);

  return Cross;
}(external_react_default.a.Component);
// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/components/icons/arrow.js


var arrow_Arrow = function Arrow(_ref) {
  var style = _ref.style;
  return external_react_default.a.createElement("svg", {
    style: objectSpread_default()({
      height: '32px'
    }, style),
    version: "1.1",
    x: "0px",
    y: "0px",
    width: "200px",
    height: "200px",
    viewBox: "0 0 200 200",
    "enable-background": "new 0 0 200 200"
  }, external_react_default.a.createElement("path", {
    d: "M100.004,108.5c26.109,0,52.221-61.017,78.326-61.115c6.316-0.026,11.695,1.311,14.298,7.737 c2.47,6.097-0.794,10.472-4.808,14.488c-25.758,25.77-51.5,51.555-77.303,77.281c-7.66,7.637-13.373,7.635-21.032-0.002 c-25.802-25.725-51.548-51.51-77.302-77.283c-4.004-4.01-7.297-8.374-4.807-14.479c2.615-6.411,7.969-7.771,14.297-7.744 C47.786,47.489,73.895,108.5,100.004,108.5z"
  }));
};
// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/components/hero-section.js









var hero_section_Hero = function Hero(_ref) {
  var heading = _ref.heading,
      image = _ref.image,
      _ref$texts = _ref.texts,
      texts = _ref$texts === void 0 ? [] : _ref$texts,
      buttonText = _ref.buttonText,
      featuresLink = _ref.featuresLink,
      inputPlaceholder = _ref.inputPlaceholder;
  return external_react_default.a.createElement(helpers_WindowHelper, null, function (window) {
    return external_react_default.a.createElement("section", {
      id: "intro-section",
      style: objectSpread_default()({
        display: "flex",
        textAlign: "center",
        paddingBottom: "2%",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundSize: "cover"
      }, window.width > 980 ? {
        minHeight: "600px",
        paddingTop: "6%"
      } : {
        paddingTop: "7%"
      })
    }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
      style: {
        marginTop: "0"
      }
    }, external_react_default.a.createElement("img", {
      src: image,
      alt: "background",
      style: {
        zIndex: "-1",
        position: "absolute",
        top: "0",
        left: "0",
        objectFit: "cover",
        width: "100vw",
        height: "100vh",
        filter: "brightness(40%) contrast(70%)"
      }
    }), external_react_default.a.createElement("h1", {
      style: objectSpread_default()({
        color: "#ff4a6e",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
        fontSize: "43px",
        lineHeight: "72px"
      }, window.width > 980 ? {
        fontWeight: "700",
        fontSize: "43px",
        lineHeight: "72px",
        letterSpacing: "5px"
      } : window.width > 600 ? {
        fontWeight: "500",
        fontSize: "25px",
        lineHeight: "30px",
        letterSpacing: "3px"
      } : {
        marginTop: "100px",
        fontSize: "26px",
        letterSpacing: "2px",
        lineHeight: "40px",
        fontWeight: "500"
      })
    }, heading), texts.map(function (text) {
      return external_react_default.a.createElement("span", {
        style: objectSpread_default()({
          color: "white",
          display: "block",
          margin: "17.6px 0",
          fontWeight: "100",
          letterSpacing: "2px"
        }, window.width > 980 ? {
          fontSize: "20px",
          lineHeight: "39px"
        } : window.width > 600 ? {
          fontSize: "15px",
          lineHeight: "33px"
        } : {
          fontSize: "14px",
          lineHeight: "19px"
        })
      }, text);
    }), external_react_default.a.createElement(elements_Switch, null, function (_ref2) {
      var on = _ref2.on,
          toggle = _ref2.toggle;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", {
        style: objectSpread_default()({
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100vh",
          transition: "all 0.5s"
        }, on ? {
          visibility: "visible",
          opacity: "1"
        } : {
          visibility: "hidden",
          opacity: "0"
        })
      }, external_react_default.a.createElement(overlay_Overlay, {
        style: {
          width: "100%",
          height: "100%",
          zIndex: "99"
        }
      }, external_react_default.a.createElement(closeCross_Cross, {
        style: objectSpread_default()({
          position: "absolute",
          top: "0"
        }, window.width > 980 ? {
          right: "55px",
          marginTop: "-156px"
        } : {
          marginTop: "-172px",
          right: "5px"
        }),
        onClick: function onClick() {
          toggle();
        }
      }), external_react_default.a.createElement("iframe", {
        style: objectSpread_default()({
          width: "100%",
          height: "100vh"
        }, window.width > 980 ? {
          maxWidth: " 70%",
          marginTop: "145px",
          maxHeight: "70vh"
        } : {
          maxWidth: "84%",
          marginTop: "132px",
          maxHeight: "73vh"
        }),
        src: "https://www.youtube.com/embed/pk7WopW7Ii8"
      }))), external_react_default.a.createElement("div", {
        style: {
          paddingTop: "20px"
        }
      }, external_react_default.a.createElement(elements_Button, {
        onClick: function onClick() {
          toggle();
        },
        style: {
          padding: "15px 10px",
          marginTop: "15px",
          marginBottom: "40px"
        }
      }, buttonText)));
    }), external_react_default.a.createElement("div", {
      style: {
        paddingTop: "25px"
      }
    }, external_react_default.a.createElement("a", {
      style: objectSpread_default()({
        textTransform: "uppercase",
        color: "#fff",
        textDecoration: "none",
        letterSpacing: "2px",
        fontWeight: "100"
      }, window.width < 660 ? {
        display: "none"
      } : {}),
      href: "#features"
    }, featuresLink, external_react_default.a.createElement(arrow_Arrow, {
      style: {
        display: "block",
        margin: "0 auto"
      }
    }))))));
  });
};

/* harmony default export */ var hero_section = (hero_section_Hero);
// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/components/picture-left.js




var picture_left_pictureLeft = function pictureLeft(_ref) {
  var heading = _ref.heading,
      strong_text = _ref.strong_text,
      text = _ref.text;
  return external_react_default.a.createElement(helpers_WindowHelper, null, function (window) {
    return external_react_default.a.createElement("section", {
      style: objectSpread_default()({
        alignItems: "center",
        boxPack: "justify",
        background: "#f7f7f7",
        padding: "100px 6%"
      }, window.width > 980 ? {
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between"
      } : {
        display: "block",
        width: "100%",
        textAlign: "center"
      })
    }, external_react_default.a.createElement("div", {
      style: {
        padding: "15px"
      }
    }, external_react_default.a.createElement("h3", {
      style: objectSpread_default()({
        color: "#ff4a6e",
        margin: ".25em 0",
        fontWeight: "400",
        letterSpacing: "2px"
      }, window.width > 980 ? {
        fontSize: "30px",
        lineHeight: "40px",
        textAlign: "right"
      } : {
        textAlign: "left",
        fontSize: "22px",
        lineHeight: "27px",
        fontWeight: "500"
      })
    }, heading), external_react_default.a.createElement("p", {
      style: objectSpread_default()({
        fontWeight: "500",
        padding: "15px 0"
      }, window.width > 980 ? {
        fontSize: "17px",
        lineHeight: "17px",
        textAlign: "right"
      } : {
        fontSize: "16px",
        lineHeight: "16px",
        textAlign: "left"
      })
    }, strong_text), external_react_default.a.createElement("p", {
      style: objectSpread_default()({
        marginTop: "16px",
        fontWeight: "100",
        letterSpacing: "1px"
      }, window.width > 980 ? {
        fontSize: "17px",
        lineHeight: "17px",
        textAlign: "right"
      } : {
        fontSize: "16px",
        lineHeight: "27px",
        textAlign: "left"
      })
    }, text)), external_react_default.a.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        flexFlow: "row wrap ",
        minWidth: "33%",
        padding: "0 10px"
      }
    }, " ", external_react_default.a.createElement("img", {
      style: objectSpread_default()({}, window.width < 450 ? {
        width: "85%"
      } : {
        width: "65%"
      }),
      src: "/assets/img/payment.svg",
      alt: "payment "
    })));
  });
};

/* harmony default export */ var picture_left = (picture_left_pictureLeft);
// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/components/picture-left-second.js





var picture_left_second_pictureLeftSecond = function pictureLeftSecond(_ref) {
  var heading = _ref.heading,
      text = _ref.text;
  return external_react_default.a.createElement(helpers_WindowHelper, null, function (window) {
    var _ref2;

    return external_react_default.a.createElement("section", {
      style: objectSpread_default()({
        alignItems: "center",
        boxPack: "justify",
        background: "#fff",
        padding: "100px 6%"
      }, window.width > 980 ? {
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between"
      } : {
        display: "block",
        width: "100%",
        textAlign: "center"
      })
    }, external_react_default.a.createElement("div", {
      style: {
        padding: "15px"
      }
    }, external_react_default.a.createElement("h3", {
      style: objectSpread_default()({
        color: "#ff4a6e",
        margin: ".25em 0",
        fontWeight: "400",
        letterSpacing: "2px"
      }, window.width > 980 ? {
        fontSize: "30px",
        lineHeight: "40px",
        textAlign: "right"
      } : {
        textAlign: "left",
        fontSize: "22px",
        lineHeight: "27px"
      })
    }, heading), external_react_default.a.createElement("p", {
      style: objectSpread_default()({
        marginTop: "16px",
        fontWeight: "100",
        letterSpacing: "1px"
      }, window.width > 980 ? (_ref2 = {
        fontSize: "17px",
        lineHeight: "17px"
      }, defineProperty_default()(_ref2, "lineHeight", "25px"), defineProperty_default()(_ref2, "textAlign", "left"), _ref2) : {
        fontSize: "16px",
        lineHeight: "27px",
        textAlign: "left"
      })
    }, text)), external_react_default.a.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        flexFlow: "row wrap ",
        minWidth: "33%",
        padding: "0 10px"
      }
    }, " ", external_react_default.a.createElement("img", {
      src: "../assets/img/coupon.svg",
      alt: "payment "
    })));
  });
};

/* harmony default export */ var picture_left_second = (picture_left_second_pictureLeftSecond);
// EXTERNAL MODULE: external "font-awesome/css/font-awesome.min.css"
var font_awesome_min_css_ = __webpack_require__(51);

// EXTERNAL MODULE: external "emailjs-com"
var external_emailjs_com_ = __webpack_require__(26);

// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/components/contact.js













var contact_Contact =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Contact, _React$Component);

  function Contact() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Contact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Contact)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      name: "",
      email: "",
      message: "",
      sent: false
    });

    return _this;
  }

  createClass_default()(Contact, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement(helpers_WindowHelper, null, function (window) {
        var style = {
          icons: {
            display: "inline",
            "float": "left",
            fontSize: "20px",
            marginLeft: "-13px"
          },
          contactTitles: objectSpread_default()({
            display: "block",
            width: "250px",
            textAlign: "left",
            fontSize: "25px",
            fontWeight: "400",
            marginBottom: "10px"
          }, window.width > 980 ? {
            marginLeft: "30px"
          } : {
            marginLeft: "30px",
            fontSize: "20px"
          }),
          contactText: objectSpread_default()({
            letterSpacing: "1px",
            display: "inherit",
            textAlign: "left",
            marginLeft: "30px",
            marginTop: "0px",
            marginBottom: "0px",
            width: "250px",
            fontWeight: "300"
          }, window.width > 980 ? {
            fontSize: "18px"
          } : {
            fontSize: "16px"
          })
        };
        return external_react_default.a.createElement("section", {
          style: {
            clear: "both",
            textAlign: "center",
            padding: "50px 0",
            background: "#fff",
            color: "white"
          }
        }, external_react_default.a.createElement("div", {
          style: objectSpread_default()({}, window.width > 980 ? {
            position: "absolute",
            paddingTop: "60px",
            width: "50%",
            "float": "left"
          } : {
            display: "block",
            width: "100%",
            paddingBottom: "112px"
          })
        }, external_react_default.a.createElement("h1", {
          style: objectSpread_default()({
            fontWeight: "200",
            color: "black",
            lineHeight: "1.5em",
            letterSpacing: "3px",
            marginBottom: "10px",
            marginTop: "0"
          }, window.width > 980 ? {
            fontSize: "50px"
          } : {
            fontSize: "28px"
          })
        }, _this2.props.heading), _this2.state.sent ? external_react_default.a.createElement("div", {
          style: {
            height: "485px",
            marginTop: "70px"
          }
        }, external_react_default.a.createElement("div", {
          style: {
            margin: "0 auto",
            width: "80%"
          }
        }, external_react_default.a.createElement("h1", {
          style: {
            color: "black",
            fontSize: "23px",
            fontWeight: "400"
          }
        }, _this2.props.sentMessage1), external_react_default.a.createElement("h3", {
          style: {
            color: "gray",
            fontSize: "18px",
            fontWeight: "400"
          }
        }, _this2.props.sentMessage2), external_react_default.a.createElement("h3", {
          style: {
            color: "gray",
            fontSize: "18px",
            fontWeight: "400"
          }
        }, _this2.props.sentMessage3))) : external_react_default.a.createElement("form", {
          onSubmit: function onSubmit(e) {
            e.preventDefault();
            var service_id = "default_service";
            var template_id = "template_rh9CGeWC";
            external_emailjs_com_["init"]("user_5iBC1plyOvnbe2sl2azWQ");
            external_emailjs_com_["send"](service_id, template_id, {
              name: _this2.state.name,
              email: _this2.state.email,
              message: _this2.state.message
            });

            _this2.setState({
              sent: true
            });
          }
        }, external_react_default.a.createElement("label", {
          "for": "send-address",
          style: {
            textAlign: "center",
            display: "block",
            marginTop: "17px",
            fontWeight: "100",
            color: "#333"
          }
        }, _this2.props.formHeadingName), external_react_default.a.createElement("input", {
          required: true,
          id: "name",
          maxLength: "256",
          name: "name",
          type: "text",
          value: _this2.state.name,
          onChange: function onChange(e) {
            _this2.setState({
              name: e.target.value
            });
          },
          style: {
            display: "block",
            margin: "10px auto",
            maxWidth: "300px",
            width: "300px",
            border: "1px solid rgba(255,74,110,.5)",
            borderRadius: "3px",
            padding: "10px 15px",
            outline: "#000",
            fontSize: "inherit"
          }
        }), external_react_default.a.createElement("label", {
          "for": "send-address",
          style: {
            textAlign: "center",
            display: "block",
            marginTop: "17px",
            fontWeight: "100",
            color: "#333"
          }
        }, _this2.props.formHeadingEmail), external_react_default.a.createElement("input", {
          required: true,
          id: "send-address",
          maxLength: "256",
          name: "send address",
          type: "email",
          value: _this2.state.email,
          onChange: function onChange(e) {
            _this2.setState({
              email: e.target.value
            });
          },
          style: {
            display: "block",
            margin: "10px auto",
            maxWidth: "300px",
            width: "300px",
            border: "1px solid rgba(255,74,110,.5)",
            borderRadius: "3px",
            padding: "10px 15px",
            outline: "#000",
            fontSize: "inherit"
          }
        }), external_react_default.a.createElement("label", {
          "for": "message",
          style: {
            fontWeight: "100",
            textAlign: "center",
            display: "block",
            marginTop: "17px",
            color: "#333"
          }
        }, _this2.props.formHeadingMessage), external_react_default.a.createElement("textarea", {
          required: true,
          id: "message",
          rows: "10",
          value: _this2.state.F,
          onChange: function onChange(e) {
            _this2.setState({
              message: e.target.value
            });
          },
          style: {
            outline: "none",
            width: "90%",
            maxWidth: " 400px",
            fontFamily: "inherit",
            fontSize: "inherit",
            margin: "10px",
            lineHeight: "inherit",
            border: "1px solid rgba(255,74,110,.5)",
            borderRadius: "3px",
            padding: ".5em .75em"
          }
        }), external_react_default.a.createElement("button", {
          type: "submit",
          style: {
            letterSpacing: "2px",
            borderColor: "#ff4a6e",
            display: "block",
            background: "#ff4a6e",
            color: "#fff",
            borderRadius: "2px",
            margin: " auto",
            cursor: "pointer",
            padding: "10px 25px",
            outline: "none",
            textAlign: "center",
            fontWeight: "300",
            fontSize: "13px",
            border: "1px solid #ff4a6e",
            transition: "all .15s"
          }
        }, "SEND!"))), external_react_default.a.createElement("div", {
          style: objectSpread_default()({
            backgroundColor: "rgb(255, 74, 110)"
          }, window.width > 980 ? {
            width: "50%",
            "float": "right",
            height: "660px",
            padding: "110px"
          } : {
            display: "block",
            width: "100%",
            padding: "70px 20px",
            height: "550px"
          })
        }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
          style: objectSpread_default()({}, window.width > 980 ? {
            marginLeft: "40px"
          } : {
            marginLeft: "0"
          })
        }, external_react_default.a.createElement("div", {
          style: objectSpread_default()({
            display: "block"
          }, window.width > 980 ? {
            margin: "30px auto",
            width: "340px"
          } : window.width > 450 ? {
            margin: "0 60px"
          } : {
            margin: "0 18px"
          })
        }, external_react_default.a.createElement("i", {
          className: "fa fa-map-marker",
          style: style.icons
        }), external_react_default.a.createElement("p", {
          style: style.contactTitles
        }, _this2.props.headingAddress, " "), external_react_default.a.createElement("p", {
          style: style.contactText,
          id: "address"
        }, _this2.props.textAddressStreet), external_react_default.a.createElement("p", {
          style: style.contactText
        }, _this2.props.textAddressCity)), external_react_default.a.createElement("div", {
          style: objectSpread_default()({
            display: "block"
          }, window.width > 980 ? {
            width: "340px",
            margin: "50px auto"
          } : window.width > 450 ? {
            margin: "50px 60px"
          } : {
            margin: "50px 18px"
          })
        }, external_react_default.a.createElement("i", {
          className: "fa fa-phone",
          style: style.icons
        }), external_react_default.a.createElement("p", {
          style: style.contactTitles
        }, _this2.props.headingPhone), external_react_default.a.createElement("p", {
          style: style.contactText
        }, _this2.props.textPhone)), external_react_default.a.createElement("div", {
          style: objectSpread_default()({
            display: "block"
          }, window.width > 980 ? {
            margin: "50px auto",
            width: "340px"
          } : window.width > 450 ? {
            margin: "50px 60px"
          } : {
            margin: "50px 18px"
          })
        }, external_react_default.a.createElement("i", {
          className: "fa fa-envelope",
          style: style.icons
        }), external_react_default.a.createElement("p", {
          style: style.contactTitles
        }, _this2.props.headingEmail), external_react_default.a.createElement("p", {
          style: style.contactText,
          id: "support"
        }, _this2.props.textEmail))))));
      });
    }
  }]);

  return Contact;
}(external_react_default.a.Component);

/* harmony default export */ var contact = (contact_Contact);
// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/components/icons/attendeeIcon.js


var attendeeIcon_Attendee = function Attendee(_ref) {
  var style = _ref.style;
  return external_react_default.a.createElement("svg", {
    style: objectSpread_default()({
      width: '15em',
      fill: '#ff4a6e',
      display: 'inline-block',
      verticalAlign: 'middle',
      margin: ' 0 5px',
      height: '15em'
    }, style),
    version: "1.1",
    id: "Capa_1",
    x: "0px",
    y: "0px",
    width: "632.891px",
    height: "518.078px",
    viewBox: "0 0 632.891 518.078",
    "enable-background": "new 0 0 632.891 518.078"
  }, external_react_default.a.createElement("g", null, external_react_default.a.createElement("path", {
    fill: "#FF4A6E",
    stroke: "#FFFFFF",
    strokeWidth: "8",
    strokeMiterlimit: "10",
    d: "M154.613,132.871 c-0.018,0-119.564-0.038-128.078-0.038c0,0-0.048,0-0.058,0c-10.879,0-19.761,9.026-19.732,19.916l0.427,123.317 c0.048,10.858,8.853,19.877,19.674,19.877c0.029,0,0.058,0,0.078,0c6.118,0,11.587-3.045,15.175-7.476l7.776,120 c0.688,10.726,9.599,18.792,20.363,18.792h40.568c10.733,0,19.635-8.164,20.344-18.889l7.736-120.253 c3.607,4.674,9.066,7.815,15.195,7.815c0.018,0,0.029,0,0.077,0c10.821,0,19.626-9.174,19.693-19.955l0.407-123.113 C174.287,142.093,165.492,132.871,154.613,132.871z"
  }), external_react_default.a.createElement("circle", {
    fill: "#FF4A6E",
    stroke: "#FFFFFF",
    strokeWidth: "8",
    strokeMiterlimit: "10",
    cx: "90.521",
    cy: "65.171",
    r: "54.542"
  }), external_react_default.a.createElement("path", {
    fill: "#FF4A6E",
    d: "M62.743,89.847c2.667,8.818,14.088,15.444,27.778,15.444s25.112-6.626,27.78-15.444H62.743z"
  })), external_react_default.a.createElement("path", {
    fill: "#FF4A6E",
    d: "M478.165,0c-79.134,0-143.701,42.048-148.058,94.98c-0.231,2.735-1.334,5.315-3.153,7.377l-22.386,25.099 c-3.055,3.407-4.003,8.205-2.525,12.516c1.489,4.323,5.183,7.51,9.682,8.326l38.729,7.047c2.459,0.452,4.687,1.599,6.483,3.319 c26.875,25.805,71.105,42.688,121.237,42.688c81.99,0,148.42-45.069,148.42-100.66C626.585,45.081,560.166,0,478.165,0z"
  }), external_react_default.a.createElement("path", {
    fill: "#FFFFFF",
    d: "M481.841,45.805c6.454,0,11.702,5.25,11.702,11.702s-5.249,11.702-11.702,11.702 c-6.452,0-11.702-5.25-11.702-11.702S475.389,45.805,481.841,45.805z M493.782,143.931c0,5.864-4.771,10.635-10.636,10.635 c-5.863,0-10.635-4.771-10.635-10.635v-50.28h-11.144c-5.08,0-9.197-4.119-9.197-9.198c0-5.08,4.117-9.198,9.197-9.198h21.401 c0.125-0.003,0.248-0.019,0.375-0.019c5.864,0,10.637,4.772,10.637,10.635L493.782,143.931L493.782,143.931z"
  }), external_react_default.a.createElement("g", null, external_react_default.a.createElement("path", {
    fill: "#FF4A6E",
    stroke: "#FFFFFF",
    strokeWidth: "5",
    strokeMiterlimit: "10",
    d: "M216.814,156.257 c-0.02,0-128.129-0.041-137.253-0.041c0,0-0.051,0-0.062,0c-11.659,0-21.176,9.673-21.146,21.343l0.458,132.15 c0.052,11.638,9.487,21.302,21.083,21.302c0.031,0,0.062,0,0.083,0c6.557,0,12.417-3.263,16.262-8.011l8.333,128.597 c0.738,11.492,10.287,20.139,21.821,20.139h43.475c11.502,0,21.042-8.749,21.801-20.242l8.291-128.867 c3.866,5.009,9.716,8.375,16.284,8.375c0.02,0,0.031,0,0.083,0c11.596,0,21.032-9.829,21.104-21.384l0.436-131.933 C237.897,166.14,228.473,156.257,216.814,156.257z"
  }), external_react_default.a.createElement("circle", {
    fill: "#FF4A6E",
    stroke: "#FFFFFF",
    strokeWidth: "5",
    strokeMiterlimit: "10",
    cx: "148.131",
    cy: "83.708",
    r: "58.449"
  }), external_react_default.a.createElement("path", {
    fill: "#FF4A6E",
    d: "M118.363,110.153c2.858,9.448,15.098,16.55,29.768,16.55c14.671,0,26.912-7.102,29.77-16.55H118.363z"
  })), external_react_default.a.createElement("g", null, external_react_default.a.createElement("path", {
    fill: "#FF4A6E",
    stroke: "#FFFFFF",
    strokeWidth: "8",
    strokeMiterlimit: "10",
    d: "M287.575,177.18 c-0.022,0-135.981-0.044-145.664-0.044c0,0-0.055,0-0.066,0c-12.373,0-22.474,10.267-22.441,22.651l0.485,140.248 c0.055,12.352,10.068,22.606,22.375,22.606c0.033,0,0.066,0,0.088,0c6.958,0,13.178-3.463,17.258-8.502l8.844,136.478 c0.783,12.196,10.917,21.372,23.158,21.372h46.139c12.208,0,22.331-9.285,23.136-21.482l8.8-136.764 c4.102,5.314,10.311,8.888,17.28,8.888c0.022,0,0.033,0,0.088,0c12.307,0,22.32-10.432,22.397-22.694l0.463-140.017 C309.95,187.667,299.948,177.18,287.575,177.18z"
  }), external_react_default.a.createElement("circle", {
    fill: "#FF4A6E",
    stroke: "#FFFFFF",
    strokeWidth: "8",
    strokeMiterlimit: "10",
    cx: "214.683",
    cy: "100.186",
    r: "62.03"
  }), external_react_default.a.createElement("path", {
    fill: "#FF4A6E",
    d: "M183.09,128.25c3.033,10.027,16.023,17.564,31.592,17.564c15.57,0,28.561-7.538,31.593-17.564H183.09z"
  })));
};
// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/components/picture-right-second.js





var picture_right_second_PictureRightSecond = function PictureRightSecond(_ref) {
  var heading = _ref.heading,
      strong_text = _ref.strong_text,
      text = _ref.text;
  return external_react_default.a.createElement(helpers_WindowHelper, null, function (window) {
    return external_react_default.a.createElement("section", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
        background: "#fff",
        padding: "100px 6%",
        position: "relative"
      },
      id: "teaser"
    }, external_react_default.a.createElement("div", {
      style: objectSpread_default()({
        padding: "0 10px"
      }, window.width > 980 ? {
        maxWidth: "50%",
        minWidth: "33%"
      } : {
        width: "100%"
      }),
      className: "details"
    }, external_react_default.a.createElement("h3", {
      style: objectSpread_default()({
        fontSize: "30px",
        letterSpacing: "3px",
        lineHeight: "1.2em",
        margin: ".25em 0",
        color: "#ff4a6e",
        fontWeight: "400"
      }, window.width > 980 ? {
        fontSize: "30px",
        lineHeight: "40px"
      } : window.widht > 450 ? {
        fontSize: "22px",
        lineHeight: "27px"
      } : {
        fontSize: "20px",
        lineHeight: "25px"
      })
    }, heading), external_react_default.a.createElement("p", {
      style: objectSpread_default()({
        fontWeight: "500",
        padding: "10px 0"
      }, window.width > 980 ? {
        fontSize: "18px",
        lineHeight: "28px"
      } : {
        fontSize: "16px",
        lineHeight: "16px"
      })
    }, strong_text), external_react_default.a.createElement("p", {
      style: objectSpread_default()({
        marginTop: "10px",
        fontWeight: "100",
        letterSpacing: "1px"
      }, window.width > 980 ? {
        fontSize: "17px",
        lineHeight: "25px"
      } : {
        fontSize: "16px",
        lineHeight: "27px"
      })
    }, text)), external_react_default.a.createElement("div", {
      className: "icon",
      style: objectSpread_default()({
        minWidth: "33%",
        padding: "0 10px"
      }, window.width > 680 ? {} : {
        display: "none"
      })
    }, external_react_default.a.createElement(attendeeIcon_Attendee, null)));
  });
};

/* harmony default export */ var picture_right_second = (picture_right_second_PictureRightSecond);
// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/components/picture-right-mockup-first.js


 // import Logos from './soc-med-icons'



var picture_right_mockup_first_RightMockupFirst = function RightMockupFirst(_ref) {
  var heading = _ref.heading,
      strong_text = _ref.strong_text,
      text = _ref.text,
      button_text = _ref.button_text;
  return external_react_default.a.createElement(helpers_WindowHelper, null, function (window) {
    return external_react_default.a.createElement("section", {
      style: objectSpread_default()({
        overflow: "hidden",
        alignItems: "center",
        boxPack: "justify",
        background: "#fff",
        padding: "100px 6%"
      }, window.width > 980 ? {
        display: "flex",
        justifyContent: "space-between"
      } : {
        display: "block",
        width: "100%",
        textAlign: "center"
      })
    }, external_react_default.a.createElement("div", {
      style: objectSpread_default()({}, window.width > 980 ? {
        maxWidth: "45%",
        padding: "15px"
      } : {
        textAlign: "left",
        padding: "10px"
      })
    }, external_react_default.a.createElement("h3", {
      style: objectSpread_default()({
        color: "#ff4a6e",
        margin: ".25em 0",
        fontWeight: "400",
        letterSpacing: "2px"
      }, window.width > 980 ? {
        fontSize: "30px",
        lineHeight: "40px"
      } : {
        fontSize: "22px",
        lineHeight: "27px",
        fontWeight: "500"
      })
    }, heading), external_react_default.a.createElement("p", {
      style: objectSpread_default()({
        fontWeight: "500",
        padding: "15px 0",
        fontSize: "18px",
        lineHeight: "17px"
      }, window.width > 980 ? {
        fontSize: "17px",
        lineHeight: "17px"
      } : {
        fontSize: "16px",
        lineHeight: "16px"
      })
    }, strong_text), external_react_default.a.createElement("p", {
      style: objectSpread_default()({
        fontWeight: "100",
        letterSpacing: "1px"
      }, window.width > 980 ? {
        fontSize: "17px",
        lineHeight: "25px"
      } : {
        fontSize: "16px",
        lineHeight: "27px"
      })
    }, text)), external_react_default.a.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        flexFlow: "row wrap ",
        minWidth: "33%"
      }
    }, external_react_default.a.createElement("img", {
      style: objectSpread_default()({
        width: "auto",
        height: "600px"
      }, window.width > 1180 ? {
        marginRight: "-140px"
      } : window.width > 900 ? {
        marginRight: "-240px"
      } : defineProperty_default()({
        height: "300px",
        marginRight: "-50px"
      }, "marginRight", "-140px")),
      src: "../assets/img/madHatter.png",
      alt: "madHatter "
    })));
  });
};

/* harmony default export */ var picture_right_mockup_first = (picture_right_mockup_first_RightMockupFirst);
// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/components/copyBox.js









var copyBox_CopyBox =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(CopyBox, _React$Component);

  function CopyBox() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, CopyBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(CopyBox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "inputRef", external_react_default.a.createRef());

    return _this;
  }

  createClass_default()(CopyBox, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
        style: {
          display: "flex",
          boxAlign: "center",
          alignItems: "center",
          justifyContent: "flex-start"
        }
      }, external_react_default.a.createElement("input", {
        ref: this.inputRef,
        style: {
          textAlign: "left",
          margin: "15px 0",
          padding: "7px 10px",
          maxWidth: "405px",
          fontSize: "16px",
          fontFamily: "inherit",
          lineHeight: "inherit",
          userSelect: "all",
          border: "1px solid rgba(255,74,110,.5)",
          width: "90%"
        },
        type: "url",
        id: "demo-event",
        value: this.props.link,
        "class": "link",
        readonly: "true"
      }), external_react_default.a.createElement("div", {
        onClick: function onClick() {
          _this2.inputRef.current.select();

          document.execCommand("copy");
        },
        style: {
          zIndex: "3",
          display: "flex",
          alignItems: "center",
          height: "30px",
          width: "30px",
          margin: "0",
          position: "relative",
          border: "1px solid hsla(0,0%,97%,.5)",
          marginLeft: "-1px",
          backgroundColor: "rgba(255,74,110,.2)"
        }
      }, external_react_default.a.createElement("svg", {
        style: {
          width: "65%",
          height: "65%",
          pointerEvents: "none",
          marginLeft: "6px"
        },
        version: "1.1",
        x: "0px",
        y: "0px",
        width: "200px",
        height: "200px",
        viewBox: "-93 -92 200 200",
        "enable-background": "new -93 -92 200 200"
      }, external_react_default.a.createElement("path", {
        d: "M-57.107,65.696H-5.82v12.82h-51.287V65.696z M7-11.232h-64.107V1.59H7V-11.232z M32.644,27.233V1.59L-5.82,40.054 l38.464,38.463V52.874H96.75V27.233H32.644z M-25.053,14.41h-32.054v12.823h32.054V14.41z M-57.107,52.874h32.054v-12.82h-32.054 V52.874z M58.286,65.696h12.82V91.34c-0.25,3.593-1.401,6.66-3.843,8.978c-2.443,2.303-5.396,3.593-8.978,3.843H-69.928 c-7.049,0-12.822-5.771-12.822-12.82V-49.697c0-7.049,5.772-12.821,12.822-12.821h38.464c0-14.229,11.412-25.642,25.644-25.642 c14.229,0,25.641,11.413,25.641,25.642h38.466c7.05,0,12.82,5.772,12.82,12.821V14.41h-12.82v-38.463H-69.928V91.34H58.286V65.696z M-57.107-36.875H45.464c0-7.049-5.771-12.822-12.82-12.822H19.82C12.771-49.697,7-55.468,7-62.518C7-69.567,1.229-75.34-5.82-75.34 c-7.05,0-12.823,5.772-12.823,12.822c0,7.05-5.771,12.821-12.821,12.821h-12.822C-51.335-49.697-57.107-43.924-57.107-36.875z"
      })), external_react_default.a.createElement("span", {
        style: {
          position: "absolute",
          left: "2.5em",
          top: "2px",
          opacity: "0",
          transition: "all .25s;"
        },
        "class": "copied"
      }, "copied!"))));
    }
  }]);

  return CopyBox;
}(external_react_default.a.Component);

/* harmony default export */ var copyBox = (copyBox_CopyBox);
// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/components/picture-right-mockup-second.js





var picture_right_mockup_second_RightMockupSecond = function RightMockupSecond(_ref) {
  var heading = _ref.heading,
      strong_text = _ref.strong_text,
      copyBoxLink = _ref.copyBoxLink;
  return external_react_default.a.createElement(helpers_WindowHelper, null, function (window) {
    return external_react_default.a.createElement("section", {
      style: objectSpread_default()({
        overflow: "hidden",
        alignItems: "center",
        boxPack: "justify",
        background: "#f7f7f7",
        padding: "100px 6%"
      }, window.width > 980 ? {
        display: "flex",
        justifyContent: "space-between"
      } : {
        display: "block",
        width: "100%",
        textAlign: "center"
      })
    }, external_react_default.a.createElement("div", {
      style: objectSpread_default()({
        padding: "15px"
      }, window.width > 980 ? {
        maxWidth: "45%",
        padding: "15px"
      } : {
        padding: "10px",
        textAlign: "left"
      })
    }, external_react_default.a.createElement("h3", {
      style: objectSpread_default()({
        color: "#ff4a6e",
        margin: ".25em 0",
        fontWeight: "400",
        letterSpacing: "2px"
      }, window.width > 980 ? {
        fontSize: "30px",
        lineHeight: "40px"
      } : {
        fontSize: "22px",
        lineHeight: "27px",
        fontWeight: "500"
      })
    }, heading), external_react_default.a.createElement("p", {
      style: objectSpread_default()({
        fontWeight: "500",
        padding: "15px 0"
      }, window.width > 980 ? {
        fontSize: "17px",
        lineHeight: "25px"
      } : {
        fontSize: "16px",
        lineHeight: "17px"
      })
    }, strong_text), copyBoxLink && external_react_default.a.createElement(copyBox, {
      link: copyBoxLink
    })), external_react_default.a.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        flexFlow: "row wrap ",
        minWidth: "33%"
      }
    }, external_react_default.a.createElement("img", {
      style: objectSpread_default()({
        height: "600px",
        width: "auto"
      }, window.width > 1180 ? {
        marginRight: "-305px"
      } : window.width > 900 ? {
        marginRight: "-440px"
      } : {
        marginRight: "-155px",
        height: "300px",
        width: "auto"
      }, {
        objectFit: "cover"
      }),
      src: "/assets/img/ticketHatter.png",
      alt: "madHatter "
    })));
  });
};

/* harmony default export */ var picture_right_mockup_second = (picture_right_mockup_second_RightMockupSecond);
// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/components/ticket-price.js





var ticket_price_TicketPrice = function TicketPrice(_ref) {
  var heading = _ref.heading,
      prices = _ref.prices,
      vatText = _ref.vatText,
      ticketHeading = _ref.ticketHeading,
      ticketText1 = _ref.ticketText1,
      ticketText2 = _ref.ticketText2,
      ticketText3 = _ref.ticketText3,
      serviceFee = _ref.serviceFee,
      buttonText = _ref.buttonText;
  return external_react_default.a.createElement(helpers_WindowHelper, null, function (window) {
    return external_react_default.a.createElement("section", {
      style: {
        padding: "7em 0",
        background: "#f7f7f7"
      }
    }, external_react_default.a.createElement("h3", {
      style: objectSpread_default()({
        letterSpacing: "3px",
        paddingBottom: "15px",
        textAlign: "center",
        margin: "0.25em 0px",
        color: "rgb(255, 74, 110)",
        fontWeight: "400"
      }, window.width > 980 ? {
        fontSize: "30px"
      } : {
        fontSize: "23px",
        fontWeight: "500",
        paddingLeft: "25px"
      })
    }, heading), external_react_default.a.createElement("div", {
      style: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: " center"
      }
    }, prices.map(function (price) {
      return external_react_default.a.createElement("div", {
        className: "price-card",
        style: {
          margin: "20px",
          minWidth: "280px",
          border: "2px solid #ff4a6e",
          borderRadius: " 3px",
          background: "#FFFFFF",
          color: "#333",
          display: "block"
        }
      }, external_react_default.a.createElement("div", {
        className: "header-price",
        style: {
          width: "100%",
          background: "#ff4a6e",
          color: "#fff",
          textAlign: "center",
          letterSpacing: "2px",
          textTransform: "uppercase",
          fontWeight: "700"
        }
      }, external_react_default.a.createElement("span", {
        style: {
          paddingTop: " 1em",
          display: "block",
          fontSize: ".75em",
          fontWeight: "100",
          letterSpacing: "3px"
        }
      }, ticketHeading), external_react_default.a.createElement("h3", {
        style: {
          color: "#fff",
          display: "inline-block",
          fontSize: "35px",
          margin: " 0",
          fontWeight: "400",
          padding: "5px 0",
          letterSpacing: "normal",
          textAlign: "center"
        }
      }, price.attendeePrice), external_react_default.a.createElement("span", {
        content: "DKK",
        style: {
          fontWeight: "100",
          letterSpacing: "2px"
        }
      }, " ", "DKK")), external_react_default.a.createElement("div", {
        className: "body",
        style: {
          textAlign: "center",
          padding: "10px"
        }
      }, external_react_default.a.createElement("span", {
        style: {
          fontWeight: "100",
          display: "block",
          padding: ".5em 0",
          letterSpacing: "2px",
          fontSize: "18px"
        },
        dangerouslySetInnerHTML: {
          __html: ticketText1
        }
      }), external_react_default.a.createElement("span", {
        style: {
          fontWeight: "100",
          display: "block",
          padding: ".5em 0",
          letterSpacing: "2px",
          fontSize: "16px"
        },
        dangerouslySetInnerHTML: {
          __html: ticketText2
        }
      }), external_react_default.a.createElement("span", {
        style: {
          fontWeight: "100",
          display: "block",
          padding: ".5em 0",
          letterSpacing: "2px",
          fontSize: "16px"
        },
        dangerouslySetInnerHTML: {
          __html: ticketText3
        }
      }), external_react_default.a.createElement("div", {
        className: "price",
        style: {
          fontWeight: "100",
          borderTop: "1px solid #ccc",
          padding: "10px 0",
          margin: "10px auto"
        }
      }, external_react_default.a.createElement("span", {
        content: "DKK",
        style: {
          fontWeight: "500",
          verticalAlign: "top",
          letterSpacing: "2px",
          marginRight: "8px"
        }
      }, "DKK"), external_react_default.a.createElement("span", {
        style: {
          fontSize: "35px",
          letterSpacing: "2px"
        }
      }, price.ticketPrice), external_react_default.a.createElement("span", {
        style: {
          fontSize: "29px",
          marginLeft: "4px"
        }
      }, price.percentage), external_react_default.a.createElement("span", {
        style: {
          display: "block",
          letterSpacing: "2px"
        }
      }, serviceFee)), external_react_default.a.createElement("a", {
        href: "https://billetfix.dk/event/create_event/",
        style: {
          textDecoration: "none"
        }
      }, external_react_default.a.createElement(elements_Button, {
        style: {
          padding: "10px 15px"
        }
      }, " ", buttonText))));
    })), external_react_default.a.createElement("h2", {
      style: {
        textAlign: "center",
        fontWeight: "300",
        fontSize: "16px",
        color: "grey"
      }
    }, vatText));
  });
};

/* harmony default export */ var ticket_price = (ticket_price_TicketPrice);
// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/components/app-store.js




var app_store_AppStore = function AppStore(_ref) {
  var heading = _ref.heading,
      text = _ref.text;
  return external_react_default.a.createElement(helpers_WindowHelper, null, function (window) {
    return external_react_default.a.createElement("section", {
      style: objectSpread_default()({
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
        background: "#f3f3f3",
        padding: "100px 6%",
        position: "relative"
      }, window.width > 680 ? {
        display: "flex"
      } : {
        display: "block"
      }),
      id: "teaser"
    }, external_react_default.a.createElement("div", {
      style: objectSpread_default()({
        padding: "0 10px"
      }, window.width > 980 ? {
        maxWidth: "50%",
        minWidth: "33%"
      } : {
        width: "100%"
      }),
      className: "details"
    }, external_react_default.a.createElement("h3", {
      style: objectSpread_default()({
        fontSize: "30px",
        letterSpacing: "3px",
        lineHeight: "1.2em",
        margin: ".25em 0",
        color: "#ff4a6e",
        fontWeight: "100"
      }, window.width > 980 ? {
        fontSize: "30px",
        lineHeight: "40px"
      } : window.widht > 450 ? {
        fontSize: "22px",
        lineHeight: "27px"
      } : {
        fontSize: "20px",
        lineHeight: "25px"
      })
    }, heading), external_react_default.a.createElement("p", {
      style: {
        lineHeight: "30px",
        letterSpacing: "2px",
        marginTop: 16,
        fontSize: "18px",
        color: "#333",
        fontWeight: "100"
      }
    }, text), external_react_default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://itunes.apple.com/dk/app/billetfix/id1281261719"
    }, external_react_default.a.createElement("img", {
      style: {
        height: "60px"
      },
      src: "/assets/img/app-store.png",
      alt: "app-store-icon"
    })), external_react_default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://play.google.com/store/apps/details?id=com.billetfix"
    }, external_react_default.a.createElement("img", {
      style: objectSpread_default()({
        height: "61px"
      }, window.width > 980 ? {
        marginLeft: "5px"
      } : {}),
      src: "/assets/img/google-play.png",
      alt: "app-store-icon"
    }))), external_react_default.a.createElement("div", {
      className: "mockup",
      style: {
        minWidth: "33%",
        padding: "0 10px"
      }
    }, external_react_default.a.createElement("img", {
      src: "/assets/img/mobile-mockup.png",
      alt: "mobile-mockup "
    })));
  });
};

/* harmony default export */ var app_store = (app_store_AppStore);
// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/components/about.js




var about_About = function About(_ref) {
  var heading = _ref.heading,
      texts = _ref.texts,
      staticHeader = _ref.staticHeader;
  return external_react_default.a.createElement(helpers_WindowHelper, null, function (window) {
    return external_react_default.a.createElement("div", null, external_react_default.a.createElement("section", {
      style: objectSpread_default()({
        overflow: "hidden",
        background: "#fff",
        color: "#333"
      }, window.width > 980 ? {
        padding: "125px 6%"
      } : {
        padding: "80px 6%"
      })
    }, external_react_default.a.createElement("div", {
      style: {
        maxWidth: "672px",
        margin: "0 auto"
      }
    }, external_react_default.a.createElement("h1", {
      style: objectSpread_default()({
        textAlign: "center",
        fontWeight: "300",
        letterSpacing: "2px",
        display: "block"
      }, window.width > 680 ? {
        fontSize: "45px"
      } : {
        fontSize: "28px"
      })
    }, heading), external_react_default.a.createElement("div", null, texts.map(function (text) {
      return external_react_default.a.createElement("p", {
        style: objectSpread_default()({}, window.width > 680 ? {
          fontSize: "16.5px"
        } : {
          fontSize: "14px"
        }, {
          lineHeight: "32px",
          marginTop: "15px",
          letterSpacing: "1px",
          fontWeight: "100"
        })
      }, text);
    })))));
  });
};

/* harmony default export */ var about = (about_About);
// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/components/languages.js




var languages_Languages = function Languages(_ref) {
  var heading = _ref.heading,
      strong_text = _ref.strong_text;
  return external_react_default.a.createElement(helpers_WindowHelper, null, function (window) {
    return external_react_default.a.createElement("section", {
      style: objectSpread_default()({
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
        background: "#fff",
        padding: "100px 6%",
        position: "relative"
      }, window.width > 980 ? {
        display: "flex"
      } : {}),
      id: "teaser"
    }, external_react_default.a.createElement("div", {
      style: objectSpread_default()({
        padding: "15px"
      }, window.width > 980 ? {
        maxWidth: "45%"
      } : {})
    }, external_react_default.a.createElement("h3", {
      style: objectSpread_default()({
        color: "#ff4a6e",
        margin: ".25em 0",
        fontWeight: "400",
        letterSpacing: "2px"
      }, window.width > 980 ? {
        fontSize: "30px",
        lineHeight: "40px"
      } : {
        fontSize: "22px",
        lineHeight: "27px"
      })
    }, heading), external_react_default.a.createElement("p", {
      style: objectSpread_default()({
        fontWeight: "500",
        padding: "15px 0",
        fontSize: "18px",
        lineHeight: "17px"
      }, window.width > 980 ? {
        fontSize: "18px",
        lineHeight: "17px"
      } : {
        fontSize: "16px",
        lineHeight: "16px"
      })
    }, strong_text)), external_react_default.a.createElement("div", {
      className: "icon",
      style: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "33%",
        padding: "0 10px" // ...(window.width > 680
        //   ? {}
        //   : {
        //       ,
        //     }),

      }
    }, external_react_default.a.createElement("a", {
      href: "/en"
    }, external_react_default.a.createElement("img", {
      alt: "english-icon",
      src: "/assets/img/englishFlag.svg",
      style: objectSpread_default()({
        height: "auto"
      }, window.width > 980 ? {
        width: "130px"
      } : {
        width: "70px"
      })
    })), external_react_default.a.createElement("span", {
      style: objectSpread_default()({
        margin: "10px",
        fontSize: "120px"
      }, window.width > 980 ? {
        fontSize: "120px"
      } : {
        fontSize: "70px"
      })
    }, "/"), external_react_default.a.createElement("a", {
      href: "/da"
    }, external_react_default.a.createElement("img", {
      alt: "danish-flag",
      src: "/assets/img/danishFlag.svg",
      style: objectSpread_default()({
        height: "auto"
      }, window.width > 980 ? {
        width: "130px"
      } : {
        width: "70px"
      })
    }))));
  });
};

/* harmony default export */ var languages = (languages_Languages);
// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/components/privacyPol.js



var privacyPol_PrivacyPolicy = function PrivacyPolicy(_ref) {
  var heading = _ref.heading,
      content = _ref.content;
  return external_react_default.a.createElement(helpers_WindowHelper, null, function (window) {
    return external_react_default.a.createElement("section", {
      style: {
        padding: "100px 6%",
        overflow: "hidden"
      }
    }, external_react_default.a.createElement("h1", {
      style: {
        fontWeight: "200",
        textAlign: "center",
        fontSize: "35px",
        lineHeight: "1.5em",
        letterSpacing: "1px"
      }
    }, heading), external_react_default.a.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: content
      }
    }));
  });
};

/* harmony default export */ var privacyPol = (privacyPol_PrivacyPolicy);
// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/components/tandc.js



var tandc_TandC = function TandC(_ref) {
  var heading = _ref.heading,
      content = _ref.content;
  return external_react_default.a.createElement(helpers_WindowHelper, null, function (window) {
    return external_react_default.a.createElement("section", {
      style: {
        padding: "100px 6%",
        overflow: "hidden"
      }
    }, external_react_default.a.createElement("h1", {
      style: {
        fontWeight: "200",
        textAlign: "center",
        fontSize: "35px",
        lineHeight: "1.5em",
        letterSpacing: "1px"
      }
    }, heading), external_react_default.a.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: content
      }
    }));
  });
};

/* harmony default export */ var tandc = (tandc_TandC);
// CONCATENATED MODULE: /Users/kyle/Projects/ticketbutler/billetfix-homepage/src/layouts/cms_page.js

















 // import SMIcons from '../components/soc-med-icons'






var components = [{
  Component: partners,
  id: "partners"
}, {
  Component: picture_right,
  id: "picture_right"
}, {
  Component: components_features,
  id: "features"
}, {
  Component: hero_section,
  id: "hero_section"
}, {
  Component: picture_left,
  id: "picture_left"
}, {
  Component: picture_right_second,
  id: "picture_righ_second"
}, {
  Component: picture_left_second,
  id: "picture_left_second"
}, {
  Component: app_store,
  id: "app"
}, {
  Component: tandc,
  id: "terms_and_c"
}, {
  Component: picture_right_mockup_first,
  id: "mockup_right_first"
}, {
  Component: picture_right_mockup_second,
  id: "mockup_right_second"
}, {
  Component: contact,
  id: "contact_form"
}, {
  Component: ticket_price,
  id: "pricing_cards"
}, // { Component: SMIcons, id: 'soc_med_icons' },
{
  Component: contact,
  id: "contact"
}, {
  Component: languages,
  id: "languages"
}, {
  Component: about,
  id: "about"
}, {
  Component: privacyPol,
  id: "privacy_policy"
}, {
  Component: footer,
  id: "footer"
}];

var cms_page_CmsPage = function CmsPage() {
  var pageContext = Object(external_react_static_["useRouteData"])();
  var fadeHeader = false;

  if (typeof window !== "undefined") {
    if (window.location.pathname === "/en/" || window.location.pathname === "/da/") {
      fadeHeader = true;
    }
  }

  return external_react_default.a.createElement(layouts_Layout, extends_default()({}, pageContext, {
    fadeHeader: fadeHeader
  }), pageContext.sections && pageContext.sections.map(function (section, i) {
    var c = components.find(function (_ref) {
      var id = _ref.id;
      return id === section.type;
    });

    if (c) {
      return external_react_default.a.createElement(c.Component, extends_default()({
        key: i
      }, section));
    } else {
      return null;
    }
  }));
};

/* harmony default export */ var cms_page = __webpack_exports__["default"] = (cms_page_CmsPage);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(11);

var _router = __webpack_require__(16);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)(staticInfo.path)
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37);
__webpack_require__(38);
module.exports = __webpack_require__(44);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(27)["default"];

var _require = __webpack_require__(28),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/kyle/Projects/ticketbutler/billetfix-homepage/artifacts/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(27)["default"]);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20)(module)))

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(28),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(29),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/kyle/Projects/ticketbutler/billetfix-homepage/artifacts/react-static-templates.js", function () {
    var _require3 = __webpack_require__(29),
        templates = _require3["default"],
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20)(module)))

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(22);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 15,
	"./": 15,
	"./index": 15,
	"./index.js": 15
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 40;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(21);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(23);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(30);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(14);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(45);

var _interopRequireDefault = __webpack_require__(46);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(9));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(10));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(47);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(48)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("/Users/kyle/Projects/ticketbutler/billetfix-homepage/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);

 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_app__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]); // Render your app

if (typeof document !== "undefined") {
  var target = document.getElementById("root");
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null), target);
  }; // Render!


  render(_app__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept("./app", function () {
      render(_app__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(49)(module)))

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("font-awesome/css/font-awesome.min.css");

/***/ })
/******/ ]);
});