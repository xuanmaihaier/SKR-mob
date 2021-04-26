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
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("~assets/img/loading/loading.gif") center center no-repeat #fff;
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