<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-22 13:41:17
 * @LastEditors: stride
 * @LastEditTime: 2021-04-22 13:45:18
-->
<template>
  <div class="Particulars">
    <van-cell
      title="细节展示"
    />
    <ul>
      <li v-for="(item,index) in imgList" :key="index">
       <img :src="item">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Particulars",
  data() {
    return {};
  },
  props:{
    imgList:{
      type:Array,
      default:()=>[]
    }
  },
  computed: {},
  methods: {

  },
  mounted() {

  },
  watch: {},
};
</script>

<style lang="less" scoped>
.Particulars {
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
     img{
       width: 100%;
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