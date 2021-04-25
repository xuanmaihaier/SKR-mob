<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-22 14:38:58
 * @LastEditors: stride
 * @LastEditTime: 2021-04-23 15:24:07
-->
<template>
  <div class="Recommendation">
    <van-cell title="为你推荐" />
    <ul>
      <li
        v-for="(item, index) in random"
        :key="index"
        @click="itemclick(item.id)"
      >
        <img :src="item.img" @load="imgLoad" />
        <div class="Title">
          <p>{{ item.title }}</p>
          <p>{{ item.price }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Recommendation",
  data() {
    return {
      random: [],
      count: 0,
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
    imgLoad() {
      this.$emit("imgLoad", ++this.count, this.random.length);
    },
    itemclick(id) {
      this.$router.push({
        path: `/details/${id}`,
        query: {
          type: this.$route.query.type,
        },
      });
    },
  },
  mounted() {},
  watch: {
    Recommend: function () {
      this.Random(39);
    },
  },
};
</script>

<style lang="less" scoped>
.Recommendation {
  padding: 14px;
  width: calc(100% - 16px - 18px);
  border-bottom: 10px solid #f5f4f9;
  .van-cell {
    padding: 3px;
  }
  ul {
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