<template>
  <div class="SelectAddress">
    <TopTitle/>
    <WriteAdd/>
  </div>
</template>

<script>
import TopTitle from './childComps/TopTitle.vue'
import WriteAdd from './childComps/WriteAdd.vue'
export default {
  components: { TopTitle, WriteAdd },
  name:'SelectAddress'
}
</script>

<style lang="less" scoped>

</style>