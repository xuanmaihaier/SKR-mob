// 保存用户信息
export default {
    state: {
        userInfo: false,
    },
    mutations: {
        changeUserInfo(state, val) {
            state.userInfo = val
        }
    },
    actions: {
        commitUserInfo({commit}, val) {
            commit('changeUserInfo', val)
        }
    }
}