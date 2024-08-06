<template>
    <div class="container mt-5 layout">
        <b-card>
            <b-card-body>
                <p v-if="!user.emailVerified" style="color: red">
                    請先驗證您的信箱
                </p>
                <p>電子信箱: {{ user.email }}</p>
                <p v-if="user.emailVerified">驗證成功!</p>
                <b-button
                    v-if="!user.emailVerified"
                    variant="warning"
                    @click="resendVerificationEmail"
                    :disabled="isCooldown"
                    class="mt-3 ms-3"
                    >重新發送驗證信</b-button
                >
                <p
                    v-if="isCooldown && !user.emailVerified"
                    class="text-warning mt-2"
                >
                    請等待 {{ cooldownTime }} 秒後再次發送驗證信。
                </p>
            </b-card-body>
        </b-card>
    </div>
</template>

<script>
import { auth, resendVerificationEmail } from '../../login/firebase'
export default {
    data() {
        return {
            user: null,
            email: '',
            password: '',
            isVerifying: true,
            isCooldown: false,
            cooldownTime: 60,
        }
    },
    methods: {
        async Verify() {
            try {
                this.startCooldown()
                await this.checkEmailVerification()
            } catch (error) {
                this.isVerifying = false
            }
        },
        async checkEmailVerification() {
            this.isVerifying = true
            let user = auth.currentUser
            console.log('進行信箱驗證中....')
            while (user && !user.emailVerified) {
                await user.reload()
                user = auth.currentUser
                await new Promise(resolve => setTimeout(resolve, 2000)) // 每2秒检查一次
            }
            if (user && user.emailVerified) {
                console.log('信箱已驗證')
                this.isVerifying = false
                this.user = user
                this.$store.state.userInfo.user = this.user
                this.$store.state.userInfo.notVerifyUser = null
                //跳轉頁面
                localStorage.setItem('userInfo', JSON.stringify(result.user))
                this.$store.commit('SET_IS_LOGIN', true)
                this.$router.push('/home')
            }
        },
        async resendVerificationEmail() {
            try {
                this.startCooldown()
                await resendVerificationEmail()
                alert('驗證信已重新發送，請檢察您的信箱。')
            } catch (error) {
                console.error('重新發送驗證信錯誤: ', error)
            }
        },
        startCooldown() {
            this.isCooldown = true
            this.cooldownTime = 60
            const interval = setInterval(() => {
                this.cooldownTime--
                if (this.cooldownTime <= 0) {
                    clearInterval(interval)
                    this.isCooldown = false
                }
            }, 1000)
        },
    },
    beforeMount() {
        this.user = this.$store.state.userInfo.notVerifyUser.user
        this.Verify()
    },
}
</script>
<style lang="scss" scoped>
@import '../../scss/aboutuser/styles.scss';
</style>
