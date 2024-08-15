<template>
    <div class="pagination-container">
        <button
            @click="goToFirstPage"
            title="最前頁"
            :disabled="currentPage === 1"
        >
            <<
        </button>
        <button
            @click="goToPreviousPage"
            title="上一頁"
            :disabled="currentPage === 1"
        >
            <
        </button>

        <button v-if="startPage > 1" @click="goToPage(1)" class="page-button">
            1
        </button>
        <span v-if="startPage > 2">...</span>

        <button
            v-for="page in visiblePages"
            :key="page"
            @click="goToPage(page)"
            :class="['page-button', { active: currentPage === page }]"
        >
            {{ page }}
        </button>

        <span v-if="endPage < totalPages - 1">...</span>
        <button
            v-if="endPage < totalPages"
            @click="goToPage(totalPages)"
            class="page-button"
        >
            {{ totalPages }}
        </button>

        <button
            @click="goToNextPage"
            title="下一頁"
            :disabled="currentPage === totalPages"
        >
            >
        </button>
        <button
            @click="goToLastPage"
            title="最末頁"
            :disabled="currentPage === totalPages"
        >
            >>
        </button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentPage: 1,
            totalPages: 50,
            maxVisiblePages: 5,
        }
    },
    computed: {
        startPage() {
            return Math.max(
                this.currentPage - Math.floor(this.maxVisiblePages / 2),
                1,
            )
        },
        endPage() {
            return Math.min(
                this.startPage + this.maxVisiblePages - 1,
                this.totalPages,
            )
        },
        visiblePages() {
            const pages = []
            for (let i = this.startPage; i <= this.endPage; i++) {
                pages.push(i)
            }
            return pages
        },
    },
    methods: {
        goToPage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page
            }
        },
        goToFirstPage() {
            this.goToPage(1)
        },
        goToLastPage() {
            this.goToPage(this.totalPages)
        },
        goToPreviousPage() {
            this.goToPage(this.currentPage - 1)
        },
        goToNextPage() {
            this.goToPage(this.currentPage + 1)
        },
    },
}
</script>
<style lang="scss" scoped>
.pagination-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
    color: var(--color-content-text);

    button {
        color: var(--color-content-text);
        background-color: var(--color-content-pagination);
        border: none;
        padding: 10px;
        border-radius: 50%;
        cursor: pointer;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        transition: background-color 0.3s;

        &:hover {
            background-color: var(--color-primary);
        }

        &:disabled {
            background-color: transparent;
            cursor: not-allowed;
        }

        &.active {
            background-color: var(--color-primary);
            font-weight: bold;
        }
    }

    span {
        padding: 10px;
        font-size: 14px;
    }

    // RWD for smaller screens
    @media (max-width: 768px) {
        gap: 5px;

        button {
            width: 30px;
            height: 30px;
            font-size: 12px;
            padding: 8px;
        }

        span {
            padding: 5px;
            font-size: 12px;
        }
    }

    @media (max-width: 480px) {
        gap: 3px;

        button {
            width: 25px;
            height: 25px;
            font-size: 10px;
            padding: 6px;
        }

        span {
            padding: 3px;
            font-size: 10px;
        }
    }
}
</style>
