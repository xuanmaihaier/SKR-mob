<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-21 11:14:41
 * @LastEditors: stride
 * @LastEditTime: 2021-04-23 15:32:06
-->
<template>
  <van-tabs
    v-model="active"
    :swipeable="true"
    :sticky="true"
    :color="`#ccc`"
    :lazy-render="true"
  >
    <van-tab
      v-for="(item, index) in $store.state.home.typeOne"
      :title="item"
      :key="index"
    >
      <!-- {{ $store.state.home.typeOne_list[index] }} -->
      <ul class="list">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <li
            v-for="(items, indexs) in list[index]"
            :key="indexs"
            @click="handleDetail(items.id, item)"
          >
            <img :src="items.img" alt="" />
            <h3>{{ items.title }}</h3>
            <p class="price">
              <b class="price_b">
                <span>￥{{ items.special_price }}</span>
                <span>￥{{ items.price }}</span>
              </b>
              <van-icon name="ellipsis" />
            </p>
          </li>
        </van-list>
      </ul>
    </van-tab>
  </van-tabs>
</template>

<script>
export default {
  data() {
    return {
      // 显示   没有更多了
      lodingflag: false,
      //tab 的标记页
      active: 0,
      //渲染的数据
      list: [],
      loading: false,
      finished: false,
      //数据总条数
      listTotal: [],
      //   分页渲染
      page: 30,
    };
  },
  props: {
    List: {
      type: Array,
      default: () => [],
    },
  },

  created() {},
  methods: {
    handleDetail(id, item) {
      this.$router.push({
        path: `/details/${id}`,
        query: {
          type: item,
        },
      });
    },
    onLoad() {
      setTimeout(() => {
        if (this.listTotal.length == 0) return;
        this.page += 30;
        let arr = [];
        this.listTotal.forEach((item, index) => {
          arr.push(item.slice(0, 30));
        });
        arr[this.active] = this.listTotal[this.active].slice(0, this.page);
        this.list = arr;
        // 加载状态结束
        this.loading = false;
        if (this.listTotal[this.active].length == arr[this.active].length) {
          this.lodingflag = true;
        }
        if (this.lodingflag) {
          this.finished = true;
        }
      }, 1000);
    },
  },
  mounted() {},
  watch: {
    List: {
      deep: true,
      handler: function (val) {
        this.listTotal = val;
        val.forEach((item) => {
          this.list.push(item.slice(0, this.page));
        });
      },
    },
    active: {
      deep: true,
      handler: function (val) {
        this.finished = false;
      },
    },
  },
};
</script>

<style lang="less" scoped>
.van-tab__pane {
  background-color: white;
}
.list {
  // box-sizing: border-box;
  // column-count: 2;
  // padding: 10px;
  //  break-inside: avoid;

  li {
    margin: 10px 0;
    width: calc(100vw / 2 - 20px);

    h3 {
      margin: 8px 0 5px 0;
      overflow: hidden;
      white-space: nowrap; /* 设置文本是否换行 */
      text-overflow: ellipsis; /* 超出文本出现省略号代替 */
      transform: scale(0.9);
      font-size: 12px;
    }
    img {
      width: 100%;
      border: 1px solid #ccc;
    }
    .price {
      padding: 0 5px;
      display: flex;
      justify-content: space-between;
      span {
        font-size: 12px;
      }
      i {
        font-weight: 700;
        font-size: 18px;
        color: #b0b0b0;
      }
    }
  }
}
li:nth-of-type(1) {
  margin-top: 10px;
  height: calc(100vw / 2 + 100px);
  img {
    height: 80%;
  }
}
li:nth-of-type(2n + 4) {
  transform: translateY(-8vh);
}
.price_b {
  display: flex;
  span:nth-of-type(1) {
    color: red;
  }
  span:nth-of-type(2) {
    display: block;
    transform: scale(0.9);
    padding: 0 5px;
    color: #b0b0b0;
    text-decoration: line-through;
  }
}
/deep/.van-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>