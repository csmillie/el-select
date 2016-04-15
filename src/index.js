var ElSelect = require('./select');
var ElOption = require('./option');
var ElOptionGroup = require('./option-group');

module.exports = {
  ElSelect,
  ElOption,
  ElOptionGroup,
  install(Vue) {
    Vue.component('el-select', ElSelect);
    Vue.component('el-option', ElOption);
    Vue.component('el-option-group', ElOptionGroup);
  }
};
