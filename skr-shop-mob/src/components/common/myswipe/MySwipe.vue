<!--
 * @Descripttion: 带有点击预览的轮播图
 * @version: 
 * @Author: stride
 * @Date: 2021-04-21 11:14:41
 * @LastEditors: stride
 * @LastEditTime: 2021-04-21 15:38:22
-->
<template>
  <!-- :autoplay="" -->
  <div class="my_swipe">
       <van-swipe :style="imgStyle">
      <van-swipe-item v-for="(image, index) in imgList" :key="index" @click="handleId(index)">
        <img v-lazy="image" @click="Preview_img(imgList,index)"/>

      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { ImagePreview } from "vant"; //引入预览
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
    // 轮播图预览
    Preview_img(images, index) {
      ImagePreview({
        images: images, //图片数组
        showIndex: true,
        loop: false,
        startPosition: index,
      });
    },
  },

  props:{
    imgList:{
      type:Array,
      default:()=>[]
    },
     imgStyle:{
      type:Object,
      default:()=>{}
    },
    imgId:{
      type:Array,
      default:()=>[]
    },
  },
  methods: {
    handleId(index){
        this.$router.push(`/details/${this.imgId[index]}`);
    }
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