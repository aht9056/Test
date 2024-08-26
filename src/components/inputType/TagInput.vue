<template>
    <div class="d-flex flex-wrap">
        <el-tag
            v-for="tag in tags"
            :key="tag"
            closable
            :disable-transitions="false"
            @close="removeTag(tag)"
            class="mt-1"
        >
            {{ tag }}
        </el-tag>

        <div v-if="inputVisible" class="ms-1 input-new-tag">
            <input
                type="text"
                placeholder=""
                @blur="addTag"
                ref="tagInput"
                v-model="inputValue"
                @keydown.enter.prevent="addTag"
                @input="filterSuggestions"
            />
            <div v-if="filteredSuggestions.length > 0">
                <div
                    v-for="suggestion in filteredSuggestions"
                    :key="suggestion"
                    @mousedown="selectTag(suggestion)"
                >
                    {{ suggestion }}
                </div>
            </div>
        </div>

        <el-button
            v-else
            class="mt-1 button-new-tag"
            size="small"
            @click="showInput"
        >
            + 新增
        </el-button>
    </div>
</template>

<script>
export default {
    name: 'TagInput',
    props: {
        value: {
            type: Array,
            default: () => [],
        },
        suggestions: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            tags: [...this.value],
            inputVisible: false,
            inputValue: '',
            filteredSuggestions: [],
        }
    },
    methods: {
        removeTag(tag) {
            const index = this.tags.indexOf(tag)
            if (index >= 0) {
                this.tags.splice(index, 1)
                this.$emit('input', this.tags)
            }
        },
        showInput() {
            this.inputVisible = true
            this.$nextTick(() => {
                this.$refs.tagInput.focus()
            })
        },
        addTag() {
            if (this.inputValue && !this.tags.includes(this.inputValue)) {
                this.tags.push(this.inputValue)
                this.$emit('input', this.tags)
            }
            this.inputVisible = false
            this.inputValue = ''
        },
        selectTag(tag) {
            this.inputValue = tag
            this.addTag()
        },
        filterSuggestions() {
            const searchTerm = this.inputValue.toLowerCase()
            this.filteredSuggestions = this.suggestions.filter(suggestion =>
                suggestion.toLowerCase().includes(searchTerm),
            )
        },
    },
    beforeMount() {
        this.filteredSuggestions = this.suggestions
    },
}
</script>
<style lang="scss" scoped>
.el-tag + .el-tag {
    margin-left: 10px;
}
.el-tag {
    color: var(--color-content-text);
    background-color: var(--color-content-background);
    border: 1px solid var(--color-primary);
}
::v-deep.el-tag .el-icon-close {
    color: var(--color-primary);
    &:hover {
        background-color: var(--color-primary);
        color: var(--color-content-background);
    }
}
.button-new-tag {
    height: 32px;
    margin-left: 10px;
    padding-top: 0;
    padding-bottom: 0;
    &:hover {
        color: var(--color-primary);
        background-color: var(--color-content-background);
        border-color: var(--color-primary);
    }
}
.input-new-tag {
    position: relative;

    input {
        color: black;
        width: 90px;
        vertical-align: bottom;
    }

    > div {
        position: absolute;
        top: 100%;
        left: 0;
        min-width: 100%;
        max-height: 100px;
        overflow-y: auto;
        border: 1px solid #ccc;
        background-color: #fff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        z-index: 1000;

        > div {
            cursor: pointer;
            color: #333;
            padding: 5px;
            white-space: nowrap;
            &:hover {
                background-color: #f0f0f0;
            }
        }
    }
}
</style>
