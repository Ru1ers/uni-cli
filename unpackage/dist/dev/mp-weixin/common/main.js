(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"],{

/***/ 0:
/*!*************************************!*\
  !*** D:/uni-app脚手架/uni-cli/main.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createApp) {__webpack_require__(/*! uni-pages */ 4);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 5));
var _router = __webpack_require__(/*! ./router/router.js */ 56);



var _store = _interopRequireDefault(__webpack_require__(/*! ./store */ 47));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

_vue.default.use(_router.router);

// 注册全局组件
var MescrollBody = function MescrollBody() {Promise.all(/*! require.ensure | components/mescroll-uni/mescroll-body */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/mescroll-uni/mescroll-body")]).then((function () {return resolve(__webpack_require__(/*! @/components/mescroll-uni/mescroll-body.vue */ 74));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var MescrollUni = function MescrollUni() {Promise.all(/*! require.ensure | components/mescroll-uni/mescroll-uni */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/mescroll-uni/mescroll-uni")]).then((function () {return resolve(__webpack_require__(/*! @/components/mescroll-uni/mescroll-uni.vue */ 86));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var MescrollEmpty = function MescrollEmpty() {Promise.all(/*! require.ensure | components/mescroll-uni/components/mescroll-empty */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/mescroll-uni/components/mescroll-empty")]).then((function () {return resolve(__webpack_require__(/*! @/components/mescroll-uni/components/mescroll-empty.vue */ 95));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};


_vue.default.component('mescroll-body', MescrollBody);
_vue.default.component('mescroll-uni', MescrollUni);
_vue.default.component('mescroll-empty', MescrollEmpty);

_vue.default.config.productionTip = false;

_App.default.mpType = 'app';

var app = new _vue.default(_objectSpread({
  store: _store.default },
_App.default));


(0, _router.RouterMount)(app, _router.router, '#app');

createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createApp"]))

/***/ }),

/***/ 5:
/*!*************************************!*\
  !*** D:/uni-app脚手架/uni-cli/App.vue ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 6);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ 53);
/* harmony import */ var _C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 55);
var render, staticRenderFns, recyclableRender, components
var renderjs





/* normalize component */

var component = Object(_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null,
  false,
  components,
  renderjs
)

component.options.__file = "App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 53:
/*!**********************************************************************!*\
  !*** D:/uni-app脚手架/uni-cli/App.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 54);
/* harmony import */ var _C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 54:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-app脚手架/uni-cli/App.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 6:
/*!**************************************************************!*\
  !*** D:/uni-app脚手架/uni-cli/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */ 7);
/* harmony import */ var _C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sbkjp01_Downloads_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 7:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-app脚手架/uni-cli/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 8));
var _Login = __webpack_require__(/*! @/models/login/Login.js */ 11);



var _auth = __webpack_require__(/*! @/utils/auth */ 51);


var _store = _interopRequireDefault(__webpack_require__(/*! @/store */ 47));
var _toast = _interopRequireDefault(__webpack_require__(/*! @/wxcomponents/vant/toast/toast */ 45));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =
{
  onLaunch: function onLaunch() {
    console.log('App Launch');
    // 判断登录环境
    uni.getProvider({
      service: 'oauth',
      success: function success(res) {
        console.log(res.provider);
        if (~res.provider.indexOf('qq')) {
          uni.login({
            provider: 'qq',
            success: function success(loginRes) {
              console.log(JSON.stringify(loginRes));
            } });

        }
        if (~res.provider.indexOf('weixin')) {
          uni.login({
            provider: 'weixin',
            success: function () {var _success = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(res) {var result;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                        console.log(res);if (!
                        res.code) {_context.next = 11;break;}_context.next = 4;return (
                          (0, _Login.login)(res.code));case 4:result = _context.sent;
                        console.log(result);
                        _store.default.commit('user/LOGIN', result.data.token);
                        console.log(_store.default);
                        _store.default.dispatch('user/getInfo');_context.next = 12;break;case 11:

                        console.log('登录失败！' + res.errMsg);case 12:case "end":return _context.stop();}}}, _callee);}));function success(_x) {return _success.apply(this, arguments);}return success;}(),


            fail: function fail(err) {
              console.error(err);
              _toast.default.fail({
                message: '登录失败',
                duration: 1.5 * 1000 });

            } });

        }
      } });

  },
  onShow: function onShow() {
    console.log('App Show');
  },
  onHide: function onHide() {
    console.log('App Hide');
  },
  onError: function onError(e) {
    console.log(e, "onError");
  },
  onUnhandledRejection: function onUnhandledRejection(e) {
    console.log("onUnhandledRejection", e);
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

},[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/main.js.map