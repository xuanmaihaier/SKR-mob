/*
 * @Descripttion: 细节界面数据处理
 * @version: 
 * @Author: stride
 * @Date: 2021-04-20 22:58:14
 * @LastEditors: stride
 * @LastEditTime: 2021-04-23 11:32:29
 */

import { getShopById, getRecommend } from "../../network/details"
export default {
  state: () => ({
    // 商品
    Commodity: [],
    // 相似商品
    Recommend: [],
    // 销量排行版前10
    height:[],
  }),
  mutations: {
    getResult(state, val) {
      state.Commodity = val
    },
    getResultSec(state, val) {
      state.Recommend = val
      let height = JSON.parse(JSON.stringify(val))
      height= height.sort((a,b)=>b.sale-a.sale).slice(0,10)
      state.height = height
    },
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
  },
}