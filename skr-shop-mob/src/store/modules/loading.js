export default{
  state:{
    loadingStatus:false,
  },
  mutations:{
    changeLoading(state,payload){
      state.loadingStatus = payload
    }
  },
  actions:{
    commitChange({commit},payload){
      commit('changeLoading',payload)
    }
  }
}