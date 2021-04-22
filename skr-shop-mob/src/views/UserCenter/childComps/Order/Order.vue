<template>
  <div class="Order">
    <main>
      <DefaultChannel />
      <OrderAdmin />
      <Preferential />
      <Service />
    </main>
  </div>
</template>

<script>
import DefaultChannel from "views/UserCenter/childComps/Order/childComps/DefaultChannel.vue";
import OrderAdmin from "views/UserCenter/childComps/Order/childComps/OrderAdmin.vue";
import Preferential from "views/UserCenter/childComps/Order/childComps/Preferential.vue";
import Service from "views/UserCenter/childComps/Order/childComps/Service.vue";
export default {
  name: "Order",
  components: {
    DefaultChannel,
    OrderAdmin,
    Preferential,
    Service,
  },
};
</script>

<style lang="less" scoped>
.Order {
  overflow: hidden;
  main {
    overflow: hidden;
    background-color: #f0f0f0;
    padding-bottom: 1.23vh;
  }
}
</style>