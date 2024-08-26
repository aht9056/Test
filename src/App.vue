<template>
    <router-view :key="isLogin" class="h-100 w-100"></router-view>
</template>

<script>
import api from '@/axios/axios.ts'
import { mapGetters } from 'vuex'
export default {
    components: {},
    computed: {
        ...mapGetters({
            isLogin: 'isLogin',
        }),
    },
    methods: {
        async getInitData() {
            await this.getTypeList()
        },
        async getTypeList() {
            try {
                const response = await api.get('/api/getTypeList')
                if (response.data.success) {
                    this.result = response.data.typeList
                    this.$store.state.generalInfo.typeList =
                        response.data.typeList
                } else {
                    console.error('Failed to check UID:', response.data.message)
                }
            } catch (error) {
                console.error('Error checking UID:', error)
            }
        },
    },
    created() {
        this.getInitData()
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
