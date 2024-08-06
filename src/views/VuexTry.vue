<template>
    <div class="container mt-5">
        <b-alert v-if="isVerifying" variant="warning"> 驗證中... </b-alert>

        <b-card v-if="!user">
            <b-card-body>
                <b-button variant="primary" @click="loginWithGoogle">
                    使用 Google 登入
                </b-button>
            </b-card-body>
        </b-card>

        <b-card v-else>
            <b-card-body>
                <template v-if="!user.emailVerified">
                    <p v-if="!user.emailVerified" class="text-danger">
                        請先驗證您的信箱
                    </p>
                    <p>電子信箱: {{ user.email }}</p>
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
                </template>
                <template v-else>
                    <p>歡迎, {{ user.displayName }}</p>
                    <p>電子信箱: {{ user.email }}</p>
                    <img
                        v-if="user.photoURL"
                        :src="user.photoURL"
                        alt="用戶照片"
                        class="img-thumbnail"
                    />
                    <b-button variant="danger" @click="logout" class="mt-3"
                        >登出</b-button
                    >
                </template>
            </b-card-body>
        </b-card>

        <b-card v-if="!user" class="mt-3">
            <b-card-header>註冊</b-card-header>
            <b-card-body>
                <b-form @submit.prevent="register">
                    <b-form-group label="Email">
                        <b-form-input
                            type="email"
                            v-model="email"
                            required
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group label="Password">
                        <b-form-input
                            type="password"
                            v-model="password"
                            required
                        ></b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="success" class="mt-3"
                        >註冊</b-button
                    >
                </b-form>
            </b-card-body>
        </b-card>

        <b-card v-if="!user" class="mt-3">
            <b-card-header>登入</b-card-header>
            <b-card-body>
                <b-form @submit.prevent="loginWithEmail">
                    <b-form-group label="Email">
                        <b-form-input
                            type="email"
                            v-model="loginEmail"
                            required
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group label="Password">
                        <b-form-input
                            type="password"
                            v-model="loginPassword"
                            required
                        ></b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="primary" class="mt-3"
                        >登入</b-button
                    >
                </b-form>
            </b-card-body>
        </b-card>
    </div>
</template>

<script>
import {
    auth,
    signInWithGoogle,
    signOut,
    signUpWithEmail,
    signInWithEmail,
    resendVerificationEmail,
    addUserInfo,
} from '../login/firebase'
export default {
    data() {
        return {
            user: null,
            email: '',
            password: '',
            loginEmail: '',
            loginPassword: '',
            phone: '',
            verificationCode: '',
            verificationId: null,
            isVerifying: false,
            isCooldown: false,
            cooldownTime: 60,
        }
    },
    methods: {
        async loginWithGoogle() {
            try {
                const result = await signInWithGoogle()
                this.user = result.user
            } catch (error) {
                console.error('登录错误: ', error)
            }
        },
        async logout() {
            try {
                await signOut()
                this.user = null
                sessionStorage.clear()
            } catch (error) {
                console.error('登出错误: ', error)
            }
        },
        async register() {
            try {
                const result = await signUpWithEmail(this.email, this.password)
                this.user = result.user
                console.log('驗證信已發送')

                this.isVerifying = true
                this.startCooldown()
                await this.checkEmailVerification()
            } catch (error) {
                if (error.code === 'auth/email-already-in-use') {
                    alert('該信箱已經被註冊。請檢查您的信箱或嘗試登入。')
                } else {
                    console.error('註冊錯誤: ', error)
                }
                this.isVerifying = false
            }
        },
        async loginWithEmail() {
            try {
                // Step 1: 登录
                const result = await signInWithEmail(
                    this.loginEmail,
                    this.loginPassword,
                )
                this.user = result.user

                // Step 2: 检查邮箱验证状态
                if (!this.user.emailVerified) {
                    this.isVerifying = true
                    alert('請先驗證您的信箱。')
                    await this.checkEmailVerification()
                }
            } catch (error) {
                console.error('登入錯誤: ', error)
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
                this.isVerifying = false
                this.user = user
                console.log('信箱以驗證')
                this.test()
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
        async test() {
            try {
                let infoData = {
                    email: this.user.email,
                }
                await addUserInfo(this.user.uid, infoData)
            } catch (error) {
                console.error(error)
            }
        },
    },
    created() {},
}
</script>
