<template>
  <div class="shopCar">
      <Title></Title>
      <login-info></login-info>
      <cen-car></cen-car>
      <recommend-list></recommend-list>
  </div>
</template>

<script>
import Title from './childComps/Title.vue'
import LoginInfo from './childComps/LoginInfo.vue'
import CenCar from './childComps/CentCar.vue'
import RecommendList from './childComps/RecommendList.vue'
export default {
    components:{
        Title,
        LoginInfo,
        CenCar,
        RecommendList,
    }

}
</script>

<style >
.shopCar{
    width: 100vw;
    height: 100vh;
    
}
</style>