<template>
  <div class="pay">
    <ul>
      <li>
        <span>支付方式</span>
        <span>支付宝(仅支持)</span>
      </li>
       <li>
        <span>配送方式</span>
        <span>雷电快送：200⚡值(江浙沪包邮)</span>
      </li>
       <li>
        <span>送货时间</span>
        <span>365days(地球不爆炸我们不放假)</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'OrderPay'
}
</script>

<style lang="less" scoped>
.pay{
  box-sizing: border-box;
  padding-left: 1rem;
  margin-bottom: 1rem;
  background-color: #fff;
  ul{
    li{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 1rem;
      height: 2.5rem;
      border-bottom: 1px solid #e0e0e0;
      &:last-child{
        border: none;
      }
      span{
        color: #444444;
        &:last-child{
          font-size: .6rem;
        }
      }
    }
  }
}
</style>