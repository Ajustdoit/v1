<template>
    <div>
      {{massage}}
    </div>
</template>

<script>
    export default {
        name: "page1",
        data:function () {
            return{
                massage:""
            }
        },
        methods:{
          api:function () {
              this.$http.get('http://hn216.api.yesapi.cn/', {
                      params: {
                          s:"App.Hello.World",
                          name:"呵呵",
                          app_key: "8F05A350B2A381AF6DB7D378F1CEF5D5",
                      }
                  },
              ).then(function (res) {
                  console.log(res);
                  this.massage=res.body.msg
              },function (res) {
                  alert("失败");
              })
          }
        },
        created:function () {
            this.api()
        }
    }
</script>

<style scoped>

</style>
