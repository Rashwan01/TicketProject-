(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-create"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tickets/Create.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tickets/Create.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/Breadcrumb */ "./resources/js/layouts/Breadcrumb.vue");
/* harmony import */ var _helpers_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../..//helpers/Form */ "./resources/js/helpers/Form.js");
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
      users: "",
      form: new _helpers_Form__WEBPACK_IMPORTED_MODULE_1__["default"]({
        title: "",
        description: "",
        user_id: "",
        image: ""
      })
    };
  },
  created: function created() {
    var _this = this;

    this.fetchData();
    EventBus.$on("reload", function () {
      return _this.onSubmit();
    });
  },
  methods: {
    uploadAvatar: function uploadAvatar(e) {
      var _this2 = this;

      var file = e.target.files[0];
      var reader = new FileReader();

      if (file["size"] < 2111775) {
        reader.onloadend = function (file) {
          //console.log('RESULT', reader.result)
          _this2.form.image = reader.result;
        };

        reader.readAsDataURL(file);
      } else {
        alert("File size can not be bigger than 2 MB");
      }
    },
    getAvatar: function getAvatar() {
      var photo = this.form.image.length > 100 ? this.form.image : "";
      return photo;
    },
    fetchData: function fetchData() {
      var _this3 = this;

      axios.get("/api/users?role=client").then(function (res) {
        return _this3.users = res.data.data;
      });
    },
    onSubmit: function onSubmit() {
      this.form.post("/api/tickets");
    }
  },
  components: {
    BreadCrumb: _layouts_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tickets/Edit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tickets/Edit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/Breadcrumb */ "./resources/js/layouts/Breadcrumb.vue");
/* harmony import */ var _helpers_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../..//helpers/Form */ "./resources/js/helpers/Form.js");
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
      users: "",
      form: new _helpers_Form__WEBPACK_IMPORTED_MODULE_1__["default"]({}, false)
    };
  },
  created: function created() {
    var _this = this;

    this.getTicket();
    this.fetchClient();
    EventBus.$on("reload", function () {
      _this.update();
    });
  },
  methods: {
    uploadAvatar: function uploadAvatar(e) {
      var _this2 = this;

      var file = e.target.files[0];
      var reader = new FileReader();

      if (file["size"] < 2111775) {
        reader.onloadend = function (file) {
          //console.log('RESULT', reader.result)
          _this2.form.image = reader.result;
        };

        reader.readAsDataURL(file);
      } else {
        alert("File size can not be bigger than 2 MB");
      }
    },
    getAvatar: function getAvatar() {
      return this.form.image ? this.form.image : "";
    },
    update: function update() {
      this.form.put("/api/tickets/".concat(this.$route.params.slug));
    },
    fetchClient: function fetchClient() {
      var _this3 = this;

      axios.get("/api/users?role=client").then(function (res) {
        return _this3.users = res.data.data;
      });
    },
    getTicket: function getTicket() {
      var _this4 = this;

      axios.get("/api/tickets/".concat(this.$route.params.slug)).then(function (res) {
        _this4.form = new _helpers_Form__WEBPACK_IMPORTED_MODULE_1__["default"](res.data.data, false);
      });
    }
  },
  components: {
    BreadCrumb: _layouts_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tickets/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tickets/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      tickets: ""
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

      axios.get("/api/tickets").then(function (res) {
        return _this2.tickets = res.data.data;
      });
    },
    destroy: function destroy(index, slug) {
      var _this3 = this;

      axios["delete"]("/api/tickets/".concat(slug)).then(function (res) {
        _this3.tickets.splice(index, 1);

        _helpers_Notifications__WEBPACK_IMPORTED_MODULE_1__["default"].push("ticket Deleted", "Success", "success");
      });
    }
  },
  components: {
    BreadCrumb: _layouts_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/Create.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Users/Create.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/Breadcrumb */ "./resources/js/layouts/Breadcrumb.vue");
