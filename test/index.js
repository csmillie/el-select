var test = require('ava');
var Vue = require('vue');
var ElSelect = require('../dist/index.js');

test('el-select', t => {
  t.truthy(ElSelect.install);
});
