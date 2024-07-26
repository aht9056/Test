<template>
    <div class="container">
        <div class="title-container">
            <h1 class="measurementFormTitle">會員管理系統</h1>
        </div>
        <div>
            <div>
                <el-button @click="registDialogVisible = true" plain
                    >註冊帳號</el-button
                >
                <el-dialog
                    title="註冊帳號"
                    :visible.sync="registDialogVisible"
                    :close-on-click-modal="false"
                    :close-on-press-escape="false"
                    width="30%"
                    @close="initTempData(), getshowTableData()"
                >
                    <form class="row g-3 needs-validation" novalidate>
                        <div class="col-md-12">
                            <label for="validationCustom01" class="form-label"
                                >使用者名稱</label
                            >
                            <input
                                type="text"
                                class="form-control"
                                id="validationCustom01"
                                v-model="newData.userName"
                                @input="
                                    validationErrors.userName = isValid(
                                        'userName',
                                        newData.userName,
                                    )
                                "
                                :class="{
                                    'is-invalid':
                                        !validationErrors.userName == '',
                                    'is-valid':
                                        validationErrors.userName == '' &&
                                        newData.userName,
                                }"
                                required
                            />
                            <div class="valid-feedback">OK!</div>
                            <div class="invalid-feedback">
                                {{ validationErrors.userName }}
                            </div>
                        </div>
                        <div class="col-md-12">
                            <label for="validationCustom02" class="form-label"
                                >E-mail</label
                            >
                            <input
                                type="text"
                                class="form-control"
                                id="validationCustom02"
                                v-model="newData.email"
                                @input="
                                    validationErrors.email = isValid(
                                        'email',
                                        newData.email,
                                    )
                                "
                                :class="{
                                    'is-invalid': !validationErrors.email == '',
                                    'is-valid':
                                        validationErrors.email == '' &&
                                        newData.email,
                                }"
                                required
                            />
                            <div class="valid-feedback">OK!</div>
                            <div class="invalid-feedback">
                                {{ validationErrors.email }}
                            </div>
                        </div>
                        <div class="col-md-12">
                            <label for="validationCustom03" class="form-label"
                                >帳號</label
                            >
                            <input
                                type="text"
                                class="form-control"
                                id="validationCustom03"
                                v-model="newData.account"
                                @input="
                                    validationErrors.account = isValid(
                                        'account',
                                        newData.account,
                                    )
                                "
                                :class="{
                                    'is-invalid':
                                        !validationErrors.account == '',
                                    'is-valid':
                                        validationErrors.account == '' &&
                                        newData.account,
                                }"
                                required
                            />
                            <div class="valid-feedback">OK!</div>
                            <div class="invalid-feedback">
                                {{ validationErrors.account }}
                            </div>
                        </div>
                        <div class="col-md-12">
                            <label for="validationCustom04" class="form-label"
                                >密碼</label
                            >
                            <input
                                type="password"
                                class="form-control"
                                id="validationCustom04"
                                v-model="newData.password"
                                @input="
                                    validationErrors.password = isValid(
                                        'password',
                                        newData.password,
                                    )
                                "
                                :class="{
                                    'is-invalid':
                                        !validationErrors.password == '',
                                    'is-valid':
                                        validationErrors.password == '' &&
                                        newData.password,
                                }"
                                required
                            />
                            <div class="valid-feedback">OK!</div>
                            <div class="invalid-feedback">
                                {{ validationErrors.password }}
                            </div>
                        </div>
                        <div class="col-md-12">
                            <label for="validationCustom04" class="form-label"
                                >密碼確認</label
                            >
                            <input
                                type="password"
                                class="form-control"
                                id="validationCustom04"
                                v-model="checkedPasswordValue"
                                :class="{
                                    'is-invalid':
                                        !checkedPassword &&
                                        newData.password != '',
                                    'is-valid':
                                        checkedPassword &&
                                        newData.password != '',
                                }"
                                required
                            />
                            <div class="valid-feedback">OK!</div>
                            <div class="invalid-feedback">
                                兩次輸入的密碼不同
                            </div>
                        </div>
                    </form>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="registDialogVisible = false"
                            >取消</el-button
                        >
                        <el-button type="primary" @click="validateRegistForms()"
                            >送出</el-button
                        >
                    </span>
                </el-dialog>
                <el-input
                    style="float: right; width: 200px"
                    size="mini"
                    v-model="searchContent"
                    placeholder="輸入關鍵字搜尋"
                    @input="getSearchData()"
                />
                <el-popover style="float: right" placement="top" width="160">
                    <el-checkbox
                        :indeterminate="isIndeterminate"
                        v-model="checkAllKeys"
                        @change="handleCheckAllKeysChange"
                        >全選</el-checkbox
                    >
                    <div style="margin: 15px 0"></div>
                    <el-checkbox-group
                        v-model="checkedKeys"
                        @change="handleCheckedKeysChange"
                    >
                        <el-checkbox
                            v-for="keyName in dataKeys"
                            :label="keyName"
                            :key="keyName"
                            >{{ dataKeysShowText[keyName] }}</el-checkbox
                        >
                    </el-checkbox-group>
                    <el-button
                        style="margin-right: 5px"
                        size="mini"
                        slot="reference"
                        >選擇搜尋項目</el-button
                    >
                </el-popover>
            </div>
            <div>
                <el-table
                    :data="filteredData"
                    empty-text="暫無數據"
                    style="width: 100%; margin-top: 4px"
                    :stripe="true"
                >
                    <el-table-column type="index" label="NO" width="50">
                    </el-table-column>
                    <el-table-column
                        prop="userName"
                        :label="dataKeysShowText.userName"
                        width="180"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="email"
                        :label="dataKeysShowText.email"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="account"
                        :label="dataKeysShowText.account"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="password"
                        :label="dataKeysShowText.password"
                    >
                        *********
                    </el-table-column>
                    <el-table-column
                        prop="createDate"
                        :label="dataKeysShowText.createDate"
                        width="180"
                    >
                        <template slot-scope="scope">
                            <i class="el-icon-time"></i>
                            <span style="margin-left: 10px">{{
                                scope.row.createDate
                            }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="" label="操作">
                        <template slot-scope="scope"
                            ><button
                                style="
                                    border: none;
                                    background-color: transparent;
                                "
                                @click="handleEdit(scope.row)"
                            >
                                <i
                                    class="fas fa-edit fa-lg edit-btn"
                                    color="#077e34"
                                    style="transform: scale(1.2)"
                                    title="編輯"
                                ></i>
                            </button>
                            <button
                                @click="handleDelete(scope.row)"
                                style="
                                    border: none;
                                    background-color: transparent;
                                "
                            >
                                <i
                                    class="fas fa-trash fa-lg remove-btn"
                                    color="#b33e1b"
                                    style="transform: scale(1.2)"
                                    title="刪除"
                                ></i></button
                        ></template>
                    </el-table-column>
                </el-table>
                <el-dialog
                    title="修改帳號資訊"
                    :visible.sync="editDialogVisible"
                    :close-on-click-modal="false"
                    :close-on-press-escape="false"
                    @close="initTempData(), getshowTableData()"
                    width="30%"
                >
                    <form class="row g-3 needs-validation" novalidate>
                        <div class="col-md-12">
                            <label for="validationCustom01" class="form-label"
                                >使用者名稱</label
                            >
                            <input
                                type="text"
                                class="form-control"
                                id="validationCustom01"
                                v-model="newData.userName"
                                @input="
                                    validationErrors.userName = editIsValid(
                                        'userName',
                                        newData.userName,
                                    )
                                "
                                :class="{
                                    'is-invalid':
                                        !validationErrors.userName == '',
                                    'is-valid':
                                        validationErrors.userName == '' &&
                                        newData.userName,
                                }"
                                required
                            />
                            <div
                                v-if="
                                    newData.userName == originEditData.userName
                                "
                                class="valid-feedback"
                            ></div>
                            <div v-else class="valid-feedback">已修改!</div>
                            <div class="invalid-feedback">
                                {{ validationErrors.userName }}
                            </div>
                        </div>
                        <div class="col-md-12">
                            <label for="validationCustom02" class="form-label"
                                >E-mail</label
                            >
                            <input
                                type="text"
                                class="form-control"
                                id="validationCustom02"
                                v-model="newData.email"
                                @input="
                                    validationErrors.email = editIsValid(
                                        'email',
                                        newData.email,
                                    )
                                "
                                :class="{
                                    'is-invalid': !validationErrors.email == '',
                                    'is-valid':
                                        validationErrors.email == '' &&
                                        newData.email,
                                }"
                                required
                            />
                            <div
                                v-if="newData.email == originEditData.email"
                                class="valid-feedback"
                            ></div>
                            <div v-else class="valid-feedback">已修改!</div>
                            <div class="invalid-feedback">
                                {{ validationErrors.email }}
                            </div>
                        </div>
                        <div class="col-md-12">
                            <label for="validationCustom03" class="form-label"
                                >帳號</label
                            >
                            <input
                                type="text"
                                class="form-control"
                                id="validationCustom03"
                                v-model="newData.account"
                                @input="
                                    validationErrors.account = editIsValid(
                                        'account',
                                        newData.account,
                                    )
                                "
                                :class="{
                                    'is-invalid':
                                        !validationErrors.account == '',
                                    'is-valid':
                                        validationErrors.account == '' &&
                                        newData.account,
                                }"
                                required
                            />
                            <div
                                v-if="newData.account == originEditData.account"
                                class="valid-feedback"
                            ></div>
                            <div v-else class="valid-feedback">已修改!</div>
                            <div class="invalid-feedback">
                                {{ validationErrors.account }}
                            </div>
                        </div>
                        <div class="col-md-12">
                            <label for="validationCustom04" class="form-label"
                                >密碼</label
                            >
                            <input
                                type="password"
                                class="form-control"
                                id="validationCustom04"
                                v-model="newData.password"
                                @input="
                                    validationErrors.password = editIsValid(
                                        'password',
                                        newData.password,
                                    )
                                "
                                :class="{
                                    'is-invalid':
                                        !validationErrors.password == '',
                                    'is-valid':
                                        validationErrors.password == '' &&
                                        newData.password,
                                }"
                                required
                            />
                            <div
                                v-if="
                                    newData.password == originEditData.password
                                "
                                class="valid-feedback"
                            ></div>
                            <div v-else class="valid-feedback">已修改!</div>
                            <div class="invalid-feedback">
                                {{ validationErrors.password }}
                            </div>
                        </div>
                        <div class="col-md-12">
                            <label for="validationCustom04" class="form-label"
                                >密碼確認</label
                            >
                            <input
                                type="password"
                                class="form-control"
                                id="validationCustom04"
                                v-model="checkedPasswordValue"
                                :class="{
                                    'is-invalid':
                                        !checkedPassword &&
                                        newData.password != '',
                                    'is-valid':
                                        checkedPassword &&
                                        newData.password != '',
                                }"
                                required
                            />
                            <div class="valid-feedback">OK!</div>
                            <div class="invalid-feedback">
                                兩次輸入的密碼不同
                            </div>
                        </div>
                    </form>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="editDialogVisible = false"
                            >取消</el-button
                        >
                        <el-button type="primary" @click="validateEditForms()"
                            >送出</el-button
                        >
                    </span>
                </el-dialog>
            </div>
            <div style="margin-top: 10px">
                <el-pagination
                    style="float: right"
                    background
                    layout="prev, pager, next"
                    @current-change="handlePageChange"
                    :total="totalPage"
                >
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
    data() {
        return {
            //表格資訊顯示
            visible: false,
            originTableData: [
                {
                    createDate: '2024-05-01',
                    userName: '人名1',
                    email: '1@gmail.com',
                    account: 'account01',
                    password: 'password',
                },
                {
                    createDate: '2024-05-02',
                    userName: '人名2',
                    email: '2@gmail.com',
                    account: 'account02',
                    password: 'password',
                },
                {
                    createDate: '2024-05-03',
                    userName: '人名3',
                    email: '3@gmail.com',
                    account: 'account03',
                    password: 'password',
                },
                {
                    createDate: '2024-05-04',
                    userName: '人名4',
                    email: '4@gmail.com',
                    account: 'account04',
                    password: 'password',
                },
                {
                    createDate: '2024-05-05',
                    userName: '人名5',
                    email: '5@gmail.com',
                    account: 'account05',
                    password: 'password',
                },
                {
                    createDate: '2024-05-06',
                    userName: '人名6',
                    email: '6@gmail.com',
                    account: 'account06',
                    password: 'password',
                },
                {
                    createDate: '2024-05-07',
                    userName: '人名7',
                    email: '7@gmail.com',
                    account: 'account07',
                    password: 'password',
                },
                {
                    createDate: '2024-05-08',
                    userName: '人名8',
                    email: '8@gmail.com',
                    account: 'account08',
                    password: 'password',
                },
                {
                    createDate: '2024-05-09',
                    userName: '人名9',
                    email: '9@gmail.com',
                    account: 'account09',
                    password: 'password',
                },
                {
                    createDate: '2024-05-10',
                    userName: '人名10',
                    email: '10@gmail.com',
                    account: 'account10',
                    password: 'password',
                },
                {
                    createDate: '2024-05-11',
                    userName: '人名11',
                    email: '11@gmail.com',
                    account: 'account11',
                    password: 'password',
                },
                {
                    createDate: '2024-05-12',
                    userName: '人名12',
                    email: '12@gmail.com',
                    account: 'account12',
                    password: 'password',
                },
            ],
            showTableData: [],
            dataKeysShowText: {
                createDate: '創建日期',
                userName: '使用者名稱',
                email: '電子信箱',
                account: '帳號',
                password: '密碼',
            },
            //註冊帳號
            newData: {
                createDate: '',
                userName: '',
                email: '',
                account: '',
                password: '',
            },
            validationErrors: {
                userName: '',
                email: '',
                account: '',
                password: '',
            },
            checkedPasswordValue: '',
            //搜尋多選
            checkAllKeys: false,
            checkedKeys: [],
            dataKeys: [],
            isIndeterminate: true,
            //搜尋內容
            searchContent: '',
            //註冊帳號
            registDialogVisible: false,
            //修改資料
            editDialogVisible: false,
            originEditData: {},
            //分頁取資料
            nowPage: 1,
            pageSize: 10,
            totalPage: 10,
        }
    },
    mounted() {
        this.getshowTableData()
        this.getDatakeys()
    },
    computed: {
        checkedPassword() {
            if (this.newData.password == this.checkedPasswordValue) {
                return true
            } else {
                return false
            }
        },
        filteredData() {
            let startIndex = (this.nowPage - 1) * this.pageSize
            let endIndex = startIndex + this.pageSize
            return this.showTableData.slice(startIndex, endIndex)
        },
    },
    methods: {
        //匯入表格資料
        getshowTableData() {
            this.showTableData = JSON.parse(
                JSON.stringify(this.originTableData),
            )
            this.getTotalPage()
            this.searchContent = ''
        },
        //分頁數值重製
        getTotalPage() {
            this.totalPage =
                Math.ceil(this.showTableData.length / this.pageSize) * 10
            this.nowPage = 1
        },
        //初始化(新增、修改)暫存資料
        initTempData() {
            this.newData = {
                createDate: '',
                userName: '',
                email: '',
                account: '',
                password: '',
            }
            this.validationErrors = {
                userName: '',
                email: '',
                account: '',
                password: '',
            }
            this.checkedPasswordValue = ''
            this.originEditData = {}
        },
        //搜尋功能
        getDatakeys() {
            this.dataKeys = Object.keys(this.dataKeysShowText).filter(
                key => key !== 'password',
            )
            //預設全選
            this.checkedKeys = this.dataKeys
            this.isIndeterminate = false
            this.checkAllKeys = true
        },
        handleCheckAllKeysChange(val) {
            this.checkedKeys = val ? this.dataKeys : []
            this.isIndeterminate = false
        },
        handleCheckedKeysChange(value) {
            let checkedCount = value.length
            this.checkAllKeys = checkedCount === this.dataKeys.length
            this.isIndeterminate =
                checkedCount > 0 && checkedCount < this.dataKeys.length
        },
        getSearchData() {
            if (this.searchContent != '' && this.checkedKeys.length > 0) {
                this.showTableData = this.originTableData.filter(order =>
                    this.checkedKeys.some(field =>
                        String(order[field])
                            .toLowerCase()
                            .includes(this.searchContent.toLowerCase()),
                    ),
                )
                this.getTotalPage()
            } else {
                this.showTableData = JSON.parse(
                    JSON.stringify(this.originTableData),
                )
                this.getTotalPage()
            }
        },
        //帳號註冊
        validateRegistForms() {
            const dataKeys = Object.keys(this.validationErrors)
            let formIsValid = true
            for (let i = 0; i < dataKeys.length; i++) {
                this.validationErrors[dataKeys[i]] = this.isValid(
                    dataKeys[i],
                    this.newData[dataKeys[i]],
                )
                if (this.validationErrors[dataKeys[i]] != '') {
                    formIsValid = false
                }
            }
            if (this.newData.password != this.checkedPasswordValue) {
                formIsValid = false
            }
            if (formIsValid) {
                // 表單有效，可以提交
                this.registDialogVisible = false
                this.newData.createDate = this.getCurrentDateFormatted()
                this.originTableData.push(this.newData)
                Swal.fire({
                    title: `註冊成功`,
                    icon: 'success',
                    confirmButtonText: '確定',
                    allowOutsideClick: false,
                })
            } else {
                // 表單無效，阻止提交
            }
        },
        isValid(type, value) {
            if (type == 'email') {
                if (value == '') {
                    return '請填入您的電子信箱'
                }
                const re =
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

                if (re.test(value)) {
                    for (let i = 0; i < this.originTableData.length; i++) {
                        if (value === this.originTableData[i].email) {
                            return '該信箱已被註冊過'
                        }
                    }
                    return ''
                } else {
                    return '電子信箱格式錯誤'
                }
            } else if (type == 'userName') {
                if (value == '') {
                    return '請填入您的使用者名稱'
                } else {
                    return ''
                }
            } else if (type == 'account') {
                if (value == '') {
                    return '請填入您的帳號'
                }
                const re = /^[a-zA-Z0-9]+$/
                if (!re.test(value)) {
                    return '帳號只能包含英文與數字'
                }
                for (let i = 0; i < this.originTableData.length; i++) {
                    if (value === this.originTableData[i].account) {
                        return '該帳號已被使用'
                    }
                }
                return ''
            } else if (type == 'password') {
                if (value == '') {
                    return '請填入您的密碼'
                }
                if (value.length <= 5) {
                    return '密碼長度需大於5'
                }
                return ''
            }
            return ''
        },
        getCurrentDateFormatted() {
            const date = new Date()
            const year = date.getFullYear()
            const month = String(date.getMonth() + 1).padStart(2, '0') // 月份从0开始，需要加1，并确保两位数
            const day = String(date.getDate()).padStart(2, '0') // 确保两位数
            return `${year}-${month}-${day}`
        },
        //修改帳號資訊
        handleEdit(row) {
            Swal.fire({
                title: `進入修改畫面`,
                html: '<span style="color:red;font-size: 16px;font-weight: bold;">※:請輸入密碼進入修改畫面</span>',
                input: 'password',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: '確定',
                cancelButtonText: '取消',
                allowOutsideClick: false,
                inputValidator: value => {
                    if (!value) {
                        return '請輸入密碼'
                    } else if (value !== row.password) {
                        return '密碼錯誤'
                    }
                },
            }).then(result => {
                if (result.isConfirmed) {
                    this.editDialogVisible = true
                    this.originEditData = row
                    this.newData = JSON.parse(
                        JSON.stringify(this.originEditData),
                    )
                }
            })
        },
        editIsValid(type, value) {
            if (type == 'email') {
                if (value == '') {
                    return '請填入您的電子信箱'
                }
                const re =
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

                if (re.test(value)) {
                    for (let i = 0; i < this.originTableData.length; i++) {
                        if (
                            value === this.originTableData[i].email &&
                            value !== this.originEditData.email
                        ) {
                            return '該信箱已被註冊過'
                        }
                    }
                    return ''
                } else {
                    return '電子信箱格式錯誤'
                }
            } else if (type == 'userName') {
                if (value == '') {
                    return '請填入您的使用者名稱'
                } else {
                    return ''
                }
            } else if (type == 'account') {
                if (value == '') {
                    return '請填入您的帳號'
                }
                const re = /^[a-zA-Z0-9]+$/
                if (!re.test(value)) {
                    return '帳號只能包含英文與數字'
                }
                for (let i = 0; i < this.originTableData.length; i++) {
                    if (
                        value === this.originTableData[i].account &&
                        value !== this.originEditData.account
                    ) {
                        return '該帳號已被使用'
                    }
                }
                return ''
            } else if (type == 'password') {
                if (value == '') {
                    return '請填入您的密碼'
                }
                if (value.length <= 5) {
                    return '密碼長度需大於5'
                }
                return ''
            }
            return ''
        },
        validateEditForms() {
            const dataKeys = Object.keys(this.validationErrors)
            let formIsValid = true
            for (let i = 0; i < dataKeys.length; i++) {
                this.validationErrors[dataKeys[i]] = this.editIsValid(
                    dataKeys[i],
                    this.newData[dataKeys[i]],
                )
                if (this.validationErrors[dataKeys[i]] != '') {
                    formIsValid = false
                }
            }
            if (this.newData.password != this.checkedPasswordValue) {
                formIsValid = false
            }
            if (formIsValid) {
                // 表單有效，可以提交
                Swal.fire({
                    title: `是否儲存修改內容?`,
                    html: '<span style="color:green;font-size: 16px;font-weight: bold;">修改內容驗證合格</span>',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: '確定',
                    cancelButtonText: '取消',
                    allowOutsideClick: false,
                    didOpen: () => {
                        document.querySelector(
                            '.swal2-container',
                        ).style.zIndex = '9999'
                    },
                }).then(result => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: `修改成功`,
                            icon: 'success',
                            confirmButtonText: '確定',
                            allowOutsideClick: false,
                            didOpen: () => {
                                document.querySelector(
                                    '.swal2-container',
                                ).style.zIndex = '9999'
                            },
                        }).then(result => {
                            this.changeEditData()
                            this.editDialogVisible = false
                        })
                    }
                })
            } else {
                // 表單無效，阻止提交
            }
        },
        changeEditData() {
            const index = this.originTableData.findIndex(
                item => item.account === this.originEditData.account,
            )
            if (index !== -1) {
                this.$set(this.originTableData, index, this.newData)
            }
        },
        //刪除帳號
        handleDelete(row) {
            Swal.fire({
                title: `你確定要刪除 ${row.account} 嗎？`,
                html: '<span style="color:red;font-size: 16px;font-weight: bold;">※:請輸入密碼進行刪除作業</span>',
                input: 'password',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: '確定',
                cancelButtonText: '取消',
                allowOutsideClick: false,
                inputValidator: value => {
                    if (!value) {
                        return '請輸入密碼'
                    } else if (value !== row.password) {
                        // 替換 'your_password' 為實際的密碼
                        return '密碼錯誤'
                    }
                },
            }).then(result => {
                if (result.isConfirmed) {
                    console.log(row.account)
                    for (let i = 0; i < this.originTableData.length; i++) {
                        if (this.originTableData[i].account === row.account) {
                            this.originTableData.splice(i, 1)
                            break
                        }
                    }
                    this.getshowTableData()
                    Swal.fire({
                        icon: 'success',
                        title: '刪除成功',
                        text: `${row.account} 已被刪除`,
                        confirmButtonText: '確定',
                    })
                }
            })
        },
        //分頁
        handlePageChange(page) {
            this.nowPage = page
        },
    },
    beforeDestroy() {
        console.log('aaaa')
    },
}
</script>
<style scoped>
.title-container {
    display: flex;
    justify-content: center;
}

.title-container h1 {
    margin: 8px;
}

.container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
}
.container >>> .edit-btn {
    margin: 0 5px;
}

.container >>> .edit-btn:hover {
    color: rgb(84, 208, 84);
    cursor: pointer;
}
.container >>> .remove-btn {
    margin: 0 5px;
}

.container >>> .remove-btn:hover {
    color: #b33e1b;
    cursor: pointer;
}
</style>
