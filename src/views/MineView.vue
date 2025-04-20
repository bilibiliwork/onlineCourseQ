<template>
    <div data-v-c3d629dc data-v-3be7c4a6 class="personalDataWrap">
        <div data-v-3be7c4a6>
            <div data-v-3be7c4a6 class="personalInfo">
                <div data-v-3be7c4a6 class="personalTip">
                    <span data-v-3be7c4a6>个人信息</span>
                    <span data-v-3be7c4a6 class="editBtnCli" v-if="!showMessage" @click="showMessage = true">
                        <i data-v-3be7c4a6 class="iconfont" style="font-size: 16px;">&#xe601;</i>
                        编辑
                    </span>
                    <span v-if="showMessage" data-v-3be7c4a6 @click="saveUserMessage" class="saveBtnCli">保存</span>
                </div>
                <div data-v-3be7c4a6 class="personalBox">
                    <div data-v-3be7c4a6 class="boxLeft">
                        <ul data-v-3be7c4a6 class="infoList">
                            <li data-v-3be7c4a6 class="infoLi nameInp">
                                <span data-v-3be7c4a6 class="span1">姓名</span>
                                &nbsp;
                                <span v-show="!showMessage" data-v-3be7c4a6 class="span2">{{ user.name }}</span>
                                <span v-show="user.name == null && !showMessage" data-v-3be7c4a6 class="span2">无</span>
                                &nbsp;
                                <el-input v-if="showMessage" size="medium" v-model="user.name"
                                    placeholder="请输入内容"></el-input>
                            </li>
                            <li data-v-3be7c4a6 class="infoLi">
                                <span data-v-3be7c4a6 class="span1">学历</span>
                                &nbsp;
                                <span v-show="!showMessage" data-v-3be7c4a6 class="span2">{{ user.educational |
                                    educationalFilter }}</span>
                                <span v-show="user.educational == null && !showMessage" data-v-3be7c4a6
                                    class="span2">无</span>
                                &nbsp;
                                <el-select v-if="showMessage" v-model="user.educational" placeholder="请选择">
                                    <el-option v-for="item in educationals" :key="item.value" :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </li>
                            <li data-v-3be7c4a6 class="infoLi">
                                <span data-v-3be7c4a6 class="span1">职位</span>
                                &nbsp;
                                <span v-show="!showMessage" data-v-3be7c4a6 class="span2">{{ user.job }}</span>
                                <span data-v-3be7c4a6 class="span2" v-show="user.job == null && !showMessage">无</span>
                                &nbsp;
                                <el-input v-if="showMessage" size="medium" v-model="user.job"
                                    placeholder="请输入内容"></el-input>
                            </li>
                            <li data-v-3be7c4a6 class="infoLi birthdayInp">
                                <span data-v-3be7c4a6 class="span1">生日</span>
                                &nbsp;
                                <span v-show="!showMessage" data-v-3be7c4a6 class="span2">{{ user.birthday }}</span>
                                <span data-v-3be7c4a6 class="span2"
                                    v-show="user.birthday == null && !showMessage">无</span>
                                &nbsp;
                                <el-date-picker value-format="yyyy-MM-dd" v-if="showMessage" v-model="user.birthday"
                                    type="date" placeholder="选择日期">
                                </el-date-picker>
                            </li>
                            <li data-v-3be7c4a6 class="infoLi">
                                <span data-v-3be7c4a6 class="span1">密码</span>
                                &nbsp;
                                <span data-v-3be7c4a6 class="span2 spanPassword">********</span>
                                <span data-v-3be7c4a6 class="span3" @click="dialogFormVisible = true">修改密码</span>

                            </li>
                        </ul>
                    </div>
                    <div data-v-3be7c4a6 class="boxRight">
                        <ul data-v-3be7c4a6 class="infoList">
                            <li data-v-3be7c4a6 class="infoLi">
                                <span data-v-3be7c4a6 class="span1">性别</span>
                                &nbsp;
                                <span v-show="!showMessage" data-v-3be7c4a6 class="span2">{{ user.sex }}</span>
                                <span data-v-3be7c4a6 class="span2" v-show="user.sex == null && !showMessage">无</span>
                                &nbsp;
                                <el-select v-if="showMessage" v-model="user.sex" placeholder="请选择">
                                    <el-option v-for="item in sexs" :key="item.value" :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </li>
                            <li data-v-3be7c4a6 class="infoLi">
                                <span data-v-3be7c4a6 class="span1">学校/公司</span>
                                &nbsp;
                                <span v-show="!showMessage" data-v-3be7c4a6 class="span2">{{ user.schoolCompany
                                    }}</span>
                                <span data-v-3be7c4a6 class="span2"
                                    v-show="user.schoolCompany == null && !showMessage">无</span>
                                &nbsp;
                                <el-input v-if="showMessage" size="medium" v-model="user.schoolCompany"
                                    placeholder="请输入内容"></el-input>
                            </li>
                            <li data-v-3be7c4a6 class="infoLi">
                                <span data-v-3be7c4a6 class="span1">工作年限</span>
                                &nbsp;
                                <span v-show="!showMessage" data-v-3be7c4a6 class="span2">{{ user.workExperience
                                    }}</span>
                                <span data-v-3be7c4a6 class="span2"
                                    v-show="user.workExperience == null && !showMessage">无</span>
                                &nbsp;
                                <el-input v-if="showMessage" size="medium" v-model="user.workExperience"
                                    placeholder="请输入内容"></el-input>
                            </li>
                            <li data-v-3be7c4a6 class="infoLi">
                                <span data-v-3be7c4a6 class="span1">地区</span>
                                &nbsp;
                                <span v-show="!showMessage" data-v-3be7c4a6 class="span2">{{ user.address }}</span>
                                <span data-v-3be7c4a6 class="span2"
                                    v-show="user.address == null && !showMessage">无</span>
                                &nbsp;
                                <el-input v-if="showMessage" size="medium" v-model="user.address"
                                    placeholder="请输入内容"></el-input>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div data-v-3be7c4a6 class="changePasswordWrap">
            <el-dialog @close="clearInput()" :visible.sync="dialogFormVisible" width="462px">
                <div class="alertTitle">修改密码</div>
                <el-form ref="checkPassword" :model="checkPassword" :rules="rules" label-width="80px" size="medium" >
                    <el-form-item prop="oldPassword">
                        <el-input placeholder="当前密码" v-model="checkPassword.oldPassword"></el-input>
                    </el-form-item>
                    <el-form-item prop="newPassword">
                        <el-input type="password" placeholder="设置新密码" v-model="checkPassword.newPassword"></el-input>
                    </el-form-item>
                    <el-form-item prop="reNewPassword">
                        <el-input type="password" placeholder="确认新密码" v-model="checkPassword.reNewPassword"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <div class="saveCli buttonhoverblank" @click="submitForm('checkPassword')">确定</div>
                    </el-form-item>
                </el-form>
                
            </el-dialog>
        </div>
    </div>

