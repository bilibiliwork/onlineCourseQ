<template>
    <div data-v-1b10f526 class="workspace">
        <div data-v-1b10f526 class="banner">
            <span data-v-1b10f526 class="primary-title">课程-修改</span>
        </div>
        <div data-v-1b10f526 class="steps">
            <div data-v-1b10f526 class="nav">
                <el-steps :active="active" simple>
                    <el-step title="基本信息">
                    </el-step>
                    <el-step title="课程大纲"></el-step>
                    <el-step title="开课时间"></el-step>
                    <el-step title="教导老师"></el-step>
                </el-steps>
            </div>
            <div data-v-1b10f526 class="body">
                <div data-v-1b10f526 data-v-2411f0f0 v-show="active ===0" class="step-body">
                    <el-form data-v-2411f0f0 :rules="rules" ref="courseBaseInfo" label-width="80px"
                        :model="courseBaseInfo">
                        <el-form-item prop="title" data-v-2411f0f0 label="课程名称">
                            <el-input style="width: 680px;" placeholder="请输入课程名称"
                                v-model="courseBaseInfo.title"></el-input>
                        </el-form-item>
                        <el-form-item prop="descr" data-v-2411f0f0 label="课程简介">
                            <el-input style="width: 680px;" type="textarea" :rows="4" placeholder="请输入课程简介"
                                v-model="courseBaseInfo.descr">
                            </el-input>
                        </el-form-item>
                        <el-form-item data-v-2411f0f0 label="课程封面">
                            <el-upload class="avatar-uploader" action="api/images/upload" name="image"
                                list-type="picture" :on-success="handleAvatarSuccess" :limit="1"
                                :before-upload="beforeAvatarUpload" :on-remove="removeCoverUrl">
                                <img v-if="coverUrl != ''" :src="coverUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </el-form-item>
                        <el-form-item prop="status" data-v-2411f0f0 label="课程类型">
                            <el-select clearable v-model="courseBaseInfo.status" placeholder="请选择课程类型">
                                <el-option v-for="item in courseTypeList" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item prop="schoolName" data-v-2411f0f0 label="所属学校">
                            <el-select clearable v-model="courseBaseInfo.schoolName" placeholder="请选择学校">
                                <el-option v-for="item in schoolList" :key="item" :label="item" :value="item">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </div>
                <div data-v-b4e21218 data-v-1b10f526 v-show="active === 1" class="step-body">
                    <div data-v-b4e21218 class="bar">
                        <div data-v-b4e21218 class="title">任务总数：4</div>
                        <el-button size="medium" @click="addChapter()">+&nbsp;添加章节</el-button>
                    </div>
                    <div data-v-b4e21218 class="outline">
                        <el-tree :expand-on-click-node="false" data-v-b4e21218 :default-expanded-keys="expandList"
                            :data="teachPlanList" :props="defaultProps" node-key="id">
                            <div data-v-b4e21218 class="tree-node" :class="{ischild : data.grande !=1 }"
                                slot-scope="{node,data}">
                                <i data-v-b4e21218 v-if="data.grande ==1" class="icon"></i>
                                <div data-v-b4e21218 class="operate">
                                    <div data-v-b4e21218 class="title" @click="changeShow(data.id)">
                                        <span data-v-b4e21218 v-if="!showInput[data.id]">{{ data.name }}</span>
                                        <input v-else @blur="closeInput(data)" v-model="data.name"
                                            style="width: 280px;height: 30px;">
                                    </div>
                                    <div data-v-b4e21218 v-if=" data.teachplanMediaList.length != 0" class="media-file">
                                        <el-link style="margin-right: 10px;" @click="getMediaList(data.id)">
                                            <i class="el-icon-delete"></i>
                                            <span>查看文件</span>
                                        </el-link>
                                    </div>

                                    <div data-v-b4e21218 class="buttons">
                                        <el-button v-if="data.grande == 1" type="text"
                                            @click="append(data)">添加小节</el-button>
                                        <el-button type="text"
                                            @click="addMediaVisible = true ,chapter = data">上传视频</el-button>
                                        <el-button type="text" @click="remove(node,data)">删除</el-button>
                                        <el-button type="text" @click="upNode(node,data)">上移</el-button>
                                        <el-button type="text" @click="downNode(node,data)">下移</el-button>
                                    </div>

                                </div>
                            </div>
                        </el-tree>
                    </div>
                </div>
                <div data-v-1b10f526 v-show="active === 2" class="step-body">
                    <div data-v-b4e21218 class="bar">
                        <el-button size="medium" @click="showCourseTime = true"
                            style="margin-bottom: 20px;">+&nbsp;添加课程时间</el-button>
                        <el-dialog @close="clearCourseTime()" title="课程时间" :visible.sync="showCourseTime" width="500px">
                            <el-form label-width="80px" size="medium">
                                <el-form-item label="开课时间">
                                    <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" v-model="courseTime.startTime"
                                        type="date" placeholder="选择日期">
                                    </el-date-picker>
                                </el-form-item>
                                <el-form-item label="截止时间">
                                    <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" v-model="courseTime.endTime"
                                        type="date" placeholder="选择日期">
                                    </el-date-picker>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="showCourseTime = false">取 消</el-button>
                                <el-button type="primary" @click="addCourseTime()">确 定</el-button>
                            </div>
                        </el-dialog>
                        <el-table data-v-38e7a12e class="dataList" :data="courseTimeList" border style="width: 100%">
                            <el-table-column align="center" prop="vagueTime" label="开课季度">
                            </el-table-column>
                            <el-table-column align="center" prop="startTime" label="开课时间">
                            </el-table-column>
                            <el-table-column align="center" prop="endTime" label="结课时间">
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
                <div data-v-1b10f526 v-show="active === 3" class="step-body">
                    <el-input data-v-38e7a12e style="width: 200px;" placeholder="教师名称" suffix-icon="el-icon-search"
                        v-model="searchTeacherName">
                    </el-input>
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
                                    <el-button type="text" size="mini" :disabled="scope.row.isTeacher"
                                        @click="addTeacherToCourse(scope.row)">加入&nbsp;</el-button>
                                    <el-button type="text" size="mini" :disabled="!scope.row.isTeacher"
                                        @click="removeTeacherToCourse(scope.row)">移除</el-button>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div data-v-38e7a12e class="dataList-pagination">
                        <div data-v-665e07ad data-v-38e7a12e class="pagination-container">
                            <el-pagination @current-change="CurrentChange" background layout=" prev, pager, next"
                                :total="count">
                            </el-pagination>
                        </div>
                    </div>
                </div>
            </div>
            <div data-v-1b10f526 class="footer">
                <el-button v-show="active > 0" @click="last()">上一步</el-button>
                <el-button type="primary" @click="next('courseBaseInfo')">保存并进行下一步</el-button>
            </div>
        </div>


        <el-dialog title="视频文件" border @close="clearMediaList()" :visible.sync="teachPlanMediaVisible">
            <el-table :data="mediaDataList">
                <el-table-column property="mediaFilename" align="center" label="视频名称"></el-table-column>
                <el-table-column align="center" label="操作">
                    <template slot-scope="scope">
                        <div class="cell">
                           <!--  <el-button type="text" size="mini" 
                                @click="updateMediaName(scope.row.id)">修改视频名称&nbsp;</el-button> -->
                            <el-button type="text" size="mini" 
                                @click="removeMedia(scope.row.id)">移除</el-button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </el-dialog>
        <upload-media-view :visible.sync="addMediaVisible" :chapter="chapter"></upload-media-view>
    </div>
