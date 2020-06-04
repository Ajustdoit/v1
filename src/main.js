import "./css/style.css"
import "./css/publick.less"

import Vue from 'vue/dist/vue.js'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
import Axios from 'axios';
import VueAxios from 'vue-axios';


import app from "./vue_template/index.vue"
import home from "./vue_template/home.vue";
import page1 from "./vue_template/page1.vue";
import page2 from "./vue_template/page2.vue";


Vue.use(VueResource);    //接口调用
Vue.use(VueRouter);       //路由使用


//阻止启动 浏览器打印消息
Vue.config.productionTip = false;

const routes = [
    { path: '/', component: home },
    { path: '/home', component: home },
    { path: '/page1', component: page1 },
    { path: '/page2', component: page2 }
];

const router = new VueRouter({
    routes
});

let vm=new Vue({
    el: "#app",
    // components: {
    //     app
    // },
    render: (createElements, context) => createElements(app),
    router
});





