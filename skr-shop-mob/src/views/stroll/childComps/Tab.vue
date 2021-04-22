<template>
    <div class="tabs">
        <van-tabs v-model="active" color="#fff">
            <van-tab title="today">
                <ul class="todayGood">
                    <li class="good" @click="toDetails(todayShop.id)">
                        <img :src="todayShop.img" alt="" />
                        <div class="price">
                            <p>{{ todayShop.title }}</p>
                            <p class="prices">
                                <span>¥{{ todayShop.price }}</span>
                                <span>¥{{ todayShop.special_price }}</span>
                                <span>...</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </van-tab>
            <van-tab title="本周上新">
                <ul class="weekend">
                    <li class="good"  v-for="(item,index) in weekShop" :key="index"  @click="toDetail(item.id)">
                        <img :src="item.img" alt="" />
                        <div class="price">
                            <p>{{ item.title }}</p>
                            <p class="prices">
                                <span>¥{{ item.price }}</span>
                                <span>¥{{ item.special_price }}</span>
                                <span>...</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </van-tab>
            <van-tab title="销量">
                <ul class="sorts">
                    <li class="good" v-for="(item,index) in weekShop" :key="index"  @click="toDetail(item.id)">
                        <img :src="item.img" alt="" />
                        <div class="price">
                            <p>{{ item.title }}</p>
                            <p class="prices">
                                <span>¥{{ item.price }}</span>
                                <span>¥{{ item.special_price }}</span>
                                <span>...</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </van-tab>
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
import { getTypeOneList } from "network/getList";
import {getImg} from "network/getImg"
export default {
    data() {
        return {
            active: 0,
            todayShop: [],
            weekShop:[],

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
    methods: {
        async getTypeOneList_(parent_name) {
            const res = await getTypeOneList(parent_name);
            this.todayShop = res.res[0];
        },

        async getImg_(parent_name,start,end,sort_){
            const res = await getImg(parent_name,start,end,sort_);
            this.weekShop = this.weekShop.concat(res)
            console.log(this.weekShop);
        },
        toDetails(id){
            this.$router.push(`/detail/${id}`)
        },
        toDetail(id){
            console.log(11);
            this.$router.push(`/detail/${id}`)
        }
    },
    created() {
        let dayGood = ["鞋类"];
        this.getTypeOneList_(dayGood);
        let weekGood = ['鞋类','服饰','配件','儿童专区']
        weekGood.forEach(item=>{
            this.getImg_(item,1,2,'price')
        })
        
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
.todayGood{
    min-height: 50vh;
}
.weekend,
.todayGood,
.sorts {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    .good {
        width: 45%;
        height: 30vh;
        margin: 10px 5px 10px 10px;
        img {
            width: 100%;
        }
        .price {
            width: 100%;
            height: 10vh;
            margin-top: 14px;
            p {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin: 14px 0;
            }
            .prices {
                :nth-child(1) {
                    color: red;
                }
                :nth-child(2) {
                    color: #ccc;
                    text-decoration: line-through;
                    margin-left: 6px;
                }
                :nth-child(3) {
                    float: right;
                    font-size: 20px;
                    color: #000;
                    margin: 0 5px;
                    line-height: 10px;
                }
            }
        }
    }
}
</style>