<template>
    <div class="w-100 position-relative d-flex flex-column">
        <div class="row gx-0">
            <h1>管理員系統</h1>
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
                        title="看板"
                    >
                        看板
                    </div>
                    <div
                        class="text-decoration-none p-1 m-1 text-center text-truncate overflow-hidden text-nowrap bordergradient custom_button"
                        :class="
                            this.nowPage === 'requestList'
                                ? 'selected'
                                : 'notselected'
                        "
                        @click="goToPage('requestList')"
                        title="審核請求"
                    >
                        審核請求
                    </div>
                    <div
                        class="text-decoration-none p-1 m-1 text-center text-truncate overflow-hidden text-nowrap bordergradient custom_button"
                        :class="
                            this.nowPage === 'bookMangement'
                                ? 'selected'
                                : 'notselected'
                        "
                        @click="goToPage('bookMangement')"
                        title="書籍上架管理"
                    >
                        書籍上架管理
                    </div>
                </div>
            </div>
            <div class="col-lg-10 col-md-12 col-sm-12 col-12 content">
                <router-view></router-view>
            </div>
        </div>
        <div v-else>
            <div class="loading-overlay">
                <div class="loading-spinner-container">
                    <div class="loading-spinner"></div>
                </div>
                <div class="loading-text">資料載入中...</div>
            </div>
        </div>
    </div>
</template>
<script>
import Cookies from 'js-cookie'
import api from '@/axios/axios'
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
                this.$router.push(`/admin/${target}`)
            }
        },
        async getInitData() {
            try {
                const [uidResult, typeListResponse, publisherListResponse] =
                    await Promise.all([
                        this.checkUid(),
                        this.getTypeList(),
                        this.getPublisherList(),
                    ])

                if (uidResult) {
                    this.dataLoaded = true
                    this.goToPage('requestList')
                }

                if (typeListResponse && typeListResponse.data.success) {
                    this.result = typeListResponse.data.typeList
                    this.$store.state.generalInfo.typeList =
                        typeListResponse.data.typeList
                }
                if (
                    publisherListResponse &&
                    publisherListResponse.data.success
                ) {
                    this.$store.state.generalInfo.publisherList =
                        publisherListResponse.data.publisherList
                }
            } catch (error) {
                console.error('Error during initialization:', error)
            }
        },
        async checkUid() {
            const uid = JSON.parse(Cookies.get('accountInfo')).uid
            try {
                const response = await api.post('/api/checkPermission', { uid })
                if (response.data.success) {
                    if (response.data.exists == 'admin') {
                        this.$store.state.userInfo.userInfoData =
                            response.data.infoData
                        return true
                    }
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
                return response
            } catch (error) {
                console.error('Error fetching type list:', error)
                return null
            }
        },
        async getPublisherList() {
            try {
                const response = await api.get('/api/getPublisherList')
                return response
            } catch (error) {
                console.error('Error fetching publisher list:', error)
                return null
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
    },
    beforeMount() {
        this.getInitData()
    },
    mounted() {},
}
</script>
<style lang="scss" scoped>
@import '../scss/content/loading.scss';
@import '../scss/aboutuser/styles.scss';
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
