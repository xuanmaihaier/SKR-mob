<template>
  <div class="DefaultChannel">
    <ul>
      <li>
        <p>默认频道</p>
        <p>主页<van-icon name="arrow" /></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DefaultChannel",
};
</script>

<style lang="less" scoped>
.DefaultChannel {
  background-color: #fff;
  ul {
    display: flex;
    align-items: center;
    padding: 0 4vw;
    li {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.8vh 0;
      font-size: 4vw;
      p {
        display: flex;
        align-items: center;
        &:last-of-type{
            cursor: pointer;
        }
        i {
          color: #ccc;
        }
      }
    }
  }
}
</style>