<template>
    <router-view class="h-100 w-100"></router-view>
</template>

<script>
import { getAuth } from 'firebase/auth'
import api from '@/axios/axios.ts'
export default {
    components: {},
    computed: {},
    methods: {
        async getTypeList() {
            try {
                const response = await api.get('/getTypeList')
                this.$store.state.generalInfo.typeList = response.data.typeList
                console.log(this.$store.state.generalInfo.typeList)
            } catch (error) {
                console.error('Error fetching type list:', error)
            }
        },
    },
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
    beforeMount() {
        this.getTypeList()
    },
    mounted() {},
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
