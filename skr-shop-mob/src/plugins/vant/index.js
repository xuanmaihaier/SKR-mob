
// import 'vant/lib/button/style';
import Vue from 'vue';
import {
    Button,
    Icon,
    NavBar
} from "vant"
// use使用
const vueUse = {
    Button,
    Icon,
    NavBar,
}
Object.keys(vueUse).forEach(item => {
    Vue.use(vueUse[item])
})

