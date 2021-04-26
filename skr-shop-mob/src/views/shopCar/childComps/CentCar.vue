<template>
  <div class="cen-car">
      <van-icon name="cart-o" size='72' class="car" />
      <p>您的购物车暂无商品</p>
      <button @click="onNew">随便逛逛</button>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        onNew(){
            this.$router.push('/stroll')
        }
    }
}
</script>

<style lang='less' scoped>
.cen-car{
    width: 100vw;
    background-color: #f0f0f0;
    padding: 45px 0 75px;
    text-align: center;
    .car{
        margin: 20px 0;
    }
    p{
        color: #444444;
        padding: 14px 0;
        font-size: 12px;
    }
    button{
        width: 30%;
        height: 2rem;
        background-color: #444;
        color: #fff;
        outline-style: none;
        border: none;
        border-radius: 5px;
    }
}
</style>