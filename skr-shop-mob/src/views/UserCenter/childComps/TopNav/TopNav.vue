<template>
  <div class="TopNav">
    <van-nav-bar
      title="个人中心"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <van-icon name="wap-nav" />
        <section class="menu" v-if="menuShow">
          <ul>
            <li>
              <van-icon name="wap-home" />
              <span>首页</span>
            </li>
            <li>
              <van-icon name="cluster" />
              <span>分类</span>
            </li>
            <li>
              <van-icon name="cart" />
              <span>购物车</span>
            </li>
            <li>
              <van-icon name="manager" />
              <span>我的</span>
            </li>
          </ul>
        </section>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "TopNav",
  data: function () {
    return {
      menuShow: false, // 控制下拉菜单的显示
    };
  },
  created() {
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight(e) {
      e.stopImmediatePropagation();
      this.menuShow = true;
      window.addEventListener('click', () => {
          this.menuShow = false;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.TopNav {
  /deep/ .van-nav-bar {
    // 去除底部白线
    &::after{
        opacity: 0;
    }
    position: relative;
    background-color: #353535;
    .van-nav-bar__title {
      color: white;
      font-weight: bolder;
    }
    .van-nav-bar__left,
    .van-nav-bar__right {
      & > i,
      & > span {
        color: white;
        font-weight: bolder;
      }
    }
    .menu {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 10;
      transform: translate(-5%, 102%);
      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 36vw;
        background-color: #353535;
        border-radius: 0.3rem;
        li {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3vw 0;
          i {
            color: white;
            padding: 0 5vw;
            font-size: 5vw;
            font-weight: bolder;
          }
          span {
            width: 100%;
            color: white;
            font-size: 3.6vw;
            text-align: left;
            position: relative;
            padding-left: 3.4vw;
            &::after{
                content: '';
                box-sizing: border-box;
                display: inline-block;
                width: 100%;
                height: 0.2px;
                background: rgba(168, 168, 168, 0.274);
                position: absolute;
                left: 0;
                bottom: -2vw;
            }
          }
          &:last-of-type span::after{
              opacity: 0;
          }
        }
      }
    }
  }
}
</style>