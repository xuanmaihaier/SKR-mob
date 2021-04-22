<template>
  <div class="SimilarShop">
    <h4><span>|</span> 为你优选</h4>
    <ul>
      <li v-for="i in 30" :key="i">
        <div class="img-box">
          <img
            src="http://image.wconcept.co.kr/productimg/image/img1/87/301241387.jpg?RS=300"
            alt=""
          />
        </div>
        <div class="msg-box">
          <div class="title">
            <span>mardi mercredi</span>
          </div>
          <div class="price">
            <p>
              <span class="original">￥2480</span>
              <span class="discount">￥3000</span>
            </p>
            <p>
              <van-icon name="ellipsis" />
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SimilarShop",
};
</script>

<style lang="less" scoped>
.SimilarShop {
  padding: 0 4vw;
  h4 {
    font-weight: inherit;
    font-size: 4.2vw;
    padding: 1.84vh 0;
    position: relative;
    span {
      font-weight: bolder;
    }
    &::after {
      content: "";
      box-sizing: border-box;
      display: inline-block;
      width: 100vw;
      height: 0.2px;
      background-color: rgb(206, 206, 206);
      position: absolute;
      left: -4vw;
      bottom: 0vw;
    }
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 47%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 3.7vh;
      img {
        width: 100%;
      }
      .msg-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 3.73vw;
        padding-left: 2.13vw;
        .title{
            padding-bottom: 0.3vh;
        }
        .price {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .original{
              font-size: 3.46vw;
              color: #444;
          }
          .discount{
              font-size: 3.2vw;
              color: #ccc;
              text-decoration: line-through;
              padding-left: 1.33vw;
          }
          i{
              font-size: 4.8vw;
              font-weight: bolder;
              color: #ccc;
          }
        }
      }
    }
  }
}
</style>