import { getShopById } from "../../network/details"
import axios from "axios"
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