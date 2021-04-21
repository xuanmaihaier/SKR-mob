<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-21 11:14:41
 * @LastEditors: stride
 * @LastEditTime: 2021-04-21 12:29:27
-->
<template>
  <!-- :autoplay="" -->
  <div class="my_swipe">
    <van-swipe>
      <van-swipe-item v-for="(image, index) in imgList" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  props:{
    imgList:{
      type:Array,
      default:()=>[]
    }
  }
};
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  
  text-align: center;
  background-color: #39a9ed;
}
.my_swipe {
  /deep/.van-swipe {
  }
  img {
    width: 100%;
  }
  /deep/ .van-swipe__indicator{
    background-color: black;
  }
}
</style>