/*
 * @Descripttion: 细节界面数据处理
 * @version: 
 * @Author: stride
 * @Date: 2021-04-20 22:58:14
 * @LastEditors: stride
 * @LastEditTime: 2021-05-06 15:01:39
 */

import { getShopById, getRecommend } from "network/details"
import { addShopCar } from "network/shopcart"
import { getShopCar } from "network/getShopCarList"
export default {
  state: () => ({
    // 商品
    Commodity: [],
    // 相似商品
    Recommend: [],
    // 销量排行版前10
    height: [],
    Cart: [],
    cartLength: []
  }),
  mutations: {
    getResult(state, val) {
      state.Commodity = val
    },
    getResultSec(state, val) {
      state.Recommend = val
      let height = JSON.parse(JSON.stringify(val))
      height = height.sort((a, b) => b.sale - a.sale).slice(0, 10)
      state.height = height
    },
    getCard(state, val) {
      state.Cart = val
    },
    getLength(state, val) {
      state.cartLength = val
    }
  },
  actions: {
    async getShop(store, id) {
      const result = await getShopById(id)
      if (result.code !== 200) throw new Error("getShopById error")
      store.commit('getResult', result.data)
    },
    async getRecommend_init(store, id) {
      const result = await getRecommend(id)
      if (result.code !== 200) throw new Error("getRecommend error")
      store.commit('getResultSec', result.res)
    },
    async addCart(store, option) {
      const result = await addShopCar(option)
      if (result.code !== 200) throw new Error("addShopCar error")
      store.commit('getCard', result.res)
    },
    async setLength(store, customer_id) {
      const result = await getShopCar({ customer_id })
      if (result.code !== 200) throw new Error("addShopCar error")
      store.commit('getLength', result.data.length)
    }
  },
}