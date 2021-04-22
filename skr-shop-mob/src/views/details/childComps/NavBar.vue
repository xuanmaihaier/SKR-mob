<template>
  <div class="NavBar">
    <van-nav-bar left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="service" size="28"  ref="right"/>
        <van-icon name="share" size="28" />
        <van-icon @click.stop="starClick" :name="star" size="28" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      star: "star-o",
    };
  },
  methods: {
    // 返回
    onClickLeft() {
      this.$router.go(-1);
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
  console.log(this.$refs);
},
};

</script>

<style lang="less" scoped>
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