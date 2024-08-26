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
        <span v-if="hasFile"> {{ nowfile.name }} </span>
        <span v-else> 未選擇任何文件 </span>
    </div>
</template>

<script>
export default {
    props: {
        nowfile: {
            type: File,
            default: null,
        },
    },
    computed: {
        hasFile() {
            return this.nowfile !== null
        },
    },
    methods: {
        triggerFileInput() {
            this.$refs.fileInput.click()
        },
        handleFileSelect(event) {
            const file = event.target.files[0]
            if (file && this.isPDF(file)) {
                this.$emit('file-selected', file)
            } else {
                alert('請選擇一個有效的 PDF 文件')
            }
        },
        isPDF(file) {
            return file.type === 'application/pdf'
        },
    },
}
</script>
