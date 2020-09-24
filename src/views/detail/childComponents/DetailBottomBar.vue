<!--
 * @Author: your name
 * @Date: 2020-09-24 09:20:30
 * @LastEditTime: 2020-09-24 11:06:43
 * @LastEditors: Please set LastEditors
 * @Description: 详情页底部工具栏
 * @FilePath: \test\src\views\detail\childComponents\DetailBottomBar.vue
-->
<template>
<div class='bottom_bar'>
  <div class="bar-item bar-left">
    <div>
      <i class="icon service"></i>
      <span class="text">客服</span>
    </div>
    <div>
      <i class="icon shop"></i>
      <span class="text">店铺</span>
    </div>
    <div>
      <i class="icon select"></i>
      <span class="text">收藏</span>
    </div>
  </div>
  <div class="bar-item bar-right">
    <div class="cart" @click="addToCart">加入购物车</div>
    <div class="buy">购买</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  components: {},
  methods: {
    addToCart() {
      this.$emit('addTo')
    }
  }
}
</script>

<style lang="less" scoped>
.bottom_bar {
  height: 49px;
  background-color: #fff;

  position: relative;
  // bottom: 49px;
  display: flex;
  text-align: center;
}

.bar-item {
  flex: 1;
  display: flex;
}

.bar-item>div {
  flex: 1;
}

.bar-left .text {
  font-size: 13px;
}

.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 3px;
  // background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  background-image: url("~assets/img/detail/detail_bottom.png");
  background-size: 100%;
}

.bar-left .service {
  background-position: 0 248px;
}

.bar-left .shop {
  background-position: 0 -248px;
}

.bar-left .select {
  background-position: 0 2px;
}

.bar-right {
  font-size: 15px;
  color: #fff;
  line-height: 58px;
}

.bar-right .cart {
  background-color: #ffe817;
  color: #333;
}

.bar-right .buy {
  background-color: #f69;
}
</style>
