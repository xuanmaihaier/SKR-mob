<template>
  <div class="MyCode">
    <TopNav />
    <main>
      <section>
        <div class="msg">
          <div>
            <img src="../../assets/img/usercenter/tzof.png" alt="" />
          </div>
          <p>
            <span>{{ userInfo.username }}</span>
            <span># {{ userInfo.email }} #</span>
          </p>
        </div>
        <div>
          <img src="../../assets/img/usercenter/qrcode_stride.fun.png" alt="" />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import TopNav from "views/UserCenter/childComps/TopNav/TopNav.vue";
export default {
  nmae: "MyCode",
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
  },
  watch: {
    $route: function () {
      this.getUserInfo();
    },
  },
};
</script>

<style lang="less" scoped>
.MyCode {
  height: 100vh;
  overflow: hidden;
  main {
    width: 100vw;
    height: 100vh;
    background-color: #3e3e3e;
    display: flex;
    justify-content: center;
    section {
      margin-top: 5vh;
      background-color: #fff;
      width: 74.6vw;
      height: 48vh;
      border-radius: 0.4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .msg {
        margin-top: 2.46vh;
        display: flex;
        align-items: center;
        justify-content: center;
        & > div {
          width: 13.3vw;
          height: 13.3vw;
          overflow: hidden;
          border-radius: 50%;
          margin-right: 2.66vw;
          img {
            width: 100%;
          }
        }
        p {
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-size: 4vw;
          color: #444;
          span {
            padding: 1.3vw 0;
          }
        }
      }
      & > div {
        margin-top: 2.46vh;
        width: 61.3vw;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>