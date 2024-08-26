<template>
    <div class="w-100 position-relative d-flex flex-column">
        <div class="row gx-0">
            <h1>出版商管理系統</h1>
        </div>
        <div v-if="dataLoaded" class="row gx-0 flex-grow-1">
            <div class="col-lg-2 col-md-12 col-sm-12 col-12 options">
                <div class="d-flex w-100 flex-wrap flex-column">
                    <div
                        class="text-decoration-none p-1 m-1 text-center text-truncate overflow-hidden text-nowrap bordergradient custom_button"
                        :class="
                            this.nowPage === 'addBook'
                                ? 'selected'
                                : 'notselected'
                        "
                        @click="goToPage('addBook')"
                        title="新增書籍資料"
                    >
                        新增書籍資料
                    </div>
                    <div
                        class="text-decoration-none p-1 m-1 text-center text-truncate overflow-hidden text-nowrap bordergradient custom_button"
                        :class="
                            this.nowPage === 'editTypeStructure'
                                ? 'selected'
                                : 'notselected'
                        "
                        @click="goToPage('editTypeStructure')"
                        title="編輯類別結構"
                    >
                        編輯類別結構
                    </div>
                </div>
            </div>
            <div class="col-lg-10 col-md-12 col-sm-12 col-12 content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import Cookies from 'js-cookie'
import api from '@/axios/axios.ts'
export default {
    data() {
        return {
            dataLoaded: false,
            nowPage: '',
        }
    },
    methods: {
        goToPage(target) {
            if (target != this.nowPage) {
                this.nowPage = target
                this.$router.push(`/publisher/${target}`)
            }
        },
        async getInitData() {
            const result = await this.checkUid()
            if (result) {
                await this.getTypeList()
                this.dataLoaded = result
                this.goToPage('addBook')
            }
        },
        async checkUid() {
            const uid = JSON.parse(Cookies.get('accountInfo')).uid
            const accountPermission = JSON.parse(
                Cookies.get('accountPermission'),
            )
            try {
                const response = await api.post('/api/checkPermission', {
                    uid: uid,
                })
                if (response.data.success) {
                    if (response.data.exists == accountPermission) return true
                } else {
                    console.error('Failed to check UID:', response.data.message)
                    return false
                }
            } catch (error) {
                console.error('Error checking UID:', error)
                return false
            }
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
    beforeMount() {
        this.getInitData()
    },
    mounted() {},
}
</script>
<style lang="scss" scoped>
.position-relative {
    background-color: var(--color-content-background);
}
h1 {
    color: var(--color-content-text);
    border-bottom: 1px solid rgba(206, 201, 201, 0.722);
}
.options {
    background-color: var(--color-content-background);
    border-right: 1px solid rgba(206, 201, 201, 0.722);
}
.bordergradient {
    color: var(--color-content-text);
    border: 2px solid transparent;
    border-radius: 10px;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    background-image: linear-gradient(to right, white, white),
        linear-gradient(45deg, var(--color-primary), var(--color-primary));
}
.selected {
    border-radius: 30px;
    background-image: linear-gradient(to right, transparent, transparent),
        linear-gradient(45deg, var(--color-primary), var(--color-primary));
    color: #ffffff;
    &:hover {
        transform: scale(1.05);
        transition: transform 0.2s ease;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
}
.notselected {
    border-radius: 30px;
    background-image: linear-gradient(to right, white, white),
        linear-gradient(45deg, var(--color-primary), var(--color-primary));
    color: var(--color-primary);
    &:hover {
        transform: scale(1.05);
        transition: transform 0.2s ease;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
}
.custom_button {
    cursor: pointer;
}
.content {
    background-color: var(--color-content-background);
}
</style>
