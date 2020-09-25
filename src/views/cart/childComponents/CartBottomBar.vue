<!--
 * @Author: your name
 * @Date: 2020-09-24 17:35:18
 * @LastEditTime: 2020-09-25 10:31:29
 * @LastEditors: Please set LastEditors
 * @Description: 购物车底部工具栏
 * @FilePath: \test\src\views\cart\childComponents\CartBottomBar.vue
-->
<template>
<div class="bottom-menu">
  <check-button class="select-all" @click.native="checkBtnClick" :isCheck="isSelectedAll"></check-button>
  <span>全选</span>
  <span class="total-price">合计: ¥{{totalPrice}}</span>
  <span class="buy-product" @click="calcClick">去结算({{checkLength}})</span>
</div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

import {
  mapGetters
} from 'vuex'

export default {
  name: 'CartBottomBar',
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['cartList']),
    //计算勾选商品的总价格
    totalPrice() {
      return this.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    //计算勾选商品的总数量
    checkLength() {
      return this.cartList.filter(item => item.checked).length
    },
    isSelectedAll() {
      if (this.cartList.length === 0) return false
      return !(this.cartList.filter(item => !item.checked).length)
    }
  },
  methods: {
    checkBtnClick() {
      if (this.isSelectedAll) { //全选状态
        this.cartList.forEach(item => item.checked = false)
      } else {
        this.cartList.forEach(item => item.checked = true)
      }
    },
    calcClick() {
      if (!this.isSelectedAll) {
        this.$toast.show('请选择购买的商品')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.bottom-menu {
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 50px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
}

.bottom-menu .select-all {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}

.bottom-menu .total-price {
  margin-left: 15px;
  font-size: 16px;
  color: #666;
}

.bottom-menu .buy-product {
  background-color: orangered;
  color: #fff;
  width: 100px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  float: right;
}
</style>
