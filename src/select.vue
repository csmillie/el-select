<template>
  <div
    block="element-select"
    :class="{ 'is-search': searchModel }"
    v-element-clickoutside="showDropdown = false">
    <el-core-input
      v-if="type !== 'multiple'"
      :class="{ 'is-active': active }"
      @click="showDropdown = !showDropdown"
      :placeholder="dislayPlaceholder"
      :model.sync="model"
      :disabled="disabled"
      @e-press-down="fetchOption('next')"
      @e-press-up="fetchOption('prev')"
      @e-press-enter="updateModel"
      @e-press-delete="removeTag"
      :multiple="type === 'multiple'"
      :readonly="type !== 'multiple'">
    </el-core-input>

    <el-core-input
      v-else
      :class="{ 'is-active': active }"
      @click="showDropdown = !showDropdown"
      :placeholder="dislayPlaceholder"
      :tags="model"
      :model.sync="searchModel"
      :disabled="disabled"
      @e-press-down="fetchOption('next')"
      @e-press-up="fetchOption('prev')"
      @e-press-enter="updateModel"
      @e-press-delete="removeTag"
      :multiple="type === 'multiple'"
      :readonly="type !== 'multiple'">
    </el-core-input>

    <span
      slot="icon"
      elem="chevron"
      :class="{ 'is-up': active }">
    </span>
    <ul
      v-show="active"
      block="element-dropdown">
      <el-core-input
        elem="search"
        v-if="type === 'search'"
        :placeholder="searchPlaceholder"
        :model.sync="searchModel"
        @e-press-down="fetchOption('next')"
        @e-press-up="fetchOption('prev')"
        @e-press-enter="updateModel">
      </el-core-input>
      <div
        elem="option"
        v-el:option-wrap>
        <slot></slot>
        <div elem="empty" v-show="empty">无搜索结果</div>
      </div>
    </ul>
  </div>
</template>

<script>
  import ElCoreInput from 'el-input/src/core/input.vue';

  /**
   * select
   * @module components/basic/select
   * @desc 选择框
   * @param {string|string[]} model - 绑定值
   * @param {boolean} [disabled=false] - 是否禁用
   * @param {string} [type=normal] - 显示类型，可选 `normal`, `search`, `multiple`
   * @param {string} [placeholder] - 输入框占位内容
   * @param {string} [search-placeholder=搜索] - 搜索框占位内容，请设置 type 为 search
   * @param {string} [search-model] - 搜索绑定值，请设置 type 为 search 或 multiple
   * @param {function} [change] - 选中值后的回调函数
   */
  module.exports = {
    name: 'ElSelect',

    props: {
      placeholder: String,
      hintPlaceholder: String,
      type: {
        type: String,
        default: 'normal',
        validator(value) {
          return [
            'multiple',
            'normal',
            'search'
          ].indexOf(value) > -1;
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
        default() {
          return [];
        },
        twoWay: true,
        required: true
      }
    },

    created() {
      this.originalOptions = [];
    },

    computed: {
      active() {
        return !this.disabled && this.showDropdown;
      },

      dislayPlaceholder() {
        const placeholder = this.model.length ? '' : this.placeholder;
        if (this.focus) {
          return this.hintPlaceholder || placeholder;
        }
        return placeholder;
      },

      empty() {
        return this.currentOptions.length <= 0;
      },

      searchBoxHeight() {
        return this.type === 'search' ? 30 : 0;
      }
    },

    components: {
      ElCoreInput
    },

    directives: {
      ElementClickoutside: require('vue-clickoutside')
    },

    data() {
      return {
        showDropdown: false,
        current: '',
        focus: false,
        currentOptions: []
      };
    },

    watch: {
      showDropdown(sure) {
        if (!sure) {
          this.searchModel = '';
          return;
        }

        if (this.$els.input) {
          this.$els.input.focus();
        }
      },

      searchModel(sure) {
        if (!sure) {
          return;
        }

        const firstMatchOption = this.currentOptions[0];

        if (firstMatchOption) {
          this.current = firstMatchOption;
        } else {
          this.current = null;
        }
        this.showDropdown = true;

      },

      current(component) {
        if (!component) {
          return;
        }

        this.$broadcast('element.select.current', this.current);

        if (component.$el) {
          this.$els.optionWrap.scrollTop = component.$el.offsetTop - this.searchBoxHeight;
        }
      },

      model(value) {
        this.$dispatch('change', value);
        this.$broadcast('element.select.selected', value);
      }
    },

    events: {
      ['element.option.created'](component) {
        this.currentOptions.push(component);

        const result = this.originalOptions.find(option => option.value === component.value);

        if (!result) {
          this.originalOptions.push(component);
        }
      },

      ['element.option.destroy'](component) {
        this.currentOptions.$remove(component);
      },

      ['element.option.click'](component) {
        this.current = component;
        this.updateModel();
      }
    },

    methods: {
      fetchOption(type = 'next') {
        if (!this.originalOptions.length || !this.currentOptions.length) {
          return;
        }

        const index = this.originalOptions.indexOf(this.current);
        const len = this.originalOptions.length;

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

        const result = this.currentOptions.find(option => option.value === this.current.value);

        if (this.current.disabled || !result) {
          this.fetchOption(type);
          return;
        }
      },

      removeTag() {
        if (this.searchModel.trim().length !== 0) {
          return;
        }

        if (this.type !== 'multiple') {
          this.model = '';
        } else {
          this.model.pop();
        }
      },

      updateModel() {
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
</script>
