/*
 * @Author: your name
 * @Date: 2020-09-02 16:26:53
 * @LastEditTime: 2020-09-25 11:34:29
 * @LastEditors: Please set LastEditors
 * @Description: 入口函数
 * @FilePath: \test\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueLazyLoad from 'vue-lazyload'
//使用懒加载插件
Vue.use(VueLazyLoad, {
  loading: require('assets/img/common/user.png')
})


import FastClick from 'fastclick'
//解决移动端300ms延迟
FastClick.attach(document.body)

//全局导入弹框插件
import toast from 'components/common/toast'
//安装插件
Vue.use(toast)

Vue.config.productionTip = false

//事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
