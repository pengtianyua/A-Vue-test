/*
 * @Author: your name
 * @Date: 2020-09-23 17:16:20
 * @LastEditTime: 2020-09-29 09:52:06
 * @LastEditors: Please set LastEditors
 * @Description: 混入供多个组件调用
 * @FilePath: \test\src\common\mixin.js
 */

//引入防抖函数
import {
  debounce
} from 'common/utils'

//引入返回顶部组件
import BackTop from 'components/content/backTop/BackTop'


export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted () {
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    //保存事件函数
    this.itemImgListener = () => {
      refresh()
    }
    //监听图片加载完成
    this.$bus.$on('itemImageLoad', this.itemImgListener)
  }
}

//混入返回顶部组件
export const backTop = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    //返回顶部
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    //监听返回顶部是否显示
    listenShowBackTop(position) {
      this.isShowBackTop = (-position.y) > 1000
    }
  }
}