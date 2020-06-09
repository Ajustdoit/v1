<template>
    <div>
        {{$store.state.name}}
    </div>
</template>

<script>
    export default {
        name: "vuex_page",
        mounted(){
            console.log(this.$store.state.name);
        }
    }
</script>

<style scoped>

</style>
