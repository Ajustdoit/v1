<template>
    <div class="menu">
        <router-link to="home">周公解梦</router-link>
        <router-link to="page1">每日一笑</router-link>
        <router-link to="page2">在线音乐</router-link>
        <router-link to="page3">美图</router-link>
        <router-link to="video">趣味视频</router-link>
        <router-link to="fund">基金数据</router-link>
    </div>
</template>

<script>
    export default {
        name: "menu_"
    }
</script>

<style scoped>
    .menu {
        width: 200px;
        height: 100%;
        background-color: #25344b;
        padding: 10px 20px;
        box-sizing: border-box;
    }

    .menu a {
        display: block;
        line-height: 36px;
        background: transparent;
        color: #fff;
        text-decoration: none;
        cursor: pointer;
        font-size: 12px;
    }
    .menu a:hover{
        color: #ff3d25;
    }
    .menu a:active{
        color: #ffc65c;
    }
</style>
