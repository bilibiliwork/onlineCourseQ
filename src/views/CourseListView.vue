<template>
    <div data-v-38e7a12e class="workspace">
        <div data-v-38e7a12e class="banner">
            <span data-v-38e7a12e class="primary-title">课程管理</span>
            <router-link to="/teacherRoot/addCourse/0">
                <el-button data-v-38e7a12e type="primary" round class="btn-add" size="medium">
                    <i class="iconfont" style="padding: 10px 3px 0 0">&#xe608;</i>添加课程
                </el-button>
            </router-link>
        </div>
        <div data-v-38e7a12e class="searcher">
            <el-input data-v-38e7a12e placeholder="课程名称" suffix-icon="el-icon-search" v-model="searchName">
            </el-input>
            <el-select clearable v-model="courseType" placeholder="请选择课程类型">
                <el-option v-for="item in courseTypeList" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-select clearable v-model="schoolName" placeholder="请选择学校">
                <el-option v-for="item in schoolList" :key="item" :label="item" :value="item">
                </el-option>
            </el-select>
        </div>
        <el-table data-v-38e7a12e class="dataList" :data="courseList" border style="width: 100%">
            <el-table-column align="center" prop="title" label="课程名称" width="220">
            </el-table-column>
            <el-table-column align="center" prop="createTime" label="创建时间" width="180">
            </el-table-column>
            <el-table-column align="center" prop="status" label="类型" width="140">
                <template slot-scope="scope">
                    {{ scope.row.status | courseTypeFilter}}
                </template>
            </el-table-column>
            <el-table-column align="center" prop="schoolName" label="学校" width="140">
            </el-table-column>
            <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                    <div class="cell">
                        <router-link :to="'/teacherRoot/addCourse/' + scope.row.id">
                            <el-button type="text" size="mini">编辑&nbsp;</el-button>
                        </router-link>
                        <el-button type="text" size="mini" @click="removeCourse(scope.row.id)">删除</el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <div data-v-38e7a12e class="dataList-pagination">
            <div data-v-665e07ad data-v-38e7a12e class="pagination-container">
                <el-pagination @current-change="CurrentChange" @size-change="handleSizeChange" background
                    layout="total,sizes, prev, pager, next" :page-sizes="[10, 20, 30, 40]" :total="count">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
import _axios from '@/axios/myaxios';

const options = {
    filters: {
        courseTypeFilter(value) {
            const map = { 1: '热门课程', 2: '研究生课' ,
                3: '职业教育',4: '计算机',
                5: '经济管理',6:'文史哲',
                7: '医药卫生',8: '外语',
                9: '工学',10:'理学',11:'艺术设计',
                15:"营销",16:"财务",17:"农林园艺"
            };
            return map[value] || '未知';
        }
    },
    watch:{
        searchName(oldValue, newValue) {
            this.getCourseList()
        },
        courseType(oldValue, newValue) {
            this.getCourseList()
        },
        schoolName(oldValue, newValue) {
            this.getCourseList()
        },
    },
    data () {
        return {
            count:0,
            courseList:[],
            searchName: "",
            value: '',
            schoolName:"",
            courseType: '',
            currentPage:1,
            schoolList:[
                "清华大学","北京大学"
            ],
            schoolValue:"",
            courseTypeList: [
                {
                    value: 2,
                    label: '研究生课'
                },{
                    value: 3,
                    label: '职业教育'
                },
                {
                    value: 4,
                    label: '计算机'
                },
                {
                    value: 5,
                    label: '经济管理'
                },
                {
                    value: 6,
                    label: '文史哲'
                },
                {
                    value: 7,
                    label: '医药卫生'
                },
                {
                    value: 8,
                    label: '外语'
                },
                {
                    value: 9,
                    label: '工学'
                },{
                    value: 10,
                    label: '理学'
                },{
                    value: 11,
                    label: '艺术设计'
                },
                {
                    value: 15,
                    label: '营销'
                },
                {
                    value: 16,
                    label: '财务'
                },{
                    value: 17,
                    label: '农林园艺'
                },
            ],
            pageSize:10
        }
    },
    methods: {
        CurrentChange(val){
            this.currentPage = val
            this.getCourseList()
        },
        handleSizeChange(val){
            this.pageSize = val
            this.getCourseList()
        },
        removeCourse(id){
            _axios.delete("/course/remove/"+id).then(resp => {
                if(resp.data.code == 1){
                    this.courseList = this.courseList.filter(item => item.id  !== id)
                }else{
                    this.$message.error(resp.data.msg)
                }
            })
        },
        getCourseList(){
            const param = new URLSearchParams
            param.append("pageSize",this.pageSize)
            param.append("courseStatus", 0)
            param.append("courseType", this.courseType)
            param.append("courseSchool", this.schoolName)
            param.append("currentPage", this.currentPage)
            param.append("searchName", this.searchName)
            _axios.get("/course/all?"+param).then(resp => {
                this.courseList = resp.data.data.records
                this.count = resp.data.data.count
            })
        }
        
    },
    mounted() {
        this.getCourseList()
    },
}
export default options;
</script>
<style>
.workspace .el-table th.el-table__cell{
    background-color: #cdfbf8;
}

</style>
<style scoped>

.dataList-pagination[data-v-38e7a12e] {
    text-align: center;
    width: 100%;
}
.pagination-container[data-v-665e07ad] {
    background: #fff;
    padding: 32px 16px;
}


.dataList[data-v-38e7a12e] {
    margin-top: 16px;
}

.searcher div[data-v-2871ab58] {
    width: 218px;
    margin-right: 10px;
}

.workspace {
    margin-top: 16px;
    width: 1200px;
    min-height: 550px;
    padding: 32px;
    background-color: #e7f2eea4;
}
.workspace .primary-title {
    height: 33px;
    font-size: 24px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #003153;
    line-height: 33px;
}
.workspace .banner .btn-add[data-v-38e7a12e] {
    float: right;
}
.searcher[data-v-38e7a12e] {
    margin-top: 16px;
}

</style>