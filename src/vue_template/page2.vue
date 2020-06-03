<template>
    <div class="music">
        <div>
            <input type="text" placeholder="请输入音乐名称" v-model="ip">
            <button @click="api">搜索</button>
            <button @click="clen_api">清除</button>
        </div>
        <section>
            <div v-for ="item in m_data">
                <div class="music_box">
                    <div class="music_">
                        <img :src="item.pic" alt="封面">
                    </div>
                    <span class="m_name">{{item.title}}</span>
                    <span class="m_p">{{item.author}}</span>
                    <audio controls="controls" :src="item.url"></audio>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "page2",
        data: function () {
            return {
                ip: "",
                m_data:""

            }
        },
        methods: {
            api: function () {
                if (this.ip.length <= 0) {
                    alert("请输入音乐名");
                    return false
                }
                this.$http.get('http://hn216.api.yesapi.cn/', {
                        params: {
                            s: "App.Music.Search",
                            app_key: "8F05A350B2A381AF6DB7D378F1CEF5D5",
                            input: this.ip,
                            filter: "name",
                            website: "netease"
                        }
                    },
                ).then(function (res) {
                    console.log(res);
                    this.m_data=res.body.data.music
                    console.log(this.m_data);
                }, function () {
                    alert("失败");
                })
            },
            clen_api:function () {
             this.m_data=[];
             this.ip=""
            }
        }
    }
</script>

<style scoped>
    .music {
        width: 100%;
        height: 100%;
    }

    section {
        width: 100%;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
    }

    .music_box {
        width: 200px;
        background-color: #132838;
        margin-right: 10px;
        transition: all .3s;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 10px;
        margin-bottom: 20px;
    }

    .music_box:hover {
        box-shadow: 0 0 4px 4px #ff7545;
    }
   .music_{
       display: flex;
       align-items: center;
       justify-content: center;
   }
    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        box-shadow: 0 0 2px 4px #1da568;
    }

    .m_name {
        font-size: 14px;
        margin: 6px 0;
        color: #ff3d25;
        display: inline-block;
        width: 90%;
        text-overflow: ellipsis;
        white-space:nowrap;
        text-align: center;
        overflow: hidden;
    }

    .m_p {
        font-size: 12px;
        color: rgba(29, 165, 104, 0.97);
        display: inline-block;
        width: 90%;
        text-overflow: ellipsis;
        white-space:nowrap;
        text-align: center;
        overflow: hidden;
    }
    audio{
        width: 210px;
        height: 26px;
        background: #ffffff;
        margin-top: 10px;
    }

</style>
