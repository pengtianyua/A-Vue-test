<!--
 * @Author: your name
 * @Date: 2020-09-03 17:48:10
 * @LastEditTime: 2020-09-19 17:31:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\src\views\home\childComponents\HomeSwiper.vue
-->
<template>
<div>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt="图片不见了" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</div>
</template>

<script>
//引入轮播图组件
import {
  Swiper,
  SwiperItem
} from 'components/common/swiper'

export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data() {
    return {
      isload: false
    }
  },
  methods: {
    imageLoad() {
      if (!this.isload) {
        this.$emit('swiperImageLoad')
        this.isload = true
      }

    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style lang="less">

</style>
