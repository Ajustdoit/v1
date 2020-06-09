<template>
    <div>
    </div>
</template>

<script>
    export default {
        name: "vuex_page",
        mounted(){
            console.log("test store",this.$store.state.name);

        }
    }
</script>

<style scoped>

</style>
