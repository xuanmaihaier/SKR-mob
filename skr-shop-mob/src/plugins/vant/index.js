
// import 'vant/lib/button/style';
import Vue from 'vue';
import {
    Button
} from "vant"
// use使用
const vueUse = {
    Button
}
Object.keys(vueUse).forEach(item => {
    Vue.use(vueUse[item])
})

