<template>
  <div>
    <van-nav-bar
            title="购物车"
            right-icon="bars"
            left-arrow
            @click-left="onClickLeft"
        >
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  methods:{
    onClickLeft(){
      this.$router.push('/home');
    }
  }
};
</script>

<style lang='less' scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  box-sizing: border-box;
}

/deep/.van-nav-bar__content {
    width: 100%;
    height: 7vh;
    background-color: #3b3b3b;
    font-size: 20px;
    border-bottom: none;
    .van-nav-bar__title {
        font-size: 22px;
        font-weight: 600;
    }
}
.van-nav-bar {
    background-color: #000;
    /deep/.van-icon {
        color: #fff;
        font-size: 22px;
        font-weight: bold;
    }
    /deep/.van-nav-bar__title {
        color: #fff;
    }
}
</style>