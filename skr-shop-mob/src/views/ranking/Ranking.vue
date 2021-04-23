<!--
 * @Descripttion: 排行榜
 * @version: 
 * @Author: stride
 * @Date: 2021-04-23 12:14:41
 * @LastEditors: stride
 * @LastEditTime: 2021-04-23 15:30:59
-->
<template>
  <div class="Ranking">
    <MyNavBar />
    <div class="item">
      <h3>{{this.$route.query.type}}新势力排行榜</h3>
      <van-card
        v-for="(item, index) in $store.state.details.height"
        :key="index"
        :num="`${item.sale}人已付款`"
        :tag="`销量第${index + 1}`"
        :price="item.price"
        :title="item.title"
        :thumb="item.img"
        @click="itemclick(item.id,$route.query.type)"
      />
    </div>
  </div>
</template>

<script>
import MyNavBar from "components/content/navbar/MyNavBar";
export default {
  name: "Ranking",
  components: {
    MyNavBar,
  },
  created() {
    console.log(this.$store.state.details.height);
  },
  methods: {
    delx() {
      let card__num = document.querySelectorAll(".van-card__num");
      card__num.forEach((item) => {
        item.innerHTML = item.innerHTML.slice(1, card__num.length - 1);
      });
    },
     itemclick(id,type){ 
      this.$router.push({
        path: `/details/${id}`,
        query: {
          type
        },
      });
    }
  },
  created() {
    console.log(this.$route);
  },
  mounted() {
    // 删除组件自带的x 
    this.delx();
    console.log(this.$route.query.type);
  },
};
</script>

<style lang="less" scoped>
.Ranking {
  .item {
    margin-top: 46px;
    padding: 0 10px;
  }
  h3{
    text-align: center;
    padding: 20px 0;
    letter-spacing: 2px;
    font-weight: 600;
  }
}
/deep/ .van-card__title,
/deep/ .van-card__price,
/deep/ .van-card__num {
  padding: 10px;
}
</style>