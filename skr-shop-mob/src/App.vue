<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-20 10:41:44
 * @LastEditors: stride
 * @LastEditTime: 2021-04-25 20:26:11
-->
<template>
  <div id="app">
    <loading></loading>
    <keep-alive clude="Search,SearchTwo" exclude="Details">
      <router-view :key="$route.fullPath" />
    </keep-alive>
     <MainTabBar v-show="$route.meta.showbar" />
  </div>
</template>
<script>
import Loading from "components/common/loading/Loading.vue";
import MainTabBar from "components/content/mainTable/MainTabBar";
export default {
  components: { Loading, MainTabBar },
  name: "App",
  created() {
    console.log(this.$route.meta.showbar);
  },
};
</script>
<style>
@import url("./assets/css/params.less");
</style>
