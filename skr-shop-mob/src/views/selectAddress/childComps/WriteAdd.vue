<template>
  <div class="writeAdd">
    <div class="addBtn" @click="addAddress">
      <h1>添加新地址</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "WriteAdd",
  methods: {
    addAddress() {
      this.$router.push("/addAddress");
    },
  },
};
</script>

<style lang="less" scoped>
.addBtn {
  text-align: center;
  line-height: 14vw;
  border-bottom: 1px solid #e0e0e0;
  background-color: #f0f0f0;
  h1 {
    font-size: 5vw;
  }
}
</style>