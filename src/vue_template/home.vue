<template>
    <div>
        <div class="input_g">
            <label>请输入梦境关键字</label>
            <input type="text" v-model="ip">
            <button @click="api">搜索</button>
            <button @click="clea_api">清空</button>
        </div>
        <div class="content"><span>{{mas}}</span></div>
    </div>
</template>

<script>
    export default {
        name: "home",
        data:function () {
            return{
                ip:"",
                mas:"请输入梦境关键字并搜索"
            }
        },
        methods:{
          api:function () {
              if(this.ip.length<=0){
                  alert("请输入关键字");
                  return false
              }
              this.$http.get('http://hn216.api.yesapi.cn/', {
                      params: {
                          dream_keyword:this.ip,
                          s:"App.Common_Dream.Explain",
                          app_key: this.appKey,
                      }
                  },
              ).then(function (res) {
                  this.mas=res.body.data.explain_result||res.body.data.err_msg;
                  console.log(res);
              },function (res) {
                  alert("失败");
              })
          },
            clea_api:function () {
                this.mas="请输入梦境关键字并搜索";
                this.ip=""
            }
        }
    }
</script>

<style scoped>
    .input_g label {
        line-height: 24px;
        margin-right: 10px;
        font-size: 12px;
    }

    .content{
        font-size: 12px;
        color: #1da568;
        padding: 20px 0;
        line-height: 24px;
        margin-top: 20px;
        max-height: 700px;
        overflow-y: auto;
    }

</style>
