<template>
    <div class="container-fluid layout w-100">
        <article class="l-design-width">
            <div class="card row flex-row">
                <div class="col-lg-12 col-12 p-1 d-flex flex-row-reverse">
                    <div class="input w-100">
                        <textarea
                            class="input__field"
                            style="color: red; height: 150px"
                            v-model="bookMessage.fixMessage"
                            placeholder=""
                            readonly
                        ></textarea>
                        <span class="input__label">審核未通過原因</span>
                    </div>
                </div>
                <div class="col-lg-6 col-12 p-2">
                    <div class="d-flex justify-content-between">
                        <h3>書籍資料</h3>
                        <button @click="checkBookData()">檢查</button>
                    </div>
                    <div class="d-flex justify-content-end">
                        <small class="errorhint" style="color: green">{{
                            qualified
                        }}</small>
                    </div>
                    <div class="input">
                        <input
                            class="input__field"
                            type="text"
                            placeholder=""
                            v-model="bookMessage.name"
                        />
                        <span class="input__label">書籍名稱</span>
                        <small class="errorhint">{{ errorHint.name }}</small>
                    </div>
                    <div class="input">
                        <div class="input__field h-100 d-flex flex-wrap">
                            <div class="form-check col-6">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="languageRadio"
                                    id="isForiegnRadio_false"
                                    :value="false"
                                    v-model="bookMessage.isForiegn"
                                />
                                <label
                                    class="form-check-label"
                                    for="isForiegnRadio_false"
                                >
                                    中文
                                </label>
                            </div>
                            <div class="form-check col-6">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="languageRadio"
                                    id="isForiegnRadio_true"
                                    :value="true"
                                    v-model="bookMessage.isForiegn"
                                />
                                <label
                                    class="form-check-label"
                                    for="isForiegnRadio_true"
                                >
                                    外文
                                </label>
                            </div>
                        </div>
                        <span class="input__label">語言分類</span>
                    </div>
                    <div class="input">
                        <div class="input__field d-flex flex-wrap">
                            <div
                                v-for="(key, index) in Object.keys(typeList)"
                                :key="key"
                                class="form-check col-12 col-sm-12 col-md-6 col-lg-3"
                            >
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="typeRadio"
                                    :id="'typeRadio_' + index"
                                    v-model="bookMessage.type"
                                    @change="changeTypeRadio(key)"
                                    :value="key"
                                />
                                <label
                                    class="form-check-label"
                                    :for="'typeRadio_' + index"
                                >
                                    {{ typeList[key].name }}
                                </label>
                            </div>
                        </div>
                        <span class="input__label">主類型</span>
                        <small class="errorhint">{{ errorHint.type }}</small>
                    </div>
                    <div class="input">
                        <div class="input__field d-flex flex-wrap">
                            <div
                                v-for="(subType, index) in nowSubTypesInfo"
                                class="form-check col-12 col-sm-12 col-md-6 col-lg-3"
                            >
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    name="subTypeCheckBox"
                                    :id="'subTypeCheckBox_' + index"
                                    :value="subType"
                                    v-model="bookMessage.subTypes"
                                />
                                <label
                                    class="form-check-label"
                                    :for="'subTypeCheckBox_' + index"
                                >
                                    {{ subType }}
                                </label>
                            </div>
                        </div>
                        <span class="input__label">子類型</span>
                        <small class="errorhint">{{
                            errorHint.subTypes
                        }}</small>
                    </div>
                    <div class="input">
                        <div class="input__field d-flex flex-wrap">
                            <TagInput v-model="bookMessage.bookTag" @input="" />
                        </div>
                        <span class="input__label">書籍標籤</span>
                        <small class="errorhint">{{ errorHint.bookTag }}</small>
                    </div>
                    <div class="input" @click="getDescription('book')">
                        <input
                            class="input__field"
                            type="text"
                            placeholder=""
                            v-model="bookMessage.description"
                            readonly
                        />
                        <span class="input__label">書籍介紹</span>
                        <small class="errorhint">{{
                            errorHint.description
                        }}</small>
                    </div>
                    <div class="input">
                        <div class="input__field d-flex flex-wrap flex-column">
                            <UploadPicture
                                :images="images"
                                :originContentImages="
                                    bookMessage.contentPagePhoto
                                "
                                @files-selected="handleImages"
                            />
                        </div>
                        <span class="input__label">圖片</span>
                        <small class="errorhint">{{ errorHint.photo }}</small>
                    </div>
                    <div class="input">
                        <div class="input__field d-flex flex-wrap flex-column">
                            <UploadPdf
                                :nowfile="pdfFile"
                                :originPdf="true"
                                :serialNumber="bookMessage.serialNumber"
                                @file-selected="handlePdf"
                            />
                        </div>
                        <span class="input__label">書籍pdf檔</span>
                    </div>
                </div>
                <div class="col-lg-6 col-12 p-2">
                    <h2>出版資料</h2>
                    <div class="input">
                        <input
                            class="input__field"
                            type="text"
                            placeholder=""
                            v-model="bookMessage.code"
                            readonly
                        />
                        <span class="input__label">出版社代號</span>
                    </div>
                    <div class="input">
                        <input
                            class="input__field"
                            type="text"
                            placeholder=""
                            v-model="nowPublisher.name"
                            readonly
                        />
                        <span class="input__label">出版社名稱</span>
                    </div>
                    <div class="input">
                        <div class="input__field d-flex flex-wrap">
                            <PickDate v-model="bookMessage.publicationDate" />
                        </div>
                        <span class="input__label">出版日期</span>
                        <small class="errorhint">{{
                            errorHint.publicationDate
                        }}</small>
                    </div>
                    <div class="input">
                        <div class="input__field d-flex flex-wrap">
                            <TagInput
                                v-model="bookMessage.author"
                                :suggestions="[]"
                                @input=""
                            />
                        </div>
                        <span class="input__label">作者</span>
                        <small class="errorhint">{{ errorHint.author }}</small>
                    </div>
                    <div class="input" @click="getDescription('author')">
                        <input
                            class="input__field"
                            type="text"
                            placeholder=""
                            v-model="bookData.authorIntro"
                            readonly
                        />
                        <span class="input__label">作者介紹</span>
                        <small class="errorhint">{{
                            errorHint.authorIntro
                        }}</small>
                    </div>
                    <h2>販售資料</h2>
                    <small class="errorhint">{{ errorHint.saleType }}</small>
                    <div class="input d-flex">
                        <div class="mt-1 input w-100">
                            <div class="input__field h-100 d-flex flex-wrap">
                                <div class="form-check col-6">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="entityRadio"
                                        id="entityRadio_true"
                                        :value="true"
                                        v-model="bookMessage.entity"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="entityRadio_true"
                                    >
                                        有販售
                                    </label>
                                </div>
                                <div class="form-check col-6">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="entityRadio"
                                        id="entityRadio_false"
                                        :value="false"
                                        v-model="bookMessage.entity"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="entityRadio_false"
                                        style="white-space: nowrap"
                                    >
                                        無販售
                                    </label>
                                </div>
                            </div>
                            <span class="input__label">實體書</span>
                        </div>
                        <div v-if="bookMessage.entity" class="mt-1 ms-1 input">
                            <input
                                class="input__field h-100"
                                type="number"
                                placeholder=""
                                v-model="bookMessage.entityPrice"
                            />
                            <span class="input__label">定價</span>
                        </div>
                        <div v-if="bookMessage.entity" class="mt-1 ms-1 input">
                            <input
                                class="input__field h-100"
                                type="number"
                                placeholder=""
                                v-model="bookMessage.stock"
                            />
                            <span class="input__label">庫存</span>
                        </div>
                    </div>
                    <small class="errorhint">{{ errorHint.entityPrice }}</small>
                    <div class="input d-flex justify-content-between">
                        <div class="mt-1 input flex-grow-1">
                            <div class="input__field h-100 d-flex flex-wrap">
                                <div class="form-check col-6">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="eBookRadio"
                                        id="eBookRadio_true"
                                        :value="true"
                                        v-model="bookMessage.ebook"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="eBookRadio_true"
                                    >
                                        有販售
                                    </label>
                                </div>
                                <div class="form-check col-6">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="eBookRadio"
                                        id="eBookRadio_false"
                                        :value="false"
                                        v-model="bookMessage.ebook"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="eBookRadio_false"
                                    >
                                        無販售
                                    </label>
                                </div>
                            </div>
                            <span class="input__label">電子書</span>
                        </div>
                        <div
                            v-if="bookMessage.ebook"
                            class="mt-1 ms-1 input flex-grow-1"
                        >
                            <input
                                class="input__field h-100"
                                type="number"
                                placeholder=""
                                v-model="bookMessage.ebookPrice"
                            />
                            <span class="input__label">定價</span>
                        </div>
                    </div>
                    <small class="errorhint">{{ errorHint.ebookPrice }}</small>
                </div>
                <div class="col-lg-12 col-12 p-1 d-flex flex-row-reverse">
                    <button @click="fixBook()">送出</button>
                </div>
            </div>
        </article>
    </div>
