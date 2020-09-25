

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      //查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      //判断oldProduct
      if(oldProduct) {
        context.commit('addCounter', oldProduct)
        resolve('商品数量加一')
      } else {
        context.commit('addToCart', payload)
        resolve('添加商品成功')
      }
    })
  }
}