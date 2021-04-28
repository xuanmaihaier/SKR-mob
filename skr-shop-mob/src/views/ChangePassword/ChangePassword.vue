<template>
  <div class="ChangePassword">
    <TopNav />
    <main>
      <div class="user">
        <van-icon name="manager" />
        <input
          type="text"
          name=""
          placeholder="请输入要修改密码的账号"
          v-model="user"
        />
      </div>
      <div class="password">
        <van-icon name="lock" />
        <input
          type="password"
          name=""
          placeholder="请输入修改后密码"
          v-model="password"
        />
      </div>
      <section>
        <VerificationImg />
      </section>
      <button @click="onChange" class="btn" disabled="disabled">
        修改密码
      </button>
    </main>
  </div>
</template>

<script>
import TopNav from "views/UserCenter/childComps/TopNav/TopNav.vue";
import VerificationImg from "components/common/VerificationImg/VerificationImg.vue";
import changePassword from "network/changePassword.js";
import { Dialog } from "vant";
import { removeLocalStorage } from "utils/storage.js";
export default {
  name: "ChangePassword",
  components: {
    TopNav,
    VerificationImg,
  },
  data: function () {
    return {
      user: "",
      password: "",
      flag: false,
    };
  },
  created() {
    this.flagTrue();
  },
  methods: {
    onChange() {
      changePassword({
        username: this.user,
        password: this.password,
      }).then((res) => {
        if (res.code === 200) {
          Dialog.alert({
            message: "修改密码成功，点击确定返回登录页面",
          }).then(() => {
            this.$store.dispatch("commitUserInfo", "");
            removeLocalStorage("token");
            this.$router.push('/login');
            return;
          });
        } else {
          Dialog.alert({
            message: "修改密码失败请确认账号是否正确",
          }).then(() => {
            return;
          });
        }
      });
    },
    flagTrue() {
      window.addEventListener("click", () => {
        this.flag = true;
      });
    },
  },
  computed: {
    judge() {
      if (this.flag) {
        return this.$store.state.verificationImg.allNorth;
      }
    },
  },
  watch: {
    judge() {
      if (this.flag) {
        let btn = document.querySelector(".btn");
        if (btn) {
          if (this.$store.state.verificationImg.allNorth === true) {
            btn.disabled = "";
            btn.style.backgroundColor = "#444";
          } else {
            btn.disabled = "disabled";
            btn.style.backgroundColor = "#ccc";
          }
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.ChangePassword {
  main {
    padding: 0 8vw;
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
}
</style>