</template>
<script>
import _axios from '@/axios/myaxios';

const options = {
    filters: {
        educationalFilter(value) {
            const map = { 1: '博士', 2: '研究生' ,
                3: '本科',4: '专科',
                5: '高中',6:'初中',
                7: '小学',8: '肄业',
                9: '其他'
            };
            return map[value] || '未知';
        }
    },
    data () {
        var validatePassword = (rule, value, callback) => {
            if (this.checkPassword.oldPassword != this.$store.state.user.password) {
                callback(new Error('您输入的密码不正确'));
            }else{
                callback();   //成功之后要返回这个结果
            }
        };
        var validateReNewPassword = (rule, value, callback) => {
            if (value == "") {
                callback(new Error('请再次输入新密码'));
            } else if (this.checkPassword.reNewPassword !== this.checkPassword.newPassword) {
                callback(new Error('两次输入的密码不一致'));
            } else {
                callback();
            }
        };
        var validateNewPassword = (rule, value, callback) => {
            if (value == "") {
                callback(new Error('请输入密码'));
            } else {
                const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/;
                if (!regex.test(this.checkPassword.newPassword)) {
                    callback(new Error('密码必须包含大写字母、小写字母和数字，且长度在8到16位之间'));
                } else {
                    callback();
                }
            }
        };
        return {
            rules: {
                oldPassword: [
                    { validator: validatePassword, trigger: 'blur' }
                ],
                newPassword: [
                    { validator: validateNewPassword, trigger: 'blur' }
                ],
                reNewPassword: [
                    { validator: validateReNewPassword, trigger: 'blur' }
                ]
            },
            checkPassword:{
                oldPassword: "",
                newPassword: "",
                reNewPassword: ""
            },
            dialogFormVisible: false,
            user: {},
            showMessage:false,
            educational: "",
            educationals: [
                {
                    value: 1,
                    label: '博士'
                },
                {
                    value: 2,
                    label: '研究生'
                },
                {
                    value: 3,
                    label: '本科'
                },
                {
                    value: 4,
                    label: '专科'
                },
                {
                    value: 5,
                    label: '高中'
                },
                {
                    value: 6,
                    label: '初中'
                },
                {
                    value: 7,
                    label: '小学'
                },
                {
                    value: 8,
                    label: '肄业'
                },
                {
                    value: 9,
                    label: '其他'
                }
            ],
            sexs:[
                {
                    value: '男',
                    label: '男'
                },
                {
                    value: '女',
                    label: '女'
                }
            ],
            sex:"",
            
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    const params = new URLSearchParams
                    params.append("oldPassword", this.checkPassword.oldPassword)
                    params.append("newPassword", this.checkPassword.newPassword)
                    _axios.post("/user/changePassword",params).then(resp => {
                        if(resp.data.code == 1){
                            this.$store.commit('resetUser')
                            sessionStorage.clear('jwt');
                            sessionStorage.clear('user');
                            this.$router.push("/main");
                            this.$message({
                                message: '修改成功，请重新登录',
                                type: 'success',
                                duration: 2000
                            });
                        }else{
                            this.$message.error(resp.data.msg);
                        }
                    })
                    this.dialogFormVisible = false
                } else {
                    this.$message.error('表单验证失败');
                    return false;
                }
            });
        },
        clearInput(){
            this.checkPassword.oldPassword = ""
            this.checkPassword.newPassword = ""
            this.checkPassword.reNewPassword = ""
        },
        getUser(){
            _axios.get("/user/getCurrentUser").then(resp => {
                this.user = resp.data.data
                this.$store.commit('updateUser',resp.data.data);
            }
            )
        },
        saveUserMessage(){
            _axios.post("/user/update",this.user).then(resp => {
                if(resp.data.code === 1){
                    this.$message({
                        message: '用户信息更改成功',
                        type: 'success',
                    });
                    this.getUser()
                    this.showMessage = false
                }
            })
        }
    },
    mounted() {
        this.getUser()
    },
}
export default options;
</script>
<style>

