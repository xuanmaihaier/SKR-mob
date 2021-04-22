<!--
 * @Descripttion: Information
 * @version: 
 * @Author: stride
 * @Date: 2021-04-22 14:10:34
 * @LastEditors: stride
 * @LastEditTime: 2021-04-22 14:37:33
-->
<template>
  <div class="Information">
    <van-cell title="购物须知" />
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <p>{{item.p}}</p>
        <span>{{item.span}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Information",
  data() {
    return {
      list: [
        {
          p: "关于商品：",
          span:
            "由于生产批次，产地的不同以及商品更新升级和品跑方图片调整，实物的材质，外观细节、配件和包装等可能与商品图片存在细微差异，具体请以收到的实物为准。如商品上绑有调包扣或贴有防伪纸，请您收到后先确认上无误再进行拆除",
        },
        {
          p: "关于色差：",
          span:
            "因手机、电脑等显示设备的色彩偏差和个人对颜色理解不同，导致实物可能会与照片存在一定色差，请您以收到的实物为准",
        },
        {
          p: "关于气味：",
          span:
            "新商品可能会存在一些气味，这些气味来自材料，鞋底，胶水等，您可以将商品放置在通风处一段时间、减少气味后再穿着",
        },
        {
          p: "关于尺码：",
          span:
            "商品详情页的尺码表仅供参考，由于品牌尺码标准，产品款型及测量方法不同，商品实际尺寸可能会存在些误差，均属于正常情况",
        },
        {
          p: "保养说明：",
          span:
            "请定期清洁，针对不同材质与工艺进行清洁和保养，可以使用干净柔软白色湿棉或软毛刷擦拭，最好使用专业清洁剂，切勿使用刷子猛刷；避免曝晒和火烤，避免阳光曝晒引起老化、变形、褪色及断裂",
        },
        {
          p: "自然氧化：",
          span:
            "部分球鞋由于生产年代久远以及鞋面和鞋底等处的材质特殊与空气长期接触后会发生自然氧化是属正常现象无法避免",
        },
      ],
    };
  },
  props: {},
  computed: {},
  methods: {},
  mounted() {},
  watch: {},
};
</script>

<style lang="less" scoped>
.Information {
  padding: 14px;
  width: calc(100% - 16px - 18px);
  border-bottom: 10px solid #f5f4f9;
  .van-cell {
    padding: 3px;
  }
  ul {
    padding: 0 9px;
    display: flex;
    flex-wrap: wrap;
    li {
      margin-bottom: 3px;
      p{
        font-size: 14px;
        font-weight: 700;
      }
      span{
        font-size: 12px;
        color: #2f3640;
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
</style>