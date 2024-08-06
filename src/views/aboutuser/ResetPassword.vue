<template>
    <div class="container mt-5 d-flex justify-content-center">
        <div class="layout">
            <article class="l-design-width">
                <div class="card">
                    <h2>重置密碼</h2>
                    <label class="input">
                        <input
                            class="input__field"
                            type="password"
                            placeholder=""
                            :type="passwordFieldType"
                            v-model="newPassword"
                            @blur="checkPassword"
                        />
                        <span class="input__label">新密碼</span>
                        <button class="eye" @click="togglePasswordFieldType">
                            <i
                                v-if="passwordFieldType === 'text'"
                                class="bi bi-eye-fill"
                            ></i>
                            <i v-else class="bi bi-eye-slash-fill"></i>
                        </button>
                    </label>
                    <small class="errorhint">{{ passwordError }}</small>
                    <label class="input">
                        <input
                            class="input__field"
                            type="password"
                            placeholder=""
                            v-model="confirmPassword"
                        />
                        <span class="input__label">確認新密碼</span>
                    </label>
                    <small class="errorhint">{{ errorMessage }}</small>

                    <div class="mt-3">
                        <button @click="reset">重置密碼</button>
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
import { resetPassword } from '../../login/firebase'

export default {
    data() {
        return {
            newPassword: '',
            confirmPassword: '',
            errorMessage: '',
            passwordError: '',
            passwordFieldType: 'password',
        }
    },
    methods: {
        async reset() {
            if (!this.checkPassword) {
                return
            }
            if (this.newPassword !== this.confirmPassword) {
                this.errorMessage = '兩次輸入的密碼不一致'
                return
            }

            const queryParams = new URLSearchParams(window.location.search)
            const oobCode = queryParams.get('oobCode')
            const apiKey = queryParams.get('apiKey')

            if (!oobCode || !apiKey) {
                this.errorMessage = '無效的重置密碼請求'
                return
            }

            try {
                await resetPassword(oobCode, this.newPassword)
                alert('密碼已成功重置')
                this.$router.push('login')
            } catch (error) {
                console.error('重置密碼錯誤:', error)
                this.errorMessage = '重置密碼失敗，請稍後再試'
            }
        },
        checkPassword() {
            const password = this.password
            const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,24}$/

            if (!regex.test(password)) {
                this.passwordError =
                    '※ 密碼需由8~24個大小寫字母或數字組成，並包含至少一個字母和數字'
                return false
            } else {
                this.passwordError = ''
                return true
            }
        },
        togglePasswordFieldType() {
            if (this.passwordFieldType === 'password') {
                this.passwordFieldType = 'text'
            } else {
                this.passwordFieldType = 'password'
            }
        },
    },
}
</script>
<style lang="scss" scoped>
@import '../../scss/aboutuser/styles.scss';
</style>