</template>
<script>
import _axios from '@/axios/myaxios';
import UploadMediaView from './upload/UploadMediaView.vue';

const options = {
    components: {
        UploadMediaView
    },
    
    watch:{
        searchTeacherName(val){
            this.getTeacherList()
        }
    },
    data () {
        return {
            teachPlanMediaVisible:false,
            chapter: {},
            addMediaVisible:false,
            teacherList:[],
            showCourseTime:false,
            courseTime:{
            },
            courseTimeList:[],
            rules: {
                title: [
                    { required: true, message: '请输入课程', trigger: 'blur' },
                ],
                descr: [
                    { required: true, message: '请输入简介', trigger: 'blur' },
                ],
                status: [
                    { required: true, message: '请选择类型', trigger: 'change' },
                ],
                schoolName: [
                    { required: true, message: '请选择学校', trigger: 'change' },
                ],
            },
            expandList:[],
            defaultProps: {
                children: 'teachPlanTreeNodes',
                label: 'name'
            },
            teachPlanList:[
            ],
            showInput:[],
            coverUrl:"",
            courseBaseInfo:{},
            active: 0,
            schoolName:"",
            courseType: '',
            courseId:0,
            currentPage:1,
            count:0,
            schoolList:[
                "清华大学","北京大学"
            ],
            searchTeacherName:"",
            courseTypeList: [
                {value: 2,label: '研究生课'},
                {value: 3,label: '职业教育'},{value: 4,label: '计算机'},
                {value: 5,label: '经济管理'},{value: 6,label: '文史哲'},
                {value: 7,label: '医药卫生'},{value: 8,label: '外语'},
                {value: 9,label: '工学'},{value: 10,label: '理学'},
                {value: 11, label: '艺术设计' },{value: 15,label: '营销'},
                {value: 16,label: '财务'},{value: 17,label: '农林园艺'},
            ],
            mediaDataList:[]
        }
    },
    methods: {
        
        removeMedia(id){
            _axios.delete("/teachplan-media/remove/"+id).then(resp => {
                this.$message({
                    message: '视频已删除',
                    type: 'success'
                });
                this.mediaDataList = this.mediaDataList.filter(item => item.id !== id)
            })
        },
        clearMediaList(){
            // this.mediaDataList = []
        },
        getMediaList(id){
            this.teachPlanMediaVisible = true;
            _axios.get("/teachplan-media/teachplan/"+id).then(resp => {
                this.mediaDataList = resp.data.data
            })
        },
        addTeacherToCourse(data){
            _axios.put("/course-teacher/add/"+this.courseBaseInfo.id,data)
            data.isTeacher = true;
        },
        removeTeacherToCourse(data){
            _axios.delete("/course-teacher/remove/"+this.courseBaseInfo.id+"/"+data.tid)
            data.isTeacher = false;
        },
        CurrentChange(val){
            this.currentPage = val
            this.getTeacherList()
        },
        getTeacherList(){
            var params = new URLSearchParams 
            params.append("courseId",this.courseId)
            params.append("currentPage",this.currentPage)
            params.append("searchName",this.searchTeacherName)
            _axios.get("/teacher/list?"+params).then(resp => {
                this.teacherList = resp.data.data
            })
        },
        clearCourseTime(){
            this.courseTime = {}
        },
        changeShow(id){
            this.showInput = []
            this.$set(this.showInput,id,true);
        },
        closeInput(data){
            this.$set(this.showInput,data.id,false);
            _axios.post("/teachplan/updateName",data)
        },
        addChapter(){
            _axios.put("/teachplan/addChapter/"+this.courseBaseInfo.id).then(resp => {
                this.teachPlanList.push(resp.data.data)
            })
        },
        append(data){
            _axios.put("/teachplan/add", data).then(resp => {
                if (resp.data.code === 1) {
                    if (!data.teachPlanTreeNodes) {
                        this.$set(data, 'teachPlanTreeNodes', []);
                    }
                    var list = resp.data.data
                    list.teachplanMediaList = []
                    list.discussList = []
                    data.teachPlanTreeNodes.push(resp.data.data);
                    this.expandList[0] = data.id
                    this.expandList[0] = JSON.parse(JSON.stringify(this.expandList[0]))
                }
            })
        },
        remove(node,data){
            _axios.delete("/teachplan/remove/"+data.id).then(resp => {
                if(resp.data.code === 1){
                    this.expandList[0] = data.parentid
                    this.teachPlanList = this.teachPlanList.filter(item => item.id !== data.id)
                    const removeTeachPlanFromTree = (tree) => {
                        return tree.filter(nodes => {
                            if (nodes.id === data.id) {
                                return false; // 删除当前节点
                            }
                            /* if (node.commentVoTrees?.length) {
                                // 递归处理子节点
                                node.commentVoTrees = removeCommentFromTree(node.commentVoTrees);
                            } */
                            return true;
                        });
                    };
                    // 遍历所有主评论，清理其嵌套树
                    this.teachPlanList = this.teachPlanList.map(item => {
                        if (item.teachPlanTreeNodes?.length) {
                            item.teachPlanTreeNodes = removeTeachPlanFromTree(item.teachPlanTreeNodes);
                        }
                        return item;
                    });
                }
            })
        },
        getTeachPlanList(){
            _axios.get("/course/teachPlanList/"+this.courseId).then(resp => {
                this.teachPlanList = resp.data.data
            })
        },
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
            this.coverUrl = res.data
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
        last(){
            if (this.active-- < 1) this.$router.push("/teacherRoot/courseList");
        },
        addCourseTime(){
            this.courseTime.cid = this.courseBaseInfo.id
            this.showCourseTime = false
            _axios.put("/course-time/add",this.courseTime).then(resp => {
                if(resp.data.code == 1){
                    this.courseTimeList.push(resp.data.data)
                }
            })
        },
        getCourseTimeList(){
            _axios.get("/course-time/"+this.courseId).then(resp => {
                this.courseTimeList = resp.data.data
            })
        },
        upNode(node,data){
            const parent = node.parent
            const children = parent.data.teachPlanTreeNodes || this.teachPlanList;
            const index = children.findIndex(d => d.id === data.id);
            if(index != 0){
                const tree1 = children[index-1]
                const tree2 = children[index]
                this.$set(children,index-1,tree2)
                this.$set(children,index,tree1)
                this.teachPlanList = JSON.parse(JSON.stringify(this.teachPlanList))
                this.expandList[0] = data.parentid
                _axios.put("/teachplan/up",data)
            }else{
                this.$message('已无法上移');
            }
        },
        downNode(node,data){
            const parent = node.parent
            const children = parent.data.teachPlanTreeNodes || this.teachPlanList;
            const index = children.findIndex(d => d.id === data.id);
            if(index < children.length-1){
                const tree1 = children[index]
                const tree2 = children[index+1]
                this.$set(children,index,tree2)
                this.$set(children,index+1,tree1)   
                this.teachPlanList = JSON.parse(JSON.stringify(this.teachPlanList))
                this.expandList[0] = data.parentid
                _axios.put("/teachplan/down",data)
            }else{
                this.$message('已无法下移');
            }
        },
        getCourse(){
            _axios.get("/course/"+this.courseId).then(resp => {
                this.courseBaseInfo =  resp.data.data
                this.coverUrl = this.courseBaseInfo.coverUrl
            })
        },
        next(courseBaseInfo) {
            if (this.active !== 0) {
                if (this.active++ > 2) this.$router.push("/teacherRoot/courseList");
            } else {
                this.$refs[courseBaseInfo].validate((valid) => {
                    if (valid) {
                        this.courseBaseInfo.coverUrl = this.coverUrl
                        _axios.put("/course/add", this.courseBaseInfo).then(resp => {
                            if (resp.data.code == 1) {
                                this.courseBaseInfo = resp.data.data
                                if (this.active++ > 2){
                                } 
                            } else {
                                this.$message.error(resp.data.msg);
                            }
                        })
                    } else {
                        this.$message.error('表单验证失败');
                        return false;
                    }
                })
            }
        },
    },
    mounted() {
        if(this.$route.params.cid != 0 ){
            this.courseId = this.$route.params.cid
            this.getCourse()
            this.getTeachPlanList()
            this.getCourseTimeList()
        }
        this.getTeacherList()
        
    },
    /* beforeDestroy() {
        if (this.coverUrl) {
            this.removeCoverUrl(null, null);
        }
    } */
}
export default options;
</script>
<style>
.el-button--medium {
    float: right;
}

