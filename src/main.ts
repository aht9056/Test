import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// 引入 BootstrapVue 组件
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// 引入 Bootstrap 的样式文件
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
// 引入 Element UI 组件
import '@/plugin/elementUi.js'
import customSwal from '@/plugin/sweetalert2'
// 使用 BootstrapVue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

Vue.prototype.$swal = customSwal
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
