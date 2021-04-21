
// import 'vant/lib/button/style';
import Vue from 'vue';
import {
    Button,GoodsAction, GoodsActionIcon, GoodsActionButton,NavBar ,Icon
} from "vant"
// use使用
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(NavBar);
Vue.use(Icon);
const vueUse = {
    Button
}
Object.keys(vueUse).forEach(item => {
    Vue.use(vueUse[item])
})

