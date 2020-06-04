<template>
    <div>
        <p>
            <button @click="UpdataApi">刷新</button>
        </p>
        <ul v-for="(item,index) in massage">
            <li><span>{{(index+1)+":----"}}{{item}}</span></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "page1",
        data: function () {
            return {
                massage: []
            }
        },
        methods: {
            api: function () {
                this.$http.get('http://hn216.api.yesapi.cn/', {
                        params: {
                            s: "App.Common_Joke.RandOne",
                            num: 10,
                            app_key: this.appKey,
                        }
                    },
                ).then(function (res) {
                    console.log(res);
                    this.massage = res.body.data.joke[0];
                    console.log(this.massage);
                }, function (res) {
                    alert("失败");
                })
            },
            UpdataApi:function () {
                this.massage=[];
                this.api()
            }
        },
        created: function () {
            this.api()
        }
    }
</script>

<style lang="less" scoped>
    p {
        margin-bottom: 20px;
    }

    li {
        font-size: 12px;
        margin-bottom: 20px;
        color: #1da568;
        list-style: none;
    }
</style>
