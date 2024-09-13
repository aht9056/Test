<template>
    <div class="container mt-5 d-flex justify-content-center">
        <div class="layout">
            <article class="l-design-width">
                <div class="card">
                    <h2>登入</h2>
                    <label class="input">
                        <input
                            class="input__field"
                            type="email"
                            placeholder=""
                            v-model="loginEmail"
                        />
                        <span class="input__label">電子信箱</span>
                    </label>
                    <small class="errorhint">{{ this.emailError }}</small>
                    <label class="input">
                        <input
                            class="input__field"
                            :type="passwordFieldType"
                            placeholder=""
                            v-model="loginPassword"
                        />
                        <span class="input__label">密碼</span>
                        <button class="eye" @click="togglePasswordFieldType">
                            <i
                                v-if="passwordFieldType === 'text'"
                                class="bi bi-eye-fill"
                            ></i>
                            <i v-else class="bi bi-eye-slash-fill"></i>
                        </button>
                    </label>
                    <div class="mt-1 d-flex justify-content-between">
                        <small class="errorhint">{{
                            this.passwordError
                        }}</small>
                        <a
                            @click="goforgetPassword()"
                            class="btn-outline-dark register_link ms-1"
                        >
                            忘記密碼</a
                        >
                    </div>
                    <div
                        class="mt-1"
                        id="recaptchaLogin"
                        style="overflow-x: auto; overflow-y: hidden"
                    ></div>
                    <small class="errorhint">{{ this.recaptchaError }}</small>
                    <div class="mt-3">
                        <button @click="loginWithEmail">登入</button>
                    </div>
                    <div class="mt-3 d-flex">
                        <span>還沒有帳號嗎? /</span>
                        <a
                            @click="goRegister"
                            class="btn-outline-dark register_link ms-1"
                        >
                            我要註冊</a
                        >
                    </div>
                    <div class="mt-3 d-flex justify-content-center">
                        <span class="line"
                            >&emsp;使用其他方式快速登入&emsp;</span
                        >
                    </div>
                    <div class="mt-3">
                        <a
                            href="#!"
                            @click="loginWithGoogle"
                            class="btn bsb-btn-2xl btn-outline-dark rounded-0 d-flex align-items-center google"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-google text-danger"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
                                />
                            </svg>
                            <span class="ms-2 fs-6 flex-grow-1"
                                >Google 登入</span
                            >
                        </a>
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
import api from '@/axios/axios'
import Cookies from 'js-cookie'
import {
    signInWithGoogle,
    signInWithEmail,
    resetPassword,
} from '../../login/firebase'
export default {
    data() {
        return {
            loginEmail: '',
            loginPassword: '',
            emailError: '',
            passwordError: '',
            passwordFieldType: 'password',
            sitekey: '6LcMlx8qAAAAAEO7Rag1tCQ1LooF2bqer_EN7ITo',
            myToken: '',
            recaptchaError: '',
            mode: '',
            oobCode: '',
        }
    },
    methods: {
        async loginWithGoogle() {
            try {
                const result = await signInWithGoogle()
                this.$store.state.userInfo.user = result.user
                this.saveAccountInfo(this.$store.state.userInfo.user)
                await this.checkUid(result.user)
                //跳轉頁面
                this.$store.commit('SET_IS_LOGIN', true)
                this.$router.push('/home')
            } catch (error) {
                console.error('登入錯誤: ', error)
            }
        },
        saveAccountInfo(accountData) {
            Cookies.set('accountInfo', JSON.stringify(accountData), {
                expires: 7,
                secure: false,
                sameSite: 'Strict',
            })
            console.log(Cookies.get('accountInfo'))
        },
        async checkUid() {
            try {
                const response = await api.post('/api/checkPermission', {
                    uid: this.$store.state.userInfo.user.uid,
                })
                if (response.data.success) {
                    this.result = response.data.exists
                    Cookies.set('uid', this.$store.state.userInfo.user.uid, {
                        expires: 7,
                        secure: false,
                        sameSite: 'Strict',
                    })
                    this.$store.state.userInfo = this.result
                    Cookies.set(
                        'accountPermission',
                        JSON.stringify(this.result),
                        {
                            expires: 7,
                            secure: false,
                            sameSite: 'Strict',
                        },
                    )
                } else {
                    console.error('Failed to check UID:', response.data.message)
                }
            } catch (error) {
                console.error('Error checking UID:', error)
            }
        },
        async loginWithEmail() {
            try {
                if (this.checkReCAPTCHA()) {
                    // Step 1: 登入
                    const result = await signInWithEmail(
                        this.loginEmail,
                        this.loginPassword,
                    )
                    // Step 2: 檢查信箱驗證狀態
                    if (!result.user.emailVerified) {
                        this.$store.state.userInfo.notVerifyUser = result
                        alert('請先驗證您的信箱。')
                        this.$router.push('emailverify')
                    } else {
                        this.$store.state.userInfo.user = result.user
                        this.saveAccountInfo(this.$store.state.userInfo.user)
                        await this.checkUid(result.user)
                        //跳轉頁面
                        this.$store.commit('SET_IS_LOGIN', true)
                        this.$router.push('/home')
                    }
                }
            } catch (error) {
                this.emailError = ''
                this.passwordError = ''
                if (error.code === 'auth/user-not-found') {
                    this.emailError = '※ 無效的 Email 地址'
                } else if (error.code === 'auth/wrong-password') {
                    this.passwordError = '※ 密碼錯誤'
                } else {
                    console.error('登入錯誤: ', error)
                }
            }
        },
        goRegister() {
            this.$router.push('register')
        },
        togglePasswordFieldType() {
            if (this.passwordFieldType === 'password') {
                this.passwordFieldType = 'text'
            } else {
                this.passwordFieldType = 'password'
            }
        },
        getToken: function (token) {
            this.myToken = token
            this.checkReCAPTCHA()
        },
        loadReCAPTCHA() {
            grecaptcha.render(document.getElementById('recaptchaLogin'), {
                sitekey: this.sitekey,
                callback: this.getToken,
            })
        },
        checkReCAPTCHA() {
            if (this.myToken == '') {
                this.recaptchaError = '※ 機器人驗證失敗'
                return false
            } else {
                this.recaptchaError = ''
                return true
            }
        },
        goforgetPassword() {
            this.$router.push('forgetPassword')
        },
    },
    mounted() {
        this.loadReCAPTCHA()
    },
}
</script>
<style lang="scss" scoped>
@import '../../scss/aboutuser/styles.scss';
</style>
