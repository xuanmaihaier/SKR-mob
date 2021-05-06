// 保存用户信息
export default {
    state: {
        allNorth: false,
    },
    mutations: {
        changeVerificationImg(state, val) {
            state.allNorth = val
        }
    },
    actions: {
        commitVerificationImg({commit}, val) {
            commit('changeVerificationImg', val)
        }
    }
}