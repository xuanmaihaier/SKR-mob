<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-21 22:36:50
 * @LastEditors: stride
 * @LastEditTime: 2021-04-21 22:57:47
-->
<template>
  <div class="Ranking">
    <van-cell title="相关推荐" is-link value="查看更多" />
    <div class="swiper">
      <van-swipe :loop="false" :width="300">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
};
</script>

<style lang="less" scoped>
.Ranking {
  padding: 14px;
  width: calc(100% - 16px - 18px);
  .van-cell {
    padding: 3px;
  }
}
/deep/ .van-cell__title {
  span {
    font-size: 15px;
    font-weight: 700;
  }
}

/deep/ .van-cell__value {
  span {
    font-size: 12px;
  }
}
</style>

