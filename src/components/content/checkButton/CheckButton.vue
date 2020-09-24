<!--
 * @Author: your name
 * @Date: 2020-09-24 17:19:32
 * @LastEditTime: 2020-09-24 17:27:03
 * @LastEditors: Please set LastEditors
 * @Description: 按钮
 * @FilePath: \test\src\components\content\checkButton\CheckButton.vue
-->
<template>
<div class='check_button' :class="{check: isCheck}">
  <img src="~assets/img/cart/tick.svg" alt="">
</div>
</template>

<script>
export default {
  name: 'CheckButton',
  components: {},
  props: {
    isCheck: {
      type: Boolean,
      default () {
        return false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.check_button {
  border-radius: 50%;
  border: 2px solid #aaa;
}

.check {
  border-color: red;
  background-color: red;
}
</style>
