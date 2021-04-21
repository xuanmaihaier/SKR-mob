<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-20 21:37:36
 * @LastEditors: stride
 * @LastEditTime: 2021-04-21 23:06:19
-->
<template>
  <div class="Details">
    <NavBar />
    <Swiper :imgList="imgList" />
    <Title :title="title" />
    <Banner />
    <Instalments :param="param" />
    <Serve />
    <Ranking/>
    <Freight/>
    <Recommend/>
  </div>
</template>

<script>
import NavBar from "./childComps/NavBar";
import Swiper from "components/common/myswipe/MySwipe";
import Title from "./childComps/Title";
import Banner from "./childComps/Banner";
import Instalments from "./childComps/Instalments";
import Serve from "./childComps/Serve";
import Ranking from "./childComps/Ranking"
import Freight from "./childComps/Freight"
import Recommend from "./childComps/Recommend"
export default {
  name: "Details",
  data() {
    return {
      imgList: [],
      title: {},
      param: {},
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
    Recommend
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
      console.log(param);
    },
  },
  created() {
    this.$store.dispatch("getShop", this.$route.params.id);
  },
  watch: {
    Commodity: {
      deep: true,
      handler: function (val) {
        console.log(val);
        this.list_init();
      },
    },
  },
};
</script>

<style lang="less" scoped>
.Details {
  width: 100%;
}
</style>