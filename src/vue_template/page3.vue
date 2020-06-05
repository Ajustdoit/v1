<template>
    <div class="page3">
        <p>
            <button @click="UpdataApi">刷新</button>
        </p>
        <div class="img_box">
            <img v-for="(i,index) of items" :src="i.img" @load="showImg(index,$event)" v-show="i.i_show" alt="图片">
        </div>
    </div>
</template>

<script>
    export default {
        name: "page3",
        data: function () {
            return {
                items: "",
            }
        },
        methods: {
            api: function () {
                this.$http.get('https://api.apiopen.top/getImages', {
                        params: {
                            count: 10
                        }
                    },
                ).then(function (res) {
                    res.body.result.forEach(function (item) {
                        item.i_show = false;
                    });
                    this.items = res.body.result;
                }, function () {
                    alert("失败");
                })
            },
            showImg: function (d,$e) {
                this.items[d].i_show = true;
                console.log($e);

            },
            UpdataApi: function () {
                this.items = "";
                this.api()
            }
        },
        created: function () {
            this.api();
        }
    }
</script>

<style scoped lang="less">
   .page3{
       width: 100%;
       height: 100%;
   }
    div.img_box {
        width: 100%;
        height: calc(100% - 46px);
        margin-top: 20px;
        overflow-y: auto;
        img {
            margin-bottom: 20px;
            width: calc(50% - 20px);
            margin-right: 10px;
        }
    }

</style>
