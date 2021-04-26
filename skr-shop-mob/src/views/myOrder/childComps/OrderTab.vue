<template>
  <div class="orderTab">
    <van-tabs v-model="active">
      <van-tab title="全部"></van-tab>
      <van-tab title="待付款"></van-tab>
      <van-tab title="待发货"></van-tab>
      <van-tab title="待收获"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "orderTab",
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="less" scoped>
</style>