.el-tree-node__children .el-tree-node{
    height: 80px;
}

.workspace .el-textarea textarea{
    resize: none;
}
.workspace .el-form-item__label{
    text-align: center;
}
.workspace .el-step__title.is-process{
    color: #003153;
}
/* .workspace .el-step__title.is-finish {
    color: #441752;
}
 */

 .avatar-uploader .el-upload {
    border: 1px dashed #7ba57b;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.step-body .outline .tree-node .operate .media-file[data-v-b4e21218] {
    float: left;
    margin-left: 10px;
}
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
 }
 .outline .el-tree-node__content{
    height: 60px;
}
.el-tree-node__content>.el-tree-node__expand-icon{
    /* display: none; */
}
.step-body .outline .tree-node.ischild[data-v-b4e21218] {
    border-left: 1px solid #cacaca;
    padding-top: 25px;
    /* margin-bottom: 25px; */
    height: 80px;
    line-height: 80px;
}
.step-body .outline .tree-node[data-v-b4e21218] {
    height: 50px;
    line-height: 50px;
    width: 100%;
}
.step-body .outline .tree-node .operate[data-v-b4e21218] {
    position: relative;
    float: left;
    padding-left: 10px;
    background-color: #f1f1f1;
    width: 1093px;
    height: 50px;
    line-height: 50px;
}
.step-body .outline .tree-node .operate .title[data-v-b4e21218] {
    float: left;
    padding-right: 10px;
    width: 400px;
    overflow: hidden;
}
.step-body .outline .tree-node .operate .buttons[data-v-b4e21218] {
    position: absolute;
    top: 0px;
    right: 10px;
    text-align: right;
    width: 300px;
    height: 50px;
    line-height: 50px;
}
.step-body .outline .ischild .icon[data-v-b4e21218] {
    display: block;
    float: left;
    width: 34px;
    height: 25px;
    border-bottom: 1px solid #cacaca;
}
.step-body .outline .tree-node[data-v-b4e21218] {
    height: 50px;
    line-height: 50px;
    width: 100%;
}
.step-body .outline .ischild.tree-node .operate[data-v-b4e21218] {
    width: 1040px;
}

