<template>
    <router-view class="h-100 w-100"></router-view>
</template>

<script>
import { getAuth } from 'firebase/auth'
import api from '@/axios/axios.ts'
export default {
    components: {},
    computed: {},
    methods: {},
    created() {
        const auth = getAuth()
        auth.onAuthStateChanged(user => {
            if (user) {
                // 获取用户的 authToken
                user.getIdToken(true)
                    .then(idToken => {
                        // 处理 token
                        console.log('Auth Token:', idToken)
                        this.$store.state.idToken = idToken
                    })
                    .catch(error => {
                        console.error('Error getting token:', error)
                    })
            } else {
                // User is signed out
                console.log('not login')
            }
        })
    },
    beforeMount() {},
}
</script>

<style lang="scss">
@import '/src/scss/SwalStyle.scss';
@import '/src/scss/GlobalStyles.scss';
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
