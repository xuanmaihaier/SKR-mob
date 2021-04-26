<template>
  <div class="orderAddress">
    <div class="content" @click="toSelect" v-if="!userAddress[addIndex]">
      <van-icon name="location" />
      <van-icon name="arrow" />
      <p>请选择收货地址</p>
    </div>
    <div class="contentAdd" v-else>
      <van-icon name="location" />
      <div>
        <p>
          <span>{{ userAddress[addIndex].name }}</span>
          <span>{{ userAddress[addIndex].tel }}</span>
        </p>
        <p>
          {{ userAddress[addIndex].address }}
        </p>
        <p><span @click="toSelect">其他地址></span></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "OrderAddress",
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    toSelect() {
      this.$router.push("/selectAddress");
    },
  },
  computed: {
    ...mapState({
      userAddress: (state) => state.address.userAddress,
      addIndex: (state) => state.address.addIndex,
    }),
  },
};
</script>

<style lang="less" scoped>
.orderAddress {
  box-sizing: border-box;
  margin-bottom: 1rem;
  .content {
    position: relative;
    padding: 0.8rem;
    background-color: #fff;
    i {
      position: absolute;
      width: 16px;
      height: 16px;
      top: 0;
      bottom: 0;
      margin: auto 0;
      &:last-of-type {
        right: 16px;
      }
    }
    p {
      font-size: 0.8rem;
      padding-left: 16px;
    }
  }
  .contentAdd {
    position: relative;
    padding: 0.5rem;
    padding-left: 2rem;
    padding-right: 1rem;
    background-color: #fff;
    border-bottom: 2px dashed rgb(255, 0, 0);
    i {
      position: absolute;
      left: 2%;
    }
    p {
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
      &:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
        span {
          font-weight: 700;
        }
      }
      &:nth-of-type(3) {
        text-align: right;
        color: #ff0000;
        margin-bottom: 0;
      }
    }
  }
}
</style>