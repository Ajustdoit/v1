<template>
    <div class="music">
        <div >
            <input type="text" placeholder="请输入音乐名称" v-model="ip">
            <button @click="api">搜索</button>
        </div>
        <section>
            <div class="music_box" >
                <span>周杰伦</span>
                <span>双截棍</span>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "page2",
        data:function(){
            return {
                ip:"",
                m_src:"",

            }
        },
        methods:{
            api:function () {
                if(this.ip.length<=0){
                    alert("请输入音乐名");
                    return false
                }
                this.$http.get('http://hn216.api.yesapi.cn/', {
                        params: {
                            s: "App.Music.Search",
                            app_key: "8F05A350B2A381AF6DB7D378F1CEF5D5",
                            input:this.ip,
                            filter:"name",
                            website:"netease"
                        }
                    },
                ).then(function (res) {
                    console.log(res);
                }, function () {
                    alert("失败");
                })
            }
        }
    }
</script>

<style scoped>
    .music{
        width: 100%;
        height: 100%;
    }
    section{
        width: 100%;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
    }
   .music_box{
       width: 300px;
       height: 300px;
       background-color: #132838;
       margin-right: 10px;
       transition: all .3s;
   }
    .music_box:hover{
        box-shadow: 0 0 4px 4px #ff7545;
    }

</style>
