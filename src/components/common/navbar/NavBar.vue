<template>
<div class="nav_bar">
  <div class="nav_bar_left">
    <slot name="left"></slot>
  </div>
  <div class="nav_bar_center">
    <slot name="center"></slot>
  </div>
  <div class="nav_bar_right">
    <slot name="right"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="less">
.nav_bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;

  .nav_bar_left,
  .nav_bar_right {
    width: 60px;
    // background-color: red;
  }

  .nav_bar_center {
    flex: 1;
    // background-color: green;
  }
}
</style>
