<template>
    <div>
        <button @click="triggerFileInput">選擇PDF文件</button>
        <input
            type="file"
            ref="fileInput"
            accept="application/pdf"
            @change="handleFileSelect"
            style="display: none"
        />

        <span
            v-if="originPdf && !hasFile"
            class="pdf_link_btn ms-1"
            @click="getPdfLink()"
        >
            查看原始文件
        </span>
        <span
            v-else-if="hasFile"
            class="pdf_link_btn ms-1"
            @click="shoSelectPdf()"
        >
            {{ nowfile.name }}
        </span>
        <span v-else> 未選擇任何文件 </span>
    </div>
</template>

<script>
import api from '@/axios/axios'
import Cookies from 'js-cookie'
export default {
    props: {
        nowfile: {
            type: File,
            default: null,
        },
        originPdf: {
            type: Boolean,
            required: false,
        },
        serialNumber: {
            type: String,
            required: false,
        },
    },
    computed: {
        hasFile() {
            return this.nowfile !== null
        },
    },
    data() {
        return {
            originPdfLink: '',
            selectFile: null,
            mySerialNumber: this.serialNumber,
        }
    },
    methods: {
        triggerFileInput() {
            this.$refs.fileInput.click()
        },
        handleFileSelect(event) {
            const file = event.target.files[0]
            if (file && this.isPDF(file)) {
                this.selectFile = file
                this.$emit('file-selected', file)
            } else {
                alert('請選擇一個有效的 PDF 文件')
            }
        },
        shoSelectPdf() {
            const fileURL = URL.createObjectURL(this.selectFile)
            window.open(fileURL, '_blank')
        },
        isPDF(file) {
            return file.type === 'application/pdf'
        },
        async getPdfLink() {
            try {
                const response = await api.post('/api/getPDFDownloadLink', {
                    serialNumber: this.mySerialNumber,
                    uid: JSON.parse(Cookies.get('accountInfo')).uid,
                    fileName: this.mySerialNumber + '.pdf',
                })
                if (response.data.success) {
                    const downloadUrl = response.data.url
                    console.log(downloadUrl)
                    window.open(downloadUrl, '_blank')
                } else {
                    return Promise.reject(response.data.message)
                }
            } catch (error) {
                console.error('Error in method:', error)
                return Promise.reject(error)
            }
        },
    },
}
</script>
<style lang="scss">
.pdf_link_btn {
    cursor: pointer;
    color: var(--color-primary);
    text-decoration: underline;
}
</style>
