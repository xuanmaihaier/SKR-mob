<template>
  <div class="addAddress">
    <AddTopTitle />
    <AddMain/>
  </div>
</template>

<script>
import AddTopTitle from "../addAddress/childComps/AddTopTitle";
import AddMain from './childComps/AddMain.vue';
export default {
  components: { AddTopTitle,AddMain },
  name: "AddAddress",
};
</script>

<style lang="less" scoped>
.addAddress {
  width: 100%;
  
  background-color: #f0f0f0;
}
</style>