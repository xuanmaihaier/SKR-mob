<template>
  <div class="search">
    <SearchTop />
    <SearchInput @toSearch='toSearch' />
    <SearchRecord :historyVal='historyVal'/>
  </div>
</template>

<script>
import SearchInput from './childComps/SearchInput.vue';
import SearchRecord from './childComps/SearchRecord.vue';
import SearchTop from "./childComps/SearchTop.vue";
export default {
  components: { SearchTop, SearchInput, SearchRecord },
  name: "Search",
  data() {
    return {
      historyVal:''
    }
  },
  methods: {
    toSearch(val){
      this.historyVal = val  
    }
  },
};
</script>

<style lang="less" scoped>
.search {
  width: 100vw;
  font-family: helvetica, Arial, "\9ED1\4F53", sans-serif;
}
</style>