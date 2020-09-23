<!--
 * @Author: your name
 * @Date: 2020-09-22 17:58:59
 * @LastEditTime: 2020-09-23 10:21:21
 * @LastEditors: Please set LastEditors
 * @Description: 商品信息
 * @FilePath: \test\src\views\detail\childComponents\DetailGoodsInfo.vue
-->
<template>
<div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
  <div class="info-desc clear-fix">
    <div class="start">
    </div>
    <div class="desc">{{detailInfo.desc}}</div>
    <div class="end"></div>
  </div>
  <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
  <div class="info-list">
    <img v-for="(item, index) in detailInfo.detailImage[0].list" :src="item" alt="" :key="index" @load="imageLoad">
  </div>
</div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  components: {},
  props: {
    detailInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data() {
    return {
      counter: 0,
      imageLength: 0
    }
  },
  methods: {
    imageLoad() {
      //每次监听图片加载完成先对变量++再和图片个数进行对比，相等时向外发射自定义事件
      if (++this.counter === this.imageLength) {
        this.$emit('imageLoad')
      }
    }
  },
  watch: {
    detailInfo() {
      //获取图片个数  
      this.imageLength = this.detailInfo.detailImage[0].list.length;
    }
  }
}
</script>

<style lang="less" scoped>
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}

.info-desc {
  padding: 0 15px;
}

.info-desc .start,
.info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}

.info-desc .start::before,
.info-desc .end::after {
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}

.info-desc .end::after {
  right: 0;
}

.info-desc .desc {
  padding: 15px 0;
  font-size: 14px;
}

.info-key {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}

.info-list img {
  width: 100%;
}
</style>
