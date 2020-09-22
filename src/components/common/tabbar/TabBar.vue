<!--
 * @Author: your name
 * @Date: 2020-09-02 18:13:32
 * @LastEditTime: 2020-09-22 17:37:38
 * @LastEditors: Please set LastEditors
 * @Description: tabbar
 * @FilePath: \test\src\components\common\tabbar\TabBar.vue
-->
<!-- TabBar组件 -->
<template>
<div id="app_tabbar">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style lang="less">
#app_tabbar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.03);
  z-index: 999;
}
</style>
