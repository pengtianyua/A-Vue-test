<!--
 * @Author: your name
 * @Date: 2020-09-24 16:13:15
 * @LastEditTime: 2020-09-24 18:08:58
 * @LastEditors: Please set LastEditors
 * @Description: 购物车商品详情
 * @FilePath: \test\src\views\cart\childComponents\cartList.vue
-->
<template>
<div class='cart_list'>
  <scroll class="content" ref="scroll" :pull-up-load="true" :probe-type="3">
    <cart-list-item v-for="(item, index) in cartList" :key="index" :itemInfo="item" />
  </scroll>
</div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './CartListItem'

import {
  mapGetters
} from 'vuex'

export default {
  name: 'CartList',
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style lang="less" scoped>
.cart_list {
  height: calc(100% - 44px - 49px - 40px);
}

.content {
  height: 100%;
  overflow: hidden;
}
</style>
