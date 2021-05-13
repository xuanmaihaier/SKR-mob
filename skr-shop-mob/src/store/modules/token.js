// 购物车权限
export default {
    state:{
        token:true,
    },
    mutations:{
        getToken(state,val){
            state.token = val
        }
    },
    actions:{
        commitToken({commit},val){
            commit('getToken',val)
        }
    }
}