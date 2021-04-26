<template>
  <div class="OrderAdmin">
    <ul class="myOrder">
      <li>
        <p>我的订单</p>
        <p>全部订单<van-icon name="arrow" /></p>
      </li>
    </ul>
    <ul class="state">
      <li>
        <van-icon name="ecard-pay" />
        <span>待付款</span>
      </li>
      <li>
        <van-icon name="send-gift-o" />
        <span>待发货</span>
      </li>
      <li>
        <van-icon name="logistics" />
        <span>待收货</span>
      </li>
    </ul>
    <ul class="history">
      <li>
        <span>0</span>
        <span>商品收藏</span>
      </li>
      <li>
        <span>0</span>
        <span>品牌收藏</span>
      </li>
      <li>
        <span>0</span>
        <span>游览记录</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "OrderAdmin",
};
</script>

<style lang="less" scoped>
.OrderAdmin {
  margin-top: 1.23vh;
  background-color: #fff;
  .myOrder {
    display: flex;
    align-items: center;
    padding: 0 4vw;
    border-bottom: 1px solid rgb(206, 206, 206);
    li {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.8vh 0;
      font-size: 4vw;
      p {
        display: flex;
        align-items: center;
        &:last-of-type {
          cursor: pointer;
        }
        i {
          color: #ccc;
        }
      }
    }
  }
  .state,.history {
    border-bottom: 1px solid rgb(206, 206, 206);
    &:last-of-type{
        border-bottom: none;
    }
    display: flex;
    align-items: center;
    justify-content: space-around;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1.8vh 0;
      cursor: pointer;
      i{
          font-size: 6.6vw;
      }
      span:first-of-type{
          font-size: 4vw;
      }
      span:last-of-type{
          margin-top: 1.23vh;
          font-size: 3.2vw;
      }
    }
  }
}
</style>