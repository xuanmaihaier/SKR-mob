<!--
 * @Descripttion: 用户评价
 * @version: 
 * @Author: stride
 * @Date: 2021-04-22 11:40:18
 * @LastEditors: stride
 * @LastEditTime: 2021-04-23 14:44:26
-->
<template>
  <div class="Evaluate">
    <van-cell
      v-if="$store.state.details.Commodity[0]"
      :title="`商品评价(99+)`"
      is-link
      value="查看更多"
      @click="cellClick"
    />
    <ul class="ul_Evaluate">
      <li v-for="item in 3">
        <p>偏小</p>
        <p>9</p>
      </li>
    </ul>
    <van-popup
      closeable
      @click-close-icon="clickIcon"
      :safe-area-inset-bottom="true"
      v-model="show"
      round
      position="bottom"
      :style="{ height: '80%' }"
    >
      <ul class="ul_popup">
        <li class="li_popup" v-for="(item, index) in 20" :key="index">
          <div class="Title">
            <p>崔*道</p>
            <p>评价：牛啊牛啊</p>
          </div>
        </li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "Evaluate",
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
  created() {},
  watch: {},
};
</script>

<style lang="less" scoped>
.Evaluate {
  padding: 14px;
  width: calc(100% - 16px - 18px);
  border-bottom: 10px solid #f5f4f9;
  .van-cell {
    padding: 3px;
  }
  .ul_Evaluate {
    padding: 0 9px;
    display: flex;
    justify-content: space-between;
    li {
      width: 80px;
      background-color: #f5f4f9;
      padding: 4px 0;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #2f3640;
      p {
        padding: 3px 4px;
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
.van-popup {
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
        color: #2f3640;
        font-size: 14px;
      }
      img {
        width: 100%;
      }
    }
  }
}
</style>