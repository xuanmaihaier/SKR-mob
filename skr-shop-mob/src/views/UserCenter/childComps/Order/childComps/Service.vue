<template>
  <div class="Service">
    <ul>
      <li class="msg">
        <van-icon name="chat-o" />
        <p>
          <span>消息</span>
          <van-icon name="arrow" />
        </p>
      </li>
      <li class="support">
        <van-icon name="service-o" />
        <p>
          <span>服务与支持</span>
          <van-icon name="arrow" />
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Service",
};
</script>

<style lang="less" scoped>
.Service {
  margin-top: 1.23vh !important;
  background-color: #fff;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 4vw;
    li {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.8vh 0;
      font-size: 4vw;
      p {
        margin-left: 2.66vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100vw;
        color: black;
        position: relative;
        &:last-of-type {
          cursor: pointer;
        }
        i {
          margin-right: 2.66vw;
          color: #ccc;
        }
        &::after {
          content: "";
          box-sizing: border-box;
          display: inline-block;
          width: 100vw;
          height: 0.2px;
          background: rgb(206, 206, 206);
          position: absolute;
          left: 0;
          bottom: -4.4vw;
        }
      }
      & > i {
        font-size: 6.13vw;
      }
      &:last-of-type {
        p::after {
          opacity: 0;
        }
      }
    }
  }
}
</style>