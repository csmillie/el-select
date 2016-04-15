<template>
  <li
    class="element-option"
    :class="{
      'element-dropdown__option--disabled': disabled,
      'element-dropdown__option--selected': selected,
      'element-dropdown__option--hover': hit
    }"
    @mouseup="handleClick">
    <span v-text="label"></span>
    <span
      v-text="remark"
      class="element-option__remark">
    </span>
  </li>
</template>

<script>
  export default {
    name: 'ElOption',

    props: {
      label: String,
      disabled: Boolean,
      value: {
        required: true,
        type: String
      },
      remark: String,
      model: {
        default() {
          return [];
        },
        required: true,
        toWay: true
      }
    },

    created() {
      this.label = this.label || this.value;

      this.$dispatch('element.option.created', this);
    },

    beforeDestroy() {
      this.$dispatch('element.option.destroy', this);
    },

    data() {
      return {
        hit: false
      };
    },

    events: {
      ['element.select.current'](component) {
        this.hit = component.value === this.value;
      }
    },

    computed: {
      selected() {
        if (Array.isArray(this.model)) {
          return this.model.indexOf(this.value) > -1;
        }
        return this.model === this.value;
      }
    },

    methods: {
      handleClick() {
        if (this.disabled) {
          return;
        }

        this.$dispatch('element.option.click', this);
      }
    }
  };
</script>

<style lang="scss">
  @import "src/styles/_dropdown";
  @import "src/styles/_utils";

  .element-option {
    @include dropdown-option(
      'element-dropdown__option--selected',
      'element-dropdown__option--disabled',
      'element-dropdown__option--hover');
    @include clearfix;
  }

  .element-option__remark {
    color: #ccc;
    float: right;
  }
</style>