.step-body .outline .tree-node .operate[data-v-b4e21218] {
    position: relative;
    float: left;
    padding-left: 10px;
    background-color: #f1f1f1;
    width: 1093px;
    height: 50px;
    line-height: 50px;
}
.step-body .outline .ischild .operate .title[data-v-b4e21218] {
    width: 300px;
}



</style>
<style scoped>

.dataList[data-v-38e7a12e] {
    margin-top: 16px;
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
.avatar-uploader-icon[data-v-1affb897]{
    background-color: #eaeddf;
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
.steps[data-v-1b10f526] {
    padding: 20px;
}
.steps .nav[data-v-1b10f526] {
    padding-bottom: 20px;
}
.steps .body[data-v-1b10f526] {
    padding: 30px 0px 50px 0px;
}
.step-body[data-v-2411f0f0] {
    width: 800px;
    margin: 0px auto;
}
.steps .footer[data-v-1b10f526] {
    padding: 20px 0px 20px 0px;
    border-top: 1px solid #848ea0;
    text-align: center;
}
.step-body .bar .title[data-v-b4e21218] {
    display: inline-block;
    width: 100px;
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #003153;
    line-height: 22px;
}
.step-body .outline[data-v-b4e21218] {
    padding-top: 20px;
    padding-bottom: 20px;
    width: 1100px;
}
.dataList-pagination[data-v-38e7a12e] {
    margin-top: 20px;
    text-align: center;
    width: 100%;
}
.pagination-container[data-v-665e07ad] {
    background: #fff;
    padding: 32px 16px;
}


</style>