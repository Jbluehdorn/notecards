import Router from 'vue-router'

export default new Router({
    routes: [
        {
            path: '/',
            component: require('./components/Index')
        }
    ]
})