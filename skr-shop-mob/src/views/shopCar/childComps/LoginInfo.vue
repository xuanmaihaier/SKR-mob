<template>
  <div class="login-info">
    <p>
      <van-icon name="warning-o" class="warn" />
      <span>请您先</span>
      <button @click="longin">登录</button>
      <span>可以同步电脑和手机的商品</span>
    </p>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        longin(){
            console.log('登录');
        }
    }
};
</script>

<style lang='less' scoped>
.login-info {
  width: 100%;
  background-color: #f0f0f0;
}
p {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #24acaa;
  height: 5vh;
  .warn {
    background-color: #f0f0f0;
    color: #000;
    font-size: 20px;
  }
  button{
      width: 12%;
      height: 70%;
      background-color: red;
      outline-style: none;
      border: none;
      color: #fff;
  }
}
</style>