<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-22 15:23:26
 * @LastEditors: stride
 * @LastEditTime: 2021-04-22 15:56:23
-->
<template>
  <div class="Share">
    <van-share-sheet
   get-container="body" 
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
      @select="onSelect"
    />
  </div>
</template>

<script>
import bus from "utils/bus";
export default {
  name: "Share",
  data() {
    return {
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" },
      ],
    };
  },
  methods: {
     onSelect() {
      this.showShare = true;
    },
  },
  mounted() {
    bus.$on("starShare", (res) => {
      this.onSelect();
    });
  },
};
</script>

<style lang="less" scoped>
.Share {
}
</style>