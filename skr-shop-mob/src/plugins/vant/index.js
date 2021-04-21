
// import 'vant/lib/button/style';
import Vue from 'vue';
import {
    Button,Icon
} from "vant"
// use使用
const vueUse = {
    Button,Icon
}
Object.keys(vueUse).forEach(item => {
    Vue.use(vueUse[item])
})

