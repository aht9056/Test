<template>
    <div v-if="dataloaded" class="container p-0">
        <div class="row gx-0">
            <div
                class="col-3 selectType p-2"
                :class="{ selected: showType[0] }"
                @click="changeShowType(0)"
            >
                {{ typeList[topTypes[0]].name }}
            </div>
            <div
                class="col-3 selectType p-2"
                :class="{ selected: showType[1] }"
                @click="changeShowType(1)"
            >
                {{ typeList[topTypes[1]].name }}
            </div>
            <div
                class="col-3 selectType p-2"
                :class="{ selected: showType[2] }"
                @click="changeShowType(2)"
            >
                {{ typeList[topTypes[2]].name }}
            </div>
            <div
                class="col-3 selectType p-2"
                :class="{ selected: showType[3] }"
                @click="changeShowType(3)"
            >
                {{ typeList[topTypes[0]].name }}
            </div>
        </div>
        <div class="content d-flex flex-column">
            <div class="p-2 d-flex justify-content-between">
                <el-input
                    class="flex-grow-1"
                    placeholder="輸入關鍵字搜尋"
                    v-model="searchInput"
                />
                <div class="d-flex align-items-center">
                    <i class="bi bi-search fs-4 ps-2 searchBtn"></i>
                </div>
            </div>
            <div
                v-if="
                    typeList[nowSelectType] && typeList[nowSelectType].subTypes
                "
                class="d-flex flex-wrap"
            >
                <div
                    v-for="(item, index) in typeList[nowSelectType].subTypes"
                    :key="index"
                    class="p-2 pt-1 pb-1 subTypeLink"
                >
                    {{ item }}
                </div>
            </div>
            <div class="d-flex flex-grow-1 flex-column p-1">
                <div
                    class="row gx-0 d-flex flex-grow-1 p-2 pb-0 justify-content-evenly"
                >
                    <div class="col-6 suggestSelect p-2 pe-3">
                        <div
                            class="suggestSelect_content d-flex flex-column h-100"
                        >
                            <p class="flex-grow-1 m-0 text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    viewBox="0 0 512 222.242"
                                    width="46.08"
                                    height="20"
                                >
                                    <path
                                        class="svgWordColor"
                                        d="M101.193.003h367.63c12.826 0 23.242-.459 33.642 10.272 5.763 5.944 9.307 13.995 9.483 22.938l.052 1.144v154.214a18.3 18.3 0 01-.15 1.791c-1.284 9.021-5.726 16.988-12.096 22.692-6.104 5.457-13.964 8.835-22.551 9.118l-13.96.07H103.768c-4.574 0-8.178-.192-11.782-3.98L3.5 124.871c-4.444-4.659-4.725-12.023-.448-17.021L90.948 5.169A12.731 12.731 0 01101.193.003zm-33.48 94.584c4.548-4.704 10.097-7.121 16.615-7.282 6.546-.192 12.297 1.979 17.249 6.516 4.672 4.518 7.059 10.1 7.194 16.712.072 6.614-2.136 12.272-6.654 16.944-4.388 4.79-9.935 7.269-16.607 7.468-6.641.167-12.33-2.007-17.033-6.556-4.801-4.636-7.284-10.244-7.388-16.89-.102-6.582 2.106-12.24 6.624-16.912zm153.816 59.706l-22.517-37.297h-.552v37.297h-27.628V67.956h25.97l22.516 37.298h.553V67.956h27.628v86.337h-25.97zm96.04-32.601h-27.628v10.499h33.845v22.102h-61.473V67.956h60.782l-3.454 22.102h-29.7v11.604h27.628v20.03zm97.093-53.736h28.871l-13.537 86.337h-36.055l-6.354-31.772h-1.658l-6.216 31.772h-36.055L330.12 67.956h28.872l6.492 48.211h.829l9.946-48.211h21.136l9.808 48.211h.828l6.631-48.211z"
                                    />
                                </svg>
                            </p>
                            <p
                                class="flex-grow-1 m-0 text-center"
                                @click="sendData"
                            >
                                新發售
                            </p>
                        </div>
                    </div>
                    <div class="col-6 suggestSelect p-2 ps-3">
                        <div
                            class="suggestSelect_content d-flex flex-column h-100"
                        >
                            <p class="m-0 text-center">
                                <i class="bi bi-fire fs-5"></i>
                            </p>
                            <p class="flex-grow-1 m-0 text-center">熱銷中</p>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-grow-1 p-2 pt-0 justify-content-evenly">
                    <div class="col-6 suggestSelect p-2 pe-3">
                        <div
                            class="suggestSelect_content d-flex flex-column h-100"
                        >
                            <p class="flex-grow-1 m-0 text-center">
                                <i class="bi bi-translate fs-5"></i>
                            </p>
                            <p class="flex-grow-1 m-0 text-center">原文書</p>
                        </div>
                    </div>
                    <div class="col-6 suggestSelect p-2 ps-3">
                        <div
                            class="suggestSelect_content d-flex flex-column h-100"
                        >
                            <p class="flex-grow-1 m-0 text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40px"
                                    height="30px"
                                    viewBox="0 0 192.756 192.756"
                                >
                                    <g fill-rule="evenodd" clip-rule="evenodd">
                                        <path
                                            fill="transparent"
                                            d="M0 0h192.756v192.756H0V0z"
                                        />
                                        <path
                                            class="svgWordColor"
                                            d="M54.813 24.808l95.474 1.372-.52 7.547c-3.678 1.486-5.721 3.978-5.727 7.097-.004 3.119 2.029 5.495 5.727 7.144v107.025h-42.16v23.623L54.853 153.48c-7.099-3.383-12.192-7.904-13.603-13.131V40.993c0-8.376 6.093-16.292 13.563-16.185zm84.927 119.838V57.941H63.146l43.799 15.947v70.758h32.795zM59.207 32.355l75.987 1.372c-3.676 1.486-5.525 4.174-5.529 7.292s1.834 5.299 5.529 6.948H59.207c-4.149 0-7.547-3.396-7.547-7.546V39.9c0-4.15 3.395-7.619 7.547-7.545z"
                                            fill="#51a387"
                                        />
                                        <path
                                            class="svgBgColor"
                                            d="M64.696 131.377h17.033c6.769 0 10.378-3.498 10.378-9.703v-6.203H80.712v5.979H65.824v-11.732h26.283V89.864c0-6.43-3.609-9.927-10.378-9.927H64.696c-6.769 0-10.379 3.497-10.379 9.927v31.81c0 6.205 3.61 9.703 10.379 9.703zm1.128-41.513h14.888v11.054H65.824V89.864z"
                                            fill="#555"
                                        />
                                    </g>
                                </svg>
                            </p>
                            <p class="flex-grow-1 m-0 text-center">電子書</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getTopSearchedTypes } from '@/plugin/Algolia.js'
