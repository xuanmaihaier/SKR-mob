/*
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-20 10:53:07
 * @LastEditors: stride
 * @LastEditTime: 2021-05-06 15:15:41
 */
import axios from 'axios'
import store from 'store/index'
import router from "router"
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 2000
})

instance.interceptors.request.use(config => {
  let flag = true
  if (router.app._route.name == 'ShopCar') {
    flag = false
  }
  store.dispatch('commitChange', flag)
  return config
})

instance.interceptors.response.use(response => {
  store.dispatch('commitChange', false)
  return response.data
},
  error => {
    store.dispatch('commitChange', false)

    return new Promise(() => { })
  }
)

export default instance