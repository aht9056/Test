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
                                />
                                <i class="bi bi-search fs-5 ps-2"></i>
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
                                        ) in item.subType"
                                        class="form-check m-0 p-1 d-flex"
                                    >
                                        <div class="flex-grow-1">
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
                            <el-dropdown-item v-for="item in sortType">{{
                                item
                            }}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div class="booklist">
                    <div class="row gx-0">
                        <div
                            v-for="item in bookListInfo"
                            class="col-lg-12 col-md-6 col-sm-6 col-12 booklist_content"
                        >
                            <div class="row gx-0">
                                <div
                                    class="col-lg-2 col-md-6 col-sm-12 col-6 p-1 photo d-flex justify-content-center align-items-center"
                                >
                                    <div
                                        v-if="item.discount != null"
                                        class="badge"
                                    >
                                        <span class="fs-6">{{
                                            item.discount
                                        }}</span>
                                        折
                                    </div>
                                    <img :src="item.photo" />
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
                                                item.discount
                                                    ? 'text-decoration: line-through; text-decoration-color: red;'
                                                    : ''
                                            "
                                            >售價:<span
                                                class="keyword"
                                                :style="{
                                                    color: !item.discount
                                                        ? '#FF2D2D'
                                                        : '',
                                                }"
                                                >{{ item.price }}</span
                                            >元</span
                                        >
                                        <span v-show="item.discount"
                                            >優惠價:<span
                                                class="keyword"
                                                style="color: #ff2d2d"
                                                >{{
                                                    (
                                                        (item.price *
                                                            item.discount) /
                                                        100
                                                    ).toFixed(0)
                                                }}</span
                                            >元</span
                                        >
                                    </div>
                                    <div
                                        class="d-flex justify-content-between other"
                                    >
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
                <div>
                    <pagination></pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import pagination from '../../components/content/pagination.vue'
import { typeInfo } from '../../data/typeInfo.js'
import { bookList } from '../../data/bookList.js'
export default {
    components: {
        pagination,
    },
    data() {
        return {
            collapseFilterStatus: false,
            collapseBtnType: [],
            bookListInfo: [],
            sortType: [
                '熱銷中',
                '價格最高',
                '價格最低',
                '最早發行',
                '最晚發行',
            ],
            sort: '熱銷中',
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
        getFilterType() {
            this.collapseBtnType = typeInfo.map(type => ({
                ...type,
                show: false,
                checked: new Array(type.subType.length).fill(false),
            }))
        },
        getbookListInfo() {
            this.bookListInfo = bookList
        },
    },
    beforeMount() {
        this.getFilterType()
        this.getbookListInfo()
    },
    mounted() {
        this.$parent.observeNavbarHeight()
    },
}
</script>

<style lang="scss" scoped>
@import '/src/scss/hamburgerBtn.scss';
@import '/src/scss/content/general.scss';
@import '/src/scss/content/filterArea.scss';
@import '/src/scss/content/booklist.scss';
.menu {
    --s: 1em;
    --c: var(--color-content-filterarea-collapse_btn_type_hover);
}
</style>
