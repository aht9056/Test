import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const modulePurchaseDog = {
    state: {
        dog: 999,
    },
    mutations: {},
    getters: {},
    actions: {},
}

const modulePurchaseCar = {
    state: {
        car: 1000,
    },
    mutations: {},
    getters: {},
    actions: {},
}
export default new Vuex.Store({
    state: {
        total: 0,
    },
    actions: {},
    mutations: {},
    getters: {},
    modules: {
        purchaseDog: modulePurchaseDog,
        purchaseCar: modulePurchaseCar,
    },
})
