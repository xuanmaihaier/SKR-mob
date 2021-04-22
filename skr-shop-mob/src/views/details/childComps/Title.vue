<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-21 14:15:32
 * @LastEditors: stride
 * @LastEditTime: 2021-04-21 15:46:28
-->
<template>
  <div class="Title">
    <p>{{ title.name }}</p>
    <p>{{ title.price }}</p>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="less" scoped>
.Title {
  p {
    padding: 14px;
    font-size: 24px;
    font-weight: 200;
    text-align: center;
    letter-spacing: 1.5px;
    line-height: 1.2;
    color: #2f3640;
  }
  p:nth-child(2) {
    padding-top: 0;
    font-size: 30px;
    font-weight: 600;
      letter-spacing: -2px;
    &::before {
      content: "¥";
      font-size: 20px;
    }
  }
}
</style>