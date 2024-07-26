<template>
    <div id="app">
        <div :ref="'routerView'" class="navbar-container">
            <nav
                :class="{ 'navbar-expanded': isNavbarExpanded }"
                class="navbar navbar-expand-lg"
                :style="{ backgroundColor: 'white' }"
            >
                <div class="container-fluid">
                    <div class="navbar-brand">LOGO112</div>
                    <button
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
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link
                                    class="nav-link active"
                                    aria-current="page"
                                    to="/home"
                                    >數位行銷</router-link
                                >
                            </li>
                            <li class="nav-item">
                                <router-link
                                    class="nav-link active"
                                    aria-current="page"
                                    to="/about"
                                    >網站設計</router-link
                                >
                            </li>
                            <li class="nav-item">
                                <router-link
                                    class="nav-link active"
                                    aria-current="page"
                                    to="/vuex"
                                    >VuexTry</router-link
                                >
                            </li>
                            <li
                                class="nav-item dropdown"
                                style="display: block; margin: 0 auto"
                            >
                                <a class="nav-link dropdown-icon" href="#">
                                    下拉式
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
                            <li class="nav-item">
                                <router-link
                                    class="nav-link active"
                                    aria-current="page"
                                    to="/about"
                                    >關於</router-link
                                >
                            </li>
                            <li class="nav-item">
                                <router-link
                                    class="nav-link active"
                                    aria-current="page"
                                    to="/about"
                                    >會員管理系統</router-link
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div class="router">
            <router-view />
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isNavbarExpanded: false,
            isTogggleExpanded: false,
            arr: ['a'],
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize)
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    },
    methods: {
        toggleEvent() {
            if (this.$refs.routerView.style.height != '330px') {
                this.$refs.routerView.style.height = '330px'
                this.isTogggleExpanded = true
            } else {
                this.$refs.routerView.style.height = '60px'
                this.isTogggleExpanded = false
            }
            this.handleResize()
        },
        handleResize() {
            const windowWidth = window.innerWidth
            console.log('当前窗口宽度：' + windowWidth + 'px')
            if (windowWidth >= 992) {
                // this.isTogggleExpanded = false;
                this.$refs.routerView.style.height = '70px'
            } else if (this.isTogggleExpanded == false) {
                this.$refs.routerView.style.height = '60px'
            } else if (this.isTogggleExpanded == true) {
                this.$refs.routerView.style.height = '330px'
            }
        },
    },
}
</script>

<style lang="scss">
@import '../scss/GlobalStyles.scss';
#app {
    font-family: 'Noto Sans TC', sans-serif;
}
.navbar-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    @media (max-width: 991.98px) {
    }
    .navbar {
        padding: 0%;
        height: 70px;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        @media (max-width: 991.98px) {
            height: 60px;
        }
    }
    .container-fluid {
        border-bottom: 1px solid #f5f5f5;
        position: relative;
        height: 100%;
        background-color: white; /* 初始透明背景色 */
        @media (max-width: 991.98px) {
            height: auto;
            padding-top: 6px;
            padding-bottom: 6px;
        }
    }
    .navbar-brand {
        position: absolute;
        @media (max-width: 991.98px) {
            position: relative;
        }
    }
    .collapse {
        height: 100%;
        @media (min-width: 992px) {
            height: 100%;
            display: flex;
            justify-content: center;
        }
    }
    .navbar-expanded {
        transform: scaleY(1.1);
        background-color: var(--color-navbar); /* 滚动时改变的背景色 */
    }
    .navbar-nav {
        height: 100%;
        @media (max-width: 991.98px) {
            height: auto;
        }
        .nav-item {
            width: 150px;
            justify-content: center;
            align-items: center;

            @media (max-width: 991.98px) {
                width: 100%;
            }
            .nav-link {
                font-size: 20px;
                font-weight: 900;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: color 0.3s ease;
                position: relative;
                color: black;
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
                    border-left: 7px solid black; /* 三角形颜色 */
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
        --bs-dropdown-link-active-bg: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        height: 40px;
        padding: 0%;
        min-width: 100%; /* 使下拉菜单宽度与父元素相同 */
        color: black;
        transition: color 0.3s ease;
        &:hover {
            color: var(--color-primary);
        }
        &:focus {
            color: var(--color-primary);
        }
    }
    /* 基本的字体颜色 */
    .navbar-nav .nav-link {
        color: black; /* 设置基本的字体颜色 */
    }
    /* 悬停时的颜色 */
    .navbar-nav .nav-item:hover .nav-link {
        color: var(--color-primary);
    }
    .navbar-nav :hover.nav-item {
        background-color: #f5f5f5;
    }
    /* 聚焦时的颜色 */
    .navbar-nav .nav-item:focus-within .nav-link {
        color: var(--color-primary);
    }
}
.router {
    position: relative;
    display: flex;
    justify-content: center;
    top: 70px;
    align-items: flex-start;
    transition: margin-top 0.3s ease;
}
</style>
