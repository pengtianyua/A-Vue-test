/*
 * @Author: your name
 * @Date: 2020-09-02 16:26:53
 * @LastEditTime: 2020-09-22 15:20:17
 * @LastEditors: Please set LastEditors
 * @Description: 入口函数
 * @FilePath: \test\src\main.js
 */
  import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
