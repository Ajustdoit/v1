<template>
    <div>
        <ul>
            <li v-for=" i in v_data">
                <video :src="i.data.content.data.playUrl" controls="controls"></video>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: "video_",
        data: function () {
            return {
                v_data: [],
                nav_data: [],
                content_apiUrl:"",
            }
        },

        methods: {
            api: function () {
                this.$http.get('https://api.apiopen.top/videoCategoryDetails', {
                        params: {
                            id:14
                        }
                    },
                ).then(function (res) {
                    this.v_data = res.body.result;
                    console.log(res);
                }, function () {
                })
            },

        },
        created: function () {
            this.api()
        }
    }
</script>

<style scoped lang="less">
    div{
        width: 100%;
        height: 100%;
    }
    ul {
        list-style: none;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        li {
            margin: 0 auto 30px auto;
            width: 90%;
            video {
                margin: 0 auto;
                width: 100%;
            }
        }
    }

</style>
