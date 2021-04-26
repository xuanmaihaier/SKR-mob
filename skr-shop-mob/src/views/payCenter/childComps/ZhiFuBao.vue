<template>
  <div class="zhiFuBao">
    <img src="@/assets/img/zhifubao/zhifubao.png" alt="" />
    <span>支付宝支付</span>
    <p>
      支付宝钱包支付
      <br />
      推荐支付宝用户使用
    </p>
    <van-icon name="arrow" size="20"/>
  </div>
</template>

<script>
export default {
  name: "ZhiFuBao",
};
</script>

<style lang="less" scoped>
.zhiFuBao {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2rem auto 0;
  width: 90%;
  height: 3rem;
  background-color: #fff;
  border: 1px solid #999;
  border-radius: 7px;
  p{
    font-size: .8rem;
    color: #4b4b4b;
    line-height: 1rem;
  }
  span{
    font-size: 1.2rem;
  }
}
</style>