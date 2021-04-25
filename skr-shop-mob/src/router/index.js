/*
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-20 10:47:29
 * @LastEditors: stride
 * @LastEditTime: 2021-04-21 16:51:32
 */
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
// 导航冗余报错解决
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: "/",
    redirect: "home"
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import("views/home/Home.vue"),
  },
  {
    path: '/userCenter',
    name: 'UserCenter',
    component: () => import("views/UserCenter/UserCenter.vue"),
  },
  {
    path:'/shopCar',
    name:'ShopCar',
    component:()=> import('@/views/shopCar/ShopCar.vue')
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: () => import("views/details/Details.vue"),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import("views/Register/Register.vue"),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("views/Login/Login.vue"),
  }
]
const router = new VueRouter({
  mode: 'history',
  routes,
})
export default router