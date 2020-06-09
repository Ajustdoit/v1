<template>
    <div>hehe</div>
</template>

<script>
    export default {
        name: "fund",
        methods: {
            api: function () {
                this.$http.get('http://localhost:8888/cfapi/list/product', {
                    params:{
                        name:"你好"
                    }
                    },
                ).then(function (res) {
                    console.log(res);
                }, function (res) {
                })
            },
        },
        created: function () {
            // this.api()
        }
    }

</script>

<style scoped>

</style>
