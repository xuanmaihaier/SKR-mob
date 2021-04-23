<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-22 16:49:08
 * @LastEditors: stride
 * @LastEditTime: 2021-04-23 11:58:43
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
  <transition name="plus-icon" v-if="TabShow">
    <div class="Tab">
      <van-tabs color="#2f3640" v-model="page_init" @click="tabClick" lazy-render>
        <van-tab v-for="(item, index) in title" :title="item" :key="index">
        </van-tab>
      </van-tabs>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Tab",
  data() {
    return {
      title: ["商品", "穿搭", "详情", "推荐"],
    };
  },
  props:{
    page:{
      type:Number,
      default:()=>0
    },
    TabShow:{
      type:Boolean,
      default:()=>false
    }
  },
  computed: {
    page_init: {
      get() {
        return this.page;
      },
      set() {
        // 占位 防止报错
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
.plus-icon-enter-active {
  transition: opacity 0.5s;
}
.plus-icon-enter {
  opacity: 0;
}
.plus-icon-leave-active {
  transition: opacity 0.5s;
}
.plus-icon-leave-to {
  opacity: 0;
}
</style>