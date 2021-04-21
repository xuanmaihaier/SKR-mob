<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-20 22:48:36
 * @LastEditors: stride
 * @LastEditTime: 2021-04-21 11:04:29
-->
<template>
  <div class="Swiper">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in imgList" :key="index">
        <img v-lazy="image" :src="image"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  data() {
    return {
      imgList: [],
    };
  },
  props: {
    Commodity: {
      type: String,
      default: "",
    },
  },
  methods: {
    imgList_init() {
      let arr = [];
      let imgList = JSON.parse(this.Commodity);
      imgList.forEach((item) => {
        for (let x in item) {
          arr.push(item[x]);
        }
      });
      this.imgList = arr;
    },
  },
  created() {
    this.imgList_init();
    console.log(this.imgList);
  },
};
</script>

<style lang="less" scoped>
</style>