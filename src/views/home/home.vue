<template>
<div id="home">
  <!-- 顶部导航 -->
  <nav-bar class="home_nav">
    <div slot="center">购物街</div>
  </nav-bar>
  <!-- 轮播图 -->
  <home-swiper :banners="banners" />
  <!-- 推荐数据 -->
  <RecommendView :recommends="recommends" />
</div>
</template>

<script>
//引入顶部导航组件
import NavBar from 'components/common/navbar/NavBar'
//引入轮播图组件
import HomeSwiper from './childComponents/HomeSwiper'
//引入推荐组件
import RecommendView from './childComponents/RecommendView'
//引入网络请求函数
import {
  getHomeMultiData
} from 'network/home.js'

export default {
  name: 'home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultiData().then(res => {
      console.log(res);
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    })
  }
}
</script>

<style lang="less">
.home_nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
