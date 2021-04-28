<template>
  <div class="UserCenter">
    <TopNav />
    <UserMsg />
    <Order />
    <Advertisement />
    <SimilarShop />
  </div>
</template>

<script>
import TopNav from "views/UserCenter/childComps/TopNav/TopNav.vue";
import UserMsg from "views/UserCenter/childComps/UserMsg/UserMsg.vue";
import Order from "views/UserCenter/childComps/Order/Order.vue";
import Advertisement from "views/UserCenter/childComps/Advertisement/Advertisement.vue";
import SimilarShop from "views/UserCenter/childComps/SimilarShop/SimilarShop.vue";
export default {
  nmae: "UserCenter",
  components: {
    TopNav,
    UserMsg,
    Order,
    Advertisement,
    SimilarShop,
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
html {
  font-size: 10px;
  .UserCenter {
    padding-bottom: 7.4vh;
  }
}
</style>