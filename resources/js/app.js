require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
    //Routes import
import routes from './routes';

const router = new VueRouter({
    routes, // short for `routes: routes`
    // hashbang: false,
    mode: "history"
})




const app = new Vue({
    el: '#app',
    router
});