<template>
  <div class="secondary">
        <SeconDaryTop/>
        <SeconContent/>
  </div>
</template>

<script>
import SeconContent from './ChildComps/SeconContent.vue';
import SeconDaryTop from './ChildComps/SeconDaryTop.vue';
export default {
  components: { SeconDaryTop, SeconContent },
  created() {
      this.$store.dispatch('typeTwo',this.$route.query.obj)
  },
 
}
</script>

<style lang="less" scoped>
.secondary{
  padding: 0 20px;
}
</style>