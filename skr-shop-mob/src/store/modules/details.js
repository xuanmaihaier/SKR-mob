/*
 * @Descripttion: 细节界面数据处理
 * @version: 
 * @Author: stride
 * @Date: 2021-04-20 22:58:14
 * @LastEditors: stride
 * @LastEditTime: 2021-04-22 19:43:20
 */

import { getShopById, getRecommend } from "../../network/details"
export default {
  state: () => ({
    // 商品
    Commodity: [],
    // 相似商品
    Recommend: [],
    // 当前tab选中
    page:0
  }),
  mutations: {
    getResult(state, val) {
      state.Commodity = val
    },
    getResultSec(state, val) {
      state.Recommend = val
    },
    setPage(state,val){
      state.page = val
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
    getPage(store,page){
      store.commit('setPage',page)
    }
  },
}