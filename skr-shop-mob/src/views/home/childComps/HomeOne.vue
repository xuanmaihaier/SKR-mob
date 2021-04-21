<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-21 11:14:41
 * @LastEditors: stride
 * @LastEditTime: 2021-04-21 11:40:47
-->
<template>
  <van-tabs v-model="active" :swipeable="true">
    <van-tab
      v-for="(item, index) in $store.state.home.typeOne"
      :title="item"
      :key="index"
    >
      <!-- {{ $store.state.home.typeOne_list[index] }} -->
      <ul class="list">
        <li
          v-for="(items, indexs) in $store.state.home.typeOne_list[index]"
          :key="indexs"
          @click="handleDetail(items.id)"
        >
          <img :src="items.img" alt="" />
         <h3>{{items.title}}</h3>
         <p><span>￥{{items.price}}</span></p>
        </li>
      </ul>
    </van-tab>
  </van-tabs>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  created() {
    this.$store.dispatch("typeOne");
    console.log( this.$store);
  },
  methods: {
    handleDetail(id){
       this.$router.push(`/details/${id}`)
    }
  },
};
</script>

<style lang="less" scoped>
.van-tab__pane {
  background-color: aqua;
  
}
.list {
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   flex-flow: wrap;
//  flex-flow:column wrap;
//   justify-content: space-evenly;
box-sizing: border-box;
column-count: 2;
padding: 10px;
  li {
//   width: calc(100% / 2 - 20px);
// width: ;
  height: 200px;
  margin: 10px;
    break-inside: avoid;
  img {
    width: 100%;
    // height: 100%;
   
  }
  
}

}
li:nth-of-type(1){
    margin-top: 0;
    height: 250px;
    img{
        height: 200px;
    }
//    height: 200px;
}
// li:nth-last-of-type()


</style>