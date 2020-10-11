export default {
  //商品数量增加
  addCounter(state, payload) {
    payload.count++
  },
  //添加至购物车
  addToCart(state, payload) {
    payload.count = 1
    //默认添加到购物车为选中状态
    payload.checked = true
    state.cartList.push(payload)
  }
}

