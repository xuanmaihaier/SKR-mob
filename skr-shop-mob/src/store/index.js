/*
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-20 10:49:56
 * @LastEditors: stride
 * @LastEditTime: 2021-04-23 15:39:24
 */
import Vue from "vue"
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
import details from "./modules/details"
import home from './modules/home'
import loading from './modules/loading'
import address from './modules/address'
import login from './modules/login.js';
import verificationImg from './modules/verificationImg.js';
import token from './modules/token.js'
Vue.use(Vuex)
let store = new Vuex.Store({
  
  state: {},
  mutations: {},
  actions: {},
  modules: {
    home,
    details,
    loading,
    address,
    login,
    verificationImg,
    token,
  },
  plugins: [persistedState()]

})
export default store