<template>
<div class='Goods'>
  <goods-item class="goodsItem" v-for="(item, index) in goods" :key="index" :goodsItem="item" />
</div>
</template>

<script>
import GoodsItem from './GoodsItem'
export default {
  name: 'Goods',
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    GoodsItem
  }
}
</script>

<style lang="less" scoped>
.Goods {
  margin-top: 5px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2px;
}
</style>
