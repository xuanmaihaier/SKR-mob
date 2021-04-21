/*
 * @Descripttion: 细节界面数据处理
 * @version: 
 * @Author: stride
 * @Date: 2021-04-20 22:58:14
 * @LastEditors: stride
 * @LastEditTime: 2021-04-21 11:32:27
 */

import { getShopById } from "../../network/details"
export default {
  state:()=>({
    Commodity:[]
  }),
  mutations: {
    getResult(state, val) {
      state.Commodity=val
    }
  },
  actions: {
    async getShop(store, id) {
      const result = await getShopById(id)
      if (result.code !== 200) throw new Error("getShopById error")
      store.commit('getResult', result.data)
    }
  },
}