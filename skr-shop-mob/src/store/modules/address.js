import { addAddress,delAddress } from "network/address";
export default {
  state: {
    // 用户收货地址
    userAddress: [],
    addIndex:undefined
  },
  mutations: {
    // 新增收货地址
    addAddress(state, payload) {
      state.userAddress.push(payload)
    },
    // 删除收货地址
    delAddress(state,payload){
      console.log(payload);
      state.userAddress = state.userAddress.filter(item=>{
        return item.id != payload.id
      })
      // console.log(state.userAddress);
    },
    // 改变索引
    clickIndex(state,payload){
      state.addIndex = payload
    }
  },
  actions: {
    async doAddAddress({ commit }, payload) {
      // console.log(payload);
      let res = await addAddress(payload)
      console.log(res);
      if (res.code === 200) {
        commit('addAddress', payload)
      }
    },
    async doDelAddress({commit},payload){
      console.log(payload);
      let res = await delAddress(payload)
      console.log(res);
      commit('delAddress',payload)
    },
    doClickIndex({commit},payload){
      commit('clickIndex',payload)
    }
  }
}