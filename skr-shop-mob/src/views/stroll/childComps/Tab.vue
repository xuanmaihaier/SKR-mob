<template>
    <div>
        <van-tabs v-model="active" color="#fff">
            <van-tab title="today">为找到相关商品</van-tab>
            <van-tab title="本周上新">内容 2</van-tab>
            <van-tab title="销量">内容 3</van-tab>
            <van-tab title=""
                ><template #title>筛选<van-icon name="play" /></template>
                <template #default>
                    <van-tree-select
                        :items="items"
                        :active-id.sync="activeIds"
                        :main-active-index.sync="activeIndex"
                    />
                </template>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,

            items: [
                {
                    // 导航名称
                    text: "性别：所有性别",

                    // 导航节点额外类名
                    className: "sex",

                    // 该导航下所有的可选项
                    children: [
                        {
                            // 名称
                            text: "所有性别",
                            // id，作为匹配选中状态的标识符
                            id: 0,
                        },
                        {
                            text: "MEN",
                            id: 1,
                        },
                    ],
                },
                {
                    // 导航名称
                    text: "品牌：所有品牌",

                    // 导航节点额外类名
                    className: "brand",

                    // 该导航下所有的可选项
                    children: [
                        {
                            // 名称
                            text: "所有品牌",
                            // id，作为匹配选中状态的标识符
                            id: 0,
                        },
                    ],
                },
                {
                    // 导航名称
                    text: "颜色：所有颜色",

                    // 导航节点额外类名
                    className: "colors",

                    // 该导航下所有的可选项
                    children: [
                        {
                            // 名称
                            text: "所有颜色",
                            // id，作为匹配选中状态的标识符
                            id: 0,
                        },
                    ],
                },
                {
                    // 导航名称
                    text: "尺码：所有尺码",

                    // 导航节点额外类名
                    className: "sizes",

                    // 该导航下所有的可选项
                    children: [
                        {
                            // 名称
                            text: "所有尺码",
                            // id，作为匹配选中状态的标识符
                            id: 0,
                        },
                    ],
                },
                {
                    // 导航名称
                    text: "价格：所有价格",

                    // 导航节点额外类名
                    className: "prices",

                    // 该导航下所有的可选项
                    children: [
                        {
                            // 名称
                            text: "所有价格",
                            // id，作为匹配选中状态的标识符
                            id: 0,
                        },
                    ],
                },
                {
                    // 导航名称
                    text: "折扣：所有商品",

                    // 导航节点额外类名
                    className: "discount",

                    // 该导航下所有的可选项
                    children: [
                        {
                            // 名称
                            text: "所有商品",
                            // id，作为匹配选中状态的标识符
                            id: 0,
                        },
                    ],
                },
            ],
            activeIds: [0],
            activeIndex: 0,
        };
    },
};
</script>
<style lang="less" scoped>
/deep/.van-tabs--line .van-tabs__wrap {
    border-bottom: 1px solid #ccc;
    .van-tab {
        color: #999999;
    }
    .van-tab--active {
        color: #000;
    }
    .van-icon {
        transform: rotate(90deg);
    }
}
.van-tree-select__nav {
    flex: 2;
    .van-sidebar-item {
        line-height: 50px;
        text-align: center;
    }
    .van-sidebar-item--select::before {
        background-color: #fff;
    }
}
/deep/.van-tree-select__item--active {
    color: #000;
}
</style>