<!--
 * @Author: your name
 * @Date: 2020-09-02 16:26:53
 * @LastEditTime: 2020-09-22 10:20:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\src\App.vue
-->
<template>
<div id="app">
  <keep-alive exclude="detail">
    <router-view />
  </keep-alive>
  <main-tab-bar />
</div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar'
export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style lang="less">
@import 'assets/css/base.css';
</style>
