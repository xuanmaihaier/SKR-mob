<template>
  <div class="MyOrder">
    <MyTOP/>
    <Note/>
    <OrderTab/>
    <OrderContainer/>
  </div>
</template>

<script>
import MyTOP from "./childComps/MyTOP.vue";
import Note from './childComps/Note.vue';
import OrderContainer from './childComps/OrderContainer.vue';
import OrderTab from './childComps/OrderTab.vue';
export default {
  components: { MyTOP, Note, OrderTab, OrderContainer },
  name: "MyOrder",
};
</script>

<style lang="less" scoped>
.MyOrder {
  width: 100%;
  height: 100vh;
  height: calc(100vh - var(--vh-offset, 0px));
  background-color: #f0f0f0;
}
</style>