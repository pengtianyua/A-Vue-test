/*
 * @Author: your name
 * @Date: 2020-09-22 09:30:48
 * @LastEditTime: 2020-09-22 16:55:37
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