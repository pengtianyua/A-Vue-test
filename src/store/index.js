/*
 * @Author: your name
 * @Date: 2020-09-24 11:23:33
 * @LastEditTime: 2020-09-24 14:47:02
 * @LastEditors: Please set LastEditors
 * @Description: 状态管理
 * @FilePath: \test\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

//安装插件
Vue.use(Vuex)

//创建Store对象
const state = {
  cartList: []
}
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

//挂载vue实例
export default store