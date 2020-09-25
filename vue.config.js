/*
 * @Author: your name
 * @Date: 2020-09-02 17:55:56
 * @LastEditTime: 2020-09-25 16:27:27
 * @LastEditors: Please set LastEditors
 * @Description: 路径别名配置
 * @FilePath: \test\vue.config.js
 */
// 路径别名配置
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "assets": "@/assets",
        "common": "@/common",
        "components": "@/components",
        "network": "@/network",
        "views": "@/views"
      }
    }
  }
}


