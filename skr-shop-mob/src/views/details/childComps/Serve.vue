<!--
 * @Descripttion: 服务
 * @version: 
 * @Author: stride
 * @Date: 2021-04-21 20:19:18
 * @LastEditors: stride
 * @LastEditTime: 2021-04-22 13:39:57
-->
<template>
  <div class="Params" @click="ParamsClick">
    <van-cell value="超时赔付 假一赔三" is-link>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <span class="custom-title">服务</span>
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
      :style="{ height: '70%' }"
      @click-close-icon="clickIcon"
    >
      <!-- 遮罩层 -->
      <div class="mask">
        <ul>
          <li
            v-for="(item, index) in serve"
            :key="index"
          >
            <p><van-icon name="checked" size="20px" />{{ item.p }}</p>
            <span>{{ item.span }}</span>
          </li>
        </ul>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "Serve",
  data() {
    return {
      show: false,
      serve: [
        {
          p: "超时赔付",
          span:
            "若卖家因未能在规定时间内发货导致交易被关闭，需索赔一定金额给买家。平台还会额外补贴给买家价值170元的组合优惠券",
        },
        {
          p: "假一赔三",
          span:
            "在罕见情况下，若买家买到假货，SKR承诺”先行赔付，假一赔三“，经严格查验和鉴别，确定为假货的商品将被平台召回并绿色销毁",
        },
        {
          p: "防伪包装",
          span:
            "每件鉴别通过的商品将配有官方出具的鉴别证书和防伪扣，包装盒以及品牌胶带组成的”防伪四件套“，鉴别证书唯一的数字ID为鉴别查验通过的商品建立身份识别体系，方便用户验证商品信息",
        },
      ],
    };
  },
  computed: {},
  methods: {
    ParamsClick() {
      this.show = true;
    },
    clickIcon() {
      this.show = false;
    },
  },
};
</script>

<style lang="less" scoped>
.Params {
  padding: 14px;
  border-bottom:1px solid #f5f4f9;
    .van-cell{
    padding: 3px;
  }
}
.mask {
  margin: 40px;
  ul {
    li {
      padding: 10px 0;
    }
    p {
      font-size: 16px;
      color: #2f3640;
    }
    span {
      color: #2f3640;
      font-size: 12px;
    }
  }
}
.van-icon {
  padding-right: 4px;
}
</style>