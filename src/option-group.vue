<script>
 /**
   * option-group
   * @module components/special/option-group
   * @desc option 分组
   * @oaram {boolean} [hideTitle=false] - 隐藏标题
   * @param {boolean} [hide-list=false] - 隐藏结果
   * @param {string} [title] - 分组标题
   */
  export default {
    name: 'el-option-group',
    props: {
      title: String,
      hideTitle: {
        type: Boolean,
        coerce(value) {
          return Boolean(value);
        }
      },
      hideList: {
        type: Boolean,
        coerce(value) {
          return Boolean(value);
        }
      }
    }
  };
</script>

<template>
  <ul
    class="element-optiongroup"
    :class="{ 'element-optiongroup--hastitle': title }">
    <li
      class="element-optiongroup__title"
      v-if="title"
      v-show="!hideTitle"
      v-text="title"></li>
      <li class="element-optiongroup__content" v-show="!hideList">
        <slot></slot>
      </li>
  </ul>
</template>

<style lang="scss">
  .element-optiongroup {
    list-style: none;
    padding-left: 0;
    background-color: #fff;
  }

  .element-optiongroup__title {
    box-sizing: border-box;
    color: #ccc;
    display: inline-block;
    font-size: 12px;
    padding: 8px;

    &:hover {
      background-color: inherit;
    }
  }
</style>
