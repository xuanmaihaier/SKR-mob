

import Vue from 'vue';
import {
    Button,NavBar,Icon,Swipe,SwipeItem,Lazyload,Tabs,Tab,Cell,CellGroup,Popup,List,Collapse, CollapseItem,GoodsAction, GoodsActionIcon, GoodsActionButton,ShareSheet,Toast 
} from "vant"
// use使用
const vueUse = {
    Button,NavBar,Icon,Swipe,SwipeItem,Tabs,Tab,Cell,CellGroup,Popup,List,Collapse, CollapseItem,GoodsAction, GoodsActionIcon, GoodsActionButton,ShareSheet
}

Object.keys(vueUse).forEach(item => {
    Vue.use(vueUse[item])
})
// 图片懒加载
Vue.use(Lazyload, {
    lazyComponent: true,
  });

Vue.prototype.$toast = Toast