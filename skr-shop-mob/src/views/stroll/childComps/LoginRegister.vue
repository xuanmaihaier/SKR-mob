<template>
    <div id="LR">
        <div id="login">
            <div class="login">
                <div class="lore">
                    <span @click="toLogin">登录</span>
                    <span>|</span>
                    <span @click="toRegister">注册</span>
                </div>
                <div class="back">
                    <span @click="backTop">回到顶部<van-icon name="arrow-up" /></span>
                </div>
            </div>
            <footer>
                <p>CopyRight©2007-2021 南京新与力文化传播有限公司</p>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
//     data(){
//         return{

//         }        
//    },
   methods:{
       backTop(){
           window.scroll(0,0)
       },
       toLogin(){
           console.log('login');
       },
       toRegister(){
           console.log('toRegister');
       }
   }
};

</script>

<style lang="less" scoped>
/deep/#login {
    width: 100%;
    height: 18vh;
    position: relative;
    bottom: 0;
    .login {
        width: 86%;
        height: 10vh;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        .lore {
            line-height: 10vh;
            position: relative;
            span:nth-child(2) {
                color: #ccc;
                margin: 0 10px;
            }
        }
        .back {
            line-height: 10vh;
            .van-icon-arrow-up {
                margin-left: 5px;
            }
        }
    }
    footer {
        width: 100%;
        height: 8vh;
        background-color: #c1c1c1;
        text-align: center;
        line-height: 8vh;
        p {
            font-size: 0.8rem;
            color: #666666;
        }
    }
}
</style>