<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-20 21:37:36
 * @LastEditors: stride
 * @LastEditTime: 2021-04-22 22:38:02
-->
<template>
  <div class="Details">
     <NavBar />
    <div class="content" ref="content">
     
      <Tab v-if="loadOk" @tabClick="tabClick" :page="page"/>
      <Swiper :imgList="imgList" @Preview_img="Preview_img" ref="Swiper" />
      <Title :title="title" />
      <Banner />
      <Instalments :param="param" />
      <Serve />
      <Ranking />
      <Freight />
      <Recommend />
      <Recent />
      <Evaluate />
      <Selected
        :imgList="imgList"
        @Previewsec_img="Preview_img"
        ref="Selected"
      />
      <Parameter :Commodity="Commodity[0]" ref="Parameter" />
      <Particulars :imgList="imgList" />
      <Rules />
      <Information />
      <Recommendation ref="Recommendation" @imgLoad="imgLoad" />
    </div>
    <Footer />
    <Share />
  </div>
</template>

<script>
import { debounce } from "utils/debounce";
import { animateScroll } from "utils/animate";
import { ImagePreview } from "vant"; //引入大图预览
import NavBar from "./childComps/NavBar";
import Swiper from "components/common/myswipe/MySwipe";
import Title from "./childComps/Title";
import Banner from "./childComps/Banner";
import Instalments from "./childComps/Instalments";
import Serve from "./childComps/Serve";
import Ranking from "./childComps/Ranking";
import Freight from "./childComps/Freight";
import Recommend from "./childComps/Recommend";
import Recent from "./childComps/Recent";
import Evaluate from "./childComps/Evaluate";
import Selected from "./childComps/Selected";
import Parameter from "./childComps/Parameter";
import Particulars from "./childComps/Particulars";
import Rules from "./childComps/Rules";
import Information from "./childComps/Information";
import Recommendation from "./childComps/Recommendation";
import Footer from "./childComps/Footer";
import Share from "./childComps/Share";
import Tab from "./childComps/Tab";
export default {
  name: "Details",
  data() {
    return {
      imgList: [],
      title: {},
      param: {},
      offsetTop: [],
      loadOk: false,
      page:0
    };
  },
  components: {
    NavBar,
    Swiper,
    Title,
    Banner,
    Instalments,
    Serve,
    Ranking,
    Freight,
    Recommend,
    Recent,
    Evaluate,
    Selected,
    Parameter,
    Particulars,
    Rules,
    Information,
    Recommendation,
    Footer,
    Share,
    Tab,
  },
  computed: {
    Commodity() {
      return this.$store.state.details.Commodity;
    },
  },
  methods: {
    list_init() {
      let arr = [];
      let title = {};
      let param = {};
      let imgList = JSON.parse(this.Commodity[0].imgs);
      imgList.forEach((item) => {
        for (let x in item) {
          if (x == "normal") {
            arr.push(item[x]);
          }
        }
      });
      this.imgList = arr;
      param.msg = JSON.parse(this.Commodity[0].param);
      param.price = this.Commodity[0].price;
      this.param = param;
      title.name = this.Commodity[0].title;
      title.price = this.Commodity[0].price;
      this.title = title;
    },
    Preview_img(images, index) {
      ImagePreview({
        images: images, //图片数组
        showIndex: true,
        loop: false,
        startPosition: index,
      });
    },
    tabClick(index) {
      const content = document.querySelector(".content");
      let from = content.scrollTop;
      animateScroll(from, this.offsetTop[index], content);
    },
    animateScroll_init() {},
    imgLoad(count, length) {
      if (count == length) {
        this.loadOk = true;
      }
    },
    Sroll_init() {
      const content = document.querySelector(".content");
      let top = content.scrollTop
      this.offsetTop.forEach((item,index) => {
        if(top>=item-24){
          this.$store.dispatch('getPage',index)
        }
        if(top>300){
          this.$store.dispatch('getShow',true)
        }else{
          this.$store.dispatch('getShow',false)
        }
      });
    },
  },
  created() {
    this.$store.dispatch("getShop", this.$route.params.id);
    this.$store.dispatch("getRecommend_init", this.$route.query.item);
  },
  mounted() {
    let that = this;
    const content = document.querySelector(".content");
    content.addEventListener("scroll", debounce(this.Sroll_init, 6));
  },
  watch: {
    Commodity: {
      deep: true,
      handler: function (val) {
        this.list_init();
      },
    },
    // 异步解决  最长的图片加载完毕才获取高度
    loadOk: function () {
      let arr = [
        this.$refs.Swiper.$el.offsetTop,
        this.$refs.Selected.$el.offsetTop - 24,
        this.$refs.Parameter.$el.offsetTop - 24,
        this.$refs.Recommendation.$el.offsetTop - 24,
      ];
      this.offsetTop = arr;
    },
  },
};
</script>

<style lang="less" scoped>
.Details {
  width: 100%;
  .content {
    position: absolute;
    top: 46px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: scroll;
  }
}
</style>