<template>
    <div>
        <div>
            <button @click="triggerFileInput">選擇檔案夾</button>
            <input
                type="file"
                ref="fileInput"
                webkitdirectory
                multiple
                @change="handleFolderSelect"
                style="display: none"
            />
            <span v-if="hasImages"> 選擇的圖檔: </span>
            <span v-else> 未選擇任何圖檔 </span>
            <a
                v-if="hasImages"
                class=""
                data-bs-toggle="collapse"
                href="#imageCollapse"
                role="button"
                aria-expanded="false"
                aria-controls="imageCollapse"
                >查看圖片</a
            >
        </div>
        <div class="collapse multi-collapse" id="imageCollapse">
            <div v-if="images.length">
                <div class="image-container">
                    <div
                        v-for="(image, index) in images"
                        :key="index"
                        class="image-wrapper"
                    >
                        <img :src="getImageUrl(image)" :alt="image.name" />
                        <p>{{ image.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        images: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            selectedFileNames: [],
        }
    },
    computed: {
        hasImages() {
            return this.images.length > 0
        },
    },
    methods: {
        triggerFileInput() {
            this.$refs.fileInput.click()
        },
        handleFolderSelect(event) {
            const files = Array.from(event.target.files)
            const validFiles = files.filter(file => this.isImage(file))
            const fileNames = validFiles.map(file => file.name)
            this.selectedFileNames = fileNames

            if (validFiles.length > 0) {
                this.$emit('files-selected', validFiles)
            }
        },
        isImage(file) {
            return file.type.startsWith('image/')
        },
        getImageUrl(image) {
            return URL.createObjectURL(image)
        },
    },
}
</script>
<style lang="scss" scoped>
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
a {
    color: var(--color-primary);
}
</style>
