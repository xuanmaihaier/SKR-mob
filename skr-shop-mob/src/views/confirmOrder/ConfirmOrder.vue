<template>
  <div class="confirmOrder">
    <OrderNav />
    <OrderAddress/>
    <OrderPay/>
    <OrderDetail/>
    <OrderDiscount/>
    <OrderMoney/>
    <FixBot/>
  </div>
</template>

<script>
import FixBot from './childComps/FixBot.vue';
import OrderAddress from './childComps/OrderAddress.vue';
import OrderDetail from './childComps/OrderDetail.vue';
import OrderDiscount from './childComps/OrderDiscount.vue';
import OrderMoney from './childComps/OrderMoney.vue';
import OrderNav from "./childComps/OrderNav";
import OrderPay from './childComps/OrderPay.vue';
export default {
  name: "ConfirmOrder",
  components: { OrderNav,OrderAddress, OrderPay, OrderDetail, OrderDiscount, OrderMoney, FixBot },
};
</script>

<style lang="less" scoped>
.confirmOrder {
  width: 100%;
  height: 100vh;
  height: calc(100vh - var(--vh-offset, 0px));
  background-color: #f0f0f0;
}
</style>