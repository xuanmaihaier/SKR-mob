<!--
 * @Descripttion: 最近购买
 * @version: 
 * @Author: stride
 * @Date: 2021-04-22 10:34:50
 * @LastEditors: stride
 * @LastEditTime: 2021-04-25 11:04:51
-->
<template>
  <div class="Recent">
    <van-cell v-if="$store.state.details.Commodity[0]" :title="`最近购买(${$store.state.details.Commodity[0].sale})`" is-link value="查看更多" @click="cellClick" />
    <ul>
      <li v-for="item in 4">
        <p>崔*道</p>
        <p>42</p>
        <p>¥9999</p>
        <p>5天前</p>
      </li>
    </ul>
    <van-popup closeable @click-close-icon="clickIcon" :safe-area-inset-bottom="true" v-model="show" round position="bottom" :style="{ height: '80%' }">
      <ul class="ul_popup">
        <li class="li_popup" v-for="(item, index) in 20" :key="index">
          <div class="Title">
            <p>崔*道</p>
            <p>42</p>
            <p>¥9999</p>
            <p>5天前</p>
            <p>留言：这鞋子真不错呀</p>
          </div>
        </li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "Recent",
  data() {
    return {
      show: false,
    };
  },
  computed: {},
  methods: {
    cellClick() {
      this.show = true;
    },
    clickIcon() {
      this.show = false;
    },
  },
  created() { },
  watch: {},
};
</script>

<style lang="less" scoped>
.Recent {
  padding: 14px;
  width: calc(100% - 16px - 18px);
  border-bottom: 10px solid #f5f4f9;
  .van-cell {
    padding: 3px;
  }
  ul {
    padding: 0 9px;
    li {
      padding: 4px 0;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #2f3640;
      p:nth-child(4) {
        color: #ccc;
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

.ul_popup {
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 30px;
  background-color: #f5f4f9;
  overflow: scroll;
  .li_popup {
    background-color: white;
    margin: 1px;
    padding: 10px;
    .Title {
      display: flex;
      width: 100%;
      justify-content: space-around;
    }
    img {
      width: 100%;
    }
  }
}
</style>