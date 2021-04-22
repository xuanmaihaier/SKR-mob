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
    path: '/search',
    name: 'Search',
    component: () => import("views/search/Search.vue"),
  },
  {
    path: '/search/list',
    name: 'SearchTwo',
    component: () => import("views/search/childComps/SearchTwo.vue")
  }

]
const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) { //页面跳转回到顶部
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
export default router