<template>
  <div class="shop-car-list">
    <h5 class="empty" v-show="empty">你的购物车没有东西,快去购物吧</h5>
    <van-swipe-cell v-for="(item, index) in list" :key="index" right-width="50">
      <van-card
        :num="item.num"
        :price="item.price"
        :desc="item.params"
        :title="item.title"
        :thumb="item.img"
        @click-thumb="onDetail(item.spu_id)"
      />
      <input type="checkbox" class="check" v-model="arr" :value="item" />
      <template #right>
        <van-button
          square
          text="删除"
          type="danger"
          class="delete-button"
          @click="deletList(item.id)"
        />
      </template>
      <div class="btn">
        <button
          class="red"
          :style="{ color: item.num == 1 ? '#ccc' : '#000' }"
          :disabled="item.num == 1 ? true : false"
          @click="redu(index)"
        >
          -
        </button>
        <button class="add" @click="addNum(index)">+</button>
      </div>
    </van-swipe-cell>

    <van-submit-bar
      :price="settlement * 100"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-checkbox
        v-model="checkAll"
        checked-color="#ee0a24"
        @change="oncheckAll"
        class="checkAll"
        >全选</van-checkbox
      >
    </van-submit-bar>
  </div>
</template>

<script>
import {
  getShopCar,
  deleteShopCar,
  addShopCar,
} from "network/getShopCarList.js";

export default {
  data() {
    return {
      empty: false,
      list: [], // 购物车列表
      Id: "", // 用户ID
      checkAll: false,
      arr: [],
      settlement: 0,
    };
  },
  created() {
    this.Id = localStorage.getItem("customer_id");
    // console.log(this.Id);
    this.getShopCar_({ customer_id: this.Id });
  },
  methods: {
    // 获取购物车商品
    async getShopCar_({ customer_id }) {
      let res = await getShopCar({ customer_id });
      if (res.code == 200) {
        this.list = res.data;
      }
      if(res.code == 402){
        this.list = [];
        this.empty = true;
        
        // console.log(this.empty);
      }
      // console.log(res);
    },
    // 删除购物车商品
    async deleteShopCar_(id) {
      let res = await deleteShopCar(id);
      this.getShopCar_({ customer_id: this.Id });
      // console.log(res,id);
    },
    // 添加购物车
    async addShopCar_({ customer_id, sku_id, num, params }) {
      let res = await addShopCar({ customer_id, sku_id, num, params });
      // console.log(res,sku_id);
    },
    // 点击删除商品
    deletList(Id) {
      this.deleteShopCar_({ id: Id });
      // this.arr = this.list
      // this.calcTotalPrice()
    },
    // 点击全选和全不选
    oncheckAll() {
      if (this.checkAll) {
        this.arr = this.list;
      } else if (this.arr.length == this.list.length) {
        this.arr = [];
      }
      // this.calcTotalPrice()
    },
    // 购物车列表跳转到详情页
    onDetail(id) {
      this.$router.push(`/details/${id}`);
    },
    // 数量加1
    addNum(val) {
      // ++val;
      ++this.list[val].num;
        this.addShopList()
        this.calcTotalPrice();
        // console.log(1);
    },
    // 数量减1
    redu(val) {
      --this.list[val].num;
      // this.arr = this.list;
      // this.calcTotalPrice();
      // if(val>=1){
        this.addShopList()
        this.calcTotalPrice();
      // }
    },
    // 结算跳转
    onSubmit() {
      console.log("跳转到结算页");
    },
    // 结算总价
    calcTotalPrice() {
      // console.log(this.arr);
      this.settlement = 0;
      this.arr.forEach((item) => {
        this.settlement += item.num * item.price;
      });
      // console.log(this.settlement);
    },
    // 添加购物车信息
    addShopList() {
      this.list.forEach((item) => {
        this.deleteShopCar_({ id: item.id });
        setTimeout(() => {
          this.addShopCar_({
          customer_id: item.customer_id,
          sku_id: item.sku_id,
          num: item.num,
          params: JSON.parse(item.params),
        });
        });
        
      });
    },
  },

  watch: {
    // 监听arr判断是否全选和不选
    arr() {
      // console.log(this.arr);
      if (this.arr.length == this.list.length) {
        this.checkAll = true;
      } else {
        this.checkAll = false;
      }
      this.calcTotalPrice();
    },
    list() {
      this.arr = this.list;
    },
  },

  // destroyed() {
  // this.list.forEach((item) => {
  //   this.deleteShopCar_({ id: item.id });
  //   this.addShopCar_({
  //     customer_id: item.customer_id,
  //     sku_id: item.sku_id,
  //     num: item.num,
  //     params: JSON.parse(item.params),
  //   });
  // });

  // console.log(0);
  // },
};
</script>

<style lang='less' scoped>
.van-card {
  position: relative;
  margin: 10px 0;
  .van-image {
    border: 1px solid #ccc;
  }
}
.empty {
  text-align: center;
  margin: 150px 0;
}
.van-card__num {
  margin-right: 40px;
  margin-bottom: 10px;
  font-size: 16px;
}
.btn {
  position: absolute;
  bottom: 8px;
  right: 5px;
  outline-style: none;

  .red {
    width: 26px;
    margin-right: 45px;
    font-size: 18px;
    line-height: 24px;
    border: 1px solid #ccc;
    background-color: #fff;
  }
  .add {
    width: 26px;
    font-size: 18px;
    line-height: 24px;
    border: 1px solid #ccc;
    background-color: #fff;
  }
}
.van-card__title {
  margin-left: 30px;
  margin-top: 5px;
}
.van-card__desc {
  margin-left: 30px;
}
.van-card__price-currency {
  margin-left: 30px;
}
.goods-card {
  margin: 0;
  background-color: #fff;
}

.van-card__thumb {
  margin-left: 30px;
}
.delete-button {
  height: 100%;
  width: 50px;
}
.check {
  position: absolute;
  left: 5px;
  top: 40px;
}
.checkAll {
  margin-left: 5px;
}
.van-submit-bar__text {
  margin-right: 10px;
}
</style>