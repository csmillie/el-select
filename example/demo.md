# el-select
> 类 select2 组件

----------

## 基本用法

<el-select
  placeholder="请选择"
  :model.sync="select">
  <el-option
    v-for="option in optionsNormal"
    :label="option.label"
    :value="option.value">
  </el-option>
</el-select>

```html
<template>

  <el-select
    placeholder="请选择"
    :model.sync="select">
    <el-option
      v-for="option in optionsNormal"
      :label="option.label"
      :value="option.value">
    </el-option>
  </el-select>

</template>

<script>
  export default {
    created () {
      this.optionsNormal = [
        {
          "label": "选项1",
          "value": "结果1"
        },
        {
          "label": "选项2",
          "value": "结果2"
        },
        {
          "label": "选项3",
          "value": "结果3"
        }
      ]
    }
  }
</script>
```
## 禁用状态

<el-select
  :disabled="true"
  placeholder="请选择内容"
  :model.sync="select2">
  <el-option
    v-for="option in optionsNormal"
    :label="option.label"
    :value="option.value">
  </el-option>
</el-select>

```html
<el-select
  :disabled="true"
  placeholder="请选择内容"
  :model.sync="select2">
  <el-option
    v-for="option in optionsNormal"
    :label="option.label"
    :value="option.value">
  </el-option>
</el-select>
```

## 有禁用选项
不可用选项置灰


<el-select
  placeholder="请选择内容"
  :model.sync="select3">
  <el-option
    v-for="option in optionsDisabled"
    :label="option.label"
    :disabled="option.disabled"
    :value="option.value">
  </el-option>
</el-select>

```html
<template>

  <el-select
    placeholder="请选择内容"
    :model.sync="select3">
    <el-option
      v-for="option in optionsDisabled"
      :label="option.label"
      :disabled="option.disabled"
      :value="option.value">
    </el-option>
  </el-select>

</template>

<script>
  export default {
    created () {
      this.optionsDisabled = [
        {
          "label": "选项1",
          "value": "结果1"
        },
        {
          "label": "选项2",
          "value": "结果2",
          "disabled": true
        },
        {
          "label": "选项3",
          "value": "结果3"
        }
      ]
    }
  }
</script>
```

## 含搜索功能

<el-select
  type="search"
  placeholder="请选择内容"
  :search-model.sync="search4"
  :model.sync="select4">
  <el-option
    v-for="option in optionsNormal | filterBy search4"
    :label="option.label"
    :remark="option.remark"
    :disabled="option.disabled"
    :value="option.value">
  </el-option>
</el-select>

```html
<template>

  <el-select
    type="search"
    placeholder="请选择内容"
    :search-model.sync="search4"
    :model.sync="select4">
    <el-option
      v-for="option in optionsNormal | filterBy search4"
      :label="option.label"
      :remark="option.remark"
      :disabled="option.disabled"
      :value="option.value">
    </el-option>
  </el-select>

</template>

<script>
  export default {
    data () {
      return {
        search4: '',
        select4: ''
      }
    },

    created () {
      this.optionsNormal = [
        {
          "label": "选项1",
          "value": "结果1",
          "remark": "remark1"
        },
        {
          "label": "选项2",
          "value": "结果2",
          "remark": "remark2"
        },
        {
          "label": "选项3",
          "value": "结果3",
          "remark": "remark3"
        }
      ]
    }
  }
</script>
```

## 多选

<el-select
  type="multiple"
  placeholder="请选择内容"
  :search-model.sync="search5"
  :model.sync="select5">
  <el-option
    v-for="option in optionsNormal | filterBy search5"
    :label="option.label"
    :remark="option.remark"
    :disabled="option.disabled"
    :value="option.value">
  </el-option>
</el-select>


```html
<el-select
  type="multiple"
  placeholder="请选择内容"
  hint-placeholder="输入拼音或中文"
  :search-model.sync="search5"
  :model.sync="select5">
  <el-option
    v-for="option in optionsNormal | filterBy search5"
    :label="option.label"
    :remark="option.remark"
    :disabled="option.disabled"
    :value="option.value">
  </el-option>
</el-select>

```
## 分组


<el-select
  placeholder="请选择内容"
  :model.sync="select6">
  <el-option-group
    :title="title"
    v-for="(title, group) in optionsGroup">
    <el-option
      v-for="option in group"
      :label="option.label"
      :disabled="option.disabled"
      :value="option.value">
    </el-option>
  </el-option-group>
</el-select>


```html
<template>

  <el-select
    placeholder="请选择内容"
    :model.sync="select6">
    <el-option-group
      :title="title"
      v-for="(title, group) in optionsGroup">
      <el-option
        v-for="option in group"
        :label="option.label"
        :disabled="option.disabled"
        :value="option.value">
      </el-option>
    </el-option-group>
  </el-select>

</template>

<script>
  export default {
    data () {
      return {
        select6: ''
      }
    }

    created () {
      this.optionsGroup = {
        "gourp1": [
          {
            "label": "选项1",
            "value": "结果1"
          },
          {
            "label": "选项2",
            "value": "结果2"
          }
        ],
        "gourp2": [
          {
            "label": "选项7",
            "value": "结果7"
          },
          {
            "label": "选项8",
            "value": "结果8"
          }
        ]
      }
    }
  }
</script>
```


## 联动

<el-select
  :style="{ marginRight: '8px' }"
  @change="handleChange"
  placeholder="选择省"
  :model.sync="select7[0]">
  <el-option
    v-for="option in provinceData"
    :value="option">
  </el-option>
</el-select>
<el-select
  placeholder="选择市"
  :model.sync="select7[1]">
  <el-option
    v-for="option in cityData"
    :value="option">
  </el-option>
</el-select>

```html
<template>
  <el-select
    placeholder="选择省"
    @change="handleChange"
    :model.sync="select7[0]">
    <el-option
      v-for="option in provinceData"
      :value="option">
    </el-option>
  </el-select>
  <el-select
    placeholder="选择市"
    :model.sync="select7[1]">
    <el-option
      v-for="option in cityData"
      :value="option">
    </el-option>
  </el-select>

</template>

<script>
  export default {
    data() {
      return {
        select7: ['', '']
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
</script>
```