export default {
    data() {
        return {
            dataloaded: false,
            topTypes: ['T001', 'T002', 'T003', 'T004'],
            showType: [true, false, false, false],
            nowSelectType: '',
            typeList: {},
            searchInput: '',
        }
    },
    watch: {
        '$store.state.generalInfo.typeList': {
            handler(newTypeList) {
                if (newTypeList && !this.dataloaded && newTypeList != {}) {
                    this.$nextTick(() => {
                        this.typeList = newTypeList
                        this.dataloaded = true
                    })
                }
            },
        },
    },
    async mounted() {
        if (JSON.stringify(this.$store.state.generalInfo.typeList) != '{}') {
            this.typeList = this.$store.state.generalInfo.typeList
            this.dataloaded = true
        }
        this.topTypes = await getTopSearchedTypes()
        this.nowSelectType = this.topTypes[0]
    },
    beforeMount() {},
    methods: {
        changeShowType(index) {
            this.showType = [false, false, false, false]
            this.nowSelectType = this.topTypes[index]
            this.showType[index] = true
        },
        sendData(subTypes, ebook, isForeign) {
            const data = {
                subTypes: subTypes,
                ebook: ebook,
                isForeign: isForeign,
                sort: 'views',
            }
            this.$emit('send-data', data)
        },
    },
}
</script>
<style lang="scss" scoped>
.content {
    height: 250px;
}
.selectType {
    position: relative;
    background-color: var(--color-content-filterarea-collapse_btn_type);
    border-bottom: 1px solid var(--color-navbar-background);
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0%;
        height: 2px;
        background-color: var(--color-secondary);
        transition:
            width 0.3s ease,
            left 0.3s ease;
    }
    &:hover::after,
    &.selected::after {
        left: 0;
        width: 100%;
    }
    &:hover,
    &.selected {
        color: var(--color-secondary);
        border-bottom: 0px;
    }
    color: var(--color-content-text);
    text-align: center;
    cursor: pointer;
    font-size: larger;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
}
a {
    text-decoration: underline !important;
    cursor: pointer;
    line-height: 30px;
    height: 100%;
    white-space: normal;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
}
.searchBtn {
    color: var(--color-content-text);
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.2);
    }
}
.subTypeLink {
    cursor: pointer;
    text-decoration: underline;
    color: var(--color-primary);
}
.suggestSelect {
    .suggestSelect_content {
        transition: transform 0.3s ease;
        &:hover {
            box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
            transform: scale(1.1);
        }
        cursor: pointer;
        color: var(--color-navbar-hover-background);
        background-color: var(--color-secondary);
    }
}
.svgWordColor {
    fill: var(--color-navbar-hover-background);
}
.svgBgColor {
    fill: var(--color-secondary);
}
</style>
