<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-20 10:41:44
 * @LastEditors: stride
 * @LastEditTime: 2021-04-21 17:25:22
-->
<template>
  <div id="app">
    <keep-alive exclude="Details">
    <router-view/>
    </keep-alive>
  </div>
</template>

<style>
@import url("./assets/css/params.less");
</style>
