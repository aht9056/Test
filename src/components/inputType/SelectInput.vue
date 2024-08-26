<template>
    <div class="flex-grow-1">
        <div class="input-select">
            <input
                class="input__field"
                type="text"
                placeholder=""
                @blur="changeSelect"
                @focus="showSelect = true"
                ref="selectInput"
                v-model="selects"
                @keydown.enter.prevent="addSelect"
                @input="filterSuggestions"
            />
            <span class="input__label">出版社</span>
            <div v-if="showSelect && filteredSuggestionsKeys.length > 0">
                <div
                    v-for="key in filteredSuggestionsKeys"
                    :key="key"
                    @mousedown="selectSelect(key)"
                >
                    <div class="d-flex justify-content-between">
                        <span>{{ suggestions[key].name }}</span
                        ><span>代號:{{ key }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SelectInput',
    props: {
        value: {
            type: String,
            default: () => '',
        },
        suggestions: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            selects: this.value,
            showSelect: false,
            filteredSuggestionsKeys: [],
        }
    },
    methods: {
        changeSelect() {
            this.showSelect = false
        },
        selectSelect(key) {
            this.selects = key
            this.$emit('input', key)
        },
        filterSuggestions() {
            const searchTerm = this.selects.toLowerCase()
            this.filteredSuggestionsKeys = Object.keys(this.suggestions).filter(
                key =>
                    key.toLowerCase().includes(searchTerm) ||
                    this.suggestions[key].name
                        .toLowerCase()
                        .includes(searchTerm),
            )
        },
    },
    beforeMount() {
        this.filteredSuggestionsKeys = Object.keys(this.suggestions)
    },
}
</script>

<style lang="scss" scoped>
@import '../../scss/aboutuser/styles.scss';
.input-select {
    position: relative;
    input {
        color: var(--color-content-text);
        vertical-align: bottom;
    }
    > div {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
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
