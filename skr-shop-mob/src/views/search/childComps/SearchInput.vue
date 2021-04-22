<template>
  <div class="searchInput">
    <div class="searchContent">
      <van-icon name="search" size="25" />
      <input
        type="text"
        :placeholder="placeholder"
        @focus="clearTimer"
        v-model.trim="searchText"
      />
    </div>
    <span @click="goSearch">搜索</span>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  data() {
    return {
      placeholder: "",
      str: "在这里输入你想搜索的商品的哦🙂",
      i: 0,
      timer: undefined,
      searchText: "",
      searchHistory: [],
    };
  },
  methods: {
    autoWrite() {
      this.timer = setInterval(() => {
        if (this.i <= this.str.length) {
          this.placeholder = this.str.slice(0, this.i) + "_";
          this.i++;
        } else {
          this.placeholder = this.str; //结束打字,移除 _ 光标
          clearInterval(this.timer);
        }
      }, 200);
    },
    clearTimer() {
      // clearInterval(this.timer);
      // this.placeholder = this.str;
    },
    goSearch() {
      this.$emit("toSearch", this.searchText);
      if (this.searchText == "") {
        this.$toast({
          message: "请输入内容",
          position: "bottom",
          closeOnClick: true,
        });
        return false;
      } else {
        if (sessionStorage.getItem("historys")) {
          let arr = sessionStorage.getItem("historys").split(",");
          arr.push(this.searchText);
          arr = arr.filter((item, index) => {
            return arr.indexOf(item) == index;
          });
          sessionStorage.setItem("historys", arr.join(","));
        } else {
          sessionStorage.setItem("historys", this.searchText);
        }
      }
      this.$router.push({
        path: "/search/list",
        query: {
          name: this.searchText,
        },
      });
      this.searchText = "";
    },
  },
  created() {
    this.autoWrite();
  },
};
</script>

<style lang='less' scoped>
.searchInput {
  display: flex;
  padding: 1rem 0 1rem 0.5rem;
  box-sizing: border-box;
  .searchContent {
    position: relative;
    .van-icon-search {
      position: absolute;
      top: 0.5rem;
      left: 0.4rem;
    }
    input {
      width: 16rem;
      height: 2.5rem;
      padding-left: 2rem;
      background-color: #f5f5f9;
      border: none;
      border-radius: 19px;
    }
  }
  span {
    padding-left: 0.5rem;
    line-height: 2.5rem;
    font-weight: bold;
    font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  }
}
</style>