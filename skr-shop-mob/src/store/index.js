import Vue from "vue"
import Vuex from 'vuex'
import details from "./modules/details"
Vue.use(Vuex)
let store = new Vuex.Store({
  state:{},
  mutations:{},
  actions:{},
  modules:{
    details
  }
})
export default store