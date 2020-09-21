/*
 * @Author: your name
 * @Date: 2020-09-02 16:26:53
 * @LastEditTime: 2020-09-19 16:02:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
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
