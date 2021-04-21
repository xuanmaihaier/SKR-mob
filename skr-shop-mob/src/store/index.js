import Vue from "vue"
import Vuex from 'vuex'
import home from './modules/home.js'
Vue.use(Vuex)
let store = new Vuex.Store({
  state:{},
  mutations:{},
  actions:{},
  getters:{},
  modules:{
    home
  }
})
export default store