<template>
    <div id="nav">
        <van-nav-bar
            title="新品到着"
            right-icon="bars"
            left-arrow
            @click-left="onClickLeft"
        >
            <template #right>
                <van-icon name="bars" size="22" @click="dropdown"/>
            </template>
        </van-nav-bar>
        <div class="dropdown" v-show="flag">
            <div class="ul-arr"></div>
            <ul>
                <li><van-icon name="wap-home" /><span>首页</span></li>
                <li><van-icon name="todo-list" /><span>分类</span></li>
                <li><van-icon name="cart" /><span>购物车</span></li>
                <li><van-icon name="manager" /><span>我的</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            flag:false
        }
    },
    methods: {
        onClickLeft() {
            history.go(-1);
        },
        dropdown(){
            this.flag = !this.flag
            console.log(this.flag);
        }
    },
};
</script>

<style lang="less" scoped>
/deep/.van-nav-bar__content {
    width: 100%;
    height: 8vh;
    background-color: #3b3b3b;
    font-size: 20px;
    border-bottom: none;
    .van-nav-bar__title {
        font-size: 22px;
        font-weight: 600;
    }
}
.van-nav-bar {
    background-color: #000;
    /deep/.van-icon {
        color: #fff;
        font-size: 22px;
        font-weight: bold;
    }
    /deep/.van-nav-bar__title {
        color: #fff;
    }
}
.dropdown{
    position: relative;
    .ul-arr{
        position: absolute;
        width: 1.2rem;
        height: 1.2rem;
        background: #323232;
        right: 22px;
        top: -4px;
        transform: rotate(45deg);
        z-index: 1111;
    }
    ul{
        position: absolute;
        width: 40%;
        background-color: #323232;
        float: right;
        color: #fff;
        margin-top: 6px;
        vertical-align: middle;
        margin-right: 6px;
        border-radius: 8px;
        right: 0;
        top: -4px;
         z-index: 1111;
        li{
            font-size: 16px;
            padding: 14px;
            line-height: inherit;
            .van-icon{
                margin-left: 10px;
            }
            span{
                display: inline-block;
                margin-left: 36px;
            }
        }
    }

}
</style>