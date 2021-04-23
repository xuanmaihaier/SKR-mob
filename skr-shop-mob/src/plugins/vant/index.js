import Vue from 'vue';
import {

  Button, NavBar, Icon, Swipe, SwipeItem, Lazyload, Dialog, Tabs, Tab, Cell, Toast, CellGroup, DropdownMenu, Popup, DropdownItem, List, Collapse, CollapseItem, GoodsAction, GoodsActionIcon, GoodsActionButton, ShareSheet,TreeSelect

} from "vant"
// use使用
Vue.use(GoodsAction);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(TreeSelect);
const vueUse = {
  Button, NavBar, Icon, Swipe, SwipeItem, Tabs, Tab, Cell, Dialog, CellGroup, Popup, Toast, List, Collapse, DropdownMenu, DropdownItem, CollapseItem, GoodsAction, GoodsActionIcon, GoodsActionButton, ShareSheet

}

Object.keys(vueUse).forEach(item => {
  Vue.use(vueUse[item])
})
// 图片懒加载
Vue.use(Lazyload, {
  lazyComponent: true,

});
Vue.prototype.$toast = Toast


