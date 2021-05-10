/*
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-05-06 11:43:13
 * @LastEditors: stride
 * @LastEditTime: 2021-05-06 15:00:22
 */

import axios from "@/utils/request";
// 细节界面添加购物车
export async function addShopCar(option) {
  return await axios({ method: "post", url: "/shopCar/addShopCar", data: option })
}