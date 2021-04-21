<template>
    <div id="app">
        <h1>详情</h1>
        <Nav />
        <good-action></good-action>
    </div>
</template>

<script>
import GoodAction from './childComps/GoodAction'
import Nav from './childComps/Nav'
export default {
    components:{
        Nav,
        GoodAction,
    }
}
</script>

<style lang="less" scoped>

</style>
