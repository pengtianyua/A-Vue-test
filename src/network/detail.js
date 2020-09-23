/*
 * @Author: your name
 * @Date: 2020-09-22 09:30:48
 * @LastEditTime: 2020-09-23 16:40:42
 * @LastEditors: Please set LastEditors
 * @Description: 封装请求商品详情数据
 * @FilePath: \test\src\network\detail.js
 */
import {request} from './request'

export function getDetail(id) {
  return request({
    url: '/detail',
    params: {
      iid: id
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

//对后端返回的数据进行整合 抽离到一个对象中 传给组件使用
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.lowNowPrice;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}

export class GoodsParam {
  constructor(info, rule) {
    //images可能没有值(某些商品有值，某些没有)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}