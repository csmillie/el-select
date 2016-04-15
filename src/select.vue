<template>
  <div
    class="element-select"
    :class="{'element-select--input': searchModel}"
    v-clickoutside="show = false">
      <div
        @click="show = true"
        class="element-select__input"
        :class="{
          'element-select__input--disabled': disabled,
          'element-select__input--active': active,
          'element-select__input--tag': type === 'multiple' }">

        <input
          v-if="type === 'normal' || type === 'search'"
          :placeholder="placeholder"
          :value="model"
          @keydown.down.prevent="fetchOption('next')"
          @keydown.up.prevent="fetchOption('prev')"
          @keyup.enter="updateModel"
          class="element-select__span"
          readonly
          :class="{ 'element-select__input--hasvalue': model }">
        <span
          v-if="type === 'input'"
          v-text="model"
          v-show="model"
          :class="{ 'element-select__input--hasvalue': model }"
          class="element-select__span">
        </span>
        <template v-if="type === 'multiple'">
          <el-tag
            v-for="tag in model"
            @remove="model.$remove(tag)"
            :data="tag">
          </el-tag>
        </template>
        <input
          v-if="type === 'input' || type === 'multiple'"
          v-el:input
          type="text"
          :placeholder="model ?  '' : placeholder"
          v-model="searchModel"
          @keydown.down.prevent="fetchOption('next')"
          @keydown.up.prevent="fetchOption('prev')"
          @keyup.enter="updateModel"
          @keydown.8="removeLastTag"
          class="element-select__original element-select__original--inline"
          :disabled="disabled">

        <span
          v-if="type !== 'input'"
          class="element-select__chevron"
          :class="{
            'element-select__chevron--up': active
          }"></span>
      </div>

      <ul
        v-show="active"
        class="element-select__dropdown">
        <div
          v-if="type === 'search'"
          class="element-search">
          <input
            v-el:input
            @keydown.down.prevent="fetchOption('next')"
            @keydown.up.prevent="fetchOption('prev')"
            @keyup.enter="updateModel"
            type="search"
            class="element-search__input"
            v-model="searchModel"
            :placeholder="searchPlaceholder">
        </div>
        <div
          class="element-select__options"
          data-empty="无搜索结果"
          v-el:option-wrap
          ><slot></slot></div>
      </ul>
  </div>
</template>

<script>
  import tag from './tag';

  export default {
    name: 'ElSelect',

    props: {
      placeholder: String,
      type: {
        type: String,
        default: 'normal',
        validator(value) {
          return [
            'input',
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

    directives: {
      clickoutside: require('vue-clickoutside')
    },

    created() {
      this.originalOptions = [];
      this.currentOptions = [];
    },

    computed: {
      active() {
        return !this.disabled && this.show;
      }
    },

    components: {
      ElTag: tag
    },

    data() {
      return {
        show: false,
        current: ''
      };
    },

    watch: {
      show(sure) {
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
        this.show = true;

      },

      current(component) {
        if (!component) {
          return;
        }

        this.$broadcast('element.select.current', this.current);

        if (component.$el) {
          this.$els.optionWrap.scrollTop = component.$el.offsetTop;
        }
      },

      model(value) {
        this.$dispatch('change', value);
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

        this.show = true;

        const result = this.currentOptions.find(option => option.value === this.current.value);

        if (this.current.disabled || !result) {
          this.fetchOption(type);
          return;
        }
      },

      removeLastTag() {
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
          this.show = false;
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

<style lang="scss">
  @import "src/styles/_input";
  @import "src/styles/_icons";
  @import "src/styles/_dropdown";

  .element-select {
    position: relative;
    display: inline-block;
  }

  .element-select__span {
    background-color: transparent;
    border: none;
    color: #ccc;
    cursor: pointer;
    display: inline-block;
    outline: 0;
    padding: 5px 0 5px 5px;

    &.element-select__input--hasvalue {
      color: #000;
    }
  }

  .element-select--input {
    .element-dropdown {
      width: auto;
      overflow: auto;

      .element-tabset__content {
        padding: 0;
        height: auto;
        overflow: visible;
      }

      .element-tabset {
        .element-optiongroup__title {
          float: none;
        }

        .tab {
          /* 覆盖掉原先 tab 可点击显示的样式 */
          display: block!important;
        }
      }

      .element-optiongroup__content {
        display: block;
      }

      .element-option {
        display: block;
        text-align: left;

        &.element-dropdown__option--hover {
          border-left: 1px solid #ccc;
        }
      }

      .element-option__remark {
        display: inline-block;
      }
    }

    .element-tabset__header {
      display: none;
    }
  }

  .element-select__input {
    border: 1px solid;

    @include input(
      "element-select__original",
      "element-select__input--active",
      "element-select__input--disabled"
    );
    padding-right: 20px;
    width: 100%;
  }

  .element-select__original {
    margin-right: -20px;

    &.element-select__original--inline {
      display: inline-block;
      width: auto;
    }
  }

  .element-select__input--tag {
    padding-left: 4px;
  }

  .element-select__chevron {
    @include icon_chevron(
      4px,
      #ccc,
      "element-select__chevron--up");
  }

  .element-select__dropdown {
    @include dropdown;
  }

  .element-search {
    @include input("element-search__input");
    border-left: 0;
    border-right: 0;
    border-top: 0;
    border-radius: 0;
    display: block;
  }

  .element-select__options {
    max-height: 250px;
    overflow: auto;

    &:after {
      color: #ccc;
      content: attr(data-empty);
      display: none;
      font-size: 12px;
      padding: 4px;
      text-align: center;
    }

    &:empty:after {
      display: block;
      background-color: #fff;
    }
  }
</style>
