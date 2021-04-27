<template>
  <div class="VerificationImg">
    <header>
      <span>请将下列图片点击翻转至正向朝上</span>
      <p @click="onRefresh">换一批<van-icon name="replay" /></p>
    </header>
    <main>
      <ul>
        <li
          v-for="(item, index) in imgs"
          :key="item.id"
          :class="rotates[index]"
          @click="onReg"
        >
          <img :src="item" alt="noimg" />
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import { getTypeOneList } from "network/getList.js";
export default {
  name: "VerificationImg",
  data: function () {
    return {
      imgs: [],
      default: ["north", "east", "south", "west"],
      rotates: ["north", "east", "south", "west"],
      flag: false,
    };
  },
  created() {
    this.onRefresh();
    this.$store.dispatch("commitVerificationImg", false);
  },
  methods: {
    onRefresh() {
      this.$store.dispatch("commitVerificationImg", false);
      getTypeOneList("鞋类").then((res) => {
        if (res.code === 200) {
          let arr = [];
          let reg = [];
          for (let i = 0; i < 4; i++) {
            let index = Math.floor(Math.random() * 100);
            arr.push(res.res[index].img);
            reg.push(this.default[Math.floor(Math.random() * 4)]);
          }
          let flag = true;
          reg.forEach((item) => {
            if (item !== "north") {
              flag = false;
              return;
            }
          });
          if (flag) {
            this.$store.dispatch("commitVerificationImg", true);
          }
          this.imgs = arr;
          this.rotates = reg;
        }
      });
    },
    onReg(e) {
      let reg = 0;
      let direction = e.currentTarget.className;
      switch (direction) {
        case "north":
          reg = "east";
          break;
        case "east":
          reg = "south";
          break;
        case "south":
          reg = "west";
          break;
        case "west":
          reg = "north";
          break;
      }
      direction = reg;
      e.currentTarget.className = reg;
      let liArr = document.querySelectorAll(".VerificationImg main ul li");
      liArr = Array.from(liArr);
      for (let i = 0; i < liArr.length; i++) {
        console.log(liArr[i]);
        if (liArr[i].className == "north") {
          this.flag = true;
        } else {
          this.flag = false;
          this.$store.dispatch(
            "commitVerificationImg",
            false + new Date().getTime()
          );
          return;
        }
        if (this.flag) {
          this.$store.dispatch("commitVerificationImg", true);
        }
      }
    },
  },
  watch: {
    $route: function () {
      this.$store.dispatch("commitVerificationImg", false);
    },
  },
};
</script>

<style lang="less" scoped>
.VerificationImg {
  margin-top: 3vh;
  box-sizing: border-box;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 3.2vw;
    p {
      color: #d0021b;
      display: flex;
      align-items: center;
    }
  }
  main {
    ul {
      margin-top: 2.5vh;
      display: flex;
      align-items: center;
      justify-content: space-between;
      li {
        width: 23%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #ccc;
        img {
          width: 100%;
        }
      }
    }
  }
  .north {
    transform: rotate(0deg);
  }
  .east {
    transform: rotate(90deg);
  }
  .south {
    transform: rotate(180deg);
  }
  .west {
    transform: rotate(270deg);
  }
}
</style>