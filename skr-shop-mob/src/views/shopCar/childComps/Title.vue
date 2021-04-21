<template>
  <div>
    <header class="top_list">
      <span ><van-icon name="arrow-left" color='#fff' class="icon" @click="back" /></span>
      <p class="title">购物车</p>
    </header>
    
  </div>
</template>

<script>
export default {
  methods:{
    back(){
      history.go(-1);
    }
  }
};
</script>

<style lang='less' scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  box-sizing: border-box;
}

.top_list {
  display: flex;
  width: 100vw;
  height: 7vh;
  background-color: #383838;
  span {
    display: inline-block;
    width: 7vh;
    height: 7vh;
    text-align: center;
    .icon {
      line-height: 7vh;
      font-weight: bold;
      font-size: 1.5rem;
    }
  }
  .title{
      display: inline-block;
      text-align: center;
      line-height: 7vh;
      font-weight: 500;
      width: 75%;
      height: 100%;
      color: #fff;
      font-size: 20px;
  }
}

</style>