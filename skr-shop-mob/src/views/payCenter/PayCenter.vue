<template>
  <div class="payCenter">
    <PayTop/>
    <ZhiFuBao/>
  </div>
</template>

<script>
import PayTop from './childComps/PayTop.vue';
import ZhiFuBao from './childComps/ZhiFuBao.vue';
export default {
  components: { PayTop, ZhiFuBao },
  name: "PayCenter",
};
</script>

<style lang='less' scoped>
.payCenter {
  width: 100%;
  height: 100vh;
  height: calc(100vh - var(--vh-offset, 0px));
  background-color: #f0f0f0;
}
</style>