exports.ids = [3];
exports.modules = {

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("1f32c13f", content, true, context)
};

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskDetails_vue_vue_type_style_index_0_id_058206a3_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskDetails_vue_vue_type_style_index_0_id_058206a3_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskDetails_vue_vue_type_style_index_0_id_058206a3_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskDetails_vue_vue_type_style_index_0_id_058206a3_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskDetails_vue_vue_type_style_index_0_id_058206a3_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".details[data-v-058206a3]{padding:20px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TaskDetails.vue?vue&type=template&id=058206a3&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "details"
  }, [_vm._ssrNode("<h2 data-v-058206a3>Edit Task</h2> <input type=\"text\" placeholder=\"Title\"" + _vm._ssrAttr("value", _vm.editedTask.title) + " data-v-058206a3> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.editedTask.status,
      expression: "editedTask.status"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.editedTask, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.statuses, function (status) {
    return _c('option', {
      key: status.id
    }, [_vm._v(_vm._s(status.title))]);
  }), 0), _vm._ssrNode(" <textarea placeholder=\"Description\" data-v-058206a3>" + _vm._ssrEscape(_vm._s(_vm.editedTask.description)) + "</textarea> <button class=\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2\" data-v-058206a3>Update</button> <button class=\"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded\" data-v-058206a3>Delete</button>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TaskDetails.vue?vue&type=template&id=058206a3&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TaskDetails.vue?vue&type=script&lang=js
/* harmony default export */ var TaskDetailsvue_type_script_lang_js = ({
  props: ['task', 'statuses'],
  data() {
    return {
      editedTask: {}
    };
  },
  mounted() {
    // Clone the task object to prevent mutation of the original task
    this.editedTask = {
      ...this.task
    };
  },
  methods: {
    updateTask() {
      // Emit an event to notify the parent component (App.vue) to update the task
      this.$emit('update-task', this.editedTask);
    },
    deleteTask() {
      // Emit an event to notify the parent component (App.vue) to delete the task
      this.$emit('delete-task', this.editedTask);
    }
  }
});
// CONCATENATED MODULE: ./components/TaskDetails.vue?vue&type=script&lang=js
 /* harmony default export */ var components_TaskDetailsvue_type_script_lang_js = (TaskDetailsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TaskDetails.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(28)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TaskDetailsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "058206a3",
  "333bf94a"
  
)

/* harmony default export */ var TaskDetails = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=task-details.js.map