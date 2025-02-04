<template>
    <div class="container-fluid layout w-100 p-5">
        <div class="d-flex">
            <div class="ms-4">
                <div v-if="reviewReads > 0">
                    <el-badge :value="reviewReads" class="item">
                        <button
                            class="button_design"
                            :class="{ selected: showStatus === '審核中' }"
                            @click="showStatus = '審核中'"
                        >
                            審核中
                        </button>
                    </el-badge>
                </div>
                <div v-else>
                    <button
                        class="button_design"
                        :class="{ selected: showStatus === '審核中' }"
                        @click="showStatus = '審核中'"
                    >
                        審核中
                    </button>
                </div>
            </div>
            <div class="ms-4">
                <div v-if="revisionReads > 0">
                    <el-badge :value="revisionReads" class="item">
                        <button
                            class="button_design"
                            :class="{ selected: showStatus === '待修改' }"
                            @click="showStatus = '待修改'"
                        >
                            待修改
                        </button>
                    </el-badge>
                </div>
                <div v-else>
                    <button
                        class="button_design"
                        :class="{ selected: showStatus === '待修改' }"
                        @click="showStatus = '待修改'"
                    >
                        待修改
                    </button>
                </div>
            </div>
            <div class="ms-4">
                <div v-if="completeReads > 0">
                    <el-badge :value="completeReads" class="item">
                        <button
                            class="button_design"
                            :class="{ selected: showStatus === '已完成' }"
                            @click="showStatus = '已完成'"
                        >
                            已完成
                        </button>
                    </el-badge>
                </div>
                <div v-else>
                    <button
                        class="button_design"
                        :class="{ selected: showStatus === '已完成' }"
                        @click="showStatus = '已完成'"
                    >
                        已完成
                    </button>
                </div>
            </div>
        </div>
        <div class="content">
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
                    label="建單時間"
                    sortable
                    width="190"
                >
                </el-table-column>
                <el-table-column prop="serialNumber" label="流水號" width="220">
                </el-table-column>
                <el-table-column prop="name" label="書籍名稱">
                </el-table-column>
                <el-table-column prop="option" label="請求類別" width="100">
                    <template slot-scope="scope">
                        <span v-if="scope.row.option === 'addBook'"
                            >新增商品</span
                        >
                        <span v-else-if="scope.row.option === 'editBook'"
                            >修改商品資訊</span
                        >
                        <span v-else>未知類別</span>
                    </template>
                </el-table-column>
                <el-table-column width="180">
                    <template slot="header" slot-scope="scope">
                        <el-input size="mini" placeholder="輸入關鍵字搜尋" />
                    </template>
                    <template slot-scope="scope"
                        ><div
                            class="d-flex justify-content-around align-items-center"
                        >
                            <div v-if="!scope.row.read" class="p-1">
                                <el-badge is-dot class="item">
                                    <button
                                        v-if="
                                            showStatus === '審核中' ||
                                            showStatus === '已完成'
                                        "
                                        class="button_design p-1"
                                        data-bs-toggle="modal"
                                        data-bs-target="#detailDataModal"
                                        @click="
                                            showBookDetail(
                                                scope.$index,
                                                scope.row,
                                            )
                                        "
                                    >
                                        查看內容
                                    </button>
                                    <button
                                        v-else-if="showStatus === '待修改'"
                                        class="button_design p-1"
                                        data-bs-toggle="modal"
                                        data-bs-target="#detailDataFixModal"
                                        @click="
                                            fixBookDetail(
                                                scope.$index,
                                                scope.row,
                                            )
                                        "
                                    >
                                        修改內容
                                    </button>
                                </el-badge>
                            </div>
                            <div v-else>
                                <button
                                    v-if="
                                        showStatus === '審核中' ||
                                        showStatus === '已完成'
                                    "
                                    class="button_design p-1"
                                    data-bs-toggle="modal"
                                    data-bs-target="#detailDataModal"
                                    @click="
                                        showBookDetail(scope.$index, scope.row)
                                    "
                                >
                                    查看內容
                                </button>
                                <button
                                    v-else-if="showStatus === '待修改'"
                                    class="button_design p-1"
                                    data-bs-toggle="modal"
                                    data-bs-target="#detailDataFixModal"
                                    @click="
                                        fixBookDetail(scope.$index, scope.row)
                                    "
                                >
                                    修改內容
                                </button>
                            </div>
                            <div class="p-1" v-if="showStatus != '已完成'">
                                <button
                                    class="button_design p-1"
                                    @click="
                                        deleteAddBook(scope.$index, scope.row)
                                    "
                                >
                                    <i class="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="d-flex justify-content-end mt-2">
            <el-pagination
                layout="prev, pager, next"
                :total="tableData.length"
                :page-size="pageNumber"
                :current-page="nowPage"
                @current-change="handlePageChange"
            ></el-pagination>
        </div>
        <div
            v-if="showStatus == '審核中' || showStatus == '已完成'"
            class="modal fade"
            id="detailDataModal"
            tabindex="-1"
            aria-labelledby="detailDataModalLabel"
            aria-hidden="true"
            data-bs-backdrop="static"
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
                                    }"
                                    @click="showDetailType = '書籍'"
                                >
                                    書籍
                                </button>
                                <button
                                    type="button"
                                    class="button_design m-1 p-0 fs-6"
                                    :class="{
                                        selected: showDetailType === '出版',
                                    }"
                                    @click="showDetailType = '出版'"
                                >
                                    出版/販售
                                </button>
                            </div>
                        </div>
                        <div>
                            <button
                                type="button"
                                class="close_btn"
                                @click="closeModal('detailDataModal')"
                            >
                                <i class="bi bi-plus-lg"></i>
                            </button>
                        </div>
                    </div>
                    <div
                        v-if="dataDetailLoaded && showDetailType === '書籍'"
                        class="modal-body"
                    >
                        <div style="overflow-x: auto">
                            <table class="table">
                                <tr>
                                    <th>書籍名稱</th>
                                    <td>{{ selectedBookDataOutline.name }}</td>
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
                                                v-for="(row, rowIndex) in rows"
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
                    </div>
                    <div
                        v-else-if="
                            dataDetailLoaded && showDetailType === '出版'
                        "
                        class="modal-body"
                    >
                        <div style="overflow-x: auto">
                            <table class="table">
                                <tr>
                                    <th>出版社代號</th>
                                    <td colspan="5">
                                        {{ selectedBookDataOutline.code }}
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
                                            v-model="bookDataDetail.authorIntro"
                                            readonly
                                        ></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <th>實體書販售</th>
                                    <template
                                        v-if="selectedBookDataOutline.entity"
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
                                            {{ selectedBookDataOutline.stock }}
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
                            </table>
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
                </div>
            </div>
        </div>
        <div
            v-if="showStatus == '待修改'"
            class="modal fade"
            id="detailDataFixModal"
            tabindex="-1"
            aria-labelledby="detailDataFixModalLabel"
            aria-hidden="true"
            data-bs-focus="false"
            data-bs-backdrop="static"
        >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header justify-content-between">
                        <div>
                            <h2
                                class="modal-title fs-6"
                                id="detailDataFixModalLabel"
                            >
                                修改:{{ selectedBookDataOutline.serialNumber }}
                            </h2>
                        </div>
                        <div>
                            <button
                                type="button"
                                class="close_btn"
                                @click="closeModal('detailDataFixModal')"
                            >
                                <i class="bi bi-plus-lg"></i>
                            </button>
                        </div>
                    </div>
                    <div v-if="dataDetailLoaded" class="modal-body">
                        <FixBook
                            :bookDataFromView="bookDataDetail"
                            :bookMessageFromView="selectedBookDataOutline"
                            @closeModal="closeModal('detailDataFixModal')"
                        />
                    </div>
                    <div v-else class="modal-body" style="height: auto">
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
    </div>
