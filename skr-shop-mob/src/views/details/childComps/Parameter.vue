<!--
 * @Descripttion: 参数
 * @version: 
 * @Author: stride
 * @Date: 2021-04-22 12:42:28
 * @LastEditors: stride
 * @LastEditTime: 2021-04-23 15:22:45
-->
<template>
  <div class="Parameter">
    <van-cell title="参数" is-link value="商品信息有疑问" @click="showPopup">
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
    <van-popup
      closeable
      v-model="show"
      :style="{ height: '46%', width: '80%' }"
      @click-close-icon="clickIcon"
      :safe-area-inset-bottom="true"
    >
      <div class="from">
        <van-form @submit="onSubmit">
          <van-field
            v-model="name"
            name="商品名称"
            label="商品名称"
            placeholder="请填写有疑问的商品名"
            :rules="[{ required: true, message: '请填写商品名称' }]"
          />
          <van-field
            v-model="remarks"
            name="备注"
            label="请填写留言备注"
            placeholder="请填写有疑问的商品名"
            :rules="[{ required: true, message: '请填写备注' }]"
          />
          <div style="margin: 16px">
            <van-button
              color="#2f3640"
              round
              block
              type="info"
              native-type="submit"
              >提交给客服</van-button
            >
          </div>
        </van-form>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "Parameter",
  data() {
    return {
      activeNames: [""],
      show: false,
      name: "",
      remarks:""
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
  methods: {
    showPopup() {
      this.show = true;
    },
    clickIcon() {
      this.show = false;
    },
    onSubmit() {},
  },
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
/deep/ .van-cell__title span {
  font-size: 13px;
}
.from {
  position: absolute;
    top: 120px;
    left: 10px;
    right: 10px;
    bottom: 30px;
  overflow: hidden;
  /deep/ .van-cell{
    border-bottom: 1px solid #ccc;
  }
}
</style>