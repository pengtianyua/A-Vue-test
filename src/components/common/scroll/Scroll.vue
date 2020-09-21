<!--
 * @Author: pty
 * @Date: 2020-09-08 17:31:31
 * @LastEditTime: 2020-09-19 16:46:21
 * @LastEditors: Please set LastEditors
 * @Description: 滚动组件
 * @FilePath: \test\src\components\common\scroll\scroll.vue
-->
<template>
<div class='wrapper' ref="scroll">
  <div>
    <slot></slot>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.scroll, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    //监听滚动位置
    this.scroll.on('scroll', (positon) => {
      //自定义事件
      this.$emit('scroll', positon)
    })
    //上拉加载更多
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    }
  },
  components: {}
}
</script>

<style lang="less" scoped>
</style>
