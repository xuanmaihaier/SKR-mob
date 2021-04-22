import Vue from 'vue'
// 按需引入
import { Button, Swipe, SwipeItem, Icon, Dialog, Toast, DropdownMenu, DropdownItem } from "vant";
// use使用
const vueUse = { Button, Swipe, SwipeItem, Icon, Dialog, Toast, DropdownMenu, DropdownItem }
Object.keys(vueUse).forEach(item => {
  Vue.use(vueUse[item])
})
import { Lazyload } from 'vant';
Vue.use(Lazyload, {
  lazyComponent: true,
}); 