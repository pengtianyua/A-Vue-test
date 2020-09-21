<!--
 * @Author: pty
 * @Date: 2020-09-13 16:52:11
 * @LastEditTime: 2020-09-14 12:15:21
 * @LastEditors: Please set LastEditors
 * @Description: 返回顶部组件
 * @FilePath: \test\src\components\content\backTop\BackTop.vue
-->
<template>
<div class='back_top'>
  <img src="~assets/img/common/top.png" alt="">
</div>
</template>

<script>
export default {
  name: 'BackTop',
  components: {}
}
</script>

<style lang="less" scoped>
.back_top {
  position: fixed;
  right: 20px;
  bottom: 60px;

  img {
    width: 43px;
    height: 43px;
  }
}
</style>
