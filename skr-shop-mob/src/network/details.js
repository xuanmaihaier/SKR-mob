/*
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-20 23:06:51
 * @LastEditors: stride
 * @LastEditTime: 2021-04-21 11:46:53
 */
/*
 * @Descripttion:"获取商品详情" 
 * @Author: stride
 * @Date: 2021-04-20 23:06:51
 * @LastEditors: stride
 * @LastEditTime: 2021-04-21 09:40:18
 */
import axios from "utils/request";
export async function getShopById(id){
  return await axios({
    method: 'post',
    url:"/store/getSku",
    data:{id}
  })
}