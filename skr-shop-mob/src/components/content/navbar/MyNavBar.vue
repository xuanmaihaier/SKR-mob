<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-21 12:53:27
 * @LastEditors: stride
 * @LastEditTime: 2021-04-25 20:28:08
-->
<template>
  <div class="NavBar">
    <van-nav-bar left-arrow @click-left="onClickLeft" :title="title">
      <!-- 右侧插槽根据父元素传的right来确定是否显示无法修改，title传入标题是中间的位置-->
      <template #right v-if="right">
        <van-icon  @click.stop="serviceClick" name="service" size="28" ref="right" />
        <van-icon @click.stop="starShare" name="share" size="28" />
        <van-icon @click.stop="starClick" :name="star" size="28" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import bus from "utils/bus"
export default {
  name: "MyNavBar",
  data() {
    return {
      star: "star-o",
    };
  },
  props: {
    right: {
      type: Boolean,
      default: () => false
    },
    title:{
      type:String,
      default:""
    }
  },
  methods: {
    // 返回
    onClickLeft() {
      this.$router.go(-1);
    },
    serviceClick(){
      this.$router.push('/serve')
    },
    starShare() {
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
/deep/ .van-nav-bar__content {
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
/deep/ .van-nav-bar__right {
  opacity: 0.9;
}
.center{
  text-align: center;
}
</style>