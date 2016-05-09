(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue-clickoutside"));
	else if(typeof define === 'function' && define.amd)
		define("ElSelect", ["vue-clickoutside"], factory);
	else if(typeof exports === 'object')
		exports["ElSelect"] = factory(require("vue-clickoutside"));
	else
		root["ElSelect"] = factory(root["vue-clickoutside"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_20__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ElSelect = __webpack_require__(10);
	var ElOption = __webpack_require__(9);
	var ElOptionGroup = __webpack_require__(8);

	module.exports = {
	  ElSelect: ElSelect,
	  ElOption: ElOption,
	  ElOptionGroup: ElOptionGroup,
	  install: function install(Vue) {
	    Vue.component(ElSelect.name, ElSelect);
	    Vue.component(ElOption.name, ElOption);
	    Vue.component(ElOptionGroup.name, ElOptionGroup);
	  }
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(17);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "<div block=element-core-input :class=\"{\n    'is-disabled': disabled,\n    'is-readonly': readonly,\n    'is-multiple': multiple\n  }\"> <slot name=header></slot> <template v-if=multiple> <el-core-tag @remove=tags.$remove(tag) v-for=\"tag in tags\" :data=tag> </el-core-tag> </template> <input elem=original v-el:input v-model=model :type=\"type || 'text'\" :disabled=disabled :readonly=readonly :placeholder=placeholder :number=\"type === 'number'\" @blur=\"$dispatch('e-blur')\" @focus=handleFocus @keydown.down.prevent=\"$dispatch('e-press-down')\" @keydown.up.prevent=\"$dispatch('e-press-up')\" @keyup.enter=\"$dispatch('e-press-enter')\" @keydown.8=handleDelete @keydown.esc=\"$dispatch('e-press-esc')\"> <slot name=icon></slot> <slot name=footer></slot> </div>";

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<ul block=element-optiongroup :class=\"{ 'is-hastitle': title }\"> <li elem=title v-if=title v-show=!hideTitle v-text=title></li> <li elem=content v-show=!hideList> <slot></slot> </li> </ul>";

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<li block=element-option :class=\"{\n    'is-disabled': disabled,\n    'is-selected': selected,\n    'is-hover': hit\n  }\" @mouseup=handleClick> <span v-text=label></span> <span v-text=remark elem=remark> </span> </li>";

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<div block=element-select :class=\"{ 'is-search': searchModel }\" v-element-clickoutside=\"showDropdown = false\"> <el-core-input v-if=\"type !== 'multiple'\" :class=\"{ 'is-active': active }\" @click=\"showDropdown = !showDropdown\" :placeholder=dislayPlaceholder :model.sync=model :disabled=disabled @e-press-down=\"fetchOption('next')\" @e-press-up=\"fetchOption('prev')\" @e-press-enter=updateModel @e-press-delete=removeTag :multiple=\"type === 'multiple'\" :readonly=\"type !== 'multiple'\"> </el-core-input> <el-core-input v-else :class=\"{ 'is-active': active }\" @click=\"showDropdown = !showDropdown\" :placeholder=dislayPlaceholder :tags=model :model.sync=searchModel :disabled=disabled @e-press-down=\"fetchOption('next')\" @e-press-up=\"fetchOption('prev')\" @e-press-enter=updateModel @e-press-delete=removeTag :multiple=\"type === 'multiple'\" :readonly=\"type !== 'multiple'\"> </el-core-input> <span slot=icon elem=chevron :class=\"{ 'is-up': active }\"> </span> <ul v-show=active block=element-dropdown> <el-core-input elem=search v-if=\"type === 'search'\" :placeholder=searchPlaceholder :model.sync=searchModel @e-press-down=\"fetchOption('next')\" @e-press-up=\"fetchOption('prev')\" @e-press-enter=updateModel> </el-core-input> <div elem=option v-el:option-wrap> <slot></slot> <div elem=empty v-show=empty>无搜索结果</div> </div> </ul> </div>";

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<button block=element-core-tag> <span v-text=data></span> <span elem=button v-if=_events.remove @click.stop=\"$dispatch('remove')\">&times;</span> </button>";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(12)
	__vue_template__ = __webpack_require__(2)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(13)
	__vue_template__ = __webpack_require__(3)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(14)
	__vue_template__ = __webpack_require__(4)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(15)
	__vue_template__ = __webpack_require__(5)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(16)
	__vue_template__ = __webpack_require__(6)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tag = __webpack_require__(11);

	var _tag2 = _interopRequireDefault(_tag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElCoreInput',

	  components: {
	    ElCoreTag: _tag2.default
	  },

	  props: {
	    placeholder: String,
	    disabled: Boolean,
	    readonly: Boolean,
	    multiple: Boolean,
	    tags: Array,
	    model: [String, null],
	    type: String
	  },

	  methods: {
	    handleFocus: function handleFocus() {
	      if (!this.readonly) {
	        this.$els.input.select();
	      }
	      this.$dispatch('e-focus');
	    },
	    handleDelete: function handleDelete() {
	      if (this.model.trim().length !== 0) {
	        return;
	      }

	      this.$dispatch('e-press-delete');
	    }
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'el-option-group',
	  props: {
	    title: String,
	    hideTitle: {
	      type: Boolean,
	      coerce: function coerce(value) {
	        return Boolean(value);
	      }
	    },
	    hideList: {
	      type: Boolean,
	      coerce: function coerce(value) {
	        return Boolean(value);
	      }
	    }
	  }
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(1);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _events;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElOption',

	  props: {
	    label: String,
	    disabled: Boolean,
	    value: {
	      required: true,
	      type: String
	    },
	    remark: String
	  },

	  created: function created() {
	    this.label = this.label || this.value;
	    this.$dispatch('element.option.created', this);
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.$dispatch('element.option.destroy', this);
	  },
	  data: function data() {
	    return {
	      hit: false,
	      selected: false
	    };
	  },


	  events: (_events = {}, (0, _defineProperty3.default)(_events, 'element.select.current', function elementSelectCurrent(component) {
	    this.hit = component.value === this.value;
	  }), (0, _defineProperty3.default)(_events, 'element.select.selected', function elementSelectSelected(model) {
	    if (Array.isArray(model)) {
	      this.selected = model.indexOf(this.value) > -1;
	    } else {
	      this.selected = model === this.value;
	    }
	  }), _events),

	  methods: {
	    handleClick: function handleClick() {
	      if (this.disabled) {
	        return;
	      }

	      this.$dispatch('element.option.click', this);
	    }
	  }
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _defineProperty2 = __webpack_require__(1);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _events;

	var _input = __webpack_require__(7);

	var _input2 = _interopRequireDefault(_input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  name: 'ElSelect',

	  props: {
	    placeholder: String,
	    hintPlaceholder: String,
	    type: {
	      type: String,
	      default: 'normal',
	      validator: function validator(value) {
	        return ['multiple', 'normal', 'search'].indexOf(value) > -1;
	      }
	    },
	    disabled: Boolean,
	    searchPlaceholder: {
	      type: String,
	      default: '搜索'
	    },
	    searchModel: {
	      type: String,
	      twoWay: true
	    },
	    model: {
	      default: function _default() {
	        return [];
	      },

	      twoWay: true,
	      required: true
	    }
	  },

	  created: function created() {
	    this.originalOptions = [];
	  },


	  computed: {
	    active: function active() {
	      return !this.disabled && this.showDropdown;
	    },
	    dislayPlaceholder: function dislayPlaceholder() {
	      var placeholder = this.model.length ? '' : this.placeholder;
	      if (this.focus) {
	        return this.hintPlaceholder || placeholder;
	      }
	      return placeholder;
	    },
	    empty: function empty() {
	      return this.currentOptions.length <= 0;
	    },
	    searchBoxHeight: function searchBoxHeight() {
	      return this.type === 'search' ? 30 : 0;
	    }
	  },

	  components: {
	    ElCoreInput: _input2.default
	  },

	  directives: {
	    ElementClickoutside: __webpack_require__(20)
	  },

	  data: function data() {
	    return {
	      showDropdown: false,
	      current: '',
	      focus: false,
	      currentOptions: []
	    };
	  },


	  watch: {
	    showDropdown: function showDropdown(sure) {
	      if (!sure) {
	        this.searchModel = '';
	        return;
	      }

	      if (this.$els.input) {
	        this.$els.input.focus();
	      }
	    },
	    searchModel: function searchModel(sure) {
	      if (!sure) {
	        return;
	      }

	      var firstMatchOption = this.currentOptions[0];

	      if (firstMatchOption) {
	        this.current = firstMatchOption;
	      } else {
	        this.current = null;
	      }
	      this.showDropdown = true;
	    },
	    current: function current(component) {
	      if (!component) {
	        return;
	      }

	      this.$broadcast('element.select.current', this.current);

	      if (component.$el) {
	        this.$els.optionWrap.scrollTop = component.$el.offsetTop - this.searchBoxHeight;
	      }
	    },
	    model: function model(value) {
	      this.$dispatch('change', value);
	      this.$broadcast('element.select.selected', value);
	    }
	  },

	  events: (_events = {}, (0, _defineProperty3.default)(_events, 'element.option.created', function elementOptionCreated(component) {
	    this.currentOptions.push(component);

	    var result = this.originalOptions.find(function (option) {
	      return option.value === component.value;
	    });

	    if (!result) {
	      this.originalOptions.push(component);
	    }
	  }), (0, _defineProperty3.default)(_events, 'element.option.destroy', function elementOptionDestroy(component) {
	    this.currentOptions.$remove(component);
	  }), (0, _defineProperty3.default)(_events, 'element.option.click', function elementOptionClick(component) {
	    this.current = component;
	    this.updateModel();
	  }), _events),

	  methods: {
	    fetchOption: function fetchOption() {
	      var _this = this;

	      var type = arguments.length <= 0 || arguments[0] === undefined ? 'next' : arguments[0];

	      if (!this.originalOptions.length || !this.currentOptions.length) {
	        return;
	      }

	      var index = this.originalOptions.indexOf(this.current);
	      var len = this.originalOptions.length;

	      if (type === 'next') {
	        if (index < len - 1) {
	          this.current = this.originalOptions[index + 1];
	        } else {
	          this.current = this.originalOptions[0];
	        }
	      } else {
	        if (index > 0) {
	          this.current = this.originalOptions[index - 1];
	        } else {
	          this.current = this.originalOptions[len - 1];
	        }
	      }

	      this.showDropdown = true;

	      var result = this.currentOptions.find(function (option) {
	        return option.value === _this.current.value;
	      });

	      if (this.current.disabled || !result) {
	        this.fetchOption(type);
	        return;
	      }
	    },
	    removeTag: function removeTag() {
	      if (this.searchModel.trim().length !== 0) {
	        return;
	      }

	      if (this.type !== 'multiple') {
	        this.model = '';
	      } else {
	        this.model.pop();
	      }
	    },
	    updateModel: function updateModel() {
	      this.searchModel = '';

	      if (!this.current) {
	        return;
	      }

	      if (this.type !== 'multiple') {
	        this.showDropdown = false;
	        this.model = this.current.value;
	        return;
	      }

	      if (this.model.indexOf(this.current.value) < 0) {
	        this.model.push(this.current.value);
	      } else {
	        this.model.$remove(this.current.value);
	      }
	    }
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  name: 'ElCoreTag',

	  props: {
	    data: [String, Number]
	  }
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(18), __esModule: true };

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(19);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }
/******/ ])
});
;