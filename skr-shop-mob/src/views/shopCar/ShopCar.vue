<template>
  <div class="shopCar">
    <Title></Title>
    <div v-if="token">
      <login-info></login-info>
      <cen-car></cen-car>
    </div>
    <shop-car-list v-else></shop-car-list>
    <recommend-list></recommend-list>
    
  </div>
</template>

<script>
import Title from "./childComps/Title.vue";
import LoginInfo from "./childComps/LoginInfo.vue";
import CenCar from "./childComps/CentCar.vue";
import RecommendList from "./childComps/RecommendList.vue";
import ShopCarList from "./childComps/ShopCarList.vue";
export default {
  components: {
    Title,
    LoginInfo,
    CenCar,
    RecommendList,
    ShopCarList,
    
  },
  data() {
    return {
      token: '',
    };
  },
  created() {
    if(localStorage.getItem('token')){
      this.token = false
    }else{
      this.token = true
    }
  },

};
</script>

<style >
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  overflow-y: auto;
}

.shopCar {
  width: 100vw;
  height: 100vh;
}
</style>