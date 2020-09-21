/*
 * @Author: your name
 * @Date: 2020-09-19 16:56:35
 * @LastEditTime: 2020-09-19 17:00:28
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \test\src\common\utils.js
 */


 //防抖函数 
export function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}