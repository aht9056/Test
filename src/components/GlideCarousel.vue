<template>
    <div class="glide d-flex" ref="glideInstance">
        <div class="glide__arrows d-flex" data-glide-el="controls">
            <div
                class="glide__arrow d-flex glide__arrow--left h-100 align-items-center"
                data-glide-dir="<"
            >
                <i class="el-icon-arrow-left"></i>
            </div>
        </div>

        <div class="glide__track flex-fill pb-1 pt-1" data-glide-el="track">
            <ul class="glide__slides">
                <li
                    class="glide__slide d-flex"
                    v-for="(item, index) in list"
                    :key="index"
                >
                    <div class="container p-0">
                        <div class="row gx-0 itemInfo d-flex w-100 h-100">
                            <div
                                class="itemImg col-md-4 col-12 p-1 d-flex justify-content-center align-items-center"
                            >
                                <img :src="test" />
                            </div>
                            <div
                                class="col-md-8 col-12 d-flex p-1 itemInfo__desc flex-column"
                            >
                                <div
                                    class="titleDesc d-flex justify-content-center"
                                    style="flex-basis: 80%"
                                >
                                    <a herf="#">
                                        {{ item.title }}
                                    </a>
                                </div>
                                <div class="endDesc" style="flex-basis: 10%">
                                    <div class="row gx-0">
                                        <div
                                            class="col-12 d-flex justify-content-end"
                                        >
                                            <span
                                                :style="
                                                    item.discount != 0
                                                        ? 'text-decoration: line-through; text-decoration-color: red;'
                                                        : ''
                                                "
                                                >售價:<span
                                                    class="keyword"
                                                    :style="{
                                                        color:
                                                            item.discount != 0
                                                                ? '#FF2D2D'
                                                                : '',
                                                    }"
                                                    >{{
                                                        item.entity
                                                            ? item.entityPrice
                                                            : item.ebookPrice
                                                    }}</span
                                                >元</span
                                            >
                                        </div>
                                        <div
                                            class="col-12 d-flex justify-content-end"
                                        >
                                            <span
                                                class="ps-1"
                                                v-show="item.discount != 0"
                                            >
                                                優惠價:
                                                <span
                                                    class="keyword"
                                                    style="color: #ff2d2d"
                                                    >{{
                                                        item.entity
                                                            ? (
                                                                  (item.entityPrice *
                                                                      item.discount) /
                                                                  100
                                                              ).toFixed(0)
                                                            : (
                                                                  (item.ebookPrice *
                                                                      item.discount) /
                                                                  100
                                                              ).toFixed(0)
                                                    }}
                                                </span>
                                                元
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="glide__arrows" data-glide-el="controls">
            <div
                class="glide__arrow d-flex glide__arrow--right h-100 align-items-center"
                data-glide-dir=">"
            >
                <i class="el-icon-arrow-right"></i>
            </div>
        </div>
    </div>
</template>

<script>
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'
import { Autoplay } from '@glidejs/glide/dist/glide.modular.esm'
export default {
    data() {
        return {
            glide: null,
            activeIndex: -1,
            list: [
                {
                    title: '古代文明的起源：從美索不達米亞到古埃及 古代文明的起源：從美索不達米亞到古埃及 古代文明的起源：從美索不達米亞到古埃及',
                    img: '',
                    imgActive: '',
                    description:
                        '本書深入探討成功企業家的思維模式，從創新到領導的各個方面提供實用建議。本書深入探討成功企業家的思維模式，從創新到領導的各個方面提供實用建議。本書深入探討成功企業家的思維模式，從創新到領導的各個方面提供實用建議。本書深入探討成功企業家的思維模式，從創新到領導的各個方面提供實用建議。本書深入探討成功企業家的思維模式，從創新到領導的各個方面提供實用建議。本書深入探討成功企業家的思維模式，從創新到領導的各個方面提供實用建議。',
                    discount: '85',
                    entity: true,
                    entityPrice: 1300,
                    ebookPrice: 1200,
                },
                {
                    title: '示例標題 2',
                    img: '',
                    imgActive: '',
                    description: '',
                },
                {
                    title: '示例標題 3',
                    img: '',
                    imgActive: '',
                    description: '',
                },
                {
                    title: '示例標題 4',
                    img: '',
                    imgActive: '',
                    description: '',
                },
                {
                    title: '示例標題 5',
                    img: '',
                    imgActive: '',
                    description: '',
                },
            ],
            test: 'https://firebasestorage.googleapis.com/v0/b/myproject-dd0cb.appspot.com/o/0001_T002_20250122114457%2Fimages%2Fimage1.jpg?alt=media&token=e6c8a0e5-0e38-4e87-8101-0a1e9af64d3c',
        }
    },
    mounted() {
        this.glide = new Glide(this.$refs.glideInstance, {
            type: 'carousel',
            startAt: 0,
            perView: 4,
            gap: 28,
            animationDuration: 1000,
            breakpoints: {
                1280: {
                    perView: 3,
                },
                1024: {
                    perView: 2,
                },
                767: {
                    perView: 1,
                },
            },
        })
        this.glide.mount()
    },
    methods: {},
}
</script>

<style scoped>
.glide {
    background-color: transparent;
    padding: 5px;
}
.glide__slide {
    height: auto;
    padding: 5px;
    border: 1px solid var(--color-secondary);
}
.itemInfo {
    color: var(--color-content-text);
}
.itemImg img {
    max-width: 100%;
    height: auto;
    @media (max-width: 767px) {
        width: auto;
        height: 250px;
    }
    object-fit: contain; /* 確保圖片完整顯示 */
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
}

.glide__arrow {
    align-items: center;
    cursor: pointer;
    background-color: transparent;
    color: var(--color-secondary);
    i {
        font-size: 2em;
    }
}

.itemInfo__desc {
    max-height: auto;
    word-wrap: break-word; /* 適用於舊版瀏覽器 */
    overflow-wrap: break-word; /* 確保長單詞能換行 */
    white-space: normal; /* 允許自動換行 */
}
.titleDesc {
    a {
        text-decoration: underline;
        cursor: pointer;
        line-height: 30px;
        height: 100%;
        white-space: normal;
        word-break: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
        @media (max-width: 1024.98px) {
            -webkit-line-clamp: 4;
        }
        @media (max-width: 991.98px) {
            -webkit-line-clamp: 3;
        }
    }
    font-size: medium;
    color: var(--color-primary);
}
.endDesc {
    align-items: flex-end;
}
</style>
