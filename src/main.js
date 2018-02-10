import Vue from 'vue'
import App from './App.vue'

import jQuery from 'jquery'
global.jQuery = jQuery

let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.min.css'

import axios from 'axios'
global.axios = axios

import VueRouter from 'vue-router'
Vue.use(VueRouter)


import Posts from './components/Posts';
import Photos from './components/Photos';

const router = new VueRouter({
    routes: [
        {path:'', component: Posts},
        {path:'/photos', component: Photos}
    ],
    mode:'history'
})

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
