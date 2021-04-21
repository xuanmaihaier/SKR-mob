<template>
  <div class="icons-wrapper">
    <ul>
        <li v-for="(item,index) in icons_wrapper" :key="index">
            <img :src="item.img" alt="">
            <span>{{item.linkbar}}</span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            icons_wrapper:[
                {
                    img:`//img10.static.yhbimg.com/yhb-img01/2017/02/03/09/01ae835d5ae6d9502818daf351ad2db6cf.png?imageView2/2/w/98/h/98/q/60`,
                    linkbar:'新品到着'
                },
                 {
                    img:`//img11.static.yhbimg.com/yhb-img01/2017/02/03/09/011004f5a04caaf9c18d7848049a75981e.png?imageView2/2/w/98/h/98/q/60`,
                    linkbar:'人气搭配'
                },
                 {
                    img:`//img11.static.yhbimg.com/yhb-img01/2017/02/03/09/01d35157ab5942ea40b4f08a11c1680a17.png?imageView2/2/w/98/h/98/q/60`,
                    linkbar:'折扣专区'
                },
                 {
                    img:`//img11.static.yhbimg.com/yhb-img01/2019/12/06/15/017563081b437d62c45c914a983354eb89.png?imageView2/2/w/98/h/98/q/60`,
                    linkbar:'有货拼团'
                },
                 {
                    img:`//img10.static.yhbimg.com/yhb-img01/2017/02/03/09/01b097e06ac9fc78bbcc3d3e0dfbe01fcc.png?imageView2/2/w/98/h/98/q/60`,
                    linkbar:'全部分类'
                }
            ]
        }
    },
}
</script>

<style lang="less" scoped>
.icons-wrapper {
    width: 100vw;
    box-sizing: border-box;
    padding: 15PX 0 2PX;
    background: #fff;
    background-size: 100% 100%;
    border-bottom: 1px solid #e0e0e0;
    ul{
        width: 100%;
        display: flex;
        li{
            flex: 1;
            display: flex;
            flex-direction: column;
            font-size: 12px;
            height: 70px;
            text-align: center;
            span{
                transform: scale(0.9);
            }
            img{
                width: 40px;
                height: 40px;
                margin: 0 auto 2px;
            }
        }
    }
}
</style>