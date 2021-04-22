/*
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-20 10:53:07
 * @LastEditors: stride
 * @LastEditTime: 2021-04-22 19:18:32
 */
/*
    延时执行
    @param fn function
    @param wait number
    @return function
*/
export function debounce(fn, wait) {
  var timeout = null;
  return function() {
      if(timeout !== null) clearTimeout(timeout);
      timeout = setTimeout(fn, wait);
  }
}
