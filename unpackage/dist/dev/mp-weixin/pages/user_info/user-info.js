(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user_info/user-info"],{

/***/ "../../../../VueStudy/jianyue-uni-app/main.js?{\"page\":\"pages%2Fuser_info%2Fuser-info\"}":
/*!************************************************************************************!*\
  !*** F:/VueStudy/jianyue-uni-app/main.js?{"page":"pages%2Fuser_info%2Fuser-info"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../VueStudy/jianyue-uni-app/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _userInfo = _interopRequireDefault(__webpack_require__(/*! ./pages/user_info/user-info.vue */ "../../../../VueStudy/jianyue-uni-app/pages/user_info/user-info.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_userInfo.default));

/***/ }),

/***/ "../../../../VueStudy/jianyue-uni-app/pages/user_info/user-info.vue":
/*!*****************************************************************!*\
  !*** F:/VueStudy/jianyue-uni-app/pages/user_info/user-info.vue ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_info_vue_vue_type_template_id_5869b33f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-info.vue?vue&type=template&id=5869b33f& */ "../../../../VueStudy/jianyue-uni-app/pages/user_info/user-info.vue?vue&type=template&id=5869b33f&");
/* harmony import */ var _user_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-info.vue?vue&type=script&lang=js& */ "../../../../VueStudy/jianyue-uni-app/pages/user_info/user-info.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _user_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _user_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-info.vue?vue&type=style&index=0&lang=css& */ "../../../../VueStudy/jianyue-uni-app/pages/user_info/user-info.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Vue_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Vue/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_Vue_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _user_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_info_vue_vue_type_template_id_5869b33f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_info_vue_vue_type_template_id_5869b33f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "VueStudy/jianyue-uni-app/pages/user_info/user-info.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../VueStudy/jianyue-uni-app/pages/user_info/user-info.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** F:/VueStudy/jianyue-uni-app/pages/user_info/user-info.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Vue_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Vue_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Vue/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Vue/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../Vue/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../Vue/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../Vue/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./user-info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../VueStudy/jianyue-uni-app/pages/user_info/user-info.vue?vue&type=script&lang=js&");
/* harmony import */ var _Vue_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Vue_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Vue_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Vue_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Vue_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Vue_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Vue_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Vue_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Vue_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Vue_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../VueStudy/jianyue-uni-app/pages/user_info/user-info.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************!*\
  !*** F:/VueStudy/jianyue-uni-app/pages/user_info/user-info.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Vue_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Vue_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Vue_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Vue_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Vue_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Vue/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../Vue/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../Vue/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../Vue/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../Vue/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../Vue/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./user-info.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../VueStudy/jianyue-uni-app/pages/user_info/user-info.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Vue_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Vue_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Vue_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Vue_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Vue_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Vue_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Vue_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Vue_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Vue_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Vue_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Vue_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Vue_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Vue_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Vue_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Vue_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Vue_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Vue_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Vue_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Vue_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Vue_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Vue_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Vue_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Vue_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Vue_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Vue_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../VueStudy/jianyue-uni-app/pages/user_info/user-info.vue?vue&type=template&id=5869b33f&":
