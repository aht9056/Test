import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const moduleUserInfo = {
    state: {
        user: null,
        notVerifyUser: null,
        userInfoData: null,
    },
}
const moduleGeneralInfo = {
    state: {
        typeList: {},
        publisherList: {},
    },
}

export default new Vuex.Store({
    state: { isLogin: false, idToken: null },
    actions: {},
    mutations: {
        SET_IS_LOGIN(state, value) {
            state.isLogin = value
        },
    },
    getters: { isLogin: state => state.isLogin },
    modules: {
        userInfo: moduleUserInfo,
        generalInfo: moduleGeneralInfo,
    },
})
