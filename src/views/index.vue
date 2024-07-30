<template>
    <div id="app">
        <div class="container-fluid dark-theme">
            <div id="navbarId" class="navbar-container position-fixed w-100">
                <nav class="navbar navbar-expand-lg p-0 w-100">
                    <div
                        class="d-flex justify-content-between"
                        :class="{ 'w-100': isShowToggle }"
                        style="height: 70px"
                    >
                        <div class="navbar-brand d-flex align-items-center p-1">
                            <span>LOGO</span>
                        </div>
                        <div class="d-flex align-items-center p-1">
                            <input
                                v-show="isShowToggle"
                                @click="toggleEvent()"
                                type="checkbox"
                                role="button"
                                class="menu"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            />
                            <!-- <button
                                @click="toggleEvent()"
                                class="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span class="navbar-toggler-icon"></span>
                            </button> -->
                        </div>
                    </div>
                    <div
                        class="collapse navbar-collapse"
                        :class="{
                            ' d-flex justify-content-center': !isShowToggle,
                        }"
                        :style="{ height: !isShowToggle ? '70px' : 'auto' }"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav h-100">
                            <li
                                class="nav-item justify-content-center align-items-center"
                            >
                                <router-link
                                    class="nav-link active"
                                    aria-current="page"
                                    to="/home"
                                    >首頁</router-link
                                >
                            </li>
                            <li
                                class="nav-item justify-content-center align-items-center"
                            >
                                <router-link
                                    class="nav-link active"
                                    aria-current="page"
                                    to="/about"
                                    >所有商品</router-link
                                >
                            </li>
                            <li
                                class="nav-item justify-content-center align-items-center"
                            >
                                <router-link
                                    class="nav-link active"
                                    aria-current="page"
                                    to="/vuex"
                                    >頁面3</router-link
                                >
                            </li>
                            <li
                                class="nav-item dropdown"
                                style="display: block; margin: 0 auto"
                            >
                                <a class="nav-link dropdown-icon" href="#">
                                    頁面4
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="dropdown-li">
                                        <a class="dropdown-item" href="#"
                                            >Action</a
                                        >
                                    </li>
                                    <li class="dropdown-li">
                                        <a class="dropdown-item" href="#"
                                            >Another action</a
                                        >
                                    </li>
                                    <li class="dropdown-li">
                                        <a class="dropdown-item" href="#"
                                            >Something</a
                                        >
                                    </li>
                                </ul>
                            </li>
                            <li
                                class="nav-item justify-content-center align-items-center"
                            >
                                <router-link
                                    class="nav-link active"
                                    aria-current="page"
                                    to="/about"
                                    >關於</router-link
                                >
                            </li>
                            <li
                                class="nav-item justify-content-center align-items-center"
                            >
                                <router-link
                                    class="nav-link active"
                                    aria-current="page"
                                    to="/about"
                                    >頁面5</router-link
                                >
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <div
            :ref="'routerViewRef'"
            class="router position-relative d-flex justify-content-center align-items-start"
        >
            <router-view />
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            navbarHeight: 0,
            isShowToggle: false,
        }
    },
    mounted() {
        this.observeNavbarHeight()
        window.addEventListener('resize', this.handleResize)
        this.handleResize()
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize)
        this.unobserveNavbarHeight()
    },
    methods: {
        toggleEvent() {
            this.handleResize()
        },
        handleResize() {
            const windowWidth = window.innerWidth
            if (windowWidth >= 992) {
                this.isShowToggle = false
            } else {
                this.isShowToggle = true
            }
        },
        observeNavbarHeight() {
            const navbar = document.getElementById('navbarId')
            this.resizeObserver = new ResizeObserver(entries => {
                for (let entry of entries) {
                    this.navbarHeight = entry.contentRect.height
                    this.$refs.routerViewRef.style.top =
                        this.navbarHeight + 'px'
                }
            })
            this.resizeObserver.observe(navbar)
        },
        unobserveNavbarHeight() {
            if (this.resizeObserver) {
                this.resizeObserver.disconnect()
            }
        },
    },
}
</script>

