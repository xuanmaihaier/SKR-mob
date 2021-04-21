<template>
    <div>
        <van-goods-action>
            <van-goods-action-icon
                icon="cart"
                text="购物车"
                @click="toShopCar"
            />
            <van-goods-action-icon
                icon="shop"
                text="品牌店铺"
                @click="toShopStore"
            />
            <van-goods-action-icon icon="like" text="收藏" color="#ccc" />
            <van-goods-action-button
                type="danger"
                text="加入购物车"
                @click="onClickButton"
            />
        </van-goods-action>
    </div>
</template>

<script>
import { Toast } from "vant";
export default {
    methods: {
        toShopCar() {
            Toast("点击图标");
        },
        toShopStore() {
            Toast("点击图标");
        },
        onClickButton() {
            Toast("点击按钮");
        },
    },
};
</script>

<style lang="less" scoped>
.van-goods-action {
    border-top: 1px solid #ccc;
    height: 8vh;
    .van-goods-action-button--first {
        border-radius: 0;
    }
    .van-goods-action-button--last {
        border-radius: 0;
    }
}
/deep/.van-goods-action-icon__icon {
    width: 2.4em;
    font-size: 28px !important;
}
/deep/.van-goods-action-button {
    width: 8vw;
    height: 6vh;
    margin-right: 4vw;
    font-size: 20px;
}
</style>