.el-message--success{
    background-color: #81D8Cf !important;
    color: #F8F5D6 !important;
}
.el-message--success .el-message__content{
    color: #F8F5D6 !important;
}
.el-message .el-icon-success{
    color: #F8F5D6 !important;
}

.personalDataWrap .personalInfo .personalBox .boxLeft .infoList .infoLi .el-input .el-cascader__label, .personalDataWrap .personalInfo .personalBox .boxLeft .infoList .infoLi .el-input .el-input__inner, .personalDataWrap .personalInfo .personalBox .boxRight .infoList .infoLi .el-input .el-cascader__label, .personalDataWrap .personalInfo .personalBox .boxRight .infoList .infoLi .el-input .el-input__inner {
    color: #333 !important;
}

.personalDataWrap .personalInfo .personalBox .boxLeft .infoList .infoLi .el-input input, .personalDataWrap .personalInfo .personalBox .boxRight .infoList .infoLi .el-input input {
    height: 30px;
    line-height: 16px;
    padding-bottom: 7px;
    padding-top: 7px;
}
.changePasswordWrap .el-form .el-form-item .el-input__inner {
    background: #f9f9f9;
    border: 1px solid #fff;
    color: #333;
    height: 48px;
    line-height: 16px;
    padding-bottom: 16px;
    padding-top: 16px;
}
.el-form-item__content{
    margin-left: 0px !important;
}
</style>

