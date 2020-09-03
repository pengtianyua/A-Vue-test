<template>
<div class="recommend">
  <div class="item" v-for="item in recommends" :key="item.index">
    <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{ item.title }}</div>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="less">
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 30px;
  border-bottom: 10px solid #eee;

  .item {
    flex: 1;

    img {
      width: 70px;
      height: 70px;
      margin-bottom: 10px;
    }
  }
}
</style>
