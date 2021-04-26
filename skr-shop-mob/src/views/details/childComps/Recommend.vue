<!--
 * @Descripttion: 相关推荐
 * @version: 
 * @Author: stride
 * @Date: 2021-04-21 22:36:50
 * @LastEditors: stride
 * @LastEditTime: 2021-04-23 15:36:25
-->
<template>
  <div class="Ranking">
    <van-cell title="相关推荐" is-link value="查看更多" @click="cellClick" />
    <div class="swiper">
      <van-swipe :loop="false" :width="114" :show-indicators="false">
        <van-swipe-item v-for="(item, index) in random" :key="index" @click="itemclick(item.id)">
          <img v-lazy="item.img" />
          <p>{{ item.title }}</p>
          <span>{{ item.price }}</span>
        </van-swipe-item>
      </van-swipe>
    </div>
    <van-popup closeable @click-close-icon="clickIcon" :safe-area-inset-bottom="true" v-model="show" round position="bottom" :style="{ height: '80%' }">
      <ul>
        <li v-for="(item, index) in $store.state.details.Recommend" :key="index" @click="itemclick(item.id)">
          <img :src="item.img" />
          <div class="Title">
            <p>{{ item.title }}</p>
            <p>{{ item.price }}</p>
          </div>
        </li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  data() {
    return {
      random: [],
      show: false,
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
    cellClick() {
      this.show = true;
    },
    clickIcon() {
      this.show = false;
    },
    itemclick(id) {
      this.$router.push({
        path: `/details/${id}`,
        query: {
          type: this.$route.query.type,
        },
      });
    }
  },
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
  border-bottom: 1px solid #f5f4f9;
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
ul {
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 30px;
  background-color: #f5f4f9;
  overflow: scroll;

  display: flex;
  flex-wrap: wrap;
  background-color: #f5f4f9;
  justify-content: space-between;
  li {
    background-color: white;
    width: calc((100% / 2) - 2px);
    margin: 1px;
    img {
      width: 100%;
    }
  }
}
.Title {
  p {
    padding: 3px;
    font-size: 12px;
    font-weight: 200;
    text-align: center;
    letter-spacing: 1.5px;
    color: #2f3640;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    zoom: 1;
  }
  p:nth-child(2) {
    padding-top: 0;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -2px;
    &::before {
      content: "¥";
      font-size: 20px;
    }
  }
}
</style>