<style scoped>



.personalDataWrap {
    padding: 34px 34px 0;
    position: relative;
    width: 890px;
}
.personalDataWrap .personalInfo .personalTip {
    height: 80px;
    line-height: 80px;
}
.personalDataWrap .personalInfo .personalTip .editBtnCli {
    color: #4182fa;
    cursor: pointer;
    float: right;
    font-size: 14px;
    font-weight: 400;
}
button, i, input, select, textarea {
    font-family: -apple-system, SF UI Text, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
    line-height: 1em;
}
.personalDataWrap .personalInfo .personalBox {
    background: #f2f6f7;
    border-radius: 4px;
    height: 234px;
    padding-top: 20px;
    width: 822px;
}
.personalDataWrap .personalInfo .personalBox .boxLeft, .personalDataWrap .personalInfo .personalBox .boxRight {
    float: left;
    width: 400px;
}
ol, ul {
    margin-bottom: 10px;
    margin-top: 0;
}
body, dd, dl, fieldset, h1, h2, h3, h4, h5, h6, input, legend, ol, option, p, td, textarea, ul {
    margin: 0;
    padding: 0;
}
.personalDataWrap .personalInfo .personalBox .boxLeft .infoList .infoLi, .personalDataWrap .personalInfo .personalBox .boxRight .infoList .infoLi {
    height: 40px;
    line-height: 40px;
}
.personalDataWrap .personalInfo .personalBox .boxLeft .infoList .infoLi .span1, .personalDataWrap .personalInfo .personalBox .boxRight .infoList .infoLi .span1 {
    color: #999;
    float: left;
    font-size: 14px;
    font-weight: 400;
    margin-left: 50px;
}
.personalDataWrap .personalInfo .personalBox .boxLeft .infoList .infoLi .span2, .personalDataWrap .personalInfo .personalBox .boxRight .infoList .infoLi .span2 {
    color: #333;
    float: left;
    font-size: 14px;
    font-weight: 400;
    margin-left: 10px;
}

.personalDataWrap .personalInfo .personalTip span:first-of-type {
    color: #333;
    float: left;
    font-size: 20px;
    font-weight: 500;
}
ul {
    list-style-type: none;
}
.personalDataWrap .personalInfo .personalBox .boxLeft .infoList .infoLi .span2, .personalDataWrap .personalInfo .personalBox .boxRight .infoList .infoLi .span2 {
    color: #333;
    float: left;
    font-size: 14px;
    font-weight: 400;
    margin-left: 10px;
}

.personalDataWrap .personalInfo .personalTip .saveBtnCli {
    background: #4182fa;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    float: right;
    font-size: 14px;
    font-weight: 400;
    height: 30px;
    line-height: 30px;
    margin-top: 25px;
    text-align: center;
    width: 85px;
}

.personalDataWrap .personalInfo .personalBox .boxLeft .infoList .infoLi .el-input, .personalDataWrap .personalInfo .personalBox .boxRight .infoList .infoLi .el-input {
    height: 36px;
    width: 178px;
}

.personalDataWrap .personalInfo .personalBox .boxLeft .infoList .infoLi .span2.spanPassword{
    line-height: 45px;
}

.personalDataWrap .personalInfo .personalBox .boxLeft .infoList .infoLi .span3{
    color: #0897b4;
    cursor: pointer;
    display: inline;
    margin-left: 10px;
}

.changePasswordWrap .el-dialog__body {
    padding-bottom: 70px;
    padding-top: 0;
}

.changePasswordWrap .el-dialog__body .alertTitle {
    color: #333;
    font-size: 20px;
    font-weight: 500;
    height: 94px;
    line-height: 70px;
    text-align: center;
}
.changePasswordWrap .saveCli {
    background-color: #7fd6f5;
    border-color: #7fd6f5;
    border-radius: 4px;
    cursor: pointer;
    height: 48px;
    line-height: 48px;
    margin-top: 50px;
    text-align: center;
}
.changePasswordWrap .saveCli:hover{
    background-color: #00aeec;
    border-color: #00aeec;
}

</style>