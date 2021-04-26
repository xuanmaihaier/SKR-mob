<template>
  <div class="discount">
    <!-- 优惠券单元格 -->
    <van-coupon-cell
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showList = true"
    />
    <!-- 优惠券列表 -->
    <van-popup
      v-model="showList"
      round
      position="bottom"
      style="height: 90%; padding-top: 4px"
    >
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
    <div class="thunder">
      <p>闪电值<span>共有0⚡值，满100可用</span></p>
    </div>

  </div>
</template>

<script>
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元",
};

export default {
  name: "OrderDiscount",
  data() {
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: undefined,
    };
  },
  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
  },
};
</script>

<style lang="less" scoped>
.discount {
  box-sizing: border-box;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #fff;
  .thunder{
    margin-top: .7rem;
    p{
      font-size:18px;
      span{
        margin-left: 1rem;
        color: #999999;
        font-size: 14px;
      }
    }
  }
  .van-cell__title{
    span{
      font-size: 18px;
    }
  }
}
</style>