<template>
    <div data-v-38e7a12e class="workspace">
        <div data-v-38e7a12e class="banner">
            <span data-v-38e7a12e class="primary-title">教师</span>
            <el-button @click="showTeacherVo = true" data-v-38e7a12e type="primary" round class="btn-add" size="medium">
                <i class="iconfont" style="padding: 10px 3px 0 0">&#xe608;</i>新增教师
            </el-button>
        </div>
        <div data-v-38e7a12e class="searcher">
            <el-input style="width: 300px;" data-v-38e7a12e placeholder="教师姓名" suffix-icon="el-icon-search"
                v-model="searchTeacherName">
            </el-input>
        </div>
        <el-table data-v-38e7a12e class="dataList" :data="teacherList" border style="width: 100%">
            <el-table-column align="center" prop="name" label="姓名">
            </el-table-column>
            <el-table-column align="center" prop="school" label="学校">
            </el-table-column>
            <el-table-column align="center" prop="avatar" label="头像">
                <template slot-scope="scope">
                    <el-avatar :src="scope.row.avatar"></el-avatar>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="job" label="职位">
            </el-table-column>
            <el-table-column align="center" prop="department" label="专业">
            </el-table-column>
            <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                    <div class="cell">
                        <el-button type="text" size="mini" @click="getTeacher(scope.row.tid)">修改</el-button>
                        <el-button type="text" size="mini" @click="removeTeacher(scope.row.tid)">移除</el-button>
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
        <el-dialog @close="clearTeacherVo()" title="课程时间" :visible.sync="showTeacherVo" width="500px">
            <el-form label-width="80px" size="medium">
                <el-form-item label="姓名">
                    <el-input style="width: 280px;" placeholder="请输入教师姓名" v-model="teacherVo.name"></el-input>
                </el-form-item>
                <el-form-item label="学校">
                    <el-input style="width: 280px;" placeholder="请输入课程名称" v-model="teacherVo.school"></el-input>
                </el-form-item>
                <el-form-item label="头像">
                    <el-upload class="avatar-uploader" action="api/images/upload" name="image"
                        :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <img v-if="teacherVo.avatar != '' && teacherVo.avatar" :on-remove="removeCoverUrl"
                         :src="teacherVo.avatar" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="职位">
                    <el-input style="width: 280px;" placeholder="请输入职位" v-model="teacherVo.job"></el-input>
                </el-form-item>
                <el-form-item label="系别">
                    <el-input style="width: 280px;" placeholder="请输入系别" v-model="teacherVo.department"></el-input>
                </el-form-item>
                <el-form-item label="简介">
                    <el-input style="width: 280px;" placeholder="请输入简介" v-model="teacherVo.descr"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="showTeacherVo = false">取 消</el-button>
                <el-button type="primary" @click="updateTeacher()">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import _axios from '@/axios/myaxios'
const options = {
    watch:{
        searchTeacherName(val){
            this.getTeacherList()
        }
    },
    data () {
        return {
            showTeacherVo:false,
            pageSize:10,
            count:0,
            searchTeacherName:"",
            currentPage:1,
            teacherList:[],
            courseId:17,
            teacherVo:{}
        }
    },
    methods: {
        removeCoverUrl(file, fileList){
            var params = new URLSearchParams
            params.append("coverUrl",this.coverUrl)
            _axios.delete("/images/delete?"+params).then(resp => {
                if(resp.data.code !==1){
                    this.$message({
                        message: '删除失败',
                        type: 'error'
                    });
                    return false;
                }else{
                    this.coverUrl = ""
                    
                }
            })
        },
        handleAvatarSuccess(res){
            this.teacherVo.avatar = res.data
            this.teacherVo = JSON.parse(JSON.stringify(this.teacherVo))
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 10
            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 10MB!');
            }
            return isJPG && isLt2M;
        },
        updateTeacher(){
            
            _axios.post("/teacher/update",this.teacherVo).then(resp => {
                
                if(resp.data.code == 0){
                    this.$message.error(resp.data.msg)
                }else{
                    this.$message({
                        message: '添加成功',
                        type: 'success'
                    });
                    this.getTeacherList()
                    this.showTeacherVo = false
                }
            })
        },
        clearTeacherVo(){
            this.teacherVo = {}
        },
        CurrentChange(val){
            this.currentPage = val
            this.getTeacherList()
        },
        handleSizeChange(val){
            this.pageSize = val
            this.getTeacherList()
        },
        getTeacher(id){
            _axios.get("/teacher/one/"+id).then(resp => {
                this.teacherVo = resp.data.data
                this.showTeacherVo = true;
            })
        },
        removeTeacher(id) {
            this.$confirm('此操作将删除该教师, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                _axios.delete("/teacher/remove/" + id).then(resp => {
                    this.$message({
                        message: '移除成功',
                        type: 'success'
                    });
                    this.getTeacherList()
                })
            })
        },
        getTeacherList(){
            var params = new URLSearchParams 
            params.append("pageSize",this.pageSize)
            params.append("currentPage",this.currentPage)
            params.append("searchName",this.searchTeacherName)
            _axios.get("/teacher/all?"+params).then(resp => {
                this.teacherList = resp.data.data.records
                this.count = resp.data.data.count
            })
        },
        
    },
    mounted() {
        this.getTeacherList()
    },

}
export default options;
</script>
<style scoped>
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

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>