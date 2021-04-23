<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-22 15:04:35
 * @LastEditors: stride
 * @LastEditTime: 2021-04-22 17:07:07
-->
<template>
  <div class="Footer">
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
      <van-goods-action-button
        color="#718093"
        type="warning"
        text="加入购物车"
      />
      <van-goods-action-button color="#2f3640" type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name:"Footer",
 
};
</script>

<style lang="less" scoped>

</style>