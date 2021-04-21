<template>
  <!-- :autoplay="" -->
  <div class="my_swipe">
    <van-swipe>
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 185px;
  text-align: center;
  background-color: #39a9ed;
}
.my_swipe {
  /deep/.van-swipe {
    height: 185px;
  }
  img {
    width: 100%;
    height: 185px;
  }
}
</style>