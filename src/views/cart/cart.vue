<!--
 * @Author: your name
 * @Date: 2020-09-02 19:18:13
 * @LastEditTime: 2020-09-24 17:37:16
 * @LastEditors: Please set LastEditors
 * @Description: 购物车
 * @FilePath: \test\src\views\cart\cart.vue
-->
<template>
<div id="cart">
  <!-- 顶部导航 -->
  <nav-bar class="nav_bar">
    <div slot="center">购物车({{length}})</div>
  </nav-bar>
  <!-- 商品展示 -->
  <cart-list />
  <!-- 底部工具栏 -->
  <cart-bottom-bar />
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComponents/CartList'
import CartBottomBar from './childComponents/CartBottomBar'

import {
  mapGetters
} from 'vuex'

export default {
  name: 'cart',
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    //使用对象展开运算符将getters混入computed对象中
    ...mapGetters({
      length: 'cartLength'
    })
  }
}
</script>

<style lang="less">
#cart {
  height: 100vh;
}

.nav_bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
</style>
