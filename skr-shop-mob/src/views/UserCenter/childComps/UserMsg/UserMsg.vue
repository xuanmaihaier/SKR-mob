<template>
  <div class="UserMsg">
    <section class="bgi">
    </section>
    <NoToken />
    <HaveToken />
  </div>
</template>

<script>
import NoToken from "views/UserCenter/childComps/UserMsg/childComps/NoToken.vue";
import HaveToken from "views/UserCenter/childComps/UserMsg/childComps/HaveToken.vue";
export default {
  name: "UserMsg",
  components: {
    NoToken,
    HaveToken
  },
};
</script>

<style lang="less" scoped>
.UserMsg {
  width: 100vw;
  height: 12.3vh;
  position: relative;
  overflow: hidden;
  .bgi {
    width: 100vw;
    height: 12.3vh;
    background-image: url("https://cf-images.ap-northeast-1.prod.boltdns.net/v1/jit/6010958340001/67ac13a6-702d-4c3d-bdd0-f55b81e3adc9/main/1280x720/27s40ms/match/image.jpg");
    background-size: cover;
    background-position: center;
    filter: blur(8px);
    transform: scale(1.4);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
}
</style>