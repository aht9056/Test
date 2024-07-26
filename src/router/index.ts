/* eslint-disable indent */
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Index from '../views/index.vue'
Vue.use(VueRouter)

// const routes: Array<RouteConfig> = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'index',
        redirect: '/Start', // 重定向到"/Start"路径
        component: () => import('../views/index.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/HomeView.vue'),
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('../views/AboutView.vue'),
            },
            {
                path: '/vuex',
                name: 'vuex',
                component: () => import('../views/VuexTry.vue'),
            },
        ],
    },
    {
        path: '/Start',
        name: 'Start',
        component: () => import('../views/Start.vue'),
    },
]

const router = new VueRouter({
    mode: 'hash',
    base: '/',
    routes,
})

export default router
