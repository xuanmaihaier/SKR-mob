<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-21 14:46:15
 * @LastEditors: stride
 * @LastEditTime: 2021-04-21 15:45:31
-->
<template>
  <div class="Banner">
    <ul>
      <li>
        <van-icon name="gem" size="18px" />
        <p>先鉴别后发货</p>
      </li>
      <li>
        <van-icon name="search" size="18px" />
        <p>逐件查验</p>
      </li>
      <li>
        <van-icon name="good-job" size="18px" />
        <p>正品保障</p>
        <van-icon name="arrow" color="#999" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style lang="less" scoped>
.Banner {
  padding: 14px;
  border-bottom: 10px solid #f5f4f9;
  ul {
    display: flex;
    justify-content: space-between;
    li {
      display: flex;
      font-weight: 400;
      p {
        margin-left: 3px;
        color: #2f3640;
      }
    }
  }
}
</style>