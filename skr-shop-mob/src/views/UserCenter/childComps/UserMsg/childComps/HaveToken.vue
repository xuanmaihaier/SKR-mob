<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-22 19:56:15
 * @LastEditors: stride
 * @LastEditTime: 2021-04-25 19:57:52
-->
<template>
  <div class="HaveToken" v-if="isToken">
    <section>
      <div class="information" @click="onInfo">
        <div class="information-img">
      <img src="../../../../../assets/img/usercenter/tzof.png" />
        </div>
        <div class="information-msg">
          <p><span>{{userInfo.username}}</span></p>
          <p># <span>{{userInfo.email}}</span> #</p>
        </div>
      </div>
      <div class="qr" @click="onQr">
        <van-icon name="qr" />
      </div>
    </section>
  </div>
</template>

<script>
import { getLocalStorage } from "utils/storage.js";
export default {
  name: "HaveToken",
  data: function () {
    return {
      isToken: false,
      userInfo: {},
    };
  },
  created() {
    this.ifToken();
  },
  methods: {
    ifToken() {
      if (getLocalStorage("token")) {
        this.isToken = true;
      } else {
        this.isToken = false;
      }
      this.userInfo = this.$store.state.login.userInfo;
    },
    onQr(){
      this.$router.push('/myCode');
    },
    onInfo(){
      this.$router.push('/personalData');
    }
  },
  watch: {
    $route: function ()  {
      this.ifToken();
    },
  },
};
</script>

<style lang="less" scoped>
.HaveToken {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4vw;
  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    .information {
      display: flex;
      align-items: center;
      justify-content: center;
      .information-img {
        border-radius: 50%;
        width: 13.33vw;
        height: 13.33vw;
        overflow: hidden;
        margin-right: 2.66vw;
        img {
          width: 100%;
        }
      }
      .information-msg {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: white;
        font-size: 4.26vw;
        p {
          padding: 1.33vw 0;
        }
      }
    }
    .qr {
      align-self: flex-start;
      i {
        font-size: 4.26vw;
        font-weight: bolder;
        color: white;
      }
    }
  }
}
</style>