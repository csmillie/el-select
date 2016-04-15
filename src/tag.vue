<script>
  /**
   * tag
   * @module components/basic/tag
   * @desc 标签组件，监听删除事件时会显示删除按钮
   * @example
   * <el-tag data="hello"></el-tag>
   * <el-tag @remove="// TODO" data="world"></el-tag>
   */
  module.exports = {
    name: 'el-tag',

    props: {
      data: String
    }
  };
</script>

<template>
  <span class="element-tag">
    {{ data }}
    <span
      class="element-tag__close"
      v-if="_events.remove"
      @click.stop="$dispatch('remove')">&times;</span>
  </span>
</template>

<style lang="scss">
  .element-tag {
    background-color: #ddd;
    border-radius: 3px;
    box-sizing: border-box;
    color: #000;
    display: inline-block;
    height: 22px;
    margin-bottom: 2px;
    margin-right: 2px;
    padding: 3px;
    vertical-align: middle;
    position: relative;
    padding-right: 16px;
    font-size: 12px;
  }

  .element-tag__close {
    color: #333;
    cursor: pointer;
    /* 增大可点击面积 */
    padding: 10px 10px 10px 20px;
    position: absolute;
    right: -6px;
    top: -6px;
  }
</style>
