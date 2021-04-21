<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-20 21:37:36
 * @LastEditors: stride
 * @LastEditTime: 2021-04-21 10:32:28
-->
<template>
  <div class="Details">
    <NavBar />
    <Swiper v-if="Commodity.length>0" :Commodity="Commodity[0].imgs"/>
  </div>
</template>

<script>
import NavBar from "./childComps/NavBar";
import Swiper from "./childComps/Swiper";
export default {
  name: "Details",
  components: {
    NavBar,
    Swiper,
  },
  computed:{
    Commodity(){
     return this.$store.state.details.Commodity
    }
  },
  created() {
    this.$store.dispatch("getShop", "989");
    
  },
  mounted() {
    console.log(this.Commodity);
  },
};
</script>

<style lang="less" scoped>
.Details {
  width: 100%;
}
</style>