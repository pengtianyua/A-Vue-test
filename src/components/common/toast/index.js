//导入封装好的toast组件
import Toast from './Toast.vue'

const obj = {}

obj.install = function (Vue) {
  // console.log(1111, vue);

  //创建组件构造器
  const toastConstructor = Vue.extend(Toast);

  //根据组件构造器 创建一个新的组件对象
  const toast = new toastConstructor();

  //手动挂载组件对象
  toast.$mount(document.createElement('div'))

  //将组件中的模板添加到body中
  document.body.appendChild(toast.$el)

  //挂载到vue原型上
  Vue.prototype.$toast = toast
}

export default obj