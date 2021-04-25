<template>
  <div class="list">
    <p class="title">为你优选新品</p>
    <ul class="rem-list">
      <li v-for="(item, index) in listCar" :key="index" class="cet-list">
        <div @click.prevent="detail(item.id)">
          <div>
            <img :src="item.img" alt="" />
            <div class="mask" v-show="index == active||flag == false?flag:!flag">
              <p @click.stop="onSimilar()">找相似</p>
            </div>
          </div>
          <p class="cet-tilte">{{ item.title }}</p>
        </div>
        <div class="list-bom">
          <p class="price">
            <span>¥{{ item.price }}</span
            ><span>¥{{ item.special_price }}</span>
          </p>
          <span class="similar" @click="similar(index)">...</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

import { getTypeOneList } from "network/getList.js";
export default {
  data() {
    return {
      listCar: [],
      flag: true,
      active: null,
    };
  },
  created() {
    let arr = ["鞋类", "服饰", "配件", "儿童专区"];
    arr.forEach((item) => {
      this.getTypeOneList_(item);
    });
  },
  methods: {
    similar(index) {
      if(this.active == index || this.flag == false){
        this.flag = !this.flag;
      }
      this.active = index
      // console.log(this.flag);
    },
    detail(id) {
      // console.log("页面详情");
        this.$router.push(`/details/${id}`)
    },
    async getTypeOneList_(parent_name) {
      const res = await getTypeOneList(parent_name);
      let data = res.res.slice(10, 20);
      this.listCar = this.listCar.concat(data);
    },
    onSimilar() {
      console.log('模糊搜索');
    },
  },
};
</script>

<style lang='less' scoped>
.list {
  width: 100vw;
  // margin-bottom: 20px;
  padding: 18px 0 50px 0;
  background-color: #fff;
  border-top: 1px solid #ccc;
  .title {
    text-align: center;
    padding: 20px 0;
    font-size: 1.3rem;
    color: #444;
  }
  .rem-list {
    display: flex;
    justify-content: center;
    flex-flow: wrap;
    .cet-list {
      position: relative;
      width: 45%;
      margin: 0 8px 10px 8px;
      box-shadow: 0px 1px 2px #ccc;
      // border: 1px solid #ccc;
      img {
        width: 100%;
      }
      .cet-tilte {
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .list-bom {
        display: flex;
        justify-content: space-between;
        padding-top: 5px;
        .price {
          span:nth-child(1) {
            font-size: 14px;
            color: @color-high-text;
          }
          span:nth-child(2) {
            font-size: 12px;
            color: #ccc;
            text-decoration: line-through;
            padding-left: 5px;
          }
        }
        .similar {
          font-size: 20px;
          color: #b0b0b0;
          margin: 0 5px;
          line-height: 10px;
        }
      }
    }
  }
}
.mask {
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  > p {
    margin: auto;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: red;
    text-align: center;
    line-height: 80px;
    z-index: 10;
  }
}
</style>