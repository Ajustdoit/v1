<template>
    <div class="music">
        <div>
            <input type="text" placeholder="请输入音乐名称" v-model="ip">
            <button @click="api">搜索</button>
            <button @click="clen_api">清除</button>
        </div>
        <div class="music_root">
            <i>来源</i>
            <ul>
                <li><span>网易云</span> <input type="radio" name="from_m" value="netease" v-model="f_m"></li>
                <li><span>QQ音乐</span> <input type="radio" name="from_m" value="qq" v-model="f_m"></li>
                <li><span>酷狗</span> <input type="radio" name="from_m" value="kugou" v-model="f_m"></li>
                <li><span>酷我</span> <input type="radio" name="from_m" value="kuwo" v-model="f_m"></li>
                <li><span>虾米</span> <input type="radio" name="from_m" value="xiami" v-model="f_m"></li>
                <li><span>百度</span> <input type="radio" name="from_m" value="baidu" v-model="f_m"></li>
                <li><span>一听</span> <input type="radio" name="from_m" value="1ting" v-model="f_m"></li>
                <li><span>咪咕</span> <input type="radio" name="from_m" value="migu" v-model="f_m"></li>
                <li><span>荔枝</span> <input type="radio" name="from_m" value="lizhi" v-model="f_m"></li>
                <li><span>蜻蜓</span> <input type="radio" name="from_m" value="qingting" v-model="f_m"></li>
                <li><span>喜马拉雅</span><input type="radio" name="from_m" value="ximalaya" v-model="f_m"></li>
                <li><span>全民K歌</span><input type="radio" name="from_m" value="kg" v-model="f_m"></li>
                <li><span>5sing原创</span><input type="radio" name="from_m" value="5singyc" v-model="f_m"></li>
                <li><span>5sing翻唱</span><input type="radio" name="from_m" value="5singfc" v-model="f_m"></li>
            </ul>
        </div>
        <section>
            <div class="updata_animation" v-show="anmimation_show">
                <i class="iconfont iconxuanzhuan"></i>
            </div>
            <div v-for="(item,i) in m_data">
                <div class="music_box">
                    <div class="music_" :class="{'music_annimation':music_a===i}">
                        <img :src="item.pic" alt="封面">
                    </div>
                    <span class="m_name">{{item.title}}</span>
                    <span class="m_p">{{item.author}}</span>
                    <audio
                            controls="controls"
                            :src="item.url"
                            :ref="audioIndex"
                            @play="onplayIng(i)"
                            @pause="p_play()">
                    </audio>
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
                m_data: "",
                music_a: "",
                audioIndex: "audioIndex",
                index_: 0,
                f_m:"netease",
                anmimation_show:false
            }
        },
        methods: {
            api: function () {
                if (this.ip.length <= 0) {
                    alert("请输入音乐名");
                    return false
                }
                this.m_data=[];
                this.anmimation_show=true;
                this.$http.get('http://hn216.api.yesapi.cn/', {
                        params: {
                            s: "App.Music.Search",
                            app_key: this.appKey,
                            input: this.ip,
                            filter: "name",
                            website: this.f_m
                        }
                    },
                ).then(function (res) {
                    if(res.body.data.err_msg){
                        alert(res.body.data.err_msg);
                        this.anmimation_show=false;
                        return false
                    }
                    this.anmimation_show=false;
                    this.m_data = res.body.data.music;
                },function () {
                    alert("失败");
                })
            },
            clen_api: function () {
                this.m_data = [];
                this.ip = ""
            },
            onplayIng: function (d) {
                let $this = this;
                this.music_a = d;
                this.$refs.audioIndex.forEach(function (item, index) {
                    if (d !== index) {
                        item.pause();
                    } else {
                        setTimeout(function () {
                            $this.music_a = index
                        }, 300)
                    }
                });
            },
            p_play: function () {
                this.music_a = ""
            }
        },
        computed:{

        }
    }
</script>

<style scoped lang="less">
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

    .music_ {
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
        white-space: nowrap;
        text-align: center;
        overflow: hidden;
    }

    .m_p {
        font-size: 12px;
        color: rgba(29, 165, 104, 0.97);
        display: inline-block;
        width: 90%;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        overflow: hidden;
    }

    audio {
        width: 210px;
        height: 26px;
        background: #ffffff;
        margin-top: 10px;
    }

    .music_annimation {
        animation: myfirst 10s infinite linear
    }

    .music_root{
        margin-top: 8px;
    }
    .music_root,
    .music_root ul{
        display: flex;
        font-size: 12px;
        align-items: center;
    }
    .music_root i{
        margin-right: 10px;
    }
    .music_root ul li {
        display: flex;
        list-style: none;
        margin-right: 20px;
        align-items: center;
    }
    span,label{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
   .updata_animation{
       width: 100%;
       height: 300px;
       display: flex;
       align-items: center;
       justify-content: center;
       i{
           font-size: 100px;
           color: rgba(255, 198, 92, 0.55);
           animation: myfirst 2s infinite;
           display: block;
       }
   }
    @keyframes myfirst {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
