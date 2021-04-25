<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-25 19:53:26
 * @LastEditors: stride
 * @LastEditTime: 2021-04-25 20:30:58
-->
<template>
   <tab-bar>
      <tab-bar-item path="/home" activeColor="black">
        <img slot="item-img" src="@/assets/img/tabbar/home.svg" alt="">
        <img slot="item-img-active" src="@/assets/img/tabbar/home_active.svg" alt="">
        <p slot="item-text">主页</p>
      </tab-bar-item>
      <!-- <tab-bar-item path="/classify" activeColor="black">
        <img slot="item-img" src="@/assets/img/tabbar/type.svg" alt="">
        <img slot="item-img-active" src="@/assets/img/tabbar/type_active.svg" alt="">
        <p slot="item-text">分类</p>
      </tab-bar-item> -->
      <tab-bar-item path="/shopCar" activeColor="black">
        <img slot="item-img" src="@/assets/img/tabbar/shopcar.svg" alt="">
        <img slot="item-img-active" src="@/assets/img/tabbar/shopcar_active.svg" alt="">
        <p slot="item-text">购物车</p>
      </tab-bar-item>
      <tab-bar-item path="/UserCenter" activeColor="black">
        <img slot="item-img" src="@/assets/img/tabbar/profile.svg" alt="">
        <img slot="item-img-active" src="@/assets/img/tabbar/profile_active.svg" alt="">
        <p slot="item-text">我的</p>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem"
export default {
  name:"MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
}
</script>

<style>

</style>