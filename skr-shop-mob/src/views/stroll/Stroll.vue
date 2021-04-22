<template>
    <div id="app">
        <h1>详情</h1>
        <Nav />
        <a href=""><img src="//img11.static.yhbimg.com/yhb-img01/2017/04/28/13/0195a172b6ec4c098533f4c5c082fad146.jpg?imageView2/2/w/640/h/240/q/60" alt=""></a>
        <Tab />
        <a href="" class="shopCar"><van-icon name="cart" /></a>
        <Lore />
        <footer>
            <p>CopyRight©2007-2021 南京新与力文化传播有限公司</p>
        </footer>
    </div>
</template>

<script>
import Nav from './childComps/Nav'
import Tab from './childComps/Tab'
import Lore from './childComps/LoginRegister'
export default {
    components:{
        Nav,
        Tab,
        Lore
    }
}
</script>

<style lang="less" scoped>
    a{
        width: 100%;
        img{
            width: 100%;
        }
    }
    .shopCar{
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
        bottom: 10%;
        right: 6%;
    }
    footer{
        width: 100%;
        height: 8vh;
        // margin-bottom: 0;
        position: fixed;
        bottom: 0;
        background-color: #c1c1c1;
        text-align: center;
        line-height: 8vh;
        p{
            font-size: .8rem;
            color: #666666;
        }
    }
</style>
