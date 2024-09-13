<template>
    <div class="container-fluid layout w-100 p-5">
        <div class="d-flex">
            <div class="ms-4">
                <div>
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
                <div>
                    <button
                        class="button_design"
                        :class="{ selected: showStatus === '待修改' }"
                        @click="showStatus = '待修改'"
                    >
                        等待修改
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
                <el-table-column prop="option" label="最後更新時間" width="190">
                    <template slot-scope="scope">
                        <span>{{ scope.row.lastUpdateTime }}</span>
                    </template>
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
                            <div>
                                <button
                                    class="button_design p-1"
                                    data-bs-toggle="modal"
                                    data-bs-target="#detailDataModal"
                                    @click="
                                        showBookDetail(scope.$index, scope.row)
                                    "
                                >
                                    {{
                                        showStatus !== '待修改'
                                            ? '審核內容'
                                            : '查看內容'
                                    }}
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
                                {{ bookDataDetail.serialNumber }}
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
                                        <td>{{ bookDataDetail.name }}</td>
                                    </tr>
                                    <tr>
                                        <th>語言分類</th>
                                        <td>
                                            <template
                                                v-if="
                                                    selectedBookDataOutline.isForiegn
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
                                                ) in typeList[
                                                    selectedBookDataOutline.type
                                                ].subTypes"
                                            >
                                                {{ subType }}
                                                <template
                                                    v-if="
                                                        index !=
                                                        typeList[
                                                            selectedBookDataOutline
                                                                .type
                                                        ].subTypes.length -
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
                                                ) in bookDataDetail.bookTag"
                                            >
                                                {{ tag }}
                                                <template
                                                    v-if="
                                                        index !=
                                                        bookDataDetail.bookTag
                                                            .length -
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
                                                    bookDataDetail.description
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
                                            {{ bookDataDetail.publicationDate }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>作者</th>
                                        <td colspan="5">
                                            <template
                                                v-for="(
                                                    tag, index
                                                ) in bookDataDetail.author"
                                            >
                                                {{ tag }}
                                                <template
                                                    v-if="
                                                        index !=
                                                        bookDataDetail.author
                                                            .length -
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
                                        <template v-if="bookDataDetail.entity">
                                            <td>有</td>
                                            <td class="title">價格</td>
                                            <td>
                                                NT$
                                                {{ bookDataDetail.entityPrice }}
                                            </td>
                                            <td class="title">庫存</td>
                                            <td>
                                                {{ bookDataDetail.stock }} 本
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
                                        <template v-if="bookDataDetail.ebook">
                                            <td>有</td>
                                            <td class="title">價格</td>
                                            <td colspan="3">
                                                NT$
                                                {{ bookDataDetail.ebookPrice }}
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
                        <div
                            v-show="
                                showDetailType === '出版' &&
                                showStatus == '審核中'
                            "
                        >
                            <button
                                class="button_design p-1"
                                @click="confirmQualified()"
                            >
                                合格/上架
                            </button>
                            <button
                                class="button_design p-1 ms-2"
                                @click="fixRequestData()"
                            >
                                不合格/修正
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
export default {
    data() {
        return {
            showStatus: '審核中',
            nowPage: 1, // 目前頁數
            pageNumber: 5, // 每頁要顯示幾筆
            requestListData: [],
            typeList: {},
            bookDataDetail: {},
            dataDetailLoaded: false,
            dataOutlineLoaded: false,
            showDetailType: '書籍',
            transitionName: 'slide-right',
            selectedBookDataOutline: {},
        }
    },
    computed: {
        rows() {
            const photosPerRow = 4
            const rows = []
            for (
                let i = 0;
                i < this.bookDataDetail.contentPagePhoto.length;
                i += photosPerRow
            ) {
                rows.push(
                    this.bookDataDetail.contentPagePhoto.slice(
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
    },
    methods: {
        async getRequestListData() {
            try {
                const response = await api.post('/api/getAllRequestList', {})
                if (response.data.success) {
                    this.requestListData = response.data.data
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
                    '/api/getRequestListDataDetailAdmin',
                    {
                        serialNumber: row.serialNumber,
                    },
                )
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
        getTypeList() {
            this.typeList = this.$store.state.generalInfo.typeList
        },
        closeModal() {
            this.dataDetailLoaded = false
            this.bookDataDetail = {}
            this.selectedBookDataOutline = {}
            const modalElement = document.getElementById('detailDataModal') // 獲取模態框元素
            if (modalElement) {
                const modalInstance =
                    window.bootstrap.Modal.getInstance(modalElement) // 獲取模態框的實例
                if (modalInstance) {
                    modalInstance.hide() // 關閉模態框
                } else {
                    // 如果實例尚不存在，則手動創建並隱藏
                    const newModalInstance = new window.bootstrap.Modal(
                        modalElement,
                    )
                    newModalInstance.hide()
                }
            }
            const backdrop = document.querySelector('.modal-backdrop')
            if (backdrop) {
                backdrop.parentNode.removeChild(backdrop)
            }
        },
        async getInit() {
            await this.getRequestListData()
            this.getTypeList()
            this.dataOutlineLoaded = true
        },
        confirmQualified() {
            this.$swal
                .fire({
                    title: '確認合格',
                    text: `您確定該序列號為 ${this.bookDataDetail.serialNumber} 的資料合格嗎?`,
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
                                this.qualifiedDataToFireBase()
                                    .then(() => {
                                        this.$swal.close()
                                        this.$swal
                                            .fire({
                                                title: '成功',
                                                text: '資料已成功更新',
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
                                                                serialNumber,
                                                        )
                                                    if (index !== -1) {
                                                        this.requestListData.splice(
                                                            index,
                                                            1,
                                                        )
                                                    }
                                                    this.closeModal()
                                                }
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
        async qualifiedDataToFireBase() {
            try {
                const response = await api.post('/api/dataCertified', {
                    serialNumber: this.bookDataDetail.serialNumber,
                    option: this.selectedBookDataOutline.option,
                    code: this.bookDataDetail.publisher,
                    type: this.bookDataDetail.type,
                })
                if (response.data.success) {
                    const index = this.requestListData.findIndex(
                        item =>
                            item.serialNumber ===
                            this.selectedBookDataOutline.serialNumber,
                    )
                    if (index !== -1) {
                        this.requestListData.splice(index, 1)
                    }
                } else {
                    return Promise.reject(response.data.message)
                }
            } catch (error) {
                console.error('Error in method:', error)
                return Promise.reject(error)
            }
        },
        fixRequestData() {
            this.$swal
                .fire({
                    title: '請輸入修改事項',
                    html: '<textarea id="swal-textarea" style="height: 300px;width:100%;z-index: 2000;"></textarea>',
                    focusConfirm: false,
                    showCancelButton: true,
                    confirmButtonText: '確定',
                    cancelButtonText: '取消',
                    preConfirm: () => {
                        const textareaValue = this.$swal
                            .getPopup()
                            .querySelector('#swal-textarea').value
                        if (!textareaValue) {
                            this.$swal.showValidationMessage('內容不可空白')
                        } else if (textareaValue.length > 2000) {
                            this.$swal.showValidationMessage(
                                '內容不可超過2000個字符',
                            )
                        } else {
                            this.selectedBookDataOutline.fixMessage =
                                textareaValue
                            return textareaValue
                        }
                    },
                    didOpen: () => {
                        document.querySelector('#swal-textarea').focus()
                    },
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
                                this.fixMessageToFireBase()
                                    .then(() => {
                                        this.$swal.close()
                                        this.$swal
                                            .fire({
                                                title: '成功',
                                                text: '資料已成功更新',
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
                                                                this
                                                                    .selectedBookDataOutline
                                                                    .serialNumber,
                                                        )
                                                    this.requestListData[
                                                        index
                                                    ].status = '待修改'
                                                    this.closeModal()
                                                }
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
        async fixMessageToFireBase() {
            try {
                const response = await api.post('/api/dataNotCertified', {
                    serialNumber: this.bookDataDetail.serialNumber,
                    fixMessage: this.selectedBookDataOutline.fixMessage,
                })
                if (response.data.success) {
                    const index = this.requestListData.findIndex(
                        item =>
                            item.serialNumber ===
                            this.selectedBookDataOutline.serialNumber,
                    )
                    if (index !== -1) {
                        this.requestListData[index].fixMessage =
                            this.selectedBookDataOutline.fixMessage
                        this.requestListData[index].status = '待修改'
                    }
                } else {
                    return Promise.reject(response.data.message)
                }
            } catch (error) {
                console.error('Error in method:', error)
                return Promise.reject(error)
            }
        },
        // async test() {
        //     try {
        //         const response = await api.post('/api/getPDFDownloadLink', {
        //             serialNumber: '0001_T001_20240912085414',
        //             uid: JSON.parse(Cookies.get('accountInfo')).uid,
        //             fileName: '0001_T001_20240912085414.pdf',
        //         })
        //         if (response.data.success) {
        //             const downloadUrl = response.data.url
        //         } else {
        //             return Promise.reject(response.data.message)
        //         }
        //     } catch (error) {
        //         console.error('Error in method:', error)
        //         return Promise.reject(error)
        //     }
        // },
    },
    beforeMount() {
        this.getInit()
    },
    mounted() {},
}
</script>
<style lang="scss" scoped>
@import '../../scss/aboutuser/styles.scss';
@import '../../scss/slideTable.scss';
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
.modal-body {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}
</style>
