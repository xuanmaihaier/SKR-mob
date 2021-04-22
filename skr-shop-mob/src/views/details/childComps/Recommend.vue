<!--
 * @Descripttion: 相关推荐
 * @version: 
 * @Author: stride
 * @Date: 2021-04-21 22:36:50
 * @LastEditors: stride
 * @LastEditTime: 2021-04-22 13:38:59
-->
<template>
  <div class="Ranking">
    <van-cell title="相关推荐" is-link value="查看更多" />
    <div class="swiper">
      <van-swipe :loop="false" :width="114" :show-indicators="false">
        <van-swipe-item v-for="(item, index) in random" :key="index">
          <img v-lazy="item.img" />
          <p>{{ item.title }}</p>
          <span>{{ item.price }}</span>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  data() {
    return {
      random: [],
    };
  },
  computed: {
    Recommend() {
      return this.$store.state.details.Recommend;
    },
  },
  methods: {
    Random(n) {
      let arr = [];
      for (let x = 0; x <= n; x++) {
        let data = JSON.parse(JSON.stringify(this.Recommend));
        let num = Math.floor(Math.random() * data.length);
        arr.push(data[num]);
        data.splice(num, 1);
        this.random = arr;
      }
    },
  },
  created() {},
  watch: {
    Recommend: function () {
      this.Random(7);
    },
  },
};
</script>

<style lang="less" scoped>
.Ranking {
  padding: 14px;
  width: calc(100% - 16px - 18px);
    border-bottom:1px solid #f5f4f9;
  .van-cell {
    padding: 3px;
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
/deep/ .van-swipe-item {
  img {
    width: 100%;
    height: 100%;
  }
  p {
    margin-top: 3px;
    font-size: 12px;
    text-align: center;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    zoom: 1;
  }
  span {
    display: block;
    text-align: center;
    
    &::before {
      content: "¥";
      font-size: 12px;
    }
  }
}
</style>