/* harmony import */ var _helpers_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../..//helpers/Form */ "./resources/js/helpers/Form.js");
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
      roles: "",
      form: new _helpers_Form__WEBPACK_IMPORTED_MODULE_1__["default"]({
        name: "",
        email: "",
        username: "",
        password: "",
        role: "",
        image: ""
      })
    };
  },
  created: function created() {
    var _this = this;

    this.fetchRoles();
    EventBus.$on("reload", function () {
      return _this.onSubmit();
    });
  },
  methods: {
    uploadAvatar: function uploadAvatar(e) {
      var _this2 = this;

      var file = e.target.files[0];
      var reader = new FileReader();

      if (file["size"] < 2111775) {
        reader.onloadend = function (file) {
          //console.log('RESULT', reader.result)
          _this2.form.image = reader.result;
        };

        reader.readAsDataURL(file);
      } else {
        alert("File size can not be bigger than 2 MB");
      }
    },
    getAvatar: function getAvatar() {
      var photo = this.form.image.length > 100 ? this.form.image : "";
      return photo;
    },
    onSubmit: function onSubmit() {
      this.form.post("/api/users");
    },
    fetchRoles: function fetchRoles() {
      var _this3 = this;

      axios.get("/api/users/create").then(function (res) {
        _this3.roles = res.data.roles;
      });
    }
  },
  components: {
    BreadCrumb: _layouts_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/Edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Users/Edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/Breadcrumb */ "./resources/js/layouts/Breadcrumb.vue");
