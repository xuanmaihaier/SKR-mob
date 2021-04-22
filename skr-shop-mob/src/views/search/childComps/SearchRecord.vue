<template>
  <div class="searchRecord">
    <div class="searchHistory" v-show="searchHistory.length != 0">
      <div class="historyTop">
        <h2>历史记录</h2>
        <van-icon name="delete-o" @click="clearHistory" />
      </div>
      <ul class="clearfix">
        <li
          v-for="(item, index) in searchHistory"
          :key="index"
          @click="typeSearch(item)"
        >
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>

    <div class="searchHistory">
      <div class="historyTop">
        <h2>搜索发现</h2>
      </div>
      <ul class="clearfix">
        <li
          v-for="(item, index) in find"
          :key="index"
          @click="typeSearch(item)"
        >
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getTypeOne } from "@/network/search";
export default {
  name: "SearchRecord",
  data() {
    return {
      historyShow: true,
      searchHistory: [],
      sessionStorageVal: sessionStorage.getItem("historys"),
      find: [],
    };
  },
  props: ["historyVal"],
  methods: {
    clearHistory() {
      this.$dialog
        .confirm({
          message: "是否删除历史记录？",
        })
        .then(() => {
          sessionStorage.removeItem("historys");
          this.searchHistory = [];
        })
        .catch(() => {
          // on cancel
        });
    },
    typeSearch(name) {
      this.$router.push({
        path: "/search/list",
        query: {
          name,
        },
      });
    },
    getFind() {
      getTypeOne({}).then((res) => {
        // console.log(res);
        this.find = res.data.filter((item) => item != "");
      });
    },
  },
  created() {
    if (sessionStorage.getItem("historys")) {
      this.searchHistory = sessionStorage.getItem("historys").split(",");
    }
    this.getFind()
  },
  watch: {
    historyVal: {
      deep: true,
      handler() {
        this.searchHistory = sessionStorage.getItem("historys").split(",");
      },
    },
  },
};
</script>

<style lang="less" scoped>
.searchRecord {
  padding: 0.5rem;
  box-sizing: border-box;
  .searchHistory {
    max-height: 15rem;
    overflow: hidden;
    .historyTop {
      position: relative;
      h2 {
        font-size: 1rem;
      }
      .van-icon-delete-o {
        position: absolute;
        top: 0;
        right: 0.5rem;
      }
    }
    ul.clearfix {
      display: flex;
      flex-wrap: wrap;
      padding-top: 0.5rem;
      li {
        padding: 0 0.4rem;
        margin-right: 0.3rem;
        margin-bottom: 0.3rem;
        height: 2rem;
        line-height: 2rem;
        background-color: #f5f5f9;
        color: #5c616f;
        border-radius: 2px;
      }
    }
  }
}
</style>