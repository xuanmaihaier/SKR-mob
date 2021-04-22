<template>
  <div class="home_top">
    <van-nav-bar title="" left-arrow>
      <template #left>
        <div class="home_log">
          
          <div class="front">123</div>
          <div class="front_img"></div>
        </div>
      </template>
      <template #right>
        <van-icon name="search" size="18" @click="toSearch"/>
      </template>
    </van-nav-bar>
    <my-swipe :imgList="$store.state.home.getSpuList" :imgStyle="{height: '20vh'}"
      :imgId="$store.state.home.getSpuId"
    ></my-swipe>

  </div>
</template>

<script>
import MySwipe from 'components/common/myswipe/MySwipe.vue';
export default {
  components: { MySwipe },
  name: "HomeTop",
  data() {
    return {  
    }
  },
  created() {
    // this.$store.dispatch("typeOne");
     this.$store.dispatch('getSpu_','休闲上衣')
  },
  methods: {
    toSearch(){
      this.$router.push('/search')
    }
  },
};
</script>

<style lang="less" scoped>
.home_log {
width: 7rem;
  position:absolute;
  top: 10px;
  left: 50vw;
  transform: translateX(-50%);
  
}
.front{
      position: absolute;
      color: red;
      font-weight: 700;
  }
/deep/.van-nav-bar {
  background-image: -webkit-linear-gradient(#323232, #414141);
  background-image: linear-gradient(#323232, #414141);
    overflow: hidden;
  .front_img {
     position: absolute; 
    width: 7rem;
    height: 46px;
    background: url(//cdn.yoho.cn/yohobuywap-node/img/yohologo02.4b84a9fb7d.png)
    no-repeat ;
    background-color: #323232;
    background-size: 100%;
    z-index: 2;
  }
  
}
/deep/.van-nav-bar__right{
      left: 83vw;
}
/deep/.van-nav-bar .van-icon {
    color: #fff;
    font-size: 20px;
}
</style>