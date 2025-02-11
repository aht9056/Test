<template>
    <div class="hello container">
        <div
            id="carouselExampleDark"
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
        >
            <div class="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img
                        src="../assets/2674559.gif"
                        class="d-block w-100"
                        alt="圖1"
                    />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>
                            Some representative placeholder content for the
                            first slide.
                        </p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img
                        src="../assets/2674559.gif"
                        class="d-block w-100"
                        alt="圖2"
                    />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>
                            Some representative placeholder content for the
                            second slide.
                        </p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img
                        src="../assets/2674559.gif"
                        class="d-block w-100"
                        alt="圖3"
                    />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>
                            Some representative placeholder content for the
                            third slide.
                        </p>
                    </div>
                </div>
            </div>
            <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
            >
                <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
            >
                <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-12 mt-4">
                    <div class="h3 title">
                        消息專區&ensp;<i class="fas fa-bullhorn"></i>
                    </div>
                    <div class="area">
                        <BulletinBoard />
                    </div>
                </div>
                <div class="col-lg-5 col-12 mt-4">
                    <div class="h3 title">
                        熱門類型&ensp;<i class="fas fa-search"></i>
                    </div>
                    <div class="area">
                        <PopularSearches @send-data="handleData" />
                    </div>
                </div>
            </div>
        </div>

        <div class="container mt-4">
            <div>
                <div class="h3 title">
                    新書推薦&ensp;<i class="fas fa-book"></i>
                </div>
                <div class="area">
                    <GlideCarousel />
                </div>
            </div>
        </div>
        <div class="container mt-4 mb-4">
            <div class="mt-4">
                <div class="h3 title">
                    暢銷排行&ensp;<i class="fas fa-fire-alt"></i>
                </div>
                <div class="area">
                    <GlideCarousel />
                </div>
            </div>
            <!-- <div class="row">
                <div
                    class="col-6 col-p2"
                    style="height: 600px; background-color: blue"
                >
                    1
                </div>
                <div
                    class="col-6 col-p2"
                    style="height: 600px; background-color: yellow"
                >
                    藍魚數位科技
                    藍魚數位科技，專業於網頁設計服務。服務範圍涵蓋各行業、行號、公司的網頁設計服務。
                    藍魚數位科技，擁有經驗資歷完整的設計專業團隊，了解每一個產業領域，對於網站與行銷的不同需求，我們不僅能清楚提供您最適合的網站規劃，更可以針對不同產業提出最適合的網站或產品行銷方案！從網址申請、主機租賃、網頁設計、網站行銷、程式開發
                    ...
                    等皆提供完整性服務，是有能力提供全方位服務的網站設計公司。
                    台南網頁設計｜高雄網頁設計｜屏東網頁設計｜嘉義網頁設計｜苗栗網頁設計｜台中網頁設計｜彰化網頁設計
                    台北網頁設計｜桃園網頁設計｜新竹網頁設計｜南投網頁設計｜花蓮網頁設計｜台東網頁設計｜雲林網頁設計
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import GlideCarousel from '@/components/GlideCarousel.vue'
import BulletinBoard from '@/components/BulletinBoard.vue'
import PopularSearches from '@/components/PopularSearches.vue'
export default {
    components: { GlideCarousel, BulletinBoard, PopularSearches },
    data() {
        return {
            topTypes: [],
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            const elements = document.querySelectorAll('.col-p2')
            elements.forEach(element => {
                const viewportHeight = window.innerHeight
                const scrollY = window.scrollY || window.pageYOffset
                const elementOffsetTop = element.offsetTop
                const triggerOffset = elementOffsetTop - viewportHeight / 2

                if (scrollY > triggerOffset) {
                    element.style.opacity = '1'
                    element.style.transition = 'opacity 0.5s'
                }
                // else {
                //   element.style.opacity = '0';
                // }
            })
        },
        handleData(data) {
            console.log(data.name)
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.carousel {
    margin-top: 15px;
    border-radius: 10px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
}
.carousel-item img {
    border-radius: 8px;
    max-height: 500px; /* 限制最大高度 */
    width: auto; /* 自适应宽度 */
    margin: 0 auto; /* 居中 */
}
.area {
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
}
.title {
    color: var(--color-primary);
    border-bottom: 1px solid rgba(206, 201, 201, 0.722);
}
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
.col-p2 {
    opacity: 0;
}
@media (max-width: 992px) {
    .col-p2 {
        flex: 0 0 100%;
    }
}
</style>
