<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-21 16:39:29
 * @LastEditors: stride
 * @LastEditTime: 2021-04-21 22:22:59
-->
<template>
  <div class="Params" @click="ParamsClick">
    <van-cell :value="`最低月付${Installment}元`" is-link>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <span class="custom-title">分期</span>
      </template>
    </van-cell>
    <van-popup
      round
      get-container="body"
      close-on-click-overlay
      v-model="show"
      closeable
      :safe-area-inset-bottom="true"
      position="bottom"
      :style="{ height: '40%' }"
      @click-close-icon="clickIcon"
    >
      <!-- 遮罩层 -->
      <div class="mask">
        <ul>
          <li
            v-for="(item, index) in month"
            :key="index"
            @click="liClick(index)"
            :class="{ active: index == page }"
          >
            <p>{{ item }}期分期</p>
            <span>每期仅需¥{{ (param.price / item).toFixed(2) }}</span>
          </li>
        </ul>
        <van-button type="default">确认分期</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "Instalments",
  data() {
    return {
      month: [3, 6, 12],
      show: false,
      page: 0,
    };
  },
  computed: {
    Installment() {
      console.log(this.params);
      return (this.param.price / this.month[2]).toFixed(2);
    },
  },
  methods: {
    ParamsClick() {
      this.show = true;
    },
    clickIcon() {
      this.show = false;
    },
    liClick(index) {
      this.page = index;
    },
  },
  props: {
    param: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="less" scoped>
.Params {
  padding: 14px;
  .van-cell{
    padding: 3px;
  }
}
.mask {
  margin: 20px;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    height: 180px;
    li {
      padding: 20px 10px;
      margin: 10px;
      border: 1px solid #ccc;
    }
    p {
      font-size: 16px;
    }
    span {
      font-size: 12px;
    }
  }
}
/deep/ .van-button {
  left: 50%;
  width: 90%;
  transform: translateX(-50%);
  color: #fff;
  border-color: #2f3640;
  background-color: #2f3640;
}
.active {
  border: 1px solid #2f3640 !important;
}

</style>