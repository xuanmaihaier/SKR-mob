<template>
    <div id="stroll">
        <Nav />
        <a href=""
            ><img
                src="//img11.static.yhbimg.com/yhb-img01/2017/04/28/13/0195a172b6ec4c098533f4c5c082fad146.jpg?imageView2/2/w/640/h/240/q/60"
                alt=""
        /></a>
        <Tab />
        <a href="#" class="shopCar" @click="toShopCar"><van-icon name="cart" /></a>


        <Lore />
        
    </div>
</template>

<script>
import Nav from "./childComps/Nav";
import Tab from "./childComps/Tab";
import Lore from "./childComps/LoginRegister";
export default {
    components: {
        Nav,
        Tab,
        Lore,
    },
    methods:{
        toShopCar(){
            this.$router.push('/shopCar')
        }
    }
};
</script>

<style lang="less" scoped>
#stroll {
    width: 100%;
    scroll-behavior: smooth; 
    a {
        width: 100%;
        img {
            width: 100%;
        }
    }
    .shopCar {
        display: block;
        width: 50px;
        height: 50px;
        border: 1px solid #ccc;
        background-color: #b2b2b2;
        border-radius: 50%;
        text-align: center;
        line-height: 60px;
        font-size: 2em;
        color: #fff;
        position: fixed;
        bottom: 20%;
        right: 6%;
        opacity: 0.6;
    }
}
</style>
