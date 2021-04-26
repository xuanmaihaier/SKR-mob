<template>
  <div class="writeAdd">
    <div class="addInfo">
      <ul>
        <li v-for="(item,index) in userAddress" :key="index" @click="toOrder(index)">
          <p>
            <span>{{item.name}}</span>
            <span>{{item.tel}}</span>
          </p>
          <span>{{item.address}}</span>
          <div class="operationIcon">
            <van-icon name="font" />
            <van-icon name="delete" @click="delBtn(item.id)" />
          </div>
        </li>
      </ul>
    </div>
    <div class="addBtn" @click="addAddress">
      <h1>添加新地址</h1>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "WriteAdd",
  methods: {
    addAddress() {
      this.$router.push("/addAddress");
    },
    delBtn(id) {
      this.$dialog.confirm({
        title: "是否确认删除",
      })
        .then(() => {
          // on confirm
          this.$store.dispatch('doDelAddress',{id:id})
        })
        .catch(() => {
          // on cancel
        });
    },
    toOrder(index){
      this.$store.dispatch('doClickIndex',index)
      this.$router.push('/order')
    }
  },
  computed: {
    ...mapState({
      userAddress: (state) => state.address.userAddress,
    }),
  },
  created() {
    console.log(this.userAddress);
  },
};
</script>

<style lang="less" scoped>
.writeAdd {
  box-sizing: border-box;
  .addInfo {
    ul {
      li {
        display: block;
        padding: 0.5rem 0.75rem;
        background-color: #fff;
        border-bottom: 2px solid #e0e0e0;
        p {
          display: flex;
          justify-content: space-between;
          font-weight: 700;
          margin-bottom: 0.5rem;
          span {
          font-size:6vw;
            color: #444444;
          }
        }
        span {
          color: #b0b0b0;
          font-size: 3vw;
        }
        .operationIcon {
          position: relative;
          height: 1.8rem;
          i {
            position: absolute;
            width: 16px;
            height: 16px;
            top: 0;
            bottom: 0;
            margin: auto 0;
            &:first-child {
              right: 15%;
            }
            &:last-child {
              right: 5%;
            }
          }
        }
      }
    }
  }
  .addBtn {
    text-align: center;
    line-height: 14vw;
    border-bottom: 1px solid #e0e0e0;
    background-color: #ffffff;
    h1 {
      font-size: 5vw;
    }
  }
}
</style>