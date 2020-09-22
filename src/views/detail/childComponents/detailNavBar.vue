<!--
 * @Author: your name
 * @Date: 2020-09-22 09:10:33
 * @LastEditTime: 2020-09-22 09:27:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\src\views\detail\childComponents\detailNavBar.vue
-->
<template>
<div>
  <nav-bar>
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="title">
      <div v-for="(item, index) in titles" :key="item" class="title_item" :class="{active: index === currentIndex}" @click="titleClick(index)">{{item}}</div>
    </div>
  </nav-bar>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  display: flex;
  font-size: 13px;

  .title_item {
    flex: 1;
  }

  .active {
    color: var(--color-high-text);
  }
}

.back {
  img {
    margin-top: 12px;
  }
}
</style>
