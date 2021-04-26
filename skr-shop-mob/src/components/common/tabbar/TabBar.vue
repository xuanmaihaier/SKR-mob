<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-23 12:38:32
 * @LastEditors: stride
 * @LastEditTime: 2021-04-25 11:06:52
-->

<template>
  <ul id="tab-bar">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
#tab-bar {
  height: 49px;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 14px;
  background-color: #fff;
  box-shadow: 0px -2px 3px rgba(0, 0, 0, 0.2);
  z-index: 10;
}
</style>