import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import router from './router'

Vue.use(VueResource)
Vue.use(VueRouter)

const vm = new Vue({
    render: h => h(require('./App.vue')),
    router
}).$mount('#app')