

import Vue from 'vue';
import {
    Button,NavBar,Icon,Swipe,SwipeItem,Lazyload,Tabs,Tab,GoodsAction,TreeSelect

} from "vant"
// use使用
Vue.use(GoodsAction);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(TreeSelect);
const vueUse = {
    Button,NavBar,Icon,Swipe,SwipeItem,Tabs,Tab 
}
Object.keys(vueUse).forEach(item => {
    Vue.use(vueUse[item])
})
// 图片懒加载
Vue.use(Lazyload, {
    lazyComponent: true,
  });

