<template>
  <div class="list">
    <p class="title">为你优选新品</p>
    <ul class="rem-list">
      <li v-for="(item, index) in imgs" class="cet-list" @click="detail">
        <img :src="item" alt="" />
        <p>THETHING 撞色拼接棒球夹克</p>
        <div class="list-bom">
          <p class="price"><span>¥225.00</span><span>¥898.00</span></p>
          <span class="similar" @click='similar'>...</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        "//img11.static.yhbimg.com/goodsimg/2019/07/08/10/01a5856f6144632fd290e99530c80af1be.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp",
        "//img11.static.yhbimg.com/goodsimg/2019/07/08/10/01a5856f6144632fd290e99530c80af1be.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp",
        "//img11.static.yhbimg.com/goodsimg/2019/07/08/10/01a5856f6144632fd290e99530c80af1be.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp",
        "//img11.static.yhbimg.com/goodsimg/2019/07/08/10/01a5856f6144632fd290e99530c80af1be.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp",
        "//img11.static.yhbimg.com/goodsimg/2019/07/08/10/01a5856f6144632fd290e99530c80af1be.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp",
        "//img11.static.yhbimg.com/goodsimg/2019/07/08/10/01a5856f6144632fd290e99530c80af1be.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp",
      ],
    };
  },
  methods:{
      similar(){
          console.log('0.0');
      },
      detail(){
          console.log('页面详情');
      }
  }
};
</script>

<style lang='less' scoped>
.list {
  width: 100%;
  height: 30vh;
  padding: 18px 0;
  background-color: #fff;
  .title {
    text-align: center;
    padding: 20px 0;
    font-size: 1.3rem;
    color: #444;
  }
  .rem-list {
    display: flex;
    justify-content: center;
    flex-flow: wrap;
    .cet-list {
      width: 45%;
      margin: 0 5px 10px 10px;
      img {
        width: 100%;
      }
      .list-bom {
        display: flex;
        justify-content: space-between;
        padding-top: 5px;
        .price {
          span:nth-child(1) {
            font-size: 14px;
            color: @color-high-text;
          }
          span:nth-child(2) {
            font-size: 12px;
            color: #ccc;
            text-decoration: line-through;
            padding-left: 5px;
          }
        }
        .similar{
            font-size: 20px;
            color: #b0b0b0;
            margin: 0 5px;
            line-height: 10px;
        }
      }
    }
  }
}
</style>