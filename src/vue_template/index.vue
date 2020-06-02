<template>
    <div class="index">
        <nav>
            <div :class="clas.h">
                <span>{{d.massage}}</span>
            </div>
            <div class="w">
                <span><span>地点：</span><span>{{d.l}}</span></span>
                <span><span>此时温度：</span><span>{{d.w}}</span></span>
                <span><span>此时天气：</span><span>{{d.t}}</span></span>
                <span><span>建议：</span><span>{{d.p}}</span></span>
                <span><span>湿度：</span><span>{{d.r}}</span></span>
            </div>

        </nav>
        <section>
            <menu_left></menu_left>
            <comtent_></comtent_>
        </section>
    </div>
</template>

<script>
    import menu_left from "./menu.vue";
    import comtent_ from "./content.vue";

    export default {
        name: "app",
        components: {
            menu_left,
            comtent_
        },
        data: function () {
            return {
                d:{
                    massage: "前端自动化构建",
                    w:"",
                    t:"",
                    p:"",
                    r:"",
                    l:""
                },
               clas:{
                    h:"h"
               }
            }
        },
        methods:{
            api: function () {
                this.$http.get('https://www.tianqiapi.com/api/', {
                        params: {
                            version: "v6",
                            appid: "83238391",
                            appsecret: "U6CIIvLV",
                        }
                    },
                ).then(function (res) {
                    console.log(res);
                    this.w=res.body.tem;
                    this.t=res.body.wea;
                    this.p=res.body.air_tips;
                    this.r=res.body.humidity;
                    this.l=res.body.city
                },function (res) {

                })
            },
        },
        created:function () {
            // this.api()
        }
    }

</script>

<style scoped>
    .index {
        width: 100%;
        height: 100%;
    }

    nav {
        width: 100%;
        height: 80px;
        background-color: #132838;
        font-size: 16px;
        line-height: 80px;
        box-sizing: border-box;
        color: #ffc65c;
        display: flex;
    }

    .h{
        width: 200px;
        background-color: #173638;
        padding: 0 20px;
        box-sizing: border-box;
    }
    .w{
        padding: 0 20px;
    }
    section {
        width: 100%;
        height: calc(100% - 80px);
        display: flex;
    }

</style>
