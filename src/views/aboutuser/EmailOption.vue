<template>
    <div>{{ showTitle }}</div>
</template>
<script>
import { verifyResetCode } from '../../login/firebase'
export default {
    async created() {
        const { oobCode, mode, apiKey } = this.getQueryParams()
        if (mode === 'verifyEmail') {
            if (!oobCode) {
                this.showTitle = '無效的信箱驗證連結'
            } else {
                window.location.href =
                    'https://myproject-dd0cb.firebaseapp.com/__/auth/action?mode=verifyEmail&oobCode=' +
                    oobCode +
                    '&apiKey=' +
                    apiKey +
                    '&lang=en'
                return
            }
        } else if (mode === 'resetPassword') {
            try {
                await verifyResetCode(oobCode)
                this.$router.push({
                    name: 'resetPassword',
                    query: { oobCode, apiKey },
                })
            } catch (error) {
                this.showTitle = '重置密碼連結無效或已過期'
            }
        }
    },
    data() {
        return {
            showTitle: '請稍後...',
        }
    },
    methods: {
        getQueryParams() {
            const url = new URL(window.location.href)

            const searchParams = new URLSearchParams(url.search)

            const hashParams = new URLSearchParams(url.hash.split('?')[1])

            const params = new URLSearchParams()
            searchParams.forEach((value, key) => {
                params.append(key, value)
            })
            hashParams.forEach((value, key) => {
                params.append(key, value)
            })

            const mode = params.get('mode')
            const oobCode = params.get('oobCode')
            const apiKey = params.get('apiKey')

            return { mode, oobCode, apiKey }
        },
    },
}
</script>
<style lang="scss">
div {
    color: var(--color-content-text);
}
</style>
