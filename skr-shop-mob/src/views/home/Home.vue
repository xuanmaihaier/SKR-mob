<template>
<!-- 首页 -->
  <div class="home">
      <HomeTop/>
      <IconWrapper/>
      <HomeOne/>
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
    
  }
}
</script>

<style lang="less" scoped>

</style>
