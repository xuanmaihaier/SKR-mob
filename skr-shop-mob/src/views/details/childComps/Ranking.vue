<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-21 21:20:17
 * @LastEditors: stride
 * @LastEditTime: 2021-04-21 22:35:03
-->
<template>
<div class="Ranking">
  <van-cell title="榜单"  is-link value="「潮流新势力第3名」" />
</div>
  
</template>

<script>
export default {
  name: "Serve",
}
</script>

<style lang="less" scoped>
.Ranking{
  padding:14px;
  width:calc(100% - 16px - 18px);
  .van-cell{
    padding: 3px;
    background-color:#f5f4f9 ;
  }
}
/deep/ .van-cell__title{
  span{
    width: 20px;
    height: 15px;
    background-image:linear-gradient(to right bottom,#fff -20%,#bfcdde 90%);
    color: #fff;
    font-size: 12px;
    padding: 2px;
  }
}
</style>