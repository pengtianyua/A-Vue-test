/*
 * @Author: pty
 * @Date: 2020-09-02 16:26:53
 * @LastEditTime: 2020-09-25 16:59:07
 * @LastEditors: Please set LastEditors
 * @Description: 页面路由配置
 * @FilePath: \test\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'


//安装插件
Vue.use(VueRouter)

//路由懒加载
const Home = () => import('views/home/home');
const Category = () => import('views/category/Category');
const Cart = () => import('views/cart/cart');
const Profile = () => import('views/profile/profile');
const Detail = () => import('views/detail/detail');

//创建路由对象
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:id',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


//导出路由对象
export default router
