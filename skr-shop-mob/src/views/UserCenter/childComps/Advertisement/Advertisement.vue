<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-22 19:56:15
 * @LastEditors: stride
 * @LastEditTime: 2021-04-25 19:57:19
-->
<template>
  <div class="Advertisement">
    <div class="img-one">
      <img src="assets/活动1.jpg" />
    </div>
    <div class="img-two">
      <img src="assets/活动2.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Advertisement",
};
</script>

<style lang="less" scoped>
.Advertisement {
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  div {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 1.23vh;
    cursor: pointer;
    img {
      width: 100%;
    }
  }
}
</style>