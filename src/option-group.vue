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
    block="element-optiongroup"
    :class="{ 'is-hastitle': title }">
    <li
      elem="title"
      v-if="title"
      v-show="!hideTitle"
      v-text="title"></li>
      <li elem="content" v-show="!hideList">
        <slot></slot>
      </li>
  </ul>
</template>
