<template>
  <div class="money">
    <ul>
      <li>  
        <span>商品金额</span>
        <span>￥225.00</span>
      </li>
      <li>  
        <span>运费</span>
        <span>200⚡</span>
      </li>
      <li>  
        <span>优惠券</span>
        <span>￥0</span>
      </li>
      <li>  
        <span>实付金额</span>
        <span class="fact">￥225.00</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'OrderMoney'
}
</script>

<style lang="less" scoped>
  .money{
    height: 11rem;
    box-sizing: border-box;
    padding: 1rem .6rem;
    background-color: #fff;
    ul{
      li{
        display: flex;
        justify-content: space-between;
        margin: .3rem 0;
        .fact{
          color: #f00;
        }
      }
    }
  }
</style>