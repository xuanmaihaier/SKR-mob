<template>
  <div class="secon_con">
      <!-- {{$store.state.home.typeTwoList}} -->
<van-card v-for="(item,index) in $store.state.home.typeTwoList" :key="index"
  :num="item.is_special"
  
  :price="item.special_price+`.00`"
  desc="www.stride.fun"
  :title="item.title"
  :thumb="item.img"
  :origin-price="item.price+`.00`"
  @click="handleDetail(item.id)"
/>

  </div>
</template>

<script>
export default {
created() {
//    console.log(this.$store.state.home.typeTwoList,'222');
},
methods: {
     handleDetail(id) {
      this.$router.push({
          path:`/details/${id}`,
          query:{
             type:'鞋类'
          }
      });
    },
},
}
</script>

<style lang="less" scoped>
.secon_con{
    padding: 20px 0 0 0;
}
/deep/.van-card__content{
    padding: 5px 10px;
    box-sizing: border-box;
}
</style>