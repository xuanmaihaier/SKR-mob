<template>
  <div class="scrachMain">
    <SearchTop />
    <van-dropdown-menu active-color="#ea6f8c" v-show="!noFinde">
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item
        v-model="value2"
        :options="option2"
        @change="changeVal"
      />
    </van-dropdown-menu>
    <div class="noFind" v-show="noFinde">
      <p>抱歉，没有找到相关商品，为你推荐以下热门商品</p>
    </div>
    <ul v-show="noFinde">
      <li v-for="(item, index) in hotList"  @click="toDetail(item.id)">
        <img alt="" v-lazy="item.img" />
        <p>{{ item.title }}</p>
        <div class="priceText">
          <span
            ><em>￥</em><i>{{ item.price }}</i></span
          >
          <label for="">{{ item.sale }}人付款</label>
        </div>
      </li>
    </ul>
    <ul v-show="!noFinde">
      <li v-for="(item, index) in findList" @click="toDetail(item.id)">
        <img alt="" v-lazy="item.img" />
        <p>{{ item.title }}</p>
        <div class="priceText">
          <span
            ><em>￥</em><i>{{ item.price }}</i></span
          >
          <label for="">{{ item.sale }}人付款</label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import SearchTop from "./SearchTop.vue";
import { getTypeOneGoods, getTypeTwoGoods } from "@/network/search";
export default {
  components: { SearchTop },
  name: "SearchTwo",
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [{ text: "全部商品", value: 0 }],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "价格排序", value: "b" },
        { text: "销量排序", value: "c" },
      ],
      searchList: [],
      hotList: [],
      findList: [],
      defaultList: [],
      noFinde: false,
    };
  },
  created() {
    this.getHotGoods();
    this.getGoods();
  },
  methods: {
    changeVal(val) {
      console.log(val);
      if (val == "a") {
        this.findList = this.defaultList;
      } else if (val == "b") {
        this.findList.sort((a, b) => {
          return b.price - a.price;
        });
      } else if (val == "c") {
        this.findList.sort((a, b) => {
          return b.sale - a.sale;
        });
      }
    },
    getGoods() {
      // 搜索商品
      getTypeOneGoods({ parent_name: this.$route.query.name }).then((res) => {
        if (res.res.length == 0) {
          this.noFinde = true;
        } else {
          this.defaultList = JSON.parse(JSON.stringify(res.res));
          this.findList = res.res;
          this.noFinde = false;
        }
        console.log(res);
      });
    },
    getHotGoods() {
      // 推荐商品
      getTypeOneGoods({ parent_name: "服饰" }).then((res) => {
        this.hotList = JSON.parse(JSON.stringify(res.res));
      });
    },
    toDetail(id) {
      if (this.noFinde) {
        this.$router.push({
          path: "/details/" + id,
          query: {
            item: '服饰',
          },
        });
      } else {
        this.$router.push({
          path: "/details/" + id,
          query: {
            item: this.$route.query.name,
          },
        });
      }
    },
  },
  watch: {
    $route(newval, oldval) {
      if (newval.path == "/search/list") {
        this.getGoods();
      }
    },
  },
};
</script>

<style lang="less" scoped>
.scrachMain {
  font-family: helvetica, Arial, "\9ED1\4F53", sans-serif;
  box-sizing: border-box;
  ul {
    display: flex;
    padding: 1rem;
    flex-wrap: wrap;
    li {
      box-sizing: border-box;
      width: calc(100% / 2);
      font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
      padding: 0.5rem;
      img {
        width: 100%;
      }
      p {
        margin-top: 0.2rem;
        font-weight: 700;
        color: #30333f;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      div.priceText {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.5rem;
        span {
          em,
          i {
            font-style: normal;
            font-weight: 700;
          }
          em {
            font-size: 0.7rem;
          }
        }
        label {
          font-size: 0.9rem;
          color: #7f7f8e;
        }
      }
    }
  }
  div.noFind {
    text-align: center;
    font-size: 0.8rem;
    color: #828291;
    margin-top: 1rem;
  }
}
</style>