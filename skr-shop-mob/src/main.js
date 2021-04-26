/*
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-20 10:41:44
 * @LastEditors: stride
 * @LastEditTime: 2021-04-25 18:10:27
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import '@/plugins/vant/index.js'
// im
import  "./plugins/im"
// iphonex 100vh高度问题
import vhCheck from 'vh-check'
vhCheck()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
