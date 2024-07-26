import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// 引入 Bootstrap 的样式文件
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

// 引入 BootstrapVue 组件

import '@/plugin/elementUi.js'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
