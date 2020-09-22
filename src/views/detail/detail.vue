<!--
 * @Author: your name
 * @Date: 2020-09-22 08:49:46
 * @LastEditTime: 2020-09-22 19:02:52
 * @LastEditors: Please set LastEditors
 * @Description: 详情页
 * @FilePath: \test\src\views\detail\detail.vue
-->
<template>
<div id='detail'>
  <detail-nav-bar class="detail_nav"></detail-nav-bar>
  <scroll class="content" ref="scroll" :pull-up-load="true" :probe-type="3">
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
  </scroll>
</div>
</template>

<script>
//引入导航栏组件
import detailNavBar from './childComponents/detailNavBar'
//引入轮播图组件
import detailSwiper from './childComponents/detailSwiper'
//引入商品基本信息组件
import DetailBaseInfo from './childComponents/DetailBaseInfo'
//引入店铺信息组件
import DetailShopInfo from './childComponents/DetailShopInfo'
//引入商品详情信息组件
import DetailGoodsInfo from './childComponents/DetailGoodsInfo'

//引入滚动组件
import Scroll from 'components/common/scroll/Scroll'

import {
  getDetail,
  Goods,
  Shop
} from 'network/detail.js'
export default {
  name: 'detail',
  components: {
    detailNavBar,
    detailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {}
    }
  },
  created() {
    //保存传入的商品id
    this.iid = this.$route.params.id

    //根据id请求相应的商品数据
    getDetail(this.iid).then(res => {
      // console.log(res);
      const data = res.data.result
      //获取顶部轮播图数据
      this.topImages = data.itemInfo.topImages

      //获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      //获取店铺信息
      this.shop = new Shop(data.shopInfo)

      //获取商品详情信息
      this.detailInfo = data.detailInfo
    })
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style lang="less" scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 9999;
  background-color: #fff;
}

.detail_nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  height: calc(100% - 44px);
}
</style>
