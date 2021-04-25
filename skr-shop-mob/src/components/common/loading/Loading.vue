<template>
  <div>
    <transition name="loading">
      <div class="loading" v-if="loadingStatus">
        <!-- <img src="@/assets/img/loading.gif" alt="" /> -->
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Loading",
  data() {
    return {
      
    }
  },
  computed:{
    ...mapState(
      {
        loadingStatus:state=>state.loading.loadingStatus
      }
    )
  }
};
</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background: url('~assets/img/loading.gif') no-repeat center center #fff;
  opacity: .9;
  img {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
.loading-enter,
.loading-leave-to {
  opacity: 0;
}

.loading-enter-active,
.loading-leave-active {
  transition: opacity 0.5s;
}

</style>