import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// 引入 BootstrapVue 组件
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// 引入 Element UI 组件
import '@/plugin/elementUi.js'
import customSwal from '@/plugin/sweetalert2'

//引入fortawesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import { onAuthStateChanged } from 'firebase/auth'
const firebaseModule = require('@/login/firebase.js')
const auth = firebaseModule.auth

onAuthStateChanged(auth, user => {
    if (user) {
        user.getIdToken().then(token => {
            sessionStorage.setItem('token', `Bearer ${token}`)
        })
    } else {
        sessionStorage.removeItem('token')
    }
})
// 使用 BootstrapVue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js')
Vue.prototype.$swal = customSwal

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
