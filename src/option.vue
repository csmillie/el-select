<template>
  <li
    block="element-option"
    :class="{
      'is-disabled': disabled,
      'is-selected': selected,
      'is-hover': hit
    }"
    @mouseup="handleClick">
    <span v-text="label"></span>
    <span
      v-text="remark"
      elem="remark">
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
      remark: String
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
        hit: false,
        selected: false
      };
    },

    events: {
      ['element.select.current'](component) {
        this.hit = component.value === this.value;
      },

      ['element.select.selected'](model) {
        if (Array.isArray(model)) {
          this.selected = model.indexOf(this.value) > -1;
        } else {
          this.selected = model === this.value;
        }
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
