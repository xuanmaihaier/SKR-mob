

import Vue from 'vue';
import {
    Button,NavBar,Icon,Swipe,SwipeItem,Lazyload,Tabs,Tab,Cell,CellGroup,Popup 
} from "vant"
// use使用
const vueUse = {
    Button,NavBar,Icon,Swipe,SwipeItem,Tabs,Tab,Cell,CellGroup,Popup 
}
Object.keys(vueUse).forEach(item => {
    Vue.use(vueUse[item])
})
// 图片懒加载
Vue.use(Lazyload, {
    lazyComponent: true,
  });

