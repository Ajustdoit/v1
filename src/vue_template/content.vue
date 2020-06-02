<template>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "content_"
    }
</script>

<style scoped>
     .content{
         width: calc(100% - 200px);
         height: 100%;
         background-color: #121e27;
         color: #fff;
         padding: 20px;
         box-sizing: border-box;
     }
</style>
