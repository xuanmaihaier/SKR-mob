<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-20 10:41:44
 * @LastEditors: stride
 * @LastEditTime: 2021-04-23 15:38:53
-->
<template>
  <div id="app">
    <loading></loading>
    <keep-alive clude="Search,SearchTwo" exclude="Details">
      <router-view :key="$route.fullPath" />
    </keep-alive>
  </div>
</template>
<script>
import Loading from "./components/common/loading/Loading.vue";
export default {
  components: { Loading },
  name: "App",
};
</script>
<style>
@import url("./assets/css/params.less");
</style>
