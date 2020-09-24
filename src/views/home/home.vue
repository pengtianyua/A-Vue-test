<!--
 * @Author: pty
 * @Date: 2020-09-02 19:18:00
 * @LastEditTime: 2020-09-24 10:37:10
 * @LastEditors: Please set LastEditors
 * @Description: 首页
 * @FilePath: \test\src\views\home\home.vue
-->
<template>
<div id="home">
  <!-- 顶部导航 -->
  <nav-bar class="home_nav">
    <div slot="center">购物街</div>
  </nav-bar>
  <!-- END -->
  <!-- TabControl -->
  <tab-control class="tab_control" v-show="isTabFixed" :title="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl1" />
  <!-- END -->
  <!-- 滚动 -->
  <scroll class="content" ref="scroll" :pull-up-load="true" :probe-type="3" @scroll="contentScroll" @pullingUp="loadMore">
    <!-- 轮播图 -->
    <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
    <!-- END -->
    <!-- 推荐数据 -->
    <recommend-view :recommends="recommends" />
    <!-- END -->
    <!-- 本周流行 -->
    <popular-view />
    <!-- END -->
    <!-- TabControl -->
    <tab-control :title="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl2" />
    <!-- END -->
    <!-- 商品数据 -->
    <goods :goods="showGoods" />
    <!-- END -->
  </scroll>
  <!-- END -->
  <!-- 返回顶部 -->
  <back-top @click.native="backTop" v-show="isShowBackTop" />
  <!-- END -->
</div>
</template>

<script>
//引入顶部导航组件
import NavBar from 'components/common/navbar/NavBar'
//引入滚动组件
import Scroll from 'components/common/scroll/Scroll'

//引入TabControl组件
import TabControl from 'components/content/tabControl/TabControl'
//引入商品组件
import Goods from 'components/content/goods/Goods'

//引入轮播图组件
import HomeSwiper from './childComponents/HomeSwiper'
//引入推荐组件
import RecommendView from './childComponents/RecommendView'
//引入本周流行组件
import PopularView from './childComponents/PopularView'

//引入网络请求函数
import {
  getHomeMultiData,
  getHomeData
} from 'network/home.js'

//引入混入
import {
  itemListenerMixin,
  backTop
} from 'common/mixin.js'

export default {
  name: 'home',
  components: {
    NavBar,
    Scroll,
    TabControl,
    Goods,
    HomeSwiper,
    RecommendView,
    PopularView
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  mixins: [
    itemListenerMixin,
    backTop
  ],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        "pop": {
          page: 0,
          list: []
        },
        "new": {
          page: 0,
          list: []
        },
        "sell": {
          page: 0,
          list: []
        }
      },
      currentType: 'pop',
      tabOffsetTop: 0,
      isTabFixed: false,
      //记录用户离开页面时所滚动到的位置
      saveY: 0
    }
  },
  created() {
    //请求轮播图和推荐数据
    this.getHomeMultiData()
    //初始化tab-control数据
    this.getHomeData('pop')
    this.getHomeData('new')
    this.getHomeData('sell')
  },
  activated() {
    //再次进入页面时滚动到离开时记录的位置
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    //离开页面时获取滚动到的位置
    this.saveY = this.$refs.scroll.getScroll()

    //取消监听事件
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },
  mounted() {

  },
  methods: {
    /**
     * 事件监听方法
     */
    //tab切换方法
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },

    //控制返回顶部按钮是否显示
    contentScroll(position) {
      //判断返回顶部是否显示
      this.listenShowBackTop(position)
      //判断是否tabControl是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },

    //上拉加载更多
    loadMore() {
      this.getHomeData(this.currentType)
      this.$refs.scroll.finishPullUp()
    },

    //监听轮播图加载完成
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },

    /**
     * 网络请求方法
     */
    //请求轮播图和推荐数据方法
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        // console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    },
    //请求tab-control数据方法
    getHomeData(type) {
      //获取当前页码
      let page = this.goods[type].page + 1;
      getHomeData(type, page).then(res => {
        // console.log(res);
        //将请求的数据添加到数组中
        this.goods[type].list.push(...res.data.data.list);
        //将页码加一 方便下次复用
        this.goods[type].page += 1;
      })
    }
  }
}
</script>

<style lang="less" scoped>
#home {
  // padding-top: 44px;
  position: relative;
  height: 100vh;

  .home_nav {
    background-color: var(--color-tint);
    color: #fff;

    position: relative;
    // left: 0;
    // right: 0;
    // top: 0;
    z-index: 999;
  }
}

.content {
  // height: 500px;
  // overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.tab_control {
  position: relative;
  z-index: 9;
}
</style>
