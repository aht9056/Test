<template>
    <div class="container layout">
        <div class="row gx-0">
            <div
                class="col-lg-2 col-md-12 col-sm-12 h-auto filter_area"
                id="filterArea"
            >
                <div
                    class="d-flex justify-content-center text-center flex-column content p-1 row gx-0"
                    style="border-radius: 10px"
                >
                    <span
                        @click="toggleFilterCollapse()"
                        class="fs-6"
                        data-bs-toggle="collapse"
                        :id="'collapseBtn_filter'"
                        :href="'#collapse_filter'"
                        role="button"
                        :aria-controls="'collapse_filter'"
                    >
                        種類篩選/搜尋<i
                            :id="'icon_filter'"
                            class="el-icon-caret-bottom"
                        ></i>
                    </span>
                    <div class="collapse w-100 col-12" :id="'collapse_filter'">
                        <div class="row gx-0">
                            <div
                                class="p-1 d-flex justify-content-between col-12"
                            >
                                <el-input
                                    class="flex-grow-1"
                                    size="mini"
                                    placeholder="輸入關鍵字搜尋"
                                    v-model="searchInput"
                                />
                                <i
                                    class="bi bi-search fs-5 ps-2 searchBtn"
                                    @click="handleTypeFilter"
                                ></i>
                            </div>
                            <div
                                class="ps-1 pe-1 col-lg-12 col-md-6 col-sm-4 col-4"
                                v-for="(item, index) in collapseBtnType"
                            >
                                <div
                                    class="collapse_btn_type p-1 d-flex"
                                    :class="{ selected: item.show }"
                                    :id="'collapseBtn_type_' + index"
                                    tabindex="0"
                                >
                                    <div>
                                        <input
                                            data-bs-toggle="collapse"
                                            type="checkbox"
                                            role="button"
                                            class="menu"
                                            :id="'hamburgerBtn_' + index"
                                            :href="
                                                '#collapse_type_' +
                                                index +
                                                '_subType'
                                            "
                                            @click="
                                                toggleBtnTypeCollapse(
                                                    index,
                                                    true,
                                                )
                                            "
                                        />
                                    </div>
                                    <div
                                        data-bs-toggle="collapse"
                                        :href="
                                            '#collapse_type_' +
                                            index +
                                            '_subType'
                                        "
                                        class="flex-grow-1"
                                        style="cursor: pointer"
                                        @click="
                                            toggleBtnTypeCollapse(index, false)
                                        "
                                    >
                                        {{ item.name }}
                                    </div>
                                </div>
                                <div
                                    class="collapse collapse_type_subType"
                                    :id="'collapse_type_' + index + '_subType'"
                                >
                                    <div
                                        v-for="(
                                            subType, index2
                                        ) in item.subTypes"
                                        class="form-check m-0 p-1 d-flex"
                                    >
                                        <div>
                                            <input
                                                type="checkbox"
                                                class="filter_checkbox"
                                                v-model="item.checked[index2]"
                                                :id="
                                                    'type_' +
                                                    index +
                                                    '_subTypeCheck_' +
                                                    index2
                                                "
                                            />
                                        </div>
                                        <label
                                            class="form-check-label flex-grow-1"
                                            :for="
                                                'Type_' +
                                                index +
                                                '_subTypeCheck_' +
                                                index2
                                            "
                                        >
                                            {{ subType }}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-10 col-md-12 col-sm-12">
                <div>
                    排序:
                    <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                            {{ sort
                            }}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item
                                v-for="(item, index) in sortType"
                                @click.native="handleSortChange(item, index)"
                                >{{ item }}</el-dropdown-item
                            >
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div v-if="dataloaded" class="booklist">
                    <div v-if="bookListInfo.length == 0" class="row gx-0">
                        <div class="d-flex justify-content-center">
                            暫無資料
                        </div>
                    </div>
                    <div v-else class="row gx-0">
                        <div
                            v-for="item in bookListInfo"
                            class="col-lg-12 col-md-6 col-sm-6 col-12 booklist_content"
                        >
                            <div class="row gx-0">
                                <div
                                    class="col-lg-2 col-md-6 col-sm-12 col-6 p-1 photo d-flex justify-content-center align-items-center"
                                >
                                    <div
                                        v-if="item.discount != 0"
                                        class="badge"
                                    >
                                        <span class="fs-6">{{
                                            item.discount
                                        }}</span>
                                        折
                                    </div>
                                    <img :src="item.contentPagePhoto[0]" />
                                    <!-- <img :src="item.photo" /> -->
                                </div>
                                <div
                                    class="col-lg-10 col-md-6 col-sm-12 col-6 d-flex flex-column justify-content-evenly info"
                                >
                                    <div
                                        class="d-flex justify-content-center title p-1"
                                    >
                                        <a herf="#" :title="item.name">
                                            {{ item.name }}
                                        </a>
                                    </div>

                                    <div class="d-flex description">
                                        <div>
                                            {{ item.description }}
                                        </div>
                                    </div>
                                    <div class="d-flex author">
                                        作者:
                                        <span v-for="name in item.author">{{
                                            name
                                        }}</span>
                                    </div>
                                    <div
                                        class="d-flex justify-content-end stock"
                                    >
                                        <span>
                                            庫存:
                                            <span class="keyword">{{
                                                item.stock
                                            }}</span></span
                                        >
                                    </div>
                                    <div
                                        class="d-flex justify-content-end price"
                                    >
                                        <span
                                            :style="
                                                item.discount != 0
                                                    ? 'text-decoration: line-through; text-decoration-color: red;'
                                                    : ''
                                            "
                                            >售價:<span
                                                class="keyword"
                                                :style="{
                                                    color:
                                                        item.discount != 0
                                                            ? '#FF2D2D'
                                                            : '',
                                                }"
                                                >{{
                                                    item.entity
                                                        ? item.entityPrice
                                                        : item.ebookPrice
                                                }}</span
                                            >元</span
                                        >
                                        <span v-show="item.discount != 0">
                                            優惠價:
                                            <span
                                                class="keyword"
                                                style="color: #ff2d2d"
                                            >
                                                {{
                                                    item.entity
                                                        ? (
                                                              (item.entityPrice *
                                                                  item.discount) /
                                                              100
                                                          ).toFixed(0)
                                                        : (
                                                              (item.ebookPrice *
                                                                  item.discount) /
                                                              100
                                                          ).toFixed(0)
                                                }}
                                            </span>
                                            元
                                        </span>
                                    </div>
                                    <div
                                        class="d-flex justify-content-between align-items-end other"
                                    >
                                        <div class="d-flex">
                                            <span
                                                v-for="tag in item.bookTag"
                                                class="book_tag"
                                            >
                                                #{{ tag }}&emsp;
                                            </span>
                                        </div>
                                        <div class="d-flex">
                                            <span
                                                v-for="tag in item.saleTag"
                                                class="sale_tag"
                                            >
                                                #{{ tag }}&emsp;
                                            </span>
                                        </div>

                                        <button class="shoppingCar_btn">
                                            <i class="bi bi-cart2"></i
                                            >&ensp;加入購物車
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="dataloaded">
                    <pagination
                        v-model="currentPage"
                        :totalPages="totalPages"
                        @page-changed="handlePageChange"
                    ></pagination>
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
        </div>
    </div>
