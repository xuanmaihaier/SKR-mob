<template>
  <div class="order-container">
    <div class="noOrder">
      <van-empty description="您还没有订单" />
      <van-button plain type="primary" color="#000" @click="goHome">随便逛逛</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name:'OrderContainer',
  methods: {
    goHome(){
      this.$router.push('/home')
    }
  },
}
</script>

<style lang="less" scoped>
  .order-container{
    .noOrder{
      /deep/ .van-button{
        display: block;
        margin: 1rem auto 0;
        width: 7rem;
      }
    }
  }
</style>