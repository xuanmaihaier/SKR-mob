<template>
  <div class="searchTop">
    <van-icon name="arrow-left" size="30" color="#fff" @click="previousPage" />
    <van-icon
      ref="meanBtn"
      name="apps-o"
      size="30"
      color="#fff"
      @click="meanShow = !meanShow"
    />
    <span class="spanSearch">搜索</span>
    <div class="homebuttom" v-show="meanShow" ref="homebuttom">
      <ul>
        <li>
          <van-icon name="wap-home" size="20" color="#fff" />
          <span>首页</span>
        </li>
        <li>
          <van-icon name="weapp-nav" size="20" color="#fff" />
          <span>分类</span>
        </li>
        <li>
          <van-icon name="shopping-cart" size="20" color="#fff" />
          <span>购物车</span>
        </li>
        <li>
          <van-icon name="manager" size="20" color="#fff" />
          <span>我的</span>
        </li>
      </ul>
      <div class="ulArr"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchTop",
  data() {
    return {
      meanShow: false,
    };
  },
  methods: {
    showMean() {},
    previousPage() {
      history.go(-1);
    },
  },
  mounted() {
    document.addEventListener("click", (e) => {
      // console.log(e.target);
      if (
        !this.$refs.meanBtn.contains(e.target) &&
        !this.$refs.homebuttom.contains(e.target)
      ) {
        this.meanShow = false;
      }
    });
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
  height: @top-height;
  line-height: @top-height;
  text-align: center;
  background-image: linear-gradient(#323232, #414141);
  /deep/ .van-icon-arrow-left {
    .iconStyle();
    left: 0.5rem;
  }
  /deep/ .van-icon-apps-o {
    .iconStyle();
    right: 0.5rem;
  }
  span.spanSearch {
    font-size: 1.3rem;
    color: #fff;
  }
  .homebuttom {
    position: absolute;
    top: 3rem;
    right: 0rem;
    padding: 0.5rem;
    width: 9rem;
    z-index: 2;
    ul {
      width: 100%;
      background-image: linear-gradient(#434343, #171717);
      overflow: hidden;
      border-radius: 0.5rem;
      li {
        display: flex;
        padding-left: 1rem;
        width: 100%;
        height: 2.8rem;
        box-sizing: border-box;
        .van-icon {
          margin-right: 1rem;
          line-height: 2.8rem;
        }
        span {
          padding-left: 1rem;
          width: 5.6rem;
          color: #fff;
          text-align: left;
          border-bottom: 1px solid #444444;
          line-height: 2.8rem;
        }
      }
    }
    .ulArr {
      width: 0.75rem;
      height: 0.75rem;
      position: absolute;
      top: 0.2rem;
      right: 1.5rem;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      background-color: #434343;
    }
  }
}
</style>