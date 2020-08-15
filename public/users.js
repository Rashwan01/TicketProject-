(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Users/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/Breadcrumb */ "./resources/js/layouts/Breadcrumb.vue");
/* harmony import */ var _helpers_Notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/Notifications */ "./resources/js/helpers/Notifications.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      users: ""
    };
  },
  created: function created() {
    var _this = this;

    this.fetchData();
    EventBus.$on("reload", function () {
      return _this.fetchData();
    });
  },
  methods: {
    fetchData: function fetchData() {
      var _this2 = this;

      axios.get("/api/users").then(function (res) {
        return _this2.users = res.data.data;
      });
    },
    destroy: function destroy(index, username) {
      var _this3 = this;

      axios["delete"]("/api/users/".concat(username)).then(function (res) {
        _this3.users.splice(index, 1);

        _helpers_Notifications__WEBPACK_IMPORTED_MODULE_1__["default"].push("User Deleted", "Success", "success");
      });
    }
  },
  components: {
    BreadCrumb: _layouts_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/index.vue?vue&type=template&id=3801f83c&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Users/index.vue?vue&type=template&id=3801f83c& ***!
  \*********************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("bread-crumb"),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "content" }, [
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  { staticClass: "card-header header-elements-inline" },
                  [
                    _c("h5", { staticClass: "card-title" }, [
                      _vm._v(_vm._s(_vm.$t("tabels.users")))
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "header-elements" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-sm btn-primary",
                            attrs: { to: { name: "users.create" } }
                          },
                          [
                            _c("i", { staticClass: "icon-add mr-2" }),
                            _vm._v(
                              "\n                  " +
                                _vm._s(_vm.$t("buttons.add")) +
                                "\n                "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }),
                _vm._v(" "),
                _c("div", { staticClass: "table-responsive" }, [
                  _c("table", { staticClass: "table" }, [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v(_vm._s(_vm.$t("tabels.id")))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.$t("tabels.name")))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.$t("tabels.username")))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.$t("tabels.email")))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.$t("tabels.role")))]),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticClass: "text-center",
                            staticStyle: { width: "30px" }
                          },
                          [_vm._v(_vm._s(_vm.$t("tabels.actions")))]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.users, function(user, index) {
                        return _c("tr", { key: index }, [
                          _c("td", [_vm._v(_vm._s(user.id))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(user.name))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(user.username))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(user.email))]),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", { staticClass: "badge badge-success" }, [
                              _vm._v(_vm._s(user.role))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
                            _c(
                              "div",
                              { staticClass: "list-icons" },
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass:
                                      "btn btn-primary btn-sm legitRipple",
                                    attrs: {
                                      type: "button",
                                      to: {
                                        name: "users.edit",
                                        params: { username: user.username }
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "icon-pencil7 mr-2"
                                    }),
                                    _vm._v(
                                      "\n                          " +
                                        _vm._s(_vm.$t("buttons.edit")) +
                                        "\n                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-danger btn-sm legitRipple",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        return _vm.destroy(index, user.username)
                                      }
                                    }
                                  },
                                  [
                                    _c("i", { staticClass: "icon-trash mr-2" }),
                                    _vm._v(
                                      "\n                          " +
                                        _vm._s(_vm.$t("buttons.delete")) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ])
                        ])
                      }),
                      0
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Users/index.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Users/index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_3801f83c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3801f83c& */ "./resources/js/views/Users/index.vue?vue&type=template&id=3801f83c&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/Users/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3801f83c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_3801f83c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Users/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Users/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Users/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Users/index.vue?vue&type=template&id=3801f83c&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Users/index.vue?vue&type=template&id=3801f83c& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3801f83c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=3801f83c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/index.vue?vue&type=template&id=3801f83c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3801f83c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3801f83c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);