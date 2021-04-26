<template>
  <div class="Login">
    <div class="bgi">
      <img
        src="http://img11.static.yhbimg.com/yhb-img01/2018/03/26/10/01cf2c685c5d7ddbb21b7c7b961da77454.jpg?imageView2/2/w/750/h/290"
        alt=""
      />
    </div>
    <nav>
      <div>
        <van-icon name="arrow-left" @click="balck" />
      </div>
      <p @click="goToRegister">注册</p>
    </nav>
    <main>
      <div class="user">
        <van-icon name="manager" />
        <input type="text" name="" placeholder="请输入账号" v-model="user" />
      </div>
      <div class="password">
        <van-icon name="lock" />
        <input
          type="password"
          name=""
          placeholder="请输入密码"
          v-model="password"
        />
      </div>
      <section>
        <VerificationImg />
      </section>
      <button @click="onLogin">登录</button>
      <p>忘记密码？</p>
    </main>
  </div>
</template>

<script>
import getLogin from "network/getLogin.js";
import { Dialog } from "vant";
import { setLocalStorage } from "utils/storage.js";
import VerificationImg from "components/common/VerificationImg/VerificationImg.vue";
export default {
  name: "Login",
  components: {
    VerificationImg,
  },
  data: function () {
    return {
      user: "",
      password: "",
    };
  },
  methods: {
    balck() {
      this.$router.go(-1);
    },
    goToRegister() {
      this.$router.push("/Register");
    },
    onLogin() {
      getLogin({
        username: this.user,
        password: this.password,
      }).then((res) => {
        if (res.code == 200) {
          setLocalStorage("customer_id", res.data.userInfo.id);
          Dialog.alert({
            message: "登录成功，点击确定返回上一页",
          }).then(() => {
            this.$router.go(-1);
            return;
          });
        } else {
          Dialog.alert({
            message: "登录失败请重新登录",
          }).then(() => {
            return;
          });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.Login {
  padding: 0 8vw;
  .bgi {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: -1;
    img {
      width: 100vw;
    }
  }
  nav {
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3vh;
    & > div {
      width: 4.53vw;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 0.1rem solid white;
      padding: 0.5vh;
      i {
        font-size: 4.53vw;
      }
    }
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 14.66vw;
      font-size: 4.53vw;
      border: 0.1rem solid white;
      padding: 0.5vh 0;
      border-radius: 2rem;
    }
  }
  main {
    position: relative;
    margin-top: 14.7vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > div {
      margin-top: 5.33vw;
      padding: 1.23vh 0;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgb(206, 206, 206);
      font-size: 4vw;
      i {
        color: #444;
      }
      input {
        border: none;
        outline: none;
        margin-left: 5.3vw;
        font-size: 4vw;
        &::-webkit-input-placeholder {
          font-size: 4vw;
        }
      }
    }
    & > button {
      align-self: center;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 3.1vh;
      border: none;
      outline: none;
      background-color: #444;
      color: white;
      width: 80vw;
      height: 4.3vh;
      border-radius: 0.2rem;
      font-size: 4.5vw;
      &:active {
        background-color: rgb(19, 18, 18);
      }
    }
    & > p {
      font-size: 3.2vw;
      color: #444;
      position: absolute;
      right: 1vw;
      bottom: 0;
      transform: translate(0, 200%);
      text-decoration: underline;
    }
  }
}
</style>