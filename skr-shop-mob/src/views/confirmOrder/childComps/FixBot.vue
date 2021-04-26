<template>
  <div class="fixBot">
    <p>您需要支付：<span>￥225.00</span></p>
    <button @click="goPay">提交订单</button>
  </div>
</template>

<script>
export default {
  name:'FixBot',
  methods: {
    goPay(){
      this.$router.push('/payCenter')
    }
  },
}
</script>

<style lang="less" scoped>
  .fixBot{
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    padding: .7rem;
    width: 100%;
    height: 49px;
    background-color: #fff;
    z-index: 999;
    border-top: 1px solid #eee;
    p{
      text-align: left;
      span{
        color: #f00;
      }
    }
    button{
      border: none;
      outline: none;
      background-color: #f00;
      color: #fff;
      border-radius: 19px;
      width: 25%;
      height: 2rem;
    }
  }
</style>