<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-21 12:53:27
 * @LastEditors: stride
 * @LastEditTime: 2021-04-23 12:42:55
-->
<template>
  <div class="NavBar">
    <van-nav-bar left-arrow @click-left="onClickLeft">
      <!-- 右侧插槽根据父元素传的right来确定是否显示，仅适合只有返回或有返回同时有收藏分享客服的头部-->
      <template #right v-if="right">
        <van-icon name="service" size="28"  ref="right"/>
        <van-icon @click.stop="starShare" name="share" size="28" />
        <van-icon @click.stop="starClick" :name="star" size="28" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import bus from "utils/bus"
export default {
  name:"MyNavBar",
  data() {
    return {
      star: "star-o",
    };
  },
  props:{
    right:{
      type:Boolean,
      default:()=>false
    }
  },
  methods: {
    // 返回
    onClickLeft() {
      this.$router.go(-1);
    },
    starShare(){
      bus.$emit('starShare')
    },
    // 收藏
    starClick() {
      if (this.star == "star-o") {
        this.star = "star";
      } else {
        this.star = "star-o";
      }
    },
  },
  mounted() {
},
};

</script>

<style lang="less" scoped>
/deep/ .van-nav-bar__content{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: white;
}
/deep/ .van-hairline--bottom::after {
  border-bottom: none;
}
/deep/ .van-nav-bar__right {
  width: 30%;
  display: flex;
  justify-content: space-around;
  .van-icon {
    color: #2f3640;
    opacity: 1;
  }
}
/deep/ .van-nav-bar__arrow {
  font-size: 28px;
  color: #2f3640;
}
/deep/ .van-nav-bar__right{
  opacity: .9;
}
</style>