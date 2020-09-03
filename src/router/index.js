import Vue from 'vue'
import VueRouter from 'vue-router'


//安装插件
Vue.use(VueRouter)

//路由懒加载
const Home = () => import('views/home/home');
const Category = () => import('views/category/category');
const Cart = () => import('views/cart/cart');
const Profile = () => import('views/profile/profile');

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//导出路由对象
export default router
