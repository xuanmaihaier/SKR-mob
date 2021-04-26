<template>
  <div class="home_top">
    <van-nav-bar title="" left-arrow>
      <template #left>
        <div class="li">
          <div class="home_log" ref="home_log">
          <div class="front"></div>
          <div class="front_img"></div>
        </div>
        </div>
      </template>
      <template #right>
        <van-icon name="search" size="18" @click="toSearch" />
      </template>
    </van-nav-bar>
    <my-swipe
      :imgList="$store.state.home.getSpuList"
      :imgStyle="{ height: '40vw' }"
      @previw_id="previw_id"
    ></my-swipe>
  </div>
</template>
<script>
import MySwipe from "components/common/myswipe/MySwipe.vue";
export default {
  components: { MySwipe },
  name: "HomeTop",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getSpu_", "休闲上衣");
  },
  methods: {
    previw_id(index) {
      let params = JSON.parse(this.$store.state.home.getSpuId[index].params);

      this.$store.dispatch("typeTwo", `${params.name}_${params.series}`);
      if (this.$store.state.home.getSpuId[index].spu_id == null) {
        this.$router.push({
          //  name:`SeconDary`,
          path: `/secondary/${params.series}`,
          query: {
            obj: `${params.name}_${params.series}`,
          },
        });
        return;
      } else {
        this.$router.push({
          path: `/details/${this.$store.state.home.getSpuId[index].spu_id}`,
          query: {
            item: "鞋类",
          },
        });
      }
    },
     toSearch() {
    this.$router.push("/search");
  },
  },
  mounted() {
    console.log(this.$refs.home_log,'+++');
    let Edg=0
    setInterval(()=>{
      Edg+=180
       this.$refs.home_log.style.transform=`rotateX(${Edg}deg)` ;
    },8000)
  },
 
};
</script>

<style lang="less" scoped>
.home_log {
  width: 7rem;
  height: 46px;
  left: 50vw;
  transition: all 3s;
   transform-style: preserve-3d;
    transform: rotateX(0deg) ;
    position: relative;
 
  line-height: 46px;
}
.front {
  width: 7rem;
  height: 46px;
    position: absolute;
  background: url("~assets/img/log/log1.png") no-repeat;
  background-size: 100%;
  background-color: #323232;
   
}
/deep/.van-nav-bar {
   background-color: #323232;
  overflow: hidden;
  perspective-origin: 10% 30%;
  
  .front_img {
    position: absolute;
    width: 7rem;
    height: 46px;
    background: url(//cdn.yoho.cn/yohobuywap-node/img/yohologo02.4b84a9fb7d.png) center
      no-repeat;
    background-color: #323232;
    background-size: 100%;
     position: absolute;
            transform: rotateX(180deg) ;
      // backface-visibility: hidden;
    // transform: translateZ(100px);
  }
}
/deep/.van-nav-bar__right {
  left: 83vw;
}
/deep/.van-nav-bar .van-icon {
  color: #fff;
  font-size: 20px;
}
.li{
  width: 7rem;
  height: 46px;
  transform: translateX(-50%);
  perspective: 2000px;
   perspective-origin: 10% 30%;
}
</style>