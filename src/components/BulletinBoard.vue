<template>
    <div class="container p-0">
        <div class="row gx-0">
            <div
                class="col-3 selectType p-2"
                :class="{ selected: showType[0] }"
                @click="changeShowType(0)"
            >
                書籍快訊
            </div>
            <div
                class="col-3 selectType p-2"
                :class="{ selected: showType[1] }"
                @click="changeShowType(1)"
            >
                展覽消息
            </div>
            <div
                class="col-3 selectType p-2"
                :class="{ selected: showType[2] }"
                @click="changeShowType(2)"
            >
                好康優惠
            </div>
            <div
                class="col-3 selectType p-2"
                :class="{ selected: showType[3] }"
                @click="changeShowType(3)"
            >
                系統公告
            </div>
        </div>
        <div class="bg-warning content">
            <el-table
                :data="tableData"
                style="width: 100%"
                height="250"
                size="mini"
            >
                <el-table-column prop="date" label="日期" width="150">
                </el-table-column>
                <el-table-column prop="name" label="姓名">
                    <template slot-scope="scope">
                        <a herf="#"> {{ scope.row.name }} </a>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="tag"
                    label="標籤"
                    width="100"
                    :filters="[
                        { text: '家', value: '家' },
                        { text: '公司', value: '公司' },
                    ]"
                >
                    <template slot-scope="scope">
                        <el-tag
                            :type="
                                scope.row.tag === '家' ? 'primary' : 'success'
                            "
                            disable-transitions
                            >{{ scope.row.tag }}</el-tag
                        >
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showType: [true, false, false, false],
            tableData: [
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    tag: '家',
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    tag: '家',
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    tag: '家',
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    tag: '家',
                },
                {
                    date: '2016-05-08',
                    name: '王小虎',
                    tag: '家',
                },
                {
                    date: '2016-05-06',
                    name: '王小虎',
                    tag: '家',
                },
                {
                    date: '2016-05-07',
                    name: '王小虎',
                    tag: '家',
                },
            ],
        }
    },
    mounted() {},
    methods: {
        changeShowType(index) {
            this.showType = [false, false, false, false]
            this.showType[index] = true
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

::v-deep .el-table th.el-table__cell {
    background-color: var(--color-content-secondary-background);
    border-bottom: 0px;
    color: var(--color-content-text);
}
::v-deep .el-table tr {
    background-color: var(--color-content-background);
    td .cell {
        color: var(--color-content-text);
    }
    td + td {
        border-left: 1px solid rgba(206, 201, 201, 0.722);
    }
}
::v-deep .el-table__body tr:hover {
    td {
        background-color: var(--color-content-secondary-background) !important;
    }
    td .cell {
        color: var(--color-content-text) !important;
    }
    td button {
        color: var(--color-content-text);
    }
}
.table {
    white-space: nowrap;
    text-align: center;
    border: 1px solid var(--color-content-text);
    th {
        color: var(--color-secondary);
    }
    .title {
        color: var(--color-secondary);
    }
    td {
        border-left: 1px solid var(--color-content-text);
        color: var(--color-content-text);
    }
    tr + tr {
    }
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
</style>
