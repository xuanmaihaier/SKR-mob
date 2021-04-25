<template>
  <div class="confirmOrder">
    <OrderNav />
  </div>
</template>

<script>
import OrderNav from "./childComps/OrderNav";
export default {
  name: "ConfirmOrder",
  components: { OrderNav },
};
</script>

<style lang="less" scoped>
</style>