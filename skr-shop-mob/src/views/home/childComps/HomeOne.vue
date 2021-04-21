<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-21 11:14:41
 * @LastEditors: stride
 * @LastEditTime: 2021-04-21 11:40:47
-->
<template>
  <van-tabs v-model="active" :swipeable="true">
    <van-tab
      v-for="(item, index) in $store.state.home.typeOne"
      :title="item"
      :key="index"
    >
      <!-- {{ $store.state.home.typeOne_list[index] }} -->
      <ul class="list">
        <li
          v-for="(items, indexs) in $store.state.home.typeOne_list[index]"
          :key="indexs"
          @click="handleDetail(items.id)"
        >
          <img :src="items.img" alt="" />
          <h3>{{ items.title }}</h3>
          <p class="price">
            <b class="price_b">
                <span>￥{{items.special_price}}</span>
                <span>￥{{ items.price }}</span>
            </b>
            <van-icon name="ellipsis" />
          </p>
        </li>
      </ul>
    </van-tab>
  </van-tabs>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  created() {
    this.$store.dispatch("typeOne");
  },
  methods: {
    handleDetail(id) {
      this.$router.push(`/details/${id}`);
    },
  },
};
</script>

<style lang="less" scoped>
.van-tab__pane {
  background-color: white;
}
.list {
  box-sizing: border-box;
  column-count: 2;
  padding: 10px;
  li {
    width: calc(100vw / 2 - 20px);
    break-inside: avoid;
    margin-top: 30px;
    h3 {
      margin: 8px 0 5px 0;
      overflow: hidden;
      white-space: nowrap; /* 设置文本是否换行 */
      text-overflow: ellipsis; /* 超出文本出现省略号代替 */
      transform: scale(0.9);
      font-size: 12px;
    }
    img {
      width: 100%;
      border: 1px solid #ccc;
    }
    .price {
      padding: 0 5px;
      display: flex;
      justify-content: space-between;
      span {
        font-size: 12px;
      }
      i {
        font-weight: 700;
        font-size: 18px;
        color: #b0b0b0;
       
      }
    }
  }
}
li:nth-of-type(1) {
  margin-top: 0;
  height: calc(100vw / 2 + 100px);
  img {
    height: 80%;
  }
}
.price_b{
    display: flex;
    span:nth-of-type(1){
        color: red;
    }
     span:nth-of-type(2){
         display: block;
         transform: scale(0.9);
        padding: 0 5px;
        color: #b0b0b0;
         text-decoration: line-through;
    }
}

</style>