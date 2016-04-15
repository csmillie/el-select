# el-select
> el-select

-----------

## 1. 基本用法

<el-select
  placeholder="请选择"
  :model.sync="select">
  <el-option
    v-for="option in optionsNormal"
    :label="option.label"
    :model.sync="select"
    :value="option.value"></el-option>
</el-select>


```html
<el-select
  placeholder="请选择"
  :model.sync="select">
  <el-option
    v-for="option in optionsNormal"
    :label="option.label"
    :model.sync="select"
    :value="option.value"></el-option>
</el-select>
```
## 2. 禁用状态

<el-select
  disabled
  :model.sync="select2">
  <el-option
    v-for="option in optionsNormal"
    :label="option.label"
    :model.sync="select2"
    :value="option.value"></el-option>
</el-select>

```html
<el-select
  disabled
  :model.sync="select2">
  <el-option
    v-for="option in optionsNormal"
    :label="option.label"
    :model.sync="select2"
    :value="option.value"></el-option>
</el-select>
```

## 3. 有禁用选项
不可用选项置灰


<el-select
  :model.sync="select3">
  <el-option
    v-for="option in optionsDisabled"
    :label="option.label"
    :model.sync="select3"
    :disabled="option.disabled"
    :value="option.value"></el-option>
</el-select>

```html
<el-select
  :model.sync="select3">
  <el-option
    v-for="option in optionsDisabled"
    :label="option.label"
    :model.sync="select3"
    :disabled="option.disabled"
    :value="option.value"></el-option>
</el-select>
```

## 4. 含搜索功能


<el-select
  type="search"
  :search-model.sync="search4"
  :model.sync="select4">
  <el-option
    v-for="option in optionsNormal | filterBy search4"
    :label="option.label"
    :remark="option.pinyin"
    :model.sync="select4"
    :disabled="option.disabled"
    :value="option.value"></el-option>
</el-select>

```html
<el-select
  type="search"
  :search-model.sync="search4"
  :model.sync="select4">
  <el-option
    v-for="option in optionsNormal | filterBy search4"
    :label="option.label"
    :remark="option.pinyin"
    :model.sync="select4"
    :disabled="option.disabled"
    :value="option.value"></el-option>
</el-select>
```

## 5. 多选

<el-select
  type="multiple"
  placeholder="请选择"
  :search-model.sync="search5"
  :model.sync="select5">
  <el-option
    v-for="option in optionsNormal | filterBy search5"
    :label="option.label"
    :remark="option.pinyin"
    :disabled="option.disabled"
    :model.sync="select5"
    :value="option.value"></el-option>
</el-select>


```html
<el-select
  type="multiple"
  placeholder="请选择"
  :search-model.sync="search5"
  :model.sync="select5">
  <el-option
    v-for="option in optionsNormal | filterBy search5"
    :label="option.label"
    :remark="option.pinyin"
    :disabled="option.disabled"
    :model.sync="select5"
    :value="option.value"></el-option>
</el-select>

```
## 6. 分组


<el-select
  :model.sync="select6">
  <el-option-group
    :title="title"
    v-for="(title, group) in optionsGroup">
    <el-option
      v-for="option in group"
      :label="option.label"
      :model.sync="select6"
      :disabled="option.disabled"
      :value="option.value">
    </el-option>
  </el-option-group>
</el-select>


```html
<el-select
  :model.sync="select6">
  <el-option-group
    :title="title"
    v-for="(title, group) in optionsGroup">
    <el-option
      v-for="option in group"
      :label="option.label"
      :model.sync="select6"
      :disabled="option.disabled"
      :value="option.value">
    </el-option>
  </el-option-group>
</el-select>
```


## 7. 联动

<p v-text="select7 | json"></p>
<el-select
  @change="handleChange"
  :model.sync="select7[0]">
  <el-option
    v-for="option in provinceData"
    :model.sync="select7[0]"
    :value="option">
  </el-option>
</el-select>
<el-select
  :model.sync="select7[1]">
  <el-option
    v-for="option in cityData"
    :model.sync="select7[1]"
    :value="option">
  </el-option>
</el-select>

```html
<el-select
  @change="handleChange"
  :model.sync="select7[0]">
  <el-option
    :model.sync="select7[0]"
    v-for="option in provinceData"
    :value="option">
  </el-option>
</el-select>
<el-select
  :model.sync="select7[1]">
  <el-option
    :model.sync="select7[1]"
    v-for="option in cityData"
    :value="option">
  </el-option>
</el-select>
```

```javascript
{
  data() {
    return {
      select7: []
      cityData: []
    };
  },

  methods: {
    handleChange(value) {
      this.cityData = this.cityOriginalData[value];
      this.select7.$set(1, this.cityData[0]);
    }
  },

  created() {
    this.provinceData = ['浙江', '江苏'];
    this.cityOriginalData = {
      '浙江': ['杭州', '宁波', '温州'],
      '江苏': ['南京', '苏州', '镇江']
    };
  }
}
```
