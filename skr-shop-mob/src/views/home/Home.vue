<template>
  <div class="home">
    <router-link to="/shopCar">购物车</router-link>
      <HomeTop/>
      <IconWrapper/>
      <home-one :List="Lists"></home-one>
  </div>
</template>

<script>
import HomeOne from './childComps/HomeOne.vue'
import HomeTop from './childComps/HomeTop.vue'
import IconWrapper from './childComps/IconWrapper.vue'
export default {
  name: 'Home',
  components: {
    HomeTop,
    IconWrapper,
    HomeOne
    
  },
  data() {
    return {
      Lists:[]
    }
  },
  computed:{
    List(){
      return this.$store.state.home.typeOne_list
    }
  },
  created() {
     this.$store.dispatch("typeOne");
  },
  watch:{
    List:{
      deep:true,
      handler:function(val){
        this.Lists = val
        this.Lists = this.Lists.slice(0,4)
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>