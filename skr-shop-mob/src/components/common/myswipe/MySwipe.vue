<!--
 * @Descripttion: 轮播图
 * @version: 
 * @Author: stride
 * @Date: 2021-04-21 11:14:41
 * @LastEditors: stride
 * @LastEditTime: 2021-04-25 11:07:31
-->
<template>
  <!-- :autoplay="" -->
  <div class="my_swipe">
    <van-swipe :style="imgStyle">
      <van-swipe-item v-for="(image, index) in imgList" :key="index">
        <img v-lazy="image" @click="Preview_img(imgList, index)" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },
  props: {
    imgList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    // 轮播图预览功能
    Preview_img(images, index) {
      this.$emit('Preview_img', images, index)
    },

  },
  props: {
    imgList: {
      type: Array,
      default: () => [],
    },
    imgStyle: {
      type: Object,
      default: () => { },
    },
    imgId: {
      type: Array,
      default: () => [],
    },
  },
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
    height: 100%;
  }
  /deep/ .van-swipe__indicator {
    background-color: black;
  }
}
</style>