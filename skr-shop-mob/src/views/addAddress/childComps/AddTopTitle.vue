<template>
  <div class="searchTop">
    <van-icon
      name="arrow-left"
      size="30"
      color="#444a53"
      @click="previousPage"
    />
    <span class="spanSearch">添加地址</span>
  </div>
</template>

<script>
export default {
  name: "AddTopTitle",
  data() {
    return {};
  },
  methods: {
    showMean() {},
    previousPage() {
      history.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
@top-height: 3.3rem;
.iconStyle {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 30px;
  height: 30px;
}
.searchTop {
  position: relative;
  line-height: 14vw;
  text-align: center;
  // background-image: linear-gradient(#323232, #414141);
  background-color: #fff;
  /deep/ .van-icon-arrow-left {
    .iconStyle();
    left: 0.5rem;
  }
  /deep/ .van-icon-apps-o {
    .iconStyle();
    right: 0.5rem;
  }
  span.spanSearch {
    font-size: 7vw;
    color: #444a53;
  }
}
</style>