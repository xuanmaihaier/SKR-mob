<template>
  <div class="PersonalData">
    <TopNav />
    <main>
      <ul class="info">
        <li>
          <span>头像</span>
          <img src="../../assets/img/usercenter/tzof.png" alt="" />
        </li>
        <li @click="onQr">
          <span>二维码</span>
          <van-icon name="qr" />
        </li>
        <li>
          <span>用户名</span>
          <p>
            <span>{{ userInfo.username }}</span>
          </p>
        </li>
        <li>
          <span>邮箱</span>
          <p>
            <span>{{ userInfo.email }}</span>
          </p>
        </li>
      </ul>
      <ul class="admin">
        <li @click="onChangePassword">
          <span>修改密码 </span>
          <van-icon name="arrow" />
        </li>
        <li @click="onAddress">
          <span>地址管理</span>
          <van-icon name="arrow" />
        </li>
        <li @click="onExit">
          <span>退出登录</span>
          <van-icon name="arrow" />
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import TopNav from "views/UserCenter/childComps/TopNav/TopNav.vue";
import { removeLocalStorage } from "utils/storage.js";
export default {
  name: "PersonalData",
  components: {
    TopNav,
  },
  data: function () {
    return {
      userInfo: {},
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      this.userInfo = this.$store.state.login.userInfo;
    },
    onQr() {
      this.$router.push("/myCode");
    },
    onAddress() {
      this.$router.push("/selectAddress");
    },
    onChangePassword(){
      this.$router.push("/changePassword");
    },
    onExit() {
      this.$store.dispatch("commitUserInfo", '');
      removeLocalStorage('token');
      this.$router.push("/home");
    },
  },
  watch: {
    $route: function () {
      this.getUserInfo();
    },
  },
};
</script>

<style lang="less" scoped>
.PersonalData {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #f0f0f0;
  main {
    display: flex;
    flex-direction: column;
    ul {
      padding: 0 4vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: #fff;
      margin-bottom: 1.84vh;
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.8vh 0;
        position: relative;
        &::before {
          content: "";
          display: inline-block;
          position: absolute;
          bottom: 0;
          left: 4vw;
          width: 100vw;
          height: 1px;
          background-color: rgb(206, 206, 206);
        }
        & > span:first-of-type {
          font-size: 4.5vw;
        }
        i {
          font-size: 5vw;
          color: rgb(206, 206, 206);
        }
        p {
          color: rgb(206, 206, 206);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
    & > :first-of-type {
      & > li:last-of-type {
        &::before {
          opacity: 0;
        }
      }
    }
    & > :last-of-type {
      padding-bottom: 60vh;
    }
    .info {
      & > li {
        img {
          width: 14vw;
          height: 14vw;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>