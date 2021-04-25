<!--
 * @Descripttion: 运费
 * @version: 
 * @Author: stride
 * @Date: 2021-04-21 22:25:58
 * @LastEditors: stride
 * @LastEditTime: 2021-04-22 11:37:04
-->
<template>
  <div class="Freight">
    <van-cell title="运费" value="回归好礼-包邮" />
  </div>
</template>

<script>
export default {
  name: "Freight",
};
</script>

<style lang="less" scoped>
.Freight {
  padding: 14px;
  width: calc(100% - 16px - 18px);
  border-bottom: 1px solid #f5f4f9;
  .van-cell {
    padding: 3px;
  }
}
</style>