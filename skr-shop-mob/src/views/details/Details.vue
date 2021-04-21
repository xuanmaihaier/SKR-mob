<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-20 21:37:36
 * @LastEditors: stride
 * @LastEditTime: 2021-04-21 12:25:53
-->
<template>
  <div class="Details">
    <NavBar />
    <Swiper :imgList = "imgList"/>
  </div>
</template>

<script>
import NavBar from "./childComps/NavBar";
import Swiper from "components/common/myswipe/MySwipe";
export default {
  name: "Details",
  data() {
    return {
      imgList: [],
    };
  },
  components: {
    NavBar,
    Swiper,
  },
  computed: {
    Commodity() {
      return this.$store.state.details.Commodity;
    },
  },
  methods: {
    imgList_init() {
      let arr = [];
      let imgList = JSON.parse(this.Commodity[0].imgs);
      imgList.forEach((item) => {
        for (let x in item) {
          arr.push(item[x]);
        }
      });
      this.imgList = arr;
      console.log(this.imgList);
    },
  },
  created() { 
    this.$store.dispatch("getShop", "973");
   
  },
  watch: {
    Commodity: {
      deep: true,
      handler: function (val) {
        this.imgList_init();
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