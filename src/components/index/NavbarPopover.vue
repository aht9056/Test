<template>
    <div>
        <el-popover
            placement="bottom"
            width="auto"
            trigger="click"
            popper-class="popover-style"
        >
            <div class="popover-content">
                <div v-if="user == null">
                    <div
                        class="popover-item d-flex align-items-center btn"
                        @click="goLogin"
                    >
                        <i class="bi bi-box-arrow-in-right"></i> 登入
                    </div>
                </div>
                <div v-else>
                    <div class="popover-item" style="cursor: auto">
                        <i class="bi bi-person-circle"></i>&emsp;{{
                            user.displayName
                        }}
                    </div>
                    <div
                        class="popover-item d-flex align-items-center btn"
                        @click="logout"
                    >
                        <i class="bi bi-box-arrow-in-left"></i> 登出
                    </div>
                </div>
                <div class="popover-item d-flex align-items-center btn">
                    <i class="bi bi-cart2"></i> 購物車
                </div>
                <div class="popover-item d-flex align-items-center btn">
                    <i class="bi bi-calendar-check"></i> 我的訂單
                </div>
                <div class="popover-item d-flex align-items-center btn">
                    <i class="bi bi-translate"></i> 語言
                </div>
                <div
                    class="popover-item d-flex align-items-center btn"
                    @click="toggleTheme"
                >
                    <i class="bi bi-moon"></i> 夜間模式
                </div>
            </div>
            <button class="float-end me-1 btn" slot="reference">
                <i class="h3 bi bi-gear-fill"></i>
            </button>
        </el-popover>
    </div>
</template>

<script>
import { signOut } from '../../login/firebase'
import Cookies from 'js-cookie'
export default {
    data() {
        return {}
    },
    computed: {
        user() {
            return this.$store.state.userInfo.user
        },
    },
    methods: {
        async logout() {
            try {
                this.$store.state.userInfo.user = null
                this.$store.state.userInfo.userInfoData = null
                this.$store.state.generalInfo.typeList = {}
                Cookies.remove('uid', {
                    secure: false,
                    sameSite: 'Strict',
                })
                Cookies.remove('checkPermission', {
                    secure: false,
                    sameSite: 'Strict',
                })
                Cookies.remove('accountInfo', {
                    secure: false,
                    sameSite: 'Strict',
                })
                signOut()
                this.$store.commit('SET_IS_LOGIN', false)
                this.$router.push('/home')
            } catch (error) {
                console.error('登出错误: ', error)
            }
        },
        toggleTheme() {
            var mybody = document.body

            if (mybody.classList.contains('dark-theme')) {
                mybody.classList.remove('dark-theme')
            } else {
                mybody.classList.add('dark-theme')
            }
        },
        goLogin() {
            this.$emit('update:selected-page', 'login')
        },
    },
    beforeMount() {
        const accountInfo = Cookies.get('accountInfo')
        if (accountInfo !== undefined) {
            this.$store.state.userInfo.user = JSON.parse(accountInfo)
        }
    },
}
</script>

<style lang="scss" scoped>
.popover-content {
    padding: 10px;
}
.popover-item {
    cursor: pointer;
    padding: 5px 0;
    font-size: 20px;
    color: var(--color-navbar-text);
    &:hover {
        color: var(--color-primary);
    }
}
.popover-item i {
    margin-right: 8px;
}
.btn {
    color: var(--color-navbar-text);
    &:hover {
        color: var(--color-primary);
    }
    &:focus {
        color: var(--color-primary);
    }
}
</style>
