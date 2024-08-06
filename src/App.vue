<template>
    <router-view :key="isLogin" class="h-100 w-100"></router-view>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    components: {},
    computed: {
        ...mapGetters({
            isLogin: 'isLogin',
        }),
    },
    methods: {},
    beforeMount() {
        var data = localStorage.getItem('userInfo')
        console.log(JSON.parse(data))
    },
}
</script>

<style lang="scss">
@import '/src/scss/GlobalStyles.scss';
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
