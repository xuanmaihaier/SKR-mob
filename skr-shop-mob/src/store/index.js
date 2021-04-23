/*
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-20 10:49:56
 * @LastEditors: stride
 * @LastEditTime: 2021-04-23 11:13:23
 */
import Vue from "vue"
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
import details from "./modules/details"
import home from './modules/home'

Vue.use(Vuex)
let store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    home,
    details
  },
  plugins: [persistedState()]
})
export default store