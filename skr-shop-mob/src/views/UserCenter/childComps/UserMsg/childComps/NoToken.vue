<template>
  <div class="NoToken"  v-if="isToken">
      <div class="goLogin">
        <span>登录 / 注册</span>
      </div>
  </div>
</template>

<script>
import { getLocalStorage } from "utils/storage.js";
export default {
  name: "NoToken",
  data: function () {
    return {
      isToken: true,
    };
  },
  created() {
    this.ifToken();
  },
  methods: {
    ifToken() {
      if (getLocalStorage("token")) {
        this.isToken = false;
      }
      else{
        this.isToken = true;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.NoToken {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .goLogin{
    width: 34.6vw;
    height: 4.3vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.1rem solid #fff;
    cursor: pointer;
    color: white;
    font-size: 3.7vw;
  }
}
</style>