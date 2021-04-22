<!--
 * @Descripttion: 用户评价
 * @version: 
 * @Author: stride
 * @Date: 2021-04-22 11:40:18
 * @LastEditors: stride
 * @LastEditTime: 2021-04-22 12:11:03
-->
<template>
  <div class="Evaluate">
    <van-cell
      v-if="$store.state.details.Commodity[0]"
      :title="`商品评价(99+)`"
      is-link
      value="查看更多"
    />
    <ul>
      <li v-for="item in 3">
       <p>偏小</p>
       <p>9</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Evaluate",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  watch: {},
};
</script>

<style lang="less" scoped>
.Evaluate {
  padding: 14px;
  width: calc(100% - 16px - 18px);
   border-bottom: 10px solid #f5f4f9;
  .van-cell {
    padding: 3px;
  }
  ul {
    padding: 0 9px;
    display: flex;
    justify-content: space-between;
    li {
      width: 80px;
      background-color:#f5f4f9 ;
      padding: 4px 0;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #2f3640;
     p{
         padding: 3px 4px;
    
      }
    }
  }
}
/deep/ .van-cell__title {
  span {
    font-size: 15px;
    font-weight: 700;
  }
}

/deep/ .van-cell__value {
  span {
    font-size: 12px;
  }
}
</style>