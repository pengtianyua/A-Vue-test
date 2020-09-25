<!--
 * @Author: your name
 * @Date: 2020-09-25 10:09:21
 * @LastEditTime: 2020-09-25 10:27:47
 * @LastEditors: Please set LastEditors
 * @Description: 弹窗组件
 * @FilePath: \test\src\components\common\toast\Toast.vue
-->
<template>
<div class='toast' v-show="isShow">
  <div>{{ message }}</div>
</div>
</template>

<script>
export default {
  name: 'Toast',
  components: {},
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message, duration = 2000) {
      this.message = message
      this.isShow = true

      setTimeout(() => {
        this.isShow = false;
        this.message = '';
      }, duration)
    }
  }
}
</script>

<style lang="less" scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;

  padding: 8px 10px;

  background-color: rgba(0, 0, 0, .75);
  color: #fff;
  border-radius: 4px;
}
</style>
