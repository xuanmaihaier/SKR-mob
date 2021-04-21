
// import 'vant/lib/button/style';
import Vue from 'vue';
import {
    Button,NavBar,Icon,Swipe, SwipeItem
} from "vant"
// use使用
const vueUse = {
    Button,NavBar,Icon,Swipe, SwipeItem
}
Object.keys(vueUse).forEach(item => {
    Vue.use(vueUse[item])
})

