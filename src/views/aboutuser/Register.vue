<template>
    <div class="container mt-5 d-flex justify-content-center">
        <div class="layout">
            <article class="l-design-width">
                <div class="card">
                    <h2>註冊</h2>
                    <label class="input">
                        <input
                            class="input__field"
                            type="text"
                            placeholder=""
                            v-model="displayName"
                            @blur="checkDisplayName"
                        />
                        <span class="input__label">使用者名稱</span>
                    </label>
                    <div v-for="item in this.displayNameError">
                        <small class="errorhint">{{ item }}</small>
                    </div>
                    <label class="input">
                        <input
                            class="input__field"
                            type="email"
                            placeholder=""
                            v-model="email"
                            @blur="checkEmail"
                        />
                        <span class="input__label">電子信箱</span>
                    </label>
                    <small class="errorhint">{{ this.emailError }}</small>
                    <label class="input">
                        <input
                            class="input__field"
                            placeholder=""
                            :type="passwordFieldType"
                            v-model="password"
                            @blur="checkPassword"
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
                    <small class="errorhint">{{ this.passwordError }}</small>
                    <label class="input">
                        <input
                            class="input__field"
                            type="password"
                            placeholder=""
                            v-model="passwordConfirmValue"
                            @blur="passwordConfirm"
                        />
                        <span class="input__label">密碼確認</span>
                    </label>
                    <small class="errorhint">{{
                        this.passwordconfirmError
                    }}</small>
                    <div
                        class="mt-3"
                        id="recaptchaRegister"
                        style="overflow-x: auto; overflow-y: hidden"
                    ></div>
                    <small class="errorhint">{{ this.recaptchaError }}</small>
                    <div class="mt-3">
                        <button @click="register">註冊</button>
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
import { signUpWithEmail, signInWithGoogle } from '../../login/firebase'
export default {
    data() {
        return {
            email: '',
            password: '',
            passwordConfirmValue: '',
            displayName: '',
            displayNameError: [],
            emailError: '',
            passwordError: '',
            passwordFieldType: 'password',
            passwordconfirmError: '',
            sitekey: '6LcMlx8qAAAAAEO7Rag1tCQ1LooF2bqer_EN7ITo',
            myToken: '',
            recaptchaError: '',
        }
    },
    methods: {
        async register() {
            try {
                if (
                    this.checkDisplayName() &
                    this.checkPassword() &
                    this.checkReCAPTCHA() &
                    this.passwordConfirm() &
                    this.checkEmail()
                ) {
                    const result = await signUpWithEmail(
                        this.email,
                        this.password,
                        this.displayName,
                    )
                    this.$store.state.userInfo.notVerifyUser = result
                    console.log('驗證信已發送')
                    this.$router.push('emailverify')
                }
            } catch (error) {
                if (error.code === 'auth/email-already-in-use') {
                    this.emailError =
                        '※ 該信箱已經被註冊。請檢查您的信箱或嘗試登入。'
                } else {
                    console.error('註冊錯誤: ', error)
                }
            }
        },
        checkDisplayName() {
            const displayName = this.displayName
            const regex =
                /^(?!.*\s{2,})([a-zA-Z0-9\u4e00-\u9fa5]+(?:\s[a-zA-Z0-9\u4e00-\u9fa5]+)*){1,16}$/

            this.displayNameError = []

            if (displayName.length === 0) {
                this.displayNameError.push('※ 請填入使用者名稱')
                return false
            }
            if (displayName.length > 16) {
                this.displayNameError.push('※ 名稱長度不能超過16個字符')
            }
            if (/\s{2,}/.test(displayName)) {
                this.displayNameError.push('※ 名稱中不能有連續的空格')
            }
            if (/\s$/.test(displayName) || /^\s/.test(displayName)) {
                this.displayNameError.push('※ 名稱中不能以空格開頭或結尾')
            }
            if (regex.test(displayName)) {
                this.displayNameError = []
                return true
            }
            return false
        },
        checkEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (this.email == '') {
                this.emailError = '※ 請填入信箱'
                return false
            } else if (!emailRegex.test(this.email)) {
                this.emailError = '※ 信箱格式不正確'
                return false
            } else {
                this.emailError = ''
                return true
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
        passwordConfirm() {
            if (this.passwordConfirmValue === this.password) {
                this.passwordconfirmError = ''
                return true
            } else {
                this.passwordconfirmError = '※ 兩者密碼不一致，請重新輸入'
                return false
            }
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
                    Cookies.set(
                        'accountPermission',
                        JSON.stringify(this.result),
                        {
                            expires: 7,
                            secure: false,
                            sameSite: 'Strict',
                        },
                    )
                    console.log(Cookies.get('accountPermission'))
                } else {
                    console.error('Failed to check UID:', response.data.message)
                }
            } catch (error) {
                console.error('Error checking UID:', error)
            }
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
            grecaptcha.render(document.getElementById('recaptchaRegister'), {
                sitekey: this.sitekey,
                callback: this.getToken,
            })
        },
    },
    created() {},
    mounted() {
        this.loadReCAPTCHA()
    },
}
</script>
<style lang="scss" scoped>
@import '../../scss/aboutuser/styles.scss';
</style>
