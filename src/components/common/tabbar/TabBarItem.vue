<!-- TabBarItem组件 -->
<template>
<div class="app_tabbar_item" @click="itemClick">
  <div v-if="!isActive">
    <slot name="item-icon"></slot>
  </div>
  <div v-else>
    <slot name="item-icon-active"></slot>
  </div>
  <div :style="activeStyle">
    <slot name="item-text"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'TabBarItem',
  components: {},
  props: {
    path: String,
    activeColor: {
      //传入的字体颜色
      type: String,
      default: 'red'
    }
  },
  //监听属性 类似于data概念
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {
        color: this.activeColor
      } : {}
    }
  },
  //方法集合
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch(err => err)
    }
  }
}
</script>

<style lang="less">
.app_tabbar_item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;

  img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 5px;
    margin-bottom: 2px;
  }
}
</style>
