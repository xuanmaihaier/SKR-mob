<!--
 * @Descripttion: 
 * @version: xxx
 * @Author: zjjj
 * @Date: 2021-04-25 20:58:31
 * @LastEditors: zjjj
 * @LastEditTime: 2021-04-25 22:25:16
-->
<template>
  <div class="sort">
    <div class="search">
      <p>
        <van-icon name="search" />
        <input type="text" placeholder="搜索商品" />
      </p>
    </div>
    <div class="sort_main">
      <van-sidebar v-model="activeKey" @change="onChange">
        <van-sidebar-item
          v-for="item in firstShopList"
          :key="item"
          :title="item"
        />
      </van-sidebar>
      <!-- item.parent_name -->
      <div class="shopList">
        <ul>
          <li v-for="item in firstShopSort" :key="item.id">
            <a
              href="javascript:;"
              v-if="firstShopList[activeKey] === item.parent_name"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import getParentNameApi from "../../network/getParentName";
import getSecondApi from "../../network/getSecond";
export default {
  data() {
    return {
      activeKey: 0,
      firstShopList: [],
      firstShopSort: [],
      secondShopList: [],
    };
  },
  created() {
    this.getFirstShopList();
    this.getSecondShopList();
  },
  methods: {
    //   获取一级分类
    async getFirstShopList() {
      const res = await getParentNameApi();
      console.log(res);
      this.firstShopList = res.data;
      this.firstShopSort = res.result;
    },
    // 获取二级分类
    getSecondShopList() {
      getSecondApi().then((res) => {
        // console.log(res);
      });
    },
    // 监听切换事件
    onChange() {
      console.log(this.activeKey);
      console.log(this.firstShopList.indexOf("鞋类"));
    },
  },
};
</script>

<style lang="less" scoped>
.sort {
  width: 100%;
}
.search {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  margin: 0 auto;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #eee;
  box-shadow: 1px 3px 10px 1px #eee;
  z-index: 99;
  p {
    width: 80%;
    height: 70%;
    border-radius: 15px;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
  }
  .van-icon {
    font-size: 20px;
    vertical-align: middle;
  }
  input {
    border: 0;
    height: 100%;
    text-indent: 10px;
  }
  input::placeholder {
    color: #ccc;
    font-size: 12px;
    text-indent: 10px;
  }
}
.sort_main {
  height: calc(100%-100px);
  overflow: hidden;
  display: flex;
  margin-top: 50px;
  .van-sidebar {
    flex: 1;
    height: calc(100vh - 100px);
  }
  .van-sidebar-item--select,
  .van-sidebar-item--select:active {
    height: 45px;
    line-height: 45px;
  }
  .van-sidebar-item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 16px;
  }
}
.shopList {
  flex: 2;
  a {
    display: inline-block;
    height: 45px;
    line-height: 45px;
    text-indent: 20px;
  }
}
</style>