/* harmony import */ var _helpers_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../..//helpers/Form */ "./resources/js/helpers/Form.js");
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
      roles: "",
      form: new _helpers_Form__WEBPACK_IMPORTED_MODULE_1__["default"]({}, false)
    };
  },
  created: function created() {
    var _this = this;

    this.getUser();
    this.fetchRoles();
    EventBus.$on("reload", function () {
      return _this.onSubmit();
    });
  },
  methods: {
    uploadAvatar: function uploadAvatar(e) {
      var _this2 = this;

      var file = e.target.files[0];
      var reader = new FileReader();

      if (file["size"] < 2111775) {
        reader.onloadend = function (file) {
          //console.log('RESULT', reader.result)
          _this2.form.image = reader.result;
        };

        reader.readAsDataURL(file);
      } else {
        alert("File size can not be bigger than 2 MB");
      }
    },
    getAvatar: function getAvatar() {
      return this.form.image ? this.form.image : "";
    },
    update: function update() {
      this.form.put("/api/users/".concat(this.$route.params.username));
    },
    fetchRoles: function fetchRoles() {
      var _this3 = this;

      axios.get("/api/users/create").then(function (res) {
        _this3.roles = res.data.roles;
      });
    },
    getUser: function getUser() {
      var _this4 = this;

      axios.get("/api/users/".concat(this.$route.params.username)).then(function (res) {
        _this4.form = new _helpers_Form__WEBPACK_IMPORTED_MODULE_1__["default"](res.data.data, false);
      });
    }
  },
  components: {
    BreadCrumb: _layouts_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tickets/Create.vue?vue&type=template&id=090513ba&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tickets/Create.vue?vue&type=template&id=090513ba& ***!
  \************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header header-elements-inline" }, [
        _c("h5", { staticClass: "card-title" }, [
          _vm._v(_vm._s(_vm.$t("custom.add_new_tickets")))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c(
          "form",
          {
            attrs: { action: "#" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.onSubmit($event)
              },
              keydown: function($event) {
                return _vm.form.errors.clear($event.target.name)
              },
              change: function($event) {
                return _vm.form.errors.clear($event.target.name)
              }
            }
          },
          [
            _c("fieldset", { staticClass: "mb-3" }, [
              _c("div", { staticClass: "form-group row" }, [
                _c("label", { staticClass: "col-form-label col-lg-2" }, [
                  _vm._v(_vm._s(_vm.$t("inputs.title")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-10" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.title,
                        expression: "form.title"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "title" },
                    domProps: { value: _vm.form.title },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "title", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.form.errors.has("title")
                    ? _c("span", {
                        staticClass: "form-text text-danger",
                        domProps: {
                          textContent: _vm._s(_vm.form.errors.get("title"))
                        }
                      })
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c("label", { staticClass: "col-form-label col-lg-2" }, [
                  _vm._v(_vm._s(_vm.$t("inputs.description")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-10" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.description,
                        expression: "form.description"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "description" },
                    domProps: { value: _vm.form.description },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "description", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.form.errors.has("description")
                    ? _c("span", {
                        staticClass: "form-text text-danger",
                        domProps: {
                          textContent: _vm._s(
                            _vm.form.errors.get("description")
                          )
                        }
                      })
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c("label", { staticClass: "col-form-label col-lg-2" }, [
                  _vm._v(_vm._s(_vm.$t("inputs.username")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-10" }, [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.user_id,
                          expression: "form.user_id"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { name: "user_id" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.form,
                            "user_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { disabled: "" } }, [
                        _vm._v(_vm._s(_vm.$t("inputs.choose")))
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.users, function(user, index) {
                        return _c(
                          "option",
                          { key: index, domProps: { value: user.id } },
                          [_vm._v(_vm._s(user.name))]
                        )
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _vm.form.errors.has("user_id")
                    ? _c("span", {
                        staticClass: "form-text text-danger",
                        domProps: {
                          textContent: _vm._s(_vm.form.errors.get("user_id"))
                        }
                      })
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c("label", { staticClass: "col-form-label col-lg-2" }, [
                  _vm._v(_vm._s(_vm.$t("inputs.image")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-10" }, [
                  _c("div", { staticClass: "uniform-uploader" }, [
                    _c("input", {
                      staticClass: "form-control-uniform-custom",
                      attrs: { type: "file", name: "image" },
                      on: { change: _vm.uploadAvatar }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "filename",
                        staticStyle: { "user-select": "none" }
                      },
                      [_vm._v(_vm._s(_vm.$t("inputs.choose_image")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "action btn bg-blue legitRipple",
                        staticStyle: { "user-select": "none" }
                      },
                      [_vm._v(_vm._s(_vm.$t("inputs.choose_image")))]
                    )
                  ]),
                  _vm._v(" "),
                  _vm.form.errors.has("image")
                    ? _c("span", {
                        staticClass: "form-text text-danger",
                        domProps: {
                          textContent: _vm._s(_vm.form.errors.get("image"))
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "avatar img-fluid img-circle",
                      staticStyle: { "margin-top": "10px" }
                    },
                    [_c("img", { attrs: { src: _vm.getAvatar() } })]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-right" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "submit", disabled: _vm.form.errors.any() }
                },
                [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.$t("buttons.save")) +
                      "\n            "
                  ),
                  _c("i", { staticClass: "icon-paperplane ml-2" })
                ]
              )
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tickets/Edit.vue?vue&type=template&id=009a381e&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tickets/Edit.vue?vue&type=template&id=009a381e& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header header-elements-inline" }, [
        _c("h5", { staticClass: "card-title" }, [
          _vm._v(_vm._s(_vm.$t("custom.edit_tickets")))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c(
          "form",
          {
            attrs: { action: "#" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.update($event)
              },
              keydown: function($event) {
                return _vm.form.errors.clear($event.target.name)
              },
              change: function($event) {
                return _vm.form.errors.clear($event.target.name)
              }
            }
          },
          [
            _c("fieldset", { staticClass: "mb-3" }, [
              _c("div", { staticClass: "form-group row" }, [
                _c("label", { staticClass: "col-form-label col-lg-2" }, [
                  _vm._v(_vm._s(_vm.$t("inputs.title")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-10" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.title,
                        expression: "form.title"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "title" },
                    domProps: { value: _vm.form.title },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "title", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.form.errors.has("title")
                    ? _c("span", {
                        staticClass: "form-text text-danger",
                        domProps: {
                          textContent: _vm._s(_vm.form.errors.get("title"))
                        }
                      })
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c("label", { staticClass: "col-form-label col-lg-2" }, [
                  _vm._v(_vm._s(_vm.$t("inputs.description")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-10" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.description,
                        expression: "form.description"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "description" },
                    domProps: { value: _vm.form.description },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "description", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.form.errors.has("description")
                    ? _c("span", {
                        staticClass: "form-text text-danger",
                        domProps: {
                          textContent: _vm._s(
                            _vm.form.errors.get("description")
                          )
                        }
                      })
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c("label", { staticClass: "col-form-label col-lg-2" }, [
                  _vm._v(_vm._s(_vm.$t("inputs.user")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-10" }, [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.user_id,
                          expression: "form.user_id"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { name: "user" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.form,
                            "user_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", [_vm._v(_vm._s(_vm.$t("inputs.choose")))]),
                      _vm._v(" "),
                      _vm._l(_vm.users, function(user, index) {
                        return _c(
                          "option",
                          { key: index, domProps: { value: user.id } },
                          [_vm._v(_vm._s(user.name))]
                        )
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _vm.form.errors.has("user_id")
                    ? _c("span", {
                        staticClass: "form-text text-danger",
                        domProps: {
                          textContent: _vm._s(_vm.form.errors.get("user_id"))
                        }
                      })
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c("label", { staticClass: "col-form-label col-lg-2" }, [
                  _vm._v(_vm._s(_vm.$t("inputs.image")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-10" }, [
                  _c("div", { staticClass: "uniform-uploader" }, [
                    _c("input", {
                      staticClass: "form-control-uniform-custom",
                      attrs: { type: "file", name: "image" },
                      on: { change: _vm.uploadAvatar }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "filename",
                        staticStyle: { "user-select": "none" }
                      },
                      [_vm._v(_vm._s(_vm.$t("inputs.choose_image")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "action btn bg-blue legitRipple",
                        staticStyle: { "user-select": "none" }
                      },
                      [_vm._v(_vm._s(_vm.$t("inputs.choose_image")))]
                    )
                  ]),
                  _vm._v(" "),
                  _vm.form.errors.has("image")
                    ? _c("span", {
                        staticClass: "form-text text-danger",
                        domProps: {
                          textContent: _vm._s(_vm.form.errors.get("image"))
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "avatar img-fluid img-circle",
                      staticStyle: { "margin-top": "10px" }
                    },
                    [_c("img", { attrs: { src: _vm.getAvatar() } })]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-right" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "submit", disabled: _vm.form.errors.any() }
                },
                [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.$t("buttons.save")) +
                      "\n            "
                  ),
                  _c("i", { staticClass: "icon-paperplane ml-2" })
                ]
              )
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tickets/Index.vue?vue&type=template&id=386153fb&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tickets/Index.vue?vue&type=template&id=386153fb& ***!
  \***********************************************************************************************************************************************************************************************************/
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
                      _vm._v(_vm._s(_vm.$t("custom.tickets")))
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
                            attrs: { to: { name: "tickets.create" } }
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
                        _c("th", [_vm._v(_vm._s(_vm.$t("tabels.title")))]),
                        _vm._v(" "),
                        _c("th", [
                          _vm._v(_vm._s(_vm.$t("tabels.description")))
                        ]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.$t("tabels.user")))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.$t("tabels.status")))]),
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
                      _vm._l(_vm.tickets, function(ticket, index) {
                        return _c("tr", { key: index }, [
                          _c("td", [_vm._v(_vm._s(ticket.id))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(ticket.title))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(ticket.description))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(ticket.user))]),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", { staticClass: "badge badge-success" }, [
                              _vm._v(_vm._s(ticket.status))
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
                                        name: "tickets.edit",
                                        params: { slug: ticket.slug }
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
                                        return _vm.destroy(index, ticket.slug)
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/Create.vue?vue&type=template&id=66c33622&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Users/Create.vue?vue&type=template&id=66c33622& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header header-elements-inline" }, [
        _c("h5", { staticClass: "card-title" }, [
          _vm._v(_vm._s(_vm.$t("custom.add_new_user")))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c(
          "form",
          {
            attrs: { action: "#" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.onSubmit($event)
              },
              keydown: function($event) {
                return _vm.form.errors.clear($event.target.name)
              },
              change: function($event) {
                return _vm.form.errors.clear($event.target.name)
              }
            }
          },
          [
            _c("fieldset", { staticClass: "mb-3" }, [
              _c("div", { staticClass: "form-group row" }, [
                _c("label", { staticClass: "col-form-label col-lg-2" }, [
                  _vm._v(_vm._s(_vm.$t("inputs.name")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-10" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.name,
                        expression: "form.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "name" },
                    domProps: { value: _vm.form.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.form.errors.has("name")
                    ? _c("span", {
                        staticClass: "form-text text-danger",
                        domProps: {
                          textContent: _vm._s(_vm.form.errors.get("name"))
                        }
                      })
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c("label", { staticClass: "col-form-label col-lg-2" }, [
                  _vm._v(_vm._s(_vm.$t("inputs.email")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-10" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.email,
                        expression: "form.email"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "email" },
                    domProps: { value: _vm.form.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "email", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.form.errors.has("email")
                    ? _c("span", {
                        staticClass: "form-text text-danger",
                        domProps: {
                          textContent: _vm._s(_vm.form.errors.get("email"))
                        }
                      })
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c("label", { staticClass: "col-form-label col-lg-2" }, [
                  _vm._v(_vm._s(_vm.$t("inputs.username")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-10" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.username,
                        expression: "form.username"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "username",
                      autocomplete: "username"
                    },
                    domProps: { value: _vm.form.username },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "username", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.form.errors.has("username")
                    ? _c("span", {
                        staticClass: "form-text text-danger",
                        domProps: {
                          textContent: _vm._s(_vm.form.errors.get("username"))
                        }
                      })
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c("label", { staticClass: "col-form-label col-lg-2" }, [
                  _vm._v(_vm._s(_vm.$t("inputs.password")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-10" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.password,
                        expression: "form.password"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "password",
                      name: "password",
                      autocomplete: "new-password"
                    },
                    domProps: { value: _vm.form.password },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "password", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.form.errors.has("password")
                    ? _c("span", {
                        staticClass: "form-text text-danger",
                        domProps: {
                          textContent: _vm._s(_vm.form.errors.get("password"))
                        }
                      })
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c("label", { staticClass: "col-form-label col-lg-2" }, [
                  _vm._v(_vm._s(_vm.$t("inputs.user_role")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-10" }, [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.role,
                          expression: "form.role"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { name: "role" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.form,
                            "role",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { selected: "" } }, [
                        _vm._v(_vm._s(_vm.$t("inputs.choose")))
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.roles, function(role, index) {
                        return _c(
                          "option",
                          {
                            key: index,
                            domProps: { value: role.display_name }
                          },
                          [_vm._v(_vm._s(role.display_name))]
                        )
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _vm.form.errors.has("role")
                    ? _c("span", {
                        staticClass: "form-text text-danger",
                        domProps: {
                          textContent: _vm._s(_vm.form.errors.get("role"))
                        }
                      })
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c("label", { staticClass: "col-form-label col-lg-2" }, [
                  _vm._v(_vm._s(_vm.$t("inputs.image")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-10" }, [
                  _c("div", { staticClass: "uniform-uploader" }, [
                    _c("input", {
                      staticClass: "form-control-uniform-custom",
                      attrs: { type: "file", name: "image" },
                      on: { change: _vm.uploadAvatar }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "filename",
                        staticStyle: { "user-select": "none" }
                      },
                      [_vm._v(_vm._s(_vm.$t("inputs.choose_image")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "action btn bg-blue legitRipple",
                        staticStyle: { "user-select": "none" }
                      },
                      [_vm._v(_vm._s(_vm.$t("inputs.choose_image")))]
                    )
                  ]),
                  _vm._v(" "),
                  _vm.form.errors.has("image")
                    ? _c("span", {
                        staticClass: "form-text text-danger",
                        domProps: {
                          textContent: _vm._s(_vm.form.errors.get("image"))
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "avatar img-fluid img-circle",
                      staticStyle: { "margin-top": "10px" }
                    },
                    [_c("img", { attrs: { src: _vm.getAvatar() } })]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-right" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "submit", disabled: _vm.form.errors.any() }
                },
                [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.$t("buttons.save")) +
                      "\n            "
                  ),
                  _c("i", { staticClass: "icon-paperplane ml-2" })
                ]
              )
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/Edit.vue?vue&type=template&id=351697b0&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Users/Edit.vue?vue&type=template&id=351697b0& ***!
  \********************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header header-elements-inline" }, [
        _c("h5", { staticClass: "card-title" }, [
          _vm._v(_vm._s(_vm.$t("custom.edit_user")))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c(
          "form",
          {
            attrs: { action: "#" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.update($event)
              },
              keydown: function($event) {
                return _vm.form.errors.clear($event.target.name)
              },
              change: function($event) {
                return _vm.form.errors.clear($event.target.name)
              }
            }
          },
          [
            _c("fieldset", { staticClass: "mb-3" }, [
              _c("div", { staticClass: "form-group row" }, [
                _c("label", { staticClass: "col-form-label col-lg-2" }, [
                  _vm._v(_vm._s(_vm.$t("inputs.name")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-10" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.name,
                        expression: "form.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "name" },
                    domProps: { value: _vm.form.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.form.errors.has("name")
                    ? _c("span", {
                        staticClass: "form-text text-danger",
                        domProps: {
                          textContent: _vm._s(_vm.form.errors.get("name"))
                        }
                      })
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c("label", { staticClass: "col-form-label col-lg-2" }, [
                  _vm._v(_vm._s(_vm.$t("inputs.email")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-10" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.email,
                        expression: "form.email"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "email" },
                    domProps: { value: _vm.form.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "email", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.form.errors.has("email")
                    ? _c("span", {
                        staticClass: "form-text text-danger",
                        domProps: {
                          textContent: _vm._s(_vm.form.errors.get("email"))
                        }
                      })
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c("label", { staticClass: "col-form-label col-lg-2" }, [
                  _vm._v(_vm._s(_vm.$t("inputs.username")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-10" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.username,
                        expression: "form.username"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "username",
                      autocomplete: "username"
                    },
                    domProps: { value: _vm.form.username },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "username", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.form.errors.has("username")
                    ? _c("span", {
                        staticClass: "form-text text-danger",
                        domProps: {
                          textContent: _vm._s(_vm.form.errors.get("username"))
                        }
                      })
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c("label", { staticClass: "col-form-label col-lg-2" }, [
                  _vm._v(_vm._s(_vm.$t("inputs.password")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-10" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.password,
                        expression: "form.password"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "password",
                      name: "password",
                      autocomplete: "new-password"
                    },
                    domProps: { value: _vm.form.password },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "password", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.form.errors.has("password")
                    ? _c("span", {
                        staticClass: "form-text text-danger",
                        domProps: {
                          textContent: _vm._s(_vm.form.errors.get("password"))
                        }
                      })
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c("label", { staticClass: "col-form-label col-lg-2" }, [
                  _vm._v(_vm._s(_vm.$t("inputs.user_role")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-10" }, [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.role,
                          expression: "form.role"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { name: "role" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.form,
                            "role",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", [_vm._v(_vm._s(_vm.$t("inputs.choose")))]),
                      _vm._v(" "),
                      _vm._l(_vm.roles, function(role, index) {
                        return _c(
                          "option",
                          {
                            key: index,
                            domProps: { value: role.display_name }
                          },
                          [_vm._v(_vm._s(role.name))]
                        )
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _vm.form.errors.has("role")
                    ? _c("span", {
                        staticClass: "form-text text-danger",
                        domProps: {
                          textContent: _vm._s(_vm.form.errors.get("role"))
                        }
                      })
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c("label", { staticClass: "col-form-label col-lg-2" }, [
                  _vm._v(_vm._s(_vm.$t("inputs.image")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-10" }, [
                  _c("div", { staticClass: "uniform-uploader" }, [
                    _c("input", {
                      staticClass: "form-control-uniform-custom",
                      attrs: { type: "file", name: "image" },
                      on: { change: _vm.uploadAvatar }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "filename",
                        staticStyle: { "user-select": "none" }
                      },
                      [_vm._v(_vm._s(_vm.$t("inputs.choose_image")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "action btn bg-blue legitRipple",
                        staticStyle: { "user-select": "none" }
                      },
                      [_vm._v(_vm._s(_vm.$t("inputs.choose_image")))]
                    )
                  ]),
                  _vm._v(" "),
                  _vm.form.errors.has("image")
                    ? _c("span", {
                        staticClass: "form-text text-danger",
                        domProps: {
                          textContent: _vm._s(_vm.form.errors.get("image"))
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "avatar img-fluid img-circle",
                      staticStyle: { "margin-top": "10px" }
                    },
                    [_c("img", { attrs: { src: _vm.getAvatar() } })]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-right" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "submit", disabled: _vm.form.errors.any() }
                },
                [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.$t("buttons.save")) +
                      "\n            "
                  ),
                  _c("i", { staticClass: "icon-paperplane ml-2" })
                ]
              )
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Tickets/Create.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/Tickets/Create.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_090513ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=090513ba& */ "./resources/js/views/Tickets/Create.vue?vue&type=template&id=090513ba&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/Tickets/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_090513ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_090513ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Tickets/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Tickets/Create.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Tickets/Create.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tickets/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Tickets/Create.vue?vue&type=template&id=090513ba&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/Tickets/Create.vue?vue&type=template&id=090513ba& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_090513ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=090513ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tickets/Create.vue?vue&type=template&id=090513ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_090513ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_090513ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Tickets/Edit.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/Tickets/Edit.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_009a381e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=009a381e& */ "./resources/js/views/Tickets/Edit.vue?vue&type=template&id=009a381e&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/Tickets/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_009a381e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_009a381e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Tickets/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Tickets/Edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Tickets/Edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tickets/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Tickets/Edit.vue?vue&type=template&id=009a381e&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Tickets/Edit.vue?vue&type=template&id=009a381e& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_009a381e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=009a381e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tickets/Edit.vue?vue&type=template&id=009a381e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_009a381e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_009a381e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Tickets/Index.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/Tickets/Index.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_386153fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=386153fb& */ "./resources/js/views/Tickets/Index.vue?vue&type=template&id=386153fb&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/Tickets/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_386153fb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_386153fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Tickets/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Tickets/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Tickets/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tickets/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Tickets/Index.vue?vue&type=template&id=386153fb&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Tickets/Index.vue?vue&type=template&id=386153fb& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_386153fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=386153fb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tickets/Index.vue?vue&type=template&id=386153fb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_386153fb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_386153fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Users/Create.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/Users/Create.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_66c33622___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=66c33622& */ "./resources/js/views/Users/Create.vue?vue&type=template&id=66c33622&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/Users/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_66c33622___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_66c33622___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Users/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Users/Create.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Users/Create.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Users/Create.vue?vue&type=template&id=66c33622&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Users/Create.vue?vue&type=template&id=66c33622& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_66c33622___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=66c33622& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/Create.vue?vue&type=template&id=66c33622&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_66c33622___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_66c33622___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Users/Edit.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Users/Edit.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_351697b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=351697b0& */ "./resources/js/views/Users/Edit.vue?vue&type=template&id=351697b0&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/Users/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_351697b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_351697b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Users/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Users/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Users/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Users/Edit.vue?vue&type=template&id=351697b0&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Users/Edit.vue?vue&type=template&id=351697b0& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_351697b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=351697b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/Edit.vue?vue&type=template&id=351697b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_351697b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_351697b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);