</template>
<script>
import api from '@/axios/axios'
import { RouterView } from 'vue-router'
import FixBook from '@/components/FixBook.vue'
import { Modal } from 'bootstrap'
export default {
    components: {
        FixBook,
    },
    data() {
        return {
            showStatus: '審核中',
            nowPage: 1, // 目前頁數
            pageNumber: 5, // 每頁要顯示幾筆
            requestListData: [],
            typeList: {},
            bookDataDetail: {},
            selectedBookDataOutline: {},
            dataOutlineLoaded: false,
            dataDetailLoaded: false,
            showDetailType: '書籍',
        }
    },
    computed: {
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
        tableData() {
            return this.requestListData.filter(
                item => item.status === this.showStatus,
            )
        },
        showData() {
            const start = (this.nowPage - 1) * this.pageNumber
            const end = start + this.pageNumber
            return this.tableData.slice(start, end)
        },
        reviewReads() {
            return this.requestListData.filter(
                item => item.status === '審核中' && !item.read,
            ).length
        },
        revisionReads() {
            return this.requestListData.filter(
                item => item.status === '待修改' && !item.read,
            ).length
        },
        completeReads() {
            return this.requestListData.filter(
                item => item.status === '已完成' && !item.read,
            ).length
        },
    },
    methods: {
        async getRequestListData() {
            try {
                const response = await api.post('/getRequestList', {
                    code: this.$store.state.userInfo.userInfoData.code,
                })
                if (response.data.success) {
                    this.requestListData = response.data.data
                    this.dataOutlineLoaded = true
                } else {
                    console.error(
                        'Failed to getDataList:',
                        response.data.message,
                    )
                }
            } catch (error) {
                console.error('Error Code:', error)
            }
        },
        handlePageChange(page) {
            this.nowPage = page
            this.getShowData()
        },
        async showBookDetail(index, row) {
            try {
                const response = await api.post(
                    '/getRequestListDataDetailPublisher',
                    {
                        serialNumber: row.serialNumber,
                        readStatus: true,
                    },
                )
                if (response.data.success) {
                    this.bookDataDetail = response.data.data
                    this.selectedBookDataOutline = row
                    this.dataDetailLoaded = true
                    const item = this.requestListData.find(
                        item => item.serialNumber === row.serialNumber,
                    )
                    if (item) {
                        item.read = true
                    }
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
        async fixBookDetail(index, row) {
            try {
                const response = await api.post(
                    '/getRequestListDataDetailPublisher',
                    {
                        serialNumber: row.serialNumber,
                        readStatus: true,
                    },
                )
                if (response.data.success) {
                    this.bookDataDetail = response.data.data
                    console.log(response.data.data)
                    this.selectedBookDataOutline = row
                    this.dataDetailLoaded = true
                    const item = this.requestListData.find(
                        item => item.serialNumber === row.serialNumber,
                    )
                    if (item) {
                        item.read = true
                    }
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
        deleteAddBook(index, row) {
            this.$swal
                .fire({
                    title: '確認删除',
                    text: `您確定要删除序列號為 ${row.serialNumber} 的請求嗎?`,
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
                            text: '正在刪除請求，請稍候',
                            icon: 'info',
                            allowOutsideClick: false,
                            showConfirmButton: false,
                            showCancelButton: false,
                            didOpen: () => {
                                this.$swal.showLoading()
                                this.deleteToFirebase(row.serialNumber)
                                    .then(() => {
                                        this.$swal.close()
                                        this.$swal
                                            .fire({
                                                title: '成功',
                                                text: '資料已成功刪除',
                                                icon: 'success',
                                                confirmButtonText: '確定',
                                                showCancelButton: false,
                                            })
                                            .then(result => {
                                                if (result.isConfirmed) {
                                                    const index =
                                                        this.requestListData.findIndex(
                                                            item =>
                                                                item.serialNumber ===
                                                                row.serialNumber,
                                                        )
                                                    if (index !== -1) {
                                                        this.requestListData.splice(
                                                            index,
                                                            1,
                                                        )
                                                    }
                                                }
                                            })
                                    })
                                    .catch(error => {
                                        this.$swal.close()
                                        this.$swal.fire({
                                            title: '錯誤',
                                            text: '刪除過程中發生錯誤，請稍後重試',
                                            icon: 'error',
                                            confirmButtonText: '確定',
                                        })
                                        console.error(
                                            'Error in deleteToFirebase method:',
                                            error,
                                        )
                                    })
                            },
                        })
                    } else {
                        console.log('删除操作已取消')
                    }
                })
        },
        async deleteToFirebase(serialNumber) {
            try {
                const response = await api.post('/deleteRequest', {
                    serialNumber: serialNumber,
                })

                if (response.data.success) {
                    console.log('Files delete successfully:')
                } else {
                    console.error('Error delete files:', response.data.message)
                    return Promise.reject(response.data.message)
                }
            } catch (error) {
                console.error('Error in delete method:', error)
                return Promise.reject(error)
            }
        },
        getTypeList() {
            this.typeList = this.$store.state.generalInfo.typeList
        },
        closeModal(modalId) {
            this.dataDetailLoaded = false
            this.bookDataDetail = {}
            var myModalEl = document.getElementById(modalId)
            var modal = Modal.getInstance(myModalEl)
            modal.hide()
        },
        async getInit() {
            await this.getRequestListData()
            this.getTypeList()
        },
    },
    beforeMount() {
        this.getInit()
    },
}
</script>
<style lang="scss" scoped>
@import '../../scss/content/loading.scss';
@import '../../scss/aboutuser/styles.scss';
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
</style>
