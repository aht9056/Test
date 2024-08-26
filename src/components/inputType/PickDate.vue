<template>
    <div class="d-flex flex-grow-1">
        <el-date-picker
            v-model="date"
            type="date"
            placeholder="選擇日期"
            placement="top"
            @change="changeDate"
        >
        </el-date-picker>
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
    },
    data() {
        return {
            date: this.value,
        }
    },
    methods: {
        changeDate() {
            if (this.date) {
                const selectedDate = new Date(this.date)
                const localDate = new Date(
                    selectedDate.getTime() -
                        selectedDate.getTimezoneOffset() * 60000,
                )
                const formattedDate = localDate.toISOString().split('T')[0]

                this.$emit('input', formattedDate)
            }
        },
    },
    beforeMount() {},
}
</script>
<style lang="scss" scoped>
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
    width: 100%;
}
</style>
