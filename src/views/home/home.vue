<!--
 * @Author: pty
 * @Date: 2020-09-02 19:18:00
 * @LastEditTime: 2020-09-07 08:58:59
 * @LastEditors: pty
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
  <!-- 轮播图 -->
  <home-swiper :banners="banners" />
  <!-- END -->
  <!-- 推荐数据 -->
  <recommend-view :recommends="recommends" />
  <!-- END -->
  <!-- 本周流行 -->
  <popular-view />
  <!-- END -->
  <!-- TabControl -->
  <tab-control class="tab_control" :title="['流行', '新款', '精选']" @tabClick="tabClick" />
  <!-- END -->
  <!-- 商品数据 -->
  <goods :goods="showGoods" />
  <!-- END -->
  <ul>
    <li>11</li>
    <li>12</li>
    <li>13</li>
    <li>14</li>
    <li>15</li>
    <li>16</li>
    <li>17</li>
    <li>18</li>
    <li>19</li>
    <li>110</li>
    <li>111</li>
    <li>112</li>
    <li>113</li>
    <li>114</li>
    <li>115</li>
  </ul>
</div>
</template>

<script>
//引入顶部导航组件
import NavBar from 'components/common/navbar/NavBar'

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

export default {
  name: 'home',
  components: {
    NavBar,
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
      currentType: 'pop'
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
  methods: {
    /**
     * 事件监听方法
     */
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

<style lang="less">
#home {
  padding-top: 44px;

  .home_nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 999;
  }

  .tab_control {
    position: sticky;
    top: 44px;
  }
}
</style>
