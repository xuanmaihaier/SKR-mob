<template>
  <div class="detail">
    <ul>
      <li>
        <div class="content">
          <img
            src="//img11.static.yhbimg.com/goodsimg/2021/03/11/10/012f39ba0e2b158ee4773df00ca2550d64.jpg?imageMogr2/thumbnail/120x160/background/d2hpdGU=/position/center/quality/60"
            alt=""
            width="50px"
          />
          <div class="text">
            <p class="name">THETHING 可脱卸前袋水洗牛仔夹克</p>
            <p class="row">
              <span class="color"> 颜色:蓝色 </span>
              <span class="size"> 尺码:S </span>
            </p>
            <p class="price-wrap">
              <span class="price"> ¥225.00 </span>
              <span class="count"> ×1 </span>
            </p>
          </div>
        </div>
        <p class="both">共1件商品 合计<span>￥225.00</span></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "OrderDetail",
};
</script>

<style lang="less" scoped>
.detail {
  box-sizing: border-box;
  padding: 1rem;
  background-color: #fff;
  margin-bottom: 1rem;
  ul {
    li {
      .content {
        display: flex;
        border-bottom: 1px solid #e0e0e0;
        margin-bottom: 1rem;
        .text {
          position: relative;
          margin-left: 0.5rem;
          width: 80%;
          .name {
            margin-bottom: .6rem;
            width: 70%;
            font-size: 0.8rem;

          }
          .row {
            font-size: 0.5rem;
            color: #b6b6b6;
          }
          .price-wrap {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 0;
            right: 0;
            span {
              font-size: 0.5rem;
              &:first-child {
                color: #f00;
              }
              &:last-child {
                color: #b5b5b5;
                text-align: right;
              }
            }
          }
        }
      }
      .both{
        text-align: right;
        font-size: .8rem;
        color: #b0b0b0;
        span{
          color: #f00;
        }
      }
    }
  }
}
</style>