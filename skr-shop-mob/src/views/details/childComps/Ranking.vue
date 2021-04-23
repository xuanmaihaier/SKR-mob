<!--
 * @Descripttion: 榜单
 * @version: 
 * @Author: stride
 * @Date: 2021-04-21 21:20:17
 * @LastEditors: stride
 * @LastEditTime: 2021-04-23 15:33:42
-->
<template>
  <div class="Ranking">
    <van-cell title="榜单" is-link :value="`「潮流新势力第${Ranking_num}名」`" @click="rankingClick"/>
  </div>
</template>

<script>
export default {
  name: "Serve",
  props:{
    Ranking_num:{
      type:Number,
      default:()=>0
    }
  },
  methods: {
    rankingClick(){
      this.$router.push({
        path:"/ranking",
        query:{
          type:this.$route.query.type
        }
      })
    },
    
  },
};
</script>

<style lang="less" scoped>
.Ranking {
  padding: 14px;
  width: calc(100% - 16px - 18px);
  border-bottom: 1px solid #f5f4f9;
  .van-cell {
    padding: 3px;
    background-color: #f5f4f9;
  }
}
/deep/ .van-cell__title {
  span {
    width: 20px;
    height: 15px;
    background-image: linear-gradient(to right bottom, #fff -20%, #bfcdde 90%);
    color: #fff;
    font-size: 12px;
    padding: 2px;
  }
}
</style>