/*!************************************************************************************************!*\
  !*** F:/VueStudy/jianyue-uni-app/pages/user_info/user-info.vue?vue&type=template&id=5869b33f& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Vue_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Vue_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_template_id_5869b33f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Vue/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Vue/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../Vue/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../Vue/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./user-info.vue?vue&type=template&id=5869b33f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../VueStudy/jianyue-uni-app/pages/user_info/user-info.vue?vue&type=template&id=5869b33f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Vue_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Vue_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_template_id_5869b33f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Vue_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Vue_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Vue_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_template_id_5869b33f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../VueStudy/jianyue-uni-app/pages/user_info/user-info.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!F:/VueStudy/jianyue-uni-app/pages/user_info/user-info.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =























{
  data: function data() {
    return {
      nickname: uni.getStorageSync('login_key').nickname,
      avatar: uni.getStorageSync('login_key').avatar,
      userId: uni.getStorageSync('login_key').userId };

  },
  methods: {
    uploadNickname: function uploadNickname() {var _this2 = this;
      var _this = this;
      uni.request({
        url: this.apiServer + '/user/nickname',
        method: 'post',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        data: {
          userId: _this.userId,
          nickname: _this.newNickname },

        success: function success(uploadNickname) {
          console.log(uploadNickname.data);
          _this.nickname = _this.newNickname;
          uni.request({
            url: _this2.apiServer + '/user/' + uni.getStorageSync('login_key').userId,
            method: 'GET',
            data: {
              userId: _this.userId },

            header: {
              'content-type': 'application/json' },

            success: function success(res) {
              if (res.data.code == 0) {
                //将用户数据记录在本地存储
                uni.setStorageSync('login_key', {
                  userId: res.data.data.id,
                  nickname: res.data.data.nickname,
                  avatar: res.data.data.avatar,
                  token: res.data.data.token,
                  login: true });

              }
            } });

        } });

    },
    showActionSheet: function showActionSheet() {
      var _this = this;
      uni.showActionSheet({
        itemList: ['拍照', '从相册选择'],
        success: function success(res) {
          console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
          //选择的是拍照功能
          if (res.tapIndex == 0) {
            uni.chooseImage({
              count: 1,
              sourceType: ['camera'],
              success: function success(res) {
                uni.saveImageToPhotosAlbum({
                  filePath: res.tempFilePaths[0],
                  success: function success() {
                    console.log('save success');
                    uni.uploadFile({
                      url: 'http://192.168.43.99:8080/api/user/avatar',
                      filePath: res.tempFilePaths[0],
                      name: 'file',
                      formData: {
                        userId: _this.userId },

                      success: function success(uploadFileRes) {
                        console.log(uploadFileRes.data);
                        _this.avatar = uploadFileRes.data;
                      },
                      complete: function complete() {
                        console.log('save');
                        uni.request({
                          url:
                          'http://192.168.43.99:8080/api/user/' +
                          uni.getStorageSync('login_key').userId,
                          method: 'GET',
                          data: {
                            userId: _this.userId },

                          header: {
                            'content-type': 'application/json' },

                          success: function success(res) {
                            console.log('save2');
                            if (res.data.code == 0) {
                              //将用户数据记录在本地存储
                              uni.setStorageSync('login_key', {
                                userId: res.data.data.id,
                                nickname: res.data.data.nickname,
                                avatar: res.data.data.avatar,
                                token: res.data.data.token,
                                login: true });

                            }
                          } });

                      } });

                  } });

              } });

          }
          //从相册选择
          if (res.tapIndex == 1) {
            uni.chooseImage({
              count: 1, //默认9
              sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都
              sourceType: ['album'], //从相册选择
              success: function success(res) {
                console.log(JSON.stringify(res.tempFilePaths));
                uni.uploadFile({
                  url: ' http://192.168.43.99:8080/api/user/avatar',
                  filePath: res.tempFilePaths[0],
                  name: 'file',
                  formData: {
                    userId: _this.userId },

                  success: function success(uploadFileRes) {
                    console.log(uploadFileRes.data);
                    _this.avatar = uploadFileRes.data;
                  },
                  complete: function complete() {
                    console.log('save');
                    uni.request({
                      url:
                      'http://192.168.43.99:8080/api/user/' +
                      uni.getStorageSync('login_key').userId,
                      method: 'GET',
                      data: {
                        userId: _this.userId },

                      header: {
                        'content-type': 'application/json' },

                      success: function success(res) {
                        console.log('save2');
                        if (res.data.code == 0) {
                          //将用户数据记录在本地存储
                          uni.setStorageSync('login_key', {
                            userId: res.data.data.id,
                            nickname: res.data.data.nickname,
                            avatar: res.data.data.avatar,
                            token: res.data.data.token,
                            login: true });

                        }
                      } });

                  } });

              } });

          }
        },
        fail: function fail(res) {
          console.log(res.errMsg);
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../VueStudy/jianyue-uni-app/pages/user_info/user-info.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!F:/VueStudy/jianyue-uni-app/pages/user_info/user-info.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../VueStudy/jianyue-uni-app/pages/user_info/user-info.vue?vue&type=template&id=5869b33f&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!F:/VueStudy/jianyue-uni-app/pages/user_info/user-info.vue?vue&type=template&id=5869b33f& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticClass: "container" }, [
    _c("view", { staticClass: "list" }, [
      _c("view", { staticClass: "list-item list-item-heigher" }, [
        _c("view", { staticClass: "left" }, [_vm._v("头像")]),
        _c("view", { staticClass: "right" }, [
          _c("image", {
            staticClass: "avatar",
            attrs: { src: _vm.avatar, eventid: "52973665-0" },
            on: { tap: _vm.showActionSheet }
          })
        ])
      ]),
      _c("view", { staticClass: "list-item list-item-heigher" }, [
        _c("view", { staticClass: "left" }, [_vm._v("昵称")]),
        _c("view", { staticClass: "right" }, [_vm._v(_vm._s(_vm.nickname))])
      ]),
      _c("view", { staticClass: "list-item list-item-heigher" }, [
        _c("view", { staticClass: "left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.newNickname,
                expression: "newNickname"
              }
            ],
            attrs: { type: "text", eventid: "52973665-1" },
            domProps: { value: _vm.newNickname },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.newNickname = $event.target.value
              }
            }
          })
        ]),
        _c(
          "view",
          { staticClass: "left" },
          [
            _c(
              "button",
              {
                attrs: { eventid: "52973665-2" },
                on: { tap: _vm.uploadNickname }
              },
              [_vm._v("确定")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["../../../../VueStudy/jianyue-uni-app/main.js?{\"page\":\"pages%2Fuser_info%2Fuser-info\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user_info/user-info.js.map