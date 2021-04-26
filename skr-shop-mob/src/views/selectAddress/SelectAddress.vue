<template>
  <div class="SelectAddress">
    <TopTitle />
    <WriteAdd />
  </div>
</template>

<script>
import TopTitle from "./childComps/TopTitle.vue";
import WriteAdd from "./childComps/WriteAdd.vue";
export default {
  components: { TopTitle, WriteAdd },
  name: "SelectAddress",
};
</script>

<style lang="less" scoped>
.SelectAddress {
  width: 100%;
  height: 100vh;
  height: calc(100vh - var(--vh-offset, 0px));
  background-color: #f0f0f0;
}
</style>