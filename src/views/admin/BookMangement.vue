<template>
    <div
        class="container-fluid layout d-flex flex-column justify-content-center w-100"
    >
        <div
            class="d-flex flex-column align-items-center align-content-stretch"
        >
            <div class="d-flex w-100 justify-content-center">
                <div class="w-100 d-flex justify-content-evenly">
                    <div class="me-2">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="searchTypeRadio"
                            id="searchTypeRadio_single"
                            value="single"
                            v-model="searchType"
                            @change="
                                (showTable = false), (searchErrorHint = '')
                            "
                        />
                        <label
                            class="form-check-label"
                            for="searchTypeRadio_single"
                        >
                            序列號查詢
                        </label>
                    </div>
                    <div>
                        <input
                            class="form-check-input"
                            type="radio"
                            name="searchTypeRadio"
                            id="searchTypeRadio_muti"
                            value="muti"
                            v-model="searchType"
                            @change="
                                (showTable = false), (searchErrorHint = '')
                            "
                        />
                        <label
                            class="form-check-label"
                            for="searchTypeRadio_muti"
                        >
                            條件篩選查詢
                        </label>
                    </div>
                </div>
            </div>
            <div class="d-flex w-100 justify-content-center">
                <article
                    v-show="searchType === 'single'"
                    class="l-design-width w-100"
                >
                    <div class="card row flex-row">
                        <div class="col-2 p-0 d-flex">
                            <el-input
                                v-model="serialNumber_1"
                                placeholder="出版社代號(必填)"
                                clearable
                            />
                        </div>
                        <div class="col-2 p-0 d-flex">
                            <span class="ms-1 me-1">_</span>
                            <el-input
                                v-model="serialNumber_2"
                                placeholder="類別代號(必填)"
                                clearable
                            />
                        </div>
                        <div class="col-7 p-0 d-flex">
                            <span class="ms-1 me-1">_</span>
                            <el-input
                                v-model="serialNumber_3"
                                type="number"
                                placeholder="流水號(必填)"
                                clearable
                            />
                        </div>
                        <div class="col-1 p-0">
                            <button
                                class="search_btn"
                                @click="checkSingleSerach"
                            >
                                搜尋
                            </button>
                        </div>
                        <small class="errorhint">{{ searchErrorHint }}</small>
                    </div>
                </article>
                <article
                    v-show="searchType === 'muti'"
                    class="l-design-width w-100"
                >
                    <div class="card row flex-row">
                        <div class="col-2 p-0">
                            <el-cascader
                                :options="forSaleOption"
                                :placeholder="'已/未上架(選填)'"
                                popper-class="orgstructure-cascader"
                                @change="handleForSaleChange"
                                clearable
                            >
                            </el-cascader>
                        </div>
                        <div class="col-1 p-0">
                            <el-cascader
                                :options="languageOption"
                                :placeholder="'語言(選填)'"
                                popper-class="orgstructure-cascader"
                                @change="handleForeignChange"
                                clearable
                            >
                            </el-cascader>
                        </div>
                        <div class="col-3 p-0">
                            <el-cascader
                                v-model="filterWord.type.value"
                                :options="typeOption"
                                :props="props"
                                :placeholder="'請選擇類型-最多十種(選填)'"
                                popper-class="orgstructure-cascader"
                                @change="handleTypeChange"
                                clearable
                            ></el-cascader>
                        </div>
                        <div class="col-2 p-0">
                            <el-cascader
                                :options="publisherOption"
                                :placeholder="'請選擇出版社(選填)'"
                                popper-class="orgstructure-cascader"
                                @change="handlePublisherChange"
                                clearable
                            >
                            </el-cascader>
                        </div>
                        <div class="col-3 p-0">
                            <el-input
                                v-model="filterWord.name"
                                placeholder="輸入書名關鍵字(選填)"
                                clearable
                            />
                        </div>
                        <div class="col-1 p-0">
                            <button class="search_btn" @click="checkFilterWord">
                                搜尋
                            </button>
                        </div>
                        <div>
                            <small class="errorhint">{{
                                searchErrorHint
                            }}</small>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        <div class="content w-100" v-show="showTable">
            <el-table
                :data="showData"
                style="width: 100%; background-color: transparent"
            >
                <template v-if="!dataOutlineLoaded" slot="empty"
                    >資料載入中...</template
                >
                <template v-else slot="empty">暫無數據</template>
                <el-table-column
                    prop="createTime"
                    label="建單日期"
                    sortable
                    width="190"
                >
                </el-table-column>
                <el-table-column prop="serialNumber" label="流水號" width="220">
                </el-table-column>
                <el-table-column prop="name" label="書籍名稱">
                </el-table-column>
                <el-table-column prop="forSale" width="120" label="已/未上架">
                    <template slot-scope="scope">
                        <span v-if="scope.row.forSale == true"
                            ><i
                                class="bi bi-check-circle-fill text-success"
                            ></i>
                            已上架</span
                        >
                        <span v-else
                            ><i class="bi bi-x-circle-fill text-danger"></i>
                            未上架</span
                        >
                    </template>
                </el-table-column>
                <el-table-column prop="type" width="60" label="類型">
                </el-table-column>
                <el-table-column width="230" label="操作">
                    <template slot-scope="scope"
                        ><div
                            class="d-flex justify-content-around align-items-center"
                        >
                            <div>
                                <button
                                    class="button_design p-1"
                                    data-bs-toggle="modal"
                                    data-bs-target="#detailDataModal"
                                    @click="
                                        showBookDetail(scope.$index, scope.row)
                                    "
                                >
                                    {{ '檢視內容' }}
                                </button>
                            </div>
                            <div>
                                <button
                                    v-if="scope.row.forSale == true"
                                    class="button_design p-1"
                                    @click="
                                        confirmforSaleStatusUpdate(
                                            scope.$index,
                                            scope.row,
                                            false,
                                        )
                                    "
                                >
                                    {{ '下架' }}
                                </button>
                                <button
                                    v-else
                                    class="button_design p-1"
                                    @click="
                                        confirmforSaleStatusUpdate(
                                            scope.$index,
                                            scope.row,
                                            true,
                                        )
                                    "
                                >
                                    {{ '上架' }}
                                </button>
                            </div>
                            <div>
                                <button class="button_design p-1" @click="">
                                    {{ '清除' }}
                                </button>
                            </div>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="d-flex justify-content-end mt-2">
            <el-pagination
                v-show="showTable"
                layout="prev, pager, next"
                :total="tableData.length"
                :page-size="pageNumber"
                :current-page="nowPage"
                @current-change="handlePageChange"
            ></el-pagination>
        </div>
        <div
            class="modal fade"
            id="detailDataModal"
            tabindex="-1"
            aria-labelledby="detailDataModalLabel"
            aria-hidden="true"
            data-bs-backdrop="static"
            data-bs-focus="false"
        >
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header justify-content-between">
                        <div>
                            <h2
                                class="modal-title fs-6"
                                id="detailDataModalLabel"
                            >
                                {{ selectedBookDataOutline.serialNumber }}
                            </h2>
                            <div>
                                <button
                                    type="button"
                                    class="button_design m-1 p-0 fs-6"
                                    :class="{
                                        selected: showDetailType === '書籍',
                                        disabled: showDetailType === '書籍',
                                    }"
                                    :disabled="showDetailType === '書籍'"
                                    @click="
                                        (showDetailType = '書籍'),
                                            (transitionName = 'slide-right')
                                    "
                                >
                                    書籍
                                </button>
                                <button
                                    type="button"
                                    class="button_design m-1 p-0 fs-6"
                                    :class="{
                                        selected: showDetailType === '出版',
                                        disabled: showDetailType === '出版',
                                    }"
                                    @click="
                                        (showDetailType = '出版'),
                                            (transitionName = 'slide-left')
                                    "
                                >
                                    出版/販售
                                </button>
                            </div>
                        </div>
                        <div>
                            <button
                                type="button"
                                class="close_btn"
                                @click="closeModal()"
                            >
                                <i class="bi bi-plus-lg"></i>
                            </button>
                        </div>
                    </div>
                    <div v-if="dataDetailLoaded" class="modal-body d-flex">
                        <div
                            class="d-flex align-items-center justify-content-center"
                            style="width: 5%"
                        >
                            <div
                                class="arrow-btn"
                                @click="
                                    (showDetailType = '書籍'),
                                        (transitionName = 'slide-right')
                                "
                                :class="{ disabled: showDetailType === '書籍' }"
                            >
                                <i class="bi bi-caret-left-fill"></i>
                            </div>
                        </div>
                        <transition-group
                            :name="transitionName"
                            tag="div"
                            style="width: 90%"
                        >
                            <div
                                v-if="showDetailType === '書籍'"
                                key="1"
                                style="overflow-x: auto"
                            >
                                <table class="table">
                                    <tr>
                                        <th>書籍名稱</th>
                                        <td>
                                            {{ selectedBookDataOutline.name }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>語言分類</th>
                                        <td>
                                            <template
                                                v-if="
                                                    selectedBookDataOutline.isForeign
                                                "
                                                >中文</template
                                            >
                                            <template v-else>外文</template>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>主類型</th>
                                        <td>
                                            {{
                                                typeList[
                                                    selectedBookDataOutline.type
                                                ].name
                                            }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>子類型</th>
                                        <td>
                                            <template
                                                v-for="(
                                                    subType, index
                                                ) in selectedBookDataOutline.subTypes"
                                            >
                                                {{ subType }}
                                                <template
                                                    v-if="
                                                        index !=
                                                        selectedBookDataOutline
                                                            .subTypes.length -
                                                            1
                                                    "
                                                >
                                                    ,
                                                </template>
                                            </template>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>書籍標籤</th>
                                        <td>
                                            <template
                                                v-for="(
                                                    tag, index
                                                ) in selectedBookDataOutline.bookTag"
                                            >
                                                {{ tag }}
                                                <template
                                                    v-if="
                                                        index !=
                                                        selectedBookDataOutline
                                                            .bookTag.length -
                                                            1
                                                    "
                                                >
                                                    ,
                                                </template>
                                            </template>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>書籍介紹</th>
                                        <td class="p-1">
                                            <textarea
                                                v-model="
                                                    selectedBookDataOutline.description
                                                "
                                                readonly
                                            ></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>圖片</th>
                                        <td class="p-1">
                                            <table
                                                class="w-100"
                                                style="
                                                    background-color: transparent;
                                                "
                                            >
                                                <tr>
                                                    <td
                                                        style="
                                                            border: none;
                                                            color: red;
                                                        "
                                                    >
                                                        圖一為商品封面
                                                    </td>
                                                </tr>
                                                <tr
                                                    v-for="(
                                                        row, rowIndex
                                                    ) in rows"
                                                    style="border: none"
                                                    :key="rowIndex"
                                                >
                                                    <td
                                                        v-for="(
                                                            photo, colIndex
                                                        ) in row"
                                                        class="p-1"
                                                        :key="colIndex"
                                                        style="border: none"
                                                    >
                                                        <img
                                                            :src="photo"
                                                            alt="content page photo"
                                                        />
                                                        <div>
                                                            圖{{
                                                                rowIndex * 4 +
                                                                colIndex +
                                                                1
                                                            }}
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div
                                v-if="showDetailType === '出版'"
                                key="2"
                                style="overflow-x: auto"
                            >
                                <table class="table">
                                    <tr>
                                        <th>出版社代號</th>
                                        <td colspan="5">
                                            {{ selectedBookDataOutline.code }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>出版社名稱</th>
                                        <td colspan="5">
                                            {{
                                                selectedBookDataOutline.publisherName
                                            }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>出版日期</th>
                                        <td colspan="5">
                                            {{
                                                selectedBookDataOutline.publicationDate
                                            }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>作者</th>
                                        <td colspan="5">
                                            <template
                                                v-for="(
                                                    tag, index
                                                ) in selectedBookDataOutline.author"
                                            >
                                                {{ tag }}
                                                <template
                                                    v-if="
                                                        index !=
                                                        selectedBookDataOutline
                                                            .author.length -
                                                            1
                                                    "
                                                >
                                                    ,
                                                </template>
                                            </template>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>作者介紹</th>
                                        <td colspan="5" class="p-1">
                                            <textarea
                                                v-model="
                                                    bookDataDetail.authorIntro
                                                "
                                                readonly
                                            ></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>實體書販售</th>
                                        <template
                                            v-if="
                                                selectedBookDataOutline.entity
                                            "
                                        >
                                            <td>有</td>
                                            <td class="title">價格</td>
                                            <td>
                                                NT$
                                                {{
                                                    selectedBookDataOutline.entityPrice
                                                }}
                                            </td>
                                            <td class="title">庫存</td>
                                            <td>
                                                {{
                                                    selectedBookDataOutline.stock
                                                }}
                                                本
                                            </td>
                                        </template>
                                        <template v-else>
                                            <td>無</td>
                                            <td class="title">價格</td>
                                            <td></td>
                                            <td class="title">庫存</td>
                                            <td></td>
                                        </template>
                                    </tr>
                                    <tr>
                                        <th>電子書販售</th>
                                        <template
                                            v-if="selectedBookDataOutline.ebook"
                                        >
                                            <td>有</td>
                                            <td class="title">價格</td>
                                            <td colspan="3">
                                                NT$
                                                {{
                                                    selectedBookDataOutline.ebookPrice
                                                }}
                                            </td>
                                        </template>
                                        <template v-else>
                                            <td>無</td>
                                            <td class="title">價格</td>
                                            <td colspan="3"></td>
                                        </template>
                                    </tr>
                                    <tr>
                                        <th>最後請求修改訊息</th>
                                        <td colspan="5" class="p-1">
                                            <textarea
                                                v-model="
                                                    selectedBookDataOutline.fixMessage
                                                "
                                                readonly
                                            ></textarea>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </transition-group>
                        <div
                            class="d-flex align-items-center justify-content-center"
                            style="width: 5%"
                        >
                            <div
                                class="arrow-btn"
                                @click="
                                    (showDetailType = '出版'),
                                        (transitionName = 'slide-left')
                                "
                                :class="{ disabled: showDetailType === '出版' }"
                            >
                                <i class="bi bi-caret-right-fill"></i>
                            </div>
                        </div>
                    </div>
                    <div v-else class="modal-body" style="height: auto">
                        <div class="loading-overlay">
                            <div class="loading-spinner-container">
                                <div class="loading-spinner"></div>
                            </div>
                            <div class="loading-text">資料載入中...</div>
                        </div>
                    </div>
                    <div
                        v-if="dataDetailLoaded"
                        class="modal-footer d-flex justify-content-between"
                    >
                        <div>
                            <button
                                class="button_design p-1"
                                @click="closeModal()"
                            >
                                返回
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import api from '@/axios/axios.ts'
import Cookies from 'js-cookie'
import { Modal } from 'bootstrap'

export default {
    data() {
        return {
            searchType: 'single',

            //序列號搜尋
            serialNumber_1: '',
            serialNumber_2: '',
            serialNumber_3: '',

            //條件篩選搜尋
            filterWord: {
                forSale: {
                    isFilter: false,
                    value: '',
                },
                isForeign: {
                    isFilter: false,
                    value: '',
                },
                publisher: {
                    isFilter: false,
                    value: '',
                },
                type: {
                    isFilter: false,
                    value: [],
                },
                name: '',
            },
            props: { multiple: true, expandTrigger: 'hover' },
            languageOption: [
                {
                    value: false,
                    label: '中文',
                },
                {
                    value: true,
                    label: '外文',
                },
            ],
            forSaleOption: [
                {
                    value: false,
                    label: '未上架',
                },
                {
                    value: true,
                    label: '已上架',
                },
            ],
            typeOption: [],
            publisherOption: [],
            searchErrorHint: '',

            //table表
            dataOutlineLoaded: true,
            certifiedList: [],
            showTable: false,

            //換頁
            nowPage: 1, // 目前頁數
            pageNumber: 5, // 每頁要顯示幾筆

            //詳細內容
            bookDataDetail: {},
            dataDetailLoaded: false,
            selectedBookDataOutline: {},
            showDetailType: '書籍',
            transitionName: 'slide-right',
            typeList: {},
        }
    },
    computed: {
        //table表
        tableData() {
            return this.certifiedList
        },
        showData() {
            const start = (this.nowPage - 1) * this.pageNumber
            const end = start + this.pageNumber
            return this.tableData.slice(start, end)
        },

        //詳細內容
        rows() {
            const photosPerRow = 4
            const rows = []
            for (
                let i = 0;
                i < this.selectedBookDataOutline.contentPagePhoto.length;
                i += photosPerRow
            ) {
                rows.push(
                    this.selectedBookDataOutline.contentPagePhoto.slice(
                        i,
                        i + photosPerRow,
                    ),
                )
            }
            return rows
        },
    },
    methods: {
        //初始資料
        getTypeData() {
            const data = this.$store.state.generalInfo.typeList
            this.typeList = this.$store.state.generalInfo.typeList
            this.typeOption = Object.keys(data).map(key => ({
                value: key,
                label: data[key].name,
            }))
        },
        getpublisherData() {
            const data = this.$store.state.generalInfo.publisherList
            this.publisherOption = Object.entries(data).map(([code, name]) => ({
                value: code,
                label: `${code}-${name}`,
            }))
        },
        //搜尋處理(序列號)
        checkSingleSerach() {
            if (
                this.serialNumber_1 == '' ||
                this.serialNumber_2 == '' ||
                this.serialNumber_3 == ''
            ) {
                this.searchErrorHint = '請填寫完整序列號'
            } else {
                let inputSerialNumber = `${this.serialNumber_1}_${this.serialNumber_2}_${this.serialNumber_3}`
                this.getSingleSearchData(inputSerialNumber)
            }
        },
        async getSingleSearchData(inputSerialNumber) {
            try {
                this.dataOutlineLoaded = false
                this.certifiedList = []
                this.showTable = true
                const response = await api.post(
                    '/api/getDataOutlinebySerialNumber',
                    {
                        serialNumber: inputSerialNumber,
                    },
                )
                if (response.data.success) {
                    this.certifiedList = [response.data.data]
                    this.dataOutlineLoaded = true
                } else {
                    console.error(
                        'Failed to getDataDetail:',
                        response.data.message,
                    )
                }
            } catch (error) {
                console.error('Error filterWord:', error)
            }
        },
        //搜尋處理(條件)
        handleForSaleChange(value) {
            if (value.length == 0) {
                this.filterWord.forSale.isFilter = false
                this.filterWord.forSale.value = ''
            } else {
                this.filterWord.forSale.isFilter = true
                this.filterWord.forSale.value = value[0]
            }
        },
        handleForeignChange(value) {
            if (value.length == 0) {
                this.filterWord.isForeign.isFilter = false
                this.filterWord.isForeign.value = ''
            } else {
                this.filterWord.isForeign.isFilter = true
                this.filterWord.isForeign.value = value[0]
            }
        },
        handlePublisherChange(value) {
            if (value.length == 0) {
                this.filterWord.publisher.isFilter = false
                this.filterWord.publisher.value = ''
            } else {
                this.filterWord.publisher.isFilter = true
                this.filterWord.publisher.value = value[0]
            }
        },
        handleTypeChange(value) {
            if (value.length == 0) {
                this.filterWord.type.isFilter = false
                this.filterWord.type.value = []
            } else if (value.length > 1) {
                this.filterWord.type.isFilter = true
                this.filterWord.type.value = value.slice(0, 10).flat()
            } else {
                this.filterWord.type.isFilter = true
                this.filterWord.type.value = value.flat()
            }
        },
        checkFilterWord() {
            if (
                !this.filterWord.forSale.isFilter &&
                !this.filterWord.isForeign.isFilter &&
                !this.filterWord.publisher.isFilter &&
                !this.filterWord.type.isFilter &&
                this.filterWord.name == ''
            ) {
                this.searchErrorHint = '請至少填入一項篩選條件'
            } else {
                this.getSearchCertifiedList()
                this.searchErrorHint = ''
            }
        },
        async getSearchCertifiedList() {
            try {
                this.dataOutlineLoaded = false
                this.certifiedList = []
                this.showTable = true
                const response = await api.post('/api/getFilterCertifiedList', {
                    filterWord: this.filterWord,
                })
                if (response.data.success) {
                    this.certifiedList = response.data.data
                    this.dataOutlineLoaded = true
                } else {
                    console.error(
                        'Failed to getDataDetail:',
                        response.data.message,
                    )
                }
            } catch (error) {
                console.error('Error filterWord:', error)
            }
        },
        // 上/下架
        confirmforSaleStatusUpdate(index, row, value) {
            let word = value ? '上架' : '下架'
            this.$swal
                .fire({
                    title: `確認${word}`,
                    text: `您確定要${word}該序列號為 ${row.serialNumber} 的商品嗎?`,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: '確定',
                    cancelButtonText: '取消',
                    reverseButtons: true,
                })
                .then(result => {
                    if (result.isConfirmed) {
                        this.$swal.fire({
                            title: '處理中...',
                            text: '正在更新狀態，請稍候',
                            icon: 'info',
                            allowOutsideClick: false,
                            showConfirmButton: false,
                            cancelButtonText: '取消',
                            didOpen: () => {
                                this.$swal.showLoading()
                                this.updateForSaleStatus(index, row, value)
                                    .then(() => {
                                        this.$swal.close()
                                        this.$swal.fire({
                                            title: '成功',
                                            text: '資料已成功更新',
                                            icon: 'success',
                                            confirmButtonText: '確定',
                                            showCancelButton: false,
                                        })
                                    })
                                    .catch(error => {
                                        this.$swal.close()
                                        this.$swal.fire({
                                            title: '錯誤',
                                            text: '更新過程中發生錯誤，請稍後重試',
                                            icon: 'error',
                                            confirmButtonText: '確定',
                                        })
                                        console.error(
                                            'Error in update method:',
                                            error,
                                        )
                                    })
                            },
                        })
                    }
                })
        },
        async updateForSaleStatus(index, row, value) {
            try {
                const response = await api.post('/api/updateForSaleStatus', {
                    serialNumber: row.serialNumber,
                    value: value,
                })
                if (response.data.success) {
                    this.certifiedList[index].forSale = value
                } else {
                    console.error(
                        'Failed to getDataDetail:',
                        response.data.message,
                    )
                }
            } catch (error) {
                console.error('Error Data SerialNumber:', error)
            }
        },
        //換頁
        handlePageChange(page) {
            this.nowPage = page
        },

        //詳細內容
        async showBookDetail(index, row) {
            try {
                const response = await api.post('/api/getBookDataDetailAdmin', {
                    serialNumber: row.serialNumber,
                })
                if (response.data.success) {
                    this.bookDataDetail = response.data.data
                    this.dataDetailLoaded = true
                    this.selectedBookDataOutline = row
                } else {
                    console.error(
                        'Failed to getDataDetail:',
                        response.data.message,
                    )
                }
            } catch (error) {
                console.error('Error Data SerialNumber:', error)
            }
        },
        closeModal() {
            this.dataDetailLoaded = false
            this.bookDataDetail = {}
            this.selectedBookDataOutline = {}
            var myModalEl = document.getElementById('detailDataModal')
            var modal = Modal.getInstance(myModalEl)
            modal.hide()
        },
    },
    beforeMount() {
        this.getTypeData()
        this.getpublisherData()
    },
}
</script>
<style lang="scss" scoped>
@import '../../scss/content/loading.scss';
@import '../../scss/aboutuser/styles.scss';
@import '../../scss/slideTable.scss';
//搜尋
.form-check-input:checked {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
    box-shadow:
        inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px var(--color-primary);
}
.form-check-input:focus {
    border-color: var(--color-primary);
    box-shadow:
        inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px var(--color-primary);
}
.image-container {
    display: flex;
    flex-wrap: wrap;
}
.image-wrapper {
    margin: 10px;
    text-align: center;
}
img {
    max-width: 150px;
    max-height: 150px;
    object-fit: cover;
}
::v-deep .el-input {
    height: 100%;
    .el-input__inner {
        height: 100%;
        border-radius: 0%;
    }
}
::v-deep .el-cascader {
    height: 100%;
    width: 100%;
    .el-cascader__tags {
        display: inline-flex;
        margin: 2px;
        flex-wrap: nowrap;
        overflow-x: auto;
        &::-webkit-scrollbar {
            height: 10px;
            width: 12px;
            background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
            background-color: rgba(102, 102, 102, 0.4);
            border-radius: 10px;
            border: 0px solid transparent;
        }
        &::-webkit-scrollbar-track {
            background-color: transparent;
        }
    }
}
.search_btn {
    border-radius: 0px;
    height: 100%;
    width: 100%;
}
//table表
.content {
    margin-top: 10px;
    border: 3px solid var(--color-primary);
}
::v-deep .el-badge__content {
    background-color: red;
    color: white;
    border-color: red;
}
::v-deep .el-table th.el-table__cell {
    background-color: var(--color-content-background);
    & + th.el-table__cell {
        border-left: 1px solid var(--color-primary);
    }
    color: var(--color-content-text);
    .cell {
        font-size: 1.2rem;
        font-weight: 900;
    }
}
::v-deep .el-table th.el-table__cell.is-leaf,
.el-table td.el-table__cell {
    border-color: var(--color-primary) !important;
}
::v-deep .el-table tr {
    background-color: var(--color-content-background);
    td + td {
        border-left: 1px solid rgb(168, 166, 166);
    }
}
::v-deep .el-table--enable-row-hover .el-table__body tr:hover {
    td {
        background-color: var(--color-content-hover) !important;
    }
    td .cell {
        color: var(--color-primary);
    }
    td button {
        color: var(--color-content-text);
    }
}
::v-deep .el-pager li {
    background-color: var(--color-content-background);
}
::v-deep .el-pagination button {
    color: var(--color-content-text);
    background-color: var(--color-content-background);
}
//詳細內容
.close_btn {
    background-color: transparent;
    &:hover {
        transform: scale(1.2);
        transition: transform 0.2s ease;
    }
    i {
        font-size: 1.6rem;
        color: var(--color-primary) !important;
        transform: rotate(45deg);
        display: inline-block;
    }
    opacity: 1;
}
.table {
    white-space: nowrap;
    font-size: 1rem;
    text-align: center;
    border: 1px solid var(--color-content-text);
    th {
        color: var(--color-primary);
    }
    .title {
        color: var(--color-primary);
    }
    td {
        border-left: 1px solid var(--color-content-text);
        textarea {
            resize: none;
            width: 100%;
            outline: none;
            background-color: var(--color-content-background);
            height: 150px;
        }
    }
    tr + tr {
        border-top: 1px solid var(--color-content-text);
    }
}
img {
    max-width: 150px;
    max-height: 150px;
    object-fit: cover;
}
.modal-body {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}
</style>
