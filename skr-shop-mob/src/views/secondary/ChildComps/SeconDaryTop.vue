<template>
  <div class="secon_top">
     <p class="title">
         <span>{{$route.query.obj}}</span>
        <span>Home / SeconDary</span>
     </p>
     <div class="content"></div>
     <div class="footer">
         <h2>为你推荐</h2>
     </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.secon_top{
    width: 100%;
    box-sizing: border-box;
}
.title{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
}
.title>span:nth-child(1){
    width: 100%;
    font-size: 25px;
    font-weight: 600;
    margin: 10px 0;
}
.title>span:nth-child(2){
    font-size: 14px;
    font-weight: 300;
    color: rgb(170, 168, 168);
}
.content{
    width: 100%;
    height: 20vh;
    background-color:rgb(170, 168, 168) ;
    margin: 20px 0 ;
}
.footer{
    font-size: 12px;
    line-height: 35px;
    border-bottom: 1px solid #ccc;
}
</style>