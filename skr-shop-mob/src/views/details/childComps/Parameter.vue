<!--
 * @Descripttion: 参数
 * @version: 
 * @Author: stride
 * @Date: 2021-04-22 12:42:28
 * @LastEditors: stride
 * @LastEditTime: 2021-04-22 13:39:34
-->
<template>
  <div class="Parameter">
    <van-cell title="参数" is-link value="商品信息有疑问">
      <template #right-icon>
        <van-icon name="question" />
      </template>
    </van-cell>
    <ul v-if="Commodity">
      <li>
        <p>品牌</p>
        <p>安踏</p>
      </li>
      <li>
        <p>名称</p>
        <p>{{ Commodity.title }}</p>
      </li>
      <li>
        <p>发售价格</p>
        <p>¥{{ Commodity.price }}(仅供参考)</p>
      </li>
      <van-collapse v-model="activeNames">
        <van-collapse-item title="点击展开" name="1">
          <li>
            <p>发售日期</p>
            <p>2020.2.31</p>
          </li>
          <li>
            <p>风格</p>
            <p>运动</p>
          </li>
          <li>
            <p>配色</p>
            <p>{{ param }}</p>
          </li>
          <li>
            <p>适用季节</p>
            <p>春 夏 秋 冬</p>
          </li>
        </van-collapse-item>
      </van-collapse>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Parameter",
  data() {
    return {
      activeNames: [""],
    };
  },
  props: {
    Commodity: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    param() {
      return JSON.parse(this.Commodity.param).join(" ");
    },
  },
  methods: {},
  created() {},
  watch: {},
  mounted() {
    // console.log(this.Commodity);
  },
};
</script>

<style lang="less" scoped>
.Parameter {
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
    font-size: 20px;
    font-weight: 700;
  }
}

/deep/ .van-cell__value {
  span {
    font-size: 12px;
  }
}
/deep/ .van-icon {
  padding-left: 3px;
  line-height: 24px;
}
/deep/ .van-collapse-item {
  .van-cell--clickable {
    padding: 0;
  }
  .van-collapse-item__content {
    padding: 0;
  }
  .van-cell__title {
    span {
      color: #999;
      padding: 0;
      font-size: 12px;
    }
  }
}
</style>