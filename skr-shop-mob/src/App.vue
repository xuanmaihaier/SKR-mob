<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-20 10:41:44
 * @LastEditors: stride
 * @LastEditTime: 2021-04-23 15:19:45
-->
<template>
  <div id="app">
    <keep-alive clude="Search,SearchTwo" exclude="Details">
      <router-view :key="$route.fullPath"/>
    </keep-alive> 
  </div>
</template>

<style>
@import url("./assets/css/params.less");
</style>