<style lang="scss" scoped>
@import '/src/scss/hamburgerBtn.scss';
#app {
    font-family: 'Noto Sans TC', sans-serif;
}
.navbar-container {
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: var(--color-navbar-background);
    border-bottom: 1px solid rgba(206, 201, 201, 0.722);
    .navbar-brand {
        color: var(--color-navbar-text);
    }
    .navbar-toggler {
        border: none;
        // border-color: var(--color-navbar-text);
        // color: var(--color-navbar-hover-background);
    }
    .navbar-nav {
        .nav-item {
            width: 150px;
            @media (max-width: 991.98px) {
                width: 100%;
            }
            .nav-link {
                font-size: 22px;
                font-weight: 900;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: color 0.3s ease;
                position: relative;
                color: var(--color-navbar-text);
                /* 第二个 ::after 三角形样式 */
                &.dropdown-icon::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    right: 10px; /* 调整位置 */
                    transform: translateY(-50%);
                    width: 0;
                    height: 0;
                    border-top: 5px solid transparent;
                    border-left: 7px solid var(--color-navbar-text); /* 三角形颜色 */
                    border-bottom: 5px solid transparent;
                    transition: transform 0.3s ease;
                }
                &.dropdown-icon:hover::before {
                    border-left-color: var(--color-primary);
                    transform: translateY(-50%) rotate(90deg);
                }
                &.dropdown-icon:focus::before {
                    border-left-color: var(--color-primary);
                    transform: translateY(-50%) rotate(90deg);
                }
                &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 0%;
                    height: 2px;
                    background-color: var(--color-primary);
                    transition:
                        width 0.3s ease,
                        left 0.3s ease;
                }
                &:hover::after {
                    left: 0;
                    width: 100%;
                }
                &:focus::after {
                    left: 0;
                    width: 100%;
                }
            }
        }
    }
    .dropdown-menu {
        display: block;
        opacity: 0;
        max-height: 0; /* 初始时高度为0 */
        transition:
            opacity 1s,
            max-height 1s; /* 过渡效果应用到 opacity 和 max-height 属性上 */
        border-radius: 0%;
        padding: 0%;
        min-width: 100%;
        overflow: hidden; /* 隐藏溢出内容 */
    }
    .dropdown:hover .dropdown-menu {
        opacity: 1;
        max-height: 200px; /* 设置菜单最大高度，根据实际情况调整 */
    }
    .dropdown-li {
        position: relative;
        display: flex;
        &::after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: 0%;
            width: 0;
            height: 2px;
            background-color: var(--color-primary);
            transition:
                width 0.3s ease,
                left 0.3s ease;
        }
        &:hover::after {
            left: 0;
            width: 100%;
        }
        &:focus::after {
            left: 0;
            width: 100%;
        }
    }
    .dropdown-item {
        --bs-dropdown-link-active-bg: var(--color-navbar-hover-background);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        height: 40px;
        padding: 0%;
        background-color: var(--color-navbar-background);
        min-width: 100%; /* 使下拉菜单宽度与父元素相同 */
        color: var(--color-navbar-text);
        transition: color 0.3s ease;
        &:hover {
            color: var(--color-primary);
        }
        &:focus {
            color: var(--color-primary);
        }
    }
    /* 悬停时的颜色 */
    .navbar-nav .nav-item:hover .nav-link {
        color: var(--color-primary);
    }
    .navbar-nav :hover.nav-item {
        background-color: var(--color-navbar-hover-background);
    }
    /* 聚焦时的颜色 */
    .navbar-nav .nav-item:focus-within .nav-link {
        color: var(--color-primary);
    }
}
.router {
    transition: margin-top 0.3s ease;
}
</style>
