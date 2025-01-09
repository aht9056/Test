/* eslint-disable indent */
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Index from '../views/index.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'index',
        // redirect: '/Start', // 重定向到"/Start"路径
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
                path: '/login',
                name: 'login',
                component: () => import('../views/aboutuser/Login.vue'),
            },
            {
                path: '/register',
                name: 'register',
                component: () => import('../views/aboutuser/Register.vue'),
            },
            {
                path: '/emailverify',
                name: 'emailverify',
                component: () => import('../views/aboutuser/EmailVerify.vue'),
            },
            {
                path: '/emailoption',
                name: 'emailoption',
                component: () => import('../views/aboutuser/EmailOption.vue'),
            },
            {
                path: '/forgetpassword',
                name: 'forgetpassword',
                component: () =>
                    import('../views/aboutuser/ForgetPassword.vue'),
            },
            {
                path: '/resetPassword',
                name: 'resetPassword',
                component: () => import('../views/aboutuser/ResetPassword.vue'),
            },
        ],
    },
    {
        path: '/publisher',
        name: 'publisher',
        component: () => import('../views/Publisher.vue'),
        children: [
            {
                path: 'addBook',
                name: 'addBook',
                component: () => import('../views/publisher/AddBook.vue'),
            },
            {
                path: 'requestList',
                name: 'requestList',
                component: () => import('../views/publisher/RequestList.vue'),
            },
        ],
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('../views/Admin.vue'),
        children: [
            {
                path: 'requestList',
                name: 'requestList',
                component: () => import('../views/admin/RequestList.vue'),
            },
            {
                path: 'bookMangement',
                name: 'bookMangement',
                component: () => import('../views/admin/BookMangement.vue'),
            },
        ],
    },
]

const router = new VueRouter({
    mode: 'hash',
    base: '/',
    routes,
})
router.beforeEach((to, from, next) => {
    if (to.path === '/') {
        next('/home')
    } else {
        next()
    }
})
const VueRouterPush = VueRouter.prototype.push as (to: any) => Promise<any>

VueRouter.prototype.push = function push(to: any) {
    return (VueRouterPush.call(this, to) as Promise<any>).catch(
        (err: Error) => {
            if (err.name !== 'NavigationDuplicated') {
                throw err
            }
        },
    )
}

export default router
