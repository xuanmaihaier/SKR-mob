/*
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-22 17:59:27
 * @LastEditors: stride
 * @LastEditTime: 2021-04-22 19:09:43
 */
export function animateScroll(from, to,dom,callback) {
  let timer = setInterval(function () {
      from = from + (to - from) / 10;
      from = to - from > 0 ? Math.ceil(from) : Math.floor(from);
      if (from == to) {
          clearInterval(timer);
          if (typeof callback == "function") callback()
      }
      dom.scrollTop = from + 1;
  }, 0);
}