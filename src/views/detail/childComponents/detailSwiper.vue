<!--
 * @Author: your name
 * @Date: 2020-09-22 09:50:40
 * @LastEditTime: 2020-09-22 16:13:27
 * @LastEditors: Please set LastEditors
 * @Description: 详情页轮播图组件
 * @FilePath: \test\src\views\detail\childComponents\detailSwiper.vue
-->
<template>
<swiper class="detail_swiper">
  <swiper-item v-for="item in topImages" :key="item">
    <img :src="item" alt="">
  </swiper-item>
</swiper>
</template>

<script>
import {
  Swiper,
  SwiperItem
} from 'components/common/swiper'
export default {
  props: {
    topImages: {
      type: Array,
      default () {
        return []
      }
    }
  },
  name: 'detailSwiper',
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style lang="less" scoped>
.detail_swiper {
  height: 300px;
  overflow: hidden;
}
</style>
