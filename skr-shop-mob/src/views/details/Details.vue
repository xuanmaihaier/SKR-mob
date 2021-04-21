<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-20 21:37:36
 * @LastEditors: stride
 * @LastEditTime: 2021-04-21 16:39:24
-->
<template>
  <div class="Details">
    <NavBar />
    <Swiper :imgList="imgList" />
    <Title :title="title" />
    <Banner/>
    <Params/>
  </div>
</template>

<script>
import NavBar from "./childComps/NavBar";
import Swiper from "components/common/myswipe/MySwipe";
import Title from "./childComps/Title";
import Banner from "./childComps/Banner"
import Params from "./childComps/Params"
export default {
  name: "Details",
  data() {
    return {
      imgList: [],
      title: {},
    };
  },
  components: {
    NavBar,
    Swiper,
    Title,
    Banner,
    Params
  },
  computed: {
    Commodity() {
      return this.$store.state.details.Commodity;
    },
  },
  methods: {
    list_init() {
      let arr = [];
      let imgList = JSON.parse(this.Commodity[0].imgs);
      imgList.forEach((item) => {
        for (let x in item) {
          if (x == "normal") {
            arr.push(item[x]);
          }
        }
      });
      this.imgList = arr;
      let title ={}
      title.name = this.Commodity[0].title;
      title.price = this.Commodity[0].price;
      this.title = title
      console.log(this.Commodity[0]);
    },
  },
  created() {
    this.$store.dispatch("getShop", "729");
  },
  watch: {
    Commodity: {
      deep: true,
      handler: function (val) {
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