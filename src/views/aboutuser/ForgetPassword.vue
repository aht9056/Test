<template>
    <div class="container mt-5 d-flex justify-content-center">
        <div class="layout">
            <article class="l-design-width">
                <div class="card">
                    <h2>忘記密碼</h2>
                    <label class="input">
                        <input
                            class="input__field"
                            type="email"
                            placeholder=""
                            v-model="email"
                        />
                        <span class="input__label">電子信箱</span>
                    </label>
                    <small class="errorhint">{{ this.emailError }}</small>

                    <div class="mt-3">
                        <button @click="sendEmail">送出驗證信</button>
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>
<script>
import { emailIsRegister, sendResetEmail } from '../../login/firebase'
export default {
    data() {
        return {
            email: '',
            emailError: '',
        }
    },
    methods: {
        async sendEmail() {
            const signInMethods = await emailIsRegister(this.email)
            if (signInMethods.length === 0) {
                this.emailError = '這個電子信箱尚未註冊。'
            } else {
                this.emailError = ''
                try {
                    await sendResetEmail(this.email)
                    alert('重設密碼的驗證信已發送。')
                } catch (error) {
                    console.error('發送重設密碼郵件時發生錯誤:', error)
                }
            }
        },
    },
}
</script>
<style lang="scss" scoped>
@import '../../scss/aboutuser/styles.scss';
</style>
