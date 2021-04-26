<template>
  <div class="VerificationImg">
    <header>
      <span>请将下列图片点击翻转至正向朝上</span>
      <p @click="onRefresh">换一批<van-icon name="replay" /></p>
    </header>
    <main>
      <ul>
        <li v-for="(item,index) in imgs" :key="item.id" :class="rotates[index]">
          <img :src="item" alt="noimg">
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import { getTypeOneList } from "network/getList.js";
export default {
    name: 'VerificationImg',
    data: function () {
      return {
        imgs: [],
        rotates: ['north','east','south','west'],
      }
    },
    methods: {
      onRefresh(){
        getTypeOneList("鞋类").then((res) => {
          if(res.code === 200){
            let arr = [];
            for(let i = 0; i < 4; i++){
              let index = Math.floor(Math.random() * 101);
              arr.push(res.res[index].img)
            }
            this.imgs = arr;
          }
        })
      }
    },
}
</script>

<style lang="less" scoped>
.VerificationImg{
  margin-top: 3vh;
  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 3.2vw;
    p{
      color: red;
      display: flex;
      align-items: center;
    }
  }
  .north{
    transform: rotate(0deg);
  }
  .east{
    transform: rotate(90deg);
  }
  .south{
    transform: rotate(180deg);
  }
  .west{
    transform: rotate(270deg);
  }
}
</style>