/*
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-20 10:47:29
 * @LastEditors: zjjj
 * @LastEditTime: 2021-04-25 22:16:36
 */
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
// 导航冗余报错解决
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [{
  path: "/",
  redirect: "home"
},
{
  path: '/home',
  name: 'Home',
  component: () => import("views/home/Home.vue"),
  meta: {
    title: "主页",
    showbar: true
  }
},
{
  path: '/search',
  name: 'Search',
  component: () => import("views/search/Search.vue"),
  meta: {
    title: "搜索",
    showbar: false
  }
},
{
  path: '/search/list',
  name: 'SearchTwo',
  component: () => import("views/search/childComps/SearchTwo.vue"),
  meta: {
    title: "搜索",
    showbar: false
  }
},
{
  path: '/userCenter',
  name: 'UserCenter',
  component: () => import("views/UserCenter/UserCenter.vue"),
  meta: {
    title: "个人中心",
    showbar: true
  }
},
{
  path:'/sort',
  name:'Sort',
  component:()=>import('views/sort/Sort.vue'),
  meta:{
    title:"分类",
    showbar:true
  }
},

// 购物车
{
  path: '/shopCar',
  name: 'ShopCar',
  component: () => import('views/shopCar/ShopCar.vue'),
  meta: {
    title: "购物车",
    showbar: true
  }
},

{
  path: '/ranking',
  name: 'Ranking',
  component: () => import("views/ranking/Ranking.vue"),
  meta: {
    title: "排行",
    showbar: false
  }
},
{
  path: '/serve',
  name: 'Serve',
  component: () => import("views/serve/Serve.vue"),
  meta: {
    title: "客服",
    showbar: false
  }
},
{
  path: '/details/:id',
  name: 'Details',
  component: () => import("views/details/Details.vue"),
  meta: {
    title: "细节",
    showbar: false
  }
},
{
  path: "/secondary/:id",
  name: "SeconDary",
  component: () => import("views/secondary/SeconDary.vue"),
  meta: {
    title: "推荐",
    showbar: false
  }
},
{
  path: '/stroll',
  name: 'Stroll',
  component: () => import("views/stroll/Stroll.vue"),
  meta: {
    title: "新品",
    showbar: false
  }
},
{
  path: '/register',
  name: 'Register',
  component: () => import("views/Register/Register.vue"),
  meta: {
    title: "注册",
    showbar: false
  }
},
{
  path: '/login',
  name: 'Login',
  component: () => import("views/Login/Login.vue"),
  meta: {
    title: "登录",
    showbar: false
  },
},
{
  path: '/order',
  name: 'Order',
  component: () => import('views/confirmOrder/ConfirmOrder.vue'),
  meta: {
    title: "提交订单",
    showbar: false
  }
},
{
  path: '/selectAddress',
  name: 'SelectAddress',
  component: () => import('views/selectAddress/SelectAddress.vue'),
  meta: {
    title: "选择地址",
    showbar: false
  }
},
{
  path: '/addAddress',
  name: 'AddAddress',
  component: () => import('views/addAddress/AddAddress.vue'),
  meta: {
    title: "添加地址",
    showbar: false
  }
},
{
  path: '/payCenter',
  name: 'PayCenter',
  component: () => import('views/payCenter/PayCenter.vue'),
  meta: {
    title: "支付中心",
    showbar: false
  }
},
{
  path: '/myOrder',
  name: 'MyOrder',
  component: () => import('views/myOrder/MyOrder.vue'),
  meta: {
    title: "我的订单",
    showbar: false
  }
},
]
const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) { //页面跳转回到顶部
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

export default router