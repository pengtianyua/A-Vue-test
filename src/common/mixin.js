/*
 * @Author: your name
 * @Date: 2020-09-23 17:16:20
 * @LastEditTime: 2020-09-23 17:34:46
 * @LastEditors: Please set LastEditors
 * @Description: 混入供多个组件调用
 * @FilePath: \test\src\common\mixin.js
 */

//引入防抖函数
import {
  debounce
} from 'common/utils'


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