</template>

<script>
import { searchAlgolia } from '../../login/Algolia.js'
import api from '@/axios/axios'
import pagination from '../../components/content/pagination.vue'
import { typeInfo } from '../../data/typeInfo.js'
import { bookList } from '../../data/bookList.js'
import { algoliasearch } from 'algoliasearch'
export default {
    components: {
        pagination,
    },
    data() {
        return {
            collapseFilterStatus: false,
            collapseBtnType: [],
            bookListInfo: [],
            sortType: ['最多瀏覽', '熱銷中', '最早發行', '最晚發行'],
            sort: '最多瀏覽',
            sortValue: 'views',
            lastDocId: null,
            dataloaded: false,
            totalDataCount: 0,
            totalPages: 1,
            onePageShowDataCount: 2,
            currentPage: 1,
            searchInput: '',
            algoliaClient: null,
            algoliaIndex: null,
        }
    },
    methods: {
        toggleFilterCollapse() {
            this.collapseFilterStatus = !this.collapseFilterStatus
            let icon = document.getElementById('icon_filter')
            if (this.collapseFilterStatus) {
                icon.style.transform = 'rotate(0deg)'
            } else {
                icon.style.transform = 'rotate(-90deg)'
            }
        },
        toggleBtnTypeCollapse(index, fromIcon) {
            this.collapseBtnType[index].show = !this.collapseBtnType[index].show
            if (!fromIcon) {
                const hamburgerBtn = document.getElementById(
                    'hamburgerBtn_' + index,
                )
                hamburgerBtn.checked = !hamburgerBtn.checked
            }
        },
        async getFilterType() {
            try {
                const response = await api.get('/api/getTypeList')
                if (response.data.success) {
                    let typeArray = Object.entries(response.data.typeList).map(
                        ([key, value]) => ({
                            id: key,
                            ...value,
                        }),
                    )
                    this.collapseBtnType = typeArray.map(type => ({
                        ...type,
                        show: false,
                        checked: new Array(type.subTypes.length).fill(false),
                    }))
                }
            } catch (error) {
                console.error('Error fetching type list:', error)
                return null
            }
        },
        handleTypeFilter() {
            let filterTypeArray = []
            filterTypeArray = this.collapseBtnType.flatMap(item =>
                item.subTypes.filter((_, index) => item.checked[index]),
            )
            if (this.searchInput != '') {
                this.dataloaded = false
                this.getDataFromAlgolia(
                    0,
                    this.onePageShowDataCount - 1,
                    'views',
                    filterTypeArray,
                )
            } else {
                this.dataloaded = false
                this.getDataFromDb(
                    0,
                    this.onePageShowDataCount - 1,
                    'views',
                    null,
                    filterTypeArray,
                )
            }
        },
        handleSortChange(item, index) {
            let filterTypeArray = []
            filterTypeArray = this.collapseBtnType.flatMap(item =>
                item.subTypes.filter((_, index) => item.checked[index]),
            )
            this.currentPage = 1
            this.lastDocId = null
            this.sort = item
            if (index == 0) {
                this.sortValue = 'views'
            } else if (index == 1) {
                this.sortValue = 'sold'
            } else if (index == 2) {
                this.sortValue = 'earliest'
            } else {
                this.sortValue = 'latest'
            }
            if (this.searchInput != '') {
                this.getDataFromAlgolia(
                    0,
                    this.onePageShowDataCount - 1,
                    this.sortValue,
                    filterTypeArray,
                )
            } else {
                this.getDataFromDb(
                    0,
                    this.onePageShowDataCount - 1,
                    this.sortValue,
                    null,
                    filterTypeArray,
                )
            }
        },
        async getDataFromDb(
            dataStart,
            dataEnd,
            orderType,
            lastDocId = null,
            subTypes = [],
        ) {
            try {
                const response = await api.post('/api/getBookListByOrder', {
                    dataStart,
                    dataEnd,
                    orderType,
                    lastDocId,
                    subTypes,
                })
                if (response.data.success) {
                    console.log('Data fetched successfully:')
                    this.bookListInfo = response.data.data

                    this.lastDocId = response.data.lastDocId
                    this.dataloaded = true
                    this.totalPages = Math.ceil(
                        response.data.totalCount / this.onePageShowDataCount,
                    )
                    this.totalDataCount = response.data.totalCount
                } else {
                    console.error('Error fetching data:', response.data.message)
                }
            } catch (error) {
                console.error('Error in getDataFromDb method:', error)
            }
        },
        async getDataFromAlgolia(start, end, orderType, filterTypeArray = []) {
            try {
                const results = await searchAlgolia(this.searchInput)
                if (results) {
                    let data = results[0].hits
                    console.log('搜索完成:', results[0].hits)
                    //篩選子類型
                    if (filterTypeArray.length > 0) {
                        data = data.filter(hit => {
                            return (
                                hit.subTypes &&
                                hit.subTypes.some(subType =>
                                    filterTypeArray.includes(subType),
                                )
                            )
                        })
                    }
                    console.log('篩選完成:', data)
                    //排序
                    data.sort((a, b) => {
                        if (orderType === 'views') {
                            return b.views - a.views
                        } else if (orderType === 'sold') {
                            return b.sold - a.sold
                        } else if (orderType === 'earliest') {
                            return (
                                new Date(a.publicationDate) -
                                new Date(b.publicationDate)
                            )
                        } else if (orderType === 'latest') {
                            return (
                                new Date(b.publicationDate) -
                                new Date(a.publicationDate)
                            )
                        }
                        return 0
                    })
                    //
                    this.totalDataCount = data.length
                    this.totalPages = Math.ceil(
                        data.length / this.onePageShowDataCount,
                    )
                    //取其中幾筆
                    data = data.slice(start, end + 1)
                    this.bookListInfo = data
                    console.log(data)
                } else {
                    console.error('未返回搜索结果')
                }
            } catch (error) {
                console.error('從 Algolia 獲取數字發生錯誤:', error.message)
            } finally {
                this.dataloaded = true
            }
        },
        handlePageChange(newPage, isIncreasing) {
            let filterTypeArray = []
            filterTypeArray = this.collapseBtnType.flatMap(item =>
                item.subTypes.filter((_, index) => item.checked[index]),
            )
            this.dataloaded = false
            let start = this.onePageShowDataCount * (newPage - 1)
            let end = this.onePageShowDataCount * newPage - 1
            if (end > this.totalDataCount - 1) {
                end = this.totalDataCount - 1
            }
            if (this.searchInput != '') {
                this.getDataFromAlgolia(
                    start,
                    end,
                    this.sortValue,
                    filterTypeArray,
                )
            } else {
                if (isIncreasing) {
                    this.getDataFromDb(
                        start,
                        end,
                        this.sortValue,
                        this.lastDocId,
                        filterTypeArray,
                    )
                } else {
                    this.getDataFromDb(
                        start,
                        end,
                        this.sortValue,
                        null,
                        filterTypeArray,
                    )
                }
            }
        },
    },
    beforeMount() {
        this.getFilterType()
        this.getDataFromDb(0, this.onePageShowDataCount - 1, this.sortValue)
    },
    mounted() {
        this.$parent.observeNavbarHeight()
    },
}
</script>

<style lang="scss" scoped>
@import '../../scss/content/loading.scss';
@import '/src/scss/hamburgerBtn.scss';
@import '/src/scss/content/general.scss';
@import '/src/scss/content/filterArea.scss';
@import '/src/scss/content/booklist.scss';
.menu {
    --s: 1em;
    --c: var(--color-content-filterarea-collapse_btn_type_hover);
}
.searchBtn {
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.2);
    }
}
</style>
