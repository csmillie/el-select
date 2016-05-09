var ElSelect = require('./select');
var ElOption = require('./option');
var ElOptionGroup = require('./option-group');

module.exports = {
  ElSelect,
  ElOption,
  ElOptionGroup,
  install(Vue) {
    Vue.component(ElSelect.name, ElSelect);
    Vue.component(ElOption.name, ElOption);
    Vue.component(ElOptionGroup.name, ElOptionGroup);
  }
};
