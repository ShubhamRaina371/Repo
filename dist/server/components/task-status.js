exports.ids = [4,2];
exports.modules = {

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("5aa82df9", content, true, context)
};

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TaskCard.vue?vue&type=template&id=57e0f217&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('router-link', {
    attrs: {
      "to": '/task/' + _vm.task.id
    }
  }, [_c('div', {
    staticClass: "task",
    attrs: {
      "draggable": "true"
    },
    on: {
      "dragstart": _vm.dragStart
    }
  }, [_c('h3', [_vm._v(_vm._s(_vm.task.title))])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TaskCard.vue?vue&type=template&id=57e0f217&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TaskCard.vue?vue&type=script&lang=js
/* harmony default export */ var TaskCardvue_type_script_lang_js = ({
  props: ['task'],
  methods: {
    dragStart(event) {
      event.dataTransfer.setData('text/plain', JSON.stringify(this.task));
    }
  }
});
// CONCATENATED MODULE: ./components/TaskCard.vue?vue&type=script&lang=js
 /* harmony default export */ var components_TaskCardvue_type_script_lang_js = (TaskCardvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TaskCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(23)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TaskCardvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "57e0f217",
  "05115638"
  
)

/* harmony default export */ var TaskCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("37a7df8f", content, true, context)
};

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskCard_vue_vue_type_style_index_0_id_57e0f217_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskCard_vue_vue_type_style_index_0_id_57e0f217_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskCard_vue_vue_type_style_index_0_id_57e0f217_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskCard_vue_vue_type_style_index_0_id_57e0f217_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskCard_vue_vue_type_style_index_0_id_57e0f217_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".task[data-v-57e0f217]{background-color:#f0f0f0;border:1px solid #ccc;cursor:pointer;margin-bottom:5px;padding:10px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TaskStatus.vue?vue&type=template&id=6b606e44&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: 'status ' + _vm.status.color
  }, [_vm._ssrNode("<h2 data-v-6b606e44>" + _vm._ssrEscape(_vm._s(_vm.status.title) + " (" + _vm._s(_vm.status.tasks.length) + ")") + "</h2> "), _vm._ssrNode("<div class=\"tasks\" data-v-6b606e44>", "</div>", _vm._l(_vm.status.tasks, function (task) {
    return _c('task-card', {
      key: task.id,
      attrs: {
        "task": task
      }
    });
  }), 1), _vm._ssrNode(" <button data-v-6b606e44>New</button>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TaskStatus.vue?vue&type=template&id=6b606e44&scoped=true

// EXTERNAL MODULE: ./components/TaskCard.vue + 4 modules
var TaskCard = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TaskStatus.vue?vue&type=script&lang=js

/* harmony default export */ var TaskStatusvue_type_script_lang_js = ({
  components: {
    TaskCard: TaskCard["default"]
  },
  props: ['status'],
  methods: {
    addTask() {
      const newTask = {
        id: Date.now(),
        title: 'New Task',
        description: '',
        status: this.status.title
      };
      this.status.tasks.push(newTask);
    }
  }
});
// CONCATENATED MODULE: ./components/TaskStatus.vue?vue&type=script&lang=js
 /* harmony default export */ var components_TaskStatusvue_type_script_lang_js = (TaskStatusvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TaskStatus.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(26)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TaskStatusvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6b606e44",
  "2d0d861a"
  
)

/* harmony default export */ var TaskStatus = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TaskCard: __webpack_require__(20).default})


/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskStatus_vue_vue_type_style_index_0_id_6b606e44_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskStatus_vue_vue_type_style_index_0_id_6b606e44_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskStatus_vue_vue_type_style_index_0_id_6b606e44_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskStatus_vue_vue_type_style_index_0_id_6b606e44_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskStatus_vue_vue_type_style_index_0_id_6b606e44_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".status[data-v-6b606e44]{border:1px solid #ccc;margin:10px;padding:10px}.tasks[data-v-6b606e44]{margin-top:10px}.to-do[data-v-6b606e44]{color:#f44e4e}.in-progress[data-v-6b606e44]{color:#e8c239}button[data-v-6b606e44]{background-color:#04aa6d;border:none;border-radius:5px;color:#fff;cursor:pointer;display:inline-block;font-family:\"Source Sans Pro\",sans-serif;font-size:1.3rem;margin-top:.5rem;overflow:hidden;padding:6px 18px;text-align:center;-webkit-text-decoration:none;text-decoration:none;vertical-align:middle}.done[data-v-6b606e44]{color:#589f58}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=task-status.js.map