</template>
<script>
import api from '@/axios/axios'
import TagInput from './inputType/TagInput.vue'
import SelectInput from './inputType/SelectInput.vue'
import PickDate from './inputType/PickDate.vue'
import UploadPicture from './inputType/UploadPicture.vue'
import UploadPdf from './inputType/UploadPdf.vue'
import Cookies from 'js-cookie'
export default {
    name: 'FixBook',
    props: {
        bookDataFromView: {
            type: Object,
            required: true,
        },
        bookMessageFromView: {
            type: Object,
            required: true,
        },
    },
    components: {
        TagInput,
        SelectInput,
        PickDate,
        UploadPicture,
        UploadPdf,
    },
    data() {
        return {
            bookData: this.bookDataFromView,
            bookMessage: this.bookMessageFromView,
            nowPublisher: {},
            images: [],
            typeList: {},
            nowSubTypesInfo: [],
            errorHint: {
                name: '',
                type: '',
                subTypes: '',
                author: '',
                code: '',
                photo: '',
                publicationDate: '',
                description: '',
                bookTag: '',
                authorIntro: '',
                stock: '',
                entityPrice: '',
                ebookPrice: '',
                saleType: '',
            },
            qualified: '',
            pdfFile: null,
        }
    },
    computed: {},
    methods: {
        getTypeList() {
            this.typeList = this.$store.state.generalInfo.typeList
            this.nowSubTypesInfo = this.typeList[this.bookMessage.type].subTypes
        },
        changeTypeRadio(key) {
            this.bookMessage.subTypes = []
            this.nowSubTypesInfo = this.typeList[key].subTypes
        },
        handleDatePick(date) {
            this.bookMessage.publicationDate = date
        },
        handleImages(files) {
            this.images = files
        },
        handlePdf(file) {
            this.pdfFile = file
        },
        getDescription(choice) {
            let existingValue = ''
            if (choice == 'book') {
                existingValue = this.bookMessage.description
            } else {
                existingValue = this.bookData.authorIntro
            }
            this.$swal
                .fire({
                    title: '請填寫介紹內文',
                    html: `<textarea id="swal-textarea" style="height: 300px;width:100%">${existingValue}</textarea>`,
                    focusConfirm: false,
                    showCancelButton: true,
                    confirmButtonText: '確定',
                    cancelButtonText: '取消',
                    didOpen: () => {
                        // 當彈窗打開後，給 textarea 預設值
                        const textarea = this.$swal
                            .getPopup()
                            .querySelector('#swal-textarea')
                        if (choice == 'book') {
                            textarea.value = this.bookMessage.description
                        } else {
                            textarea.value = this.bookData.authorIntro
                        }
                    },
                    preConfirm: () => {
                        const textareaValue = this.$swal
                            .getPopup()
                            .querySelector('#swal-textarea').value
                        if (!textareaValue) {
                            this.$swal.showValidationMessage('內容不可空白')
                        }
                        if (textareaValue.length > 2000) {
                            this.$swal.showValidationMessage(
                                '內容不可超過2000個字符',
                            )
                        }
                        if (choice == 'book') {
                            this.bookMessage.description = textareaValue
                            return textareaValue
                        } else {
                            this.bookData.authorIntro = textareaValue
                            return textareaValue
                        }
                    },
                })
                .then(result => {})
        },
        checkBookData() {
            let flag = true
            if (this.bookMessage.name === '') {
                this.errorHint.name = '書名不可為空'
                flag = false
            } else if (this.bookMessage.name.length > 100) {
                this.errorHint.name = '書名長度不可大於100個字符串'
                flag = false
            } else {
                this.errorHint.name = ''
            }
            if (this.bookMessage.type === '') {
                this.errorHint.type = '請選擇主類型'
                flag = false
            } else {
                this.errorHint.type = ''
            }
            if (this.bookMessage.subTypes.length === 0) {
                this.errorHint.subTypes = '請至少選擇一項子類型'
                flag = false
            } else {
                this.errorHint.subTypes = ''
            }
            if (this.bookMessage.bookTag.length > 15) {
                this.errorHint.bookTag = '標籤數量不得超過15個'
                flag = false
            } else {
                this.errorHint.bookTag = ''
            }
            if (this.bookMessage.description === '') {
                this.errorHint.description = '書籍介紹不可為空'
                flag = false
            } else {
                this.errorHint.description = ''
            }
            if (
                this.images.length === 0 &&
                this.bookMessage.contentPagePhoto.length === 0
            ) {
                this.errorHint.photo = '請至少放上一張圖片'
                flag = false
            } else {
                this.errorHint.photo = ''
            }
            if (this.bookMessage.publicationDate === '') {
                this.errorHint.publicationDate = '出版日期不可為空'
                flag = false
            } else {
                this.errorHint.publicationDate = ''
            }
            if (this.bookMessage.author.length > 6) {
                this.errorHint.author = '作者人數不得超過6個'
                flag = false
            } else if (this.bookMessage.author.length === 0) {
                this.errorHint.author = '作者人數不得為0'
                flag = false
            } else {
                this.errorHint.author = ''
            }
            if (this.bookData.authorIntro === '') {
                this.errorHint.authorIntro = '作者介紹不可為空'
                flag = false
            }
            if (!this.bookMessage.entity && !this.bookMessage.ebook) {
                this.errorHint.saleType = '請至少選擇一種販售方式'
            } else {
                this.errorHint.saleType = ''
            }
            if (this.bookMessage.entity && this.bookMessage.entityPrice == 0) {
                this.errorHint.entityPrice = '價格不可為0'
                flag = false
            } else {
                this.errorHint.entityPrice = ''
            }
            if (this.bookMessage.ebook && this.bookMessage.ebookPrice == 0) {
                this.errorHint.ebookPrice = '價格不可為0'
                flag = false
            } else {
                this.errorHint.ebookPrice = ''
            }
            if (flag == false) {
                this.qualified = ''
            } else {
                this.qualified = '資料格式合格'
            }
            return flag
        },
        fixBook() {
            if (this.checkBookData()) {
                this.updateLastUpdateTime()
                this.bookMessage.status = '審核中'
                this.bookMessage.read = false
                this.bookData.name = this.bookMessage.name
                this.$swal.fire({
                    title: '處理中...',
                    text: '正在上傳資料，請稍候',
                    icon: 'info',
                    allowOutsideClick: false,
                    showConfirmButton: false,
                    showCancelButton: false,
                    didOpen: () => {
                        this.$swal.showLoading()
                        this.fixToFirebase()
                            .then(() => {
                                this.$swal.close()
                                this.$swal.fire({
                                    title: '成功',
                                    text: '資料已成功上傳，請等待管理員審核',
                                    icon: 'success',
                                    confirmButtonText: '確定',
                                    showCancelButton: false,
                                })
                            })
                            .then(result => {
                                this.$emit('closeModal')
                            })
                            .catch(error => {
                                this.$swal.close()
                                this.$swal.fire({
                                    title: '錯誤',
                                    text: '上傳過程中發生錯誤，請稍後重試',
                                    icon: 'error',
                                    confirmButtonText: '確定',
                                })
                                console.error('Error in fixBook method:', error)
                            })
                    },
                })
            }
        },
        updateLastUpdateTime() {
            const taiwanTime = new Date().toLocaleString('zh-TW', {
                timeZone: 'Asia/Taipei',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            })
            this.bookMessage.lastUpdateTime = taiwanTime
        },
        async fixToFirebase() {
            try {
                let imagesBase64 = 'empty'
                if (this.images.length != 0) {
                    imagesBase64 = await Promise.all(
                        this.images.map(image =>
                            this.convertFileToBase64(image),
                        ),
                    )
                }
                let pdfBase64 = 'empty'
                if (this.pdfFile != null) {
                    pdfBase64 = await this.convertFileToBase64(this.pdfFile)
                }
                const response = await api.post('/uploadBookRequest', {
                    images: imagesBase64,
                    pdf: pdfBase64,
                    serialNumber: this.bookMessage.serialNumber,
                    bookData: this.bookData,
                    bookMessage: this.bookMessage,
                    code: this.$store.state.userInfo.userInfoData.code,
                    uid: JSON.parse(Cookies.get('accountInfo')).uid,
                })

                if (response.data.success) {
                    console.log('Files uploaded successfully:')
                } else {
                    console.error(
                        'Error uploading files:',
                        response.data.message,
                    )
                    return Promise.reject(response.data.message)
                }
            } catch (error) {
                console.error('Error in fixBook method:', error)
                return Promise.reject(error)
            }
        },
        convertFileToBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = () => resolve(reader.result.split(',')[1])
                reader.onerror = error => reject(error)
            })
        },
    },
    beforeMount() {
        this.nowPublisher = this.$store.state.userInfo.userInfoData
        this.getTypeList()
    },
}
</script>
<style lang="scss" scoped>
@import '../scss/aboutuser/styles.scss';
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
</style>
