<!--
 * @Author: your name
 * @Date: 2020-09-22 08:49:46
 * @LastEditTime: 2020-09-23 18:48:45
 * @LastEditors: Please set LastEditors
 * @Description: 商品详情页
 * @FilePath: \test\src\views\detail\detail.vue
-->
<template>
<div id='detail'>
  <detail-nav-bar class="detail_nav" @titleClick="titleClick" />
  <scroll class="content" ref="scroll" :pull-up-load="true" :probe-type="3">
    <detail-swiper :top-images="topImages" />
    <detail-base-info :goods="goods" />
    <detail-shop-info :shop="shop" />
    <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
    <detail-param-info ref="params" :param-info="paramInfo" @imageLoad="imageLoad2" />
    <detail-comment-info ref="comment" :comment-info="commentInfo" />
    <goods-list ref="recommend" :goods="recommend" />
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
//引入商品参数组件
import DetailParamInfo from './childComponents/DetailParamInfo'
//引入评论组件
import DetailCommentInfo from './childComponents/DetailCommentInfo'

//引入滚动组件
import Scroll from 'components/common/scroll/Scroll'

//引入商品组件
import GoodsList from 'components/content/goods/Goods'

//引入防抖函数
import {
  debounce
} from 'common/utils'

//引入混入
import {
  itemListenerMixin
} from 'common/mixin.js'

import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam
} from 'network/detail.js'
export default {
  name: 'detail',
  components: {
    detailNavBar,
    detailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList
  },
  mixins: [itemListenerMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themeTopY: [],
      getThemeTopY: null
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

      //获取商品参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      //获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
    })

    //请求推荐数据
    getRecommend().then(res => {
      console.log(res);
      this.recommend = res.data.data.list
    })

    /**
     * 在哪里获取正确的offsetTop
     * created不能获取元素
     * mounted数据获取不到
     * 获取数据回调，DOM没有渲染完
     * $nextTick,图片的高度还没有计算在内
     * 在图片加载完成后 获取的offsetTop才是正确的
     */
    //给getThemTopY赋值(对给this.themeTopY赋值的操作进行防抖)
    this.getThemeTopY = debounce(() => {
      this.themeTopY = []
      this.themeTopY.push(0)
      //offsetTop获得距顶部距离 导航栏定位脱离文档流 所以-44就是正确高度
      this.themeTopY.push(this.$refs.params.$el.offsetTop - 44)
      this.themeTopY.push(this.$refs.comment.$el.offsetTop - 44)
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop - 44)
      console.log(this.themeTopY);
    }, 100)
  },
  destroyed() {
    //取消监听事件
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()
      //获取正确的offsetTop
      this.getThemeTopY()
    },
    imageLoad2() {
      this.$refs.scroll.refresh()
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 200)
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
