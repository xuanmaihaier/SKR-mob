<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-22 16:49:08
 * @LastEditors: stride
 * @LastEditTime: 2021-04-22 19:53:33
-->
<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-22 16:00:14
 * @LastEditors: stride
 * @LastEditTime: 2021-04-22 16:27:28
-->
<template>
  <div class="Tab">
    <van-tabs color="#2f3640" v-model="page_init" @click="tabClick">
      <van-tab v-for="(item, index) in title" :title="item" :key="index">
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "Tab",
  data() {
    return {
      title: ["商品", "穿搭", "详情", "推荐"],
    };
  },
  computed: {
    page_init: {
      get() {
        return this.$store.state.details.page;
      },
      set(newValue) {
        this.$store.state.details.page = newValue;
      },
    },
  },
  methods: {
    tabClick(index) {
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style lang="less" scoped>
.Tab {
  position: fixed;
  top: 46px;
  left: 0;
  right: 0;
  z-index: 99;
}
</style>