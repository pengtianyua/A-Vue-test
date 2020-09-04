<template>
<div class='GoodsItem'>
  <img :src="goodsItem.show.img" alt="">
  <div class="goods_info">
    <p>{{ goodsItem.title }}</p>
    <span class="price">{{ goodsItem.price }}</span>
    <span class="cfav">{{ goodsItem.cfav }}</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'GoodsItem',
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {}
}
</script>

<style lang="less" scoped>
.GoodsItem {
  width: 48%;
  padding-bottom: 40px;
  position: relative;

  img {
    width: 100%;
    border-radius: 5px;
  }

  .goods_info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 3px;
    }

    .price {
      color: var(--color-high-text);
      margin-right: 20px;
    }

    .cfav {
      position: relative;
    }

    .cfav::before {
      content: '';
      position: absolute;
      left: -15px;
      top: -1px;
      width: 14px;
      height: 14px;
      background-image: url('~assets/img/common/collect.svg');
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
