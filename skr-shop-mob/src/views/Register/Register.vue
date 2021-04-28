<template>
  <div class="Register">
    <nav>
      <div>
        <van-icon name="arrow-left" @click="balck" />
      </div>
      <p>注册</p>
    </nav>
    <main>
      <div class="user">
        <van-icon name="manager" />
        <input type="text" name="" placeholder="请输入账号" v-model="user" />
      </div>
      <div class="email">
        <van-icon name="gift-card" />
        <input type="text" name="" placeholder="请输入邮箱" v-model="email" />
        <p v-if="eShow">请输入有效的邮箱</p>
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
      <div class="message">
        <van-icon name="phone" />
        <input
          type="text"
          name=""
          placeholder="请输入手机号获取验证码"
          v-model="phone"
        />
        <button @click="onMessage" ref="msgBtn">{{ down }}</button>
        <p v-if="pShow">请输入有效的手机号</p>
      </div>
      <div class="phonMessage">
        <van-icon name="chat" />
        <input
          type="text"
          name=""
          placeholder="请输入验证码"
          v-model="message"
        />
        <p v-if="mShow">验证码输入错误</p>
      </div>
      <section>
        <VerificationImg />
      </section>
      <button @click="onRegister" class="btn" disabled="disabled">注册</button>
    </main>
    <footer>
      <p>注册即表示您已阅读并同意</p>
      <p><a href="#">有货用户服务协议</a><a href="#">有货隐私条款</a></p>
    </footer>
  </div>
</template>

<script>
import getRegister from "network/getRegister.js";
import getMessage from "network/getMessage.js";
import { Dialog } from "vant";
import VerificationImg from "components/common/VerificationImg/VerificationImg.vue";
export default {
  name: "Register",
  components: {
    VerificationImg,
  },
  data: function () {
    return {
      user: "",
      email: "",
      password: "",
      phone: "",
      down: "获取验证码",
      message: "",
      eShow: false,
      pShow: false,
      mShow: false,
      flag: false,
    };
  },
  methods: {
    balck() {
      this.$router.go(-1);
    },
    onMessage() {
      let phonReg = new RegExp(/^(?:(?:\+|00)86)?1\d{10}$/);
      if (phonReg.test(this.phone)) {
        this.pShow = false;
        getMessage({
          phoneNum: `+86${this.phone}`,
        }).then((res) => {
          this.$refs.msgBtn.style.backgroundColor = "#999";
          this.$refs.msgBtn.disabled = "disabled";
          let count = 10;
          this.down = count + "秒后重发";
          let timer = setInterval(() => {
            this.down = --count + "秒后重发";
            if (count == -1) {
              this.down = "获取验证码";
              this.$refs.msgBtn.style.backgroundColor = "#444";
              this.$refs.msgBtn.disabled = "";
              clearInterval(timer);
              return;
            }
          }, 1000);
        });
      } else {
        this.pShow = true;
      }
    },
    onRegister() {
      let emailReg = new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      if (emailReg.test(this.email)) {
        this.eShow = false;
        getRegister({
          username: this.user,
          password: this.password,
          email: this.email,
          VerificationCode: this.message,
        }).then((res) => {
          if (res.code == 401) {
            this.mShow = true;
            return;
          } else {
            this.mShow = false;
          }
          if (res.code == 200) {
            Dialog.alert({
              message: "注册成功，点击确定返回登录",
            }).then(() => {
              this.$router.push("/login");
              return;
            });
          } else {
            Dialog.alert({
              message: "注册失败请重新注册",
            }).then(() => {
              return;
            });
          }
        });
      } else {
        this.eShow = true;
      }
    },
  },
  computed: {
    judge() {
      return this.$store.state.verificationImg.allNorth;
    },
  },
  watch: {
    judge() {
      if (this.flag) {
        let btn = document.querySelector(".btn");
        if (this.$store.state.verificationImg.allNorth === true) {
          btn.disabled = "";
          btn.style.backgroundColor = "#444";
        } else {
          btn.disabled = "disabled";
          btn.style.backgroundColor = "#ccc";
        }
      }
      this.flag = true;
    },
  },
};
</script>

<style lang="less" scoped>
.Register {
  padding: 0 8vw;
  nav {
    position: relative;
    margin-top: 3vh;
    & > div {
      width: 4.53vw;
      display: flex;
      align-items: center;
      border-radius: 50%;
      border: 0.1rem solid black;
      position: absolute;
      left: 0;
      top: 0;
      i {
        font-size: 4.53vw;
      }
    }
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4.53vw;
    }
  }
  main {
    margin-top: 4vw;
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
    .email {
      position: relative;
      p {
        font-weight: bolder;
        color: red;
        position: absolute;
        bottom: 0;
        left: 9.3vw;
        transform: translate(0, 110%);
      }
    }
    .message {
      position: relative;
      button {
        width: 20.2vw;
        height: 3.1vh;
        font-size: 3.2vw;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 0;
        border: none;
        outline: none;
        color: white;
        background-color: #444;
        border-radius: 1rem;
        &:active {
          background-color: rgb(19, 18, 18);
        }
      }
      p {
        font-weight: bolder;
        color: red;
        position: absolute;
        bottom: 0;
        left: 9.3vw;
        transform: translate(0, 110%);
      }
    }
    .phonMessage {
      position: relative;
      p {
        font-weight: bolder;
        color: red;
        position: absolute;
        bottom: 0;
        left: 9.3vw;
        transform: translate(0, 110%);
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
      background-color: #ccc;
      color: white;
      width: 80vw;
      height: 4.3vh;
      border-radius: 0.2rem;
      font-size: 4.5vw;
      &:active {
        background-color: rgb(19, 18, 18);
      }
    }
  }
  footer {
    display: flex;
    flex-direction: column;
    font-size: 3.2vw;
    p {
      margin-top: 1.23vh;
      &:first-of-type {
        color: #666;
      }
      a {
        color: #cc0000;
        text-decoration: underline;
        margin-right: 2.66vw;
      }
    }
  }
}
</style>