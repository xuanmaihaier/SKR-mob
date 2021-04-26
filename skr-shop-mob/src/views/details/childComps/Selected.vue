<!--
 * @Descripttion: 穿搭精选
 * @version: 
 * @Author: stride
 * @Date: 2021-04-22 11:57:49
 * @LastEditors: stride
 * @LastEditTime: 2021-04-25 11:04:31
-->
<template>
  <div class="Selected">
    <van-cell :title="`穿搭精选(${imgList.length})`" />
    <ul>
      <li v-for="(item,index) in imgList" :key="index">
        <img :src="item" @click="Previewsec_img(imgList,index)">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Selected",
  data() {
    return {};
  },
  props: {
    imgList: {
      type: Array,
      default: () => []
    }
  },
  computed: {},
  methods: {
    Previewsec_img(imgList, index) {
      this.$emit('Previewsec_img', imgList, index)
    }
  },
  mounted() {
  },
  watch: {},
};
</script>

<style lang="less" scoped>
.Selected {
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
      width: calc((100% / 3) - 6px);
      margin: 3px;
      img {
        width: 100%;
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
</style>

