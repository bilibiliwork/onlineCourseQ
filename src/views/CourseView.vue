<template>

    <div data-v-00b9cfae class="main view lang-zh">
        <div data-v-00b9cfae>
            <div data-v-61b17279 data-v-00b9cfae class="header_con bg-white" style="position: fixed;">
                <div data-v-61b17279 class="header">
                    <div data-v-61b17279 class="h_flex">
                        <img data-v-61b17279
                            src="https://storagecdn.xuetangx.com/public_assets/xuetangx/bbs/cover/学堂无域名logo.png"
                            class="h_logo">
                        <ul data-v-61b17279 class="h_menus">
                            <li data-v-61b17279>
                                <a data-v-61b17279 href="/#/main" class>首页</a>
                            </li>
                            <li data-v-61b17279>
                                <a data-v-61b17279 href="/#/course" class="active">全部课程</a>
                            </li>
                            <li data-v-61b17279>
                                <div data-v-61b17279 class="corner">
                                    <!-- <a>标签的target属性指定了点击链接后，页面将在何处打开。target属性有几个不同的值 -->
                                    <a data-v-61b17279 target="_parent" href="/#/video/1/learn" class>合作院校</a>
                                </div>
                            </li>
                            <li data-v-61b17279>
                                <div data-v-61b17279 class="corner">
                                    <a data-v-61b17279 target="_parent" href="#" class>同等学力</a>
                                </div>
                            </li>
                            <li data-v-61b17279 v-if="$store.state.user.role === 1">
                                <router-link to="/teacherRoot/courseList">
                                    <div data-v-61b17279 class="corner" style="cursor: pointer; color: #0897b4;
                                font-size: 18px;
                                ">
                                        课程管理
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                        <div data-v-61b17279 class="h_search">
                            <span data-v-61b17279>
                                <span class="el-popover__reference-wrapper">
                                    <div data-v-61b17279 class="header-search-body el-popover__reference"
                                        aria-describedby="el-popover-6266" tabindex="0">
                                        <form data-v-61b17279 action>
                                            <input data-v-61b17279 v-model="searchName" type="text" autocomplete="off"
                                                placeholder="管理" id="pc-search-input" class>
                                        </form>
                                        <i data-v-61b17279 @click="onCourse" style="color: #31d0c8;"
                                            class="iconfont iconfont-search">&#xe69c;</i>
                                        <div data-v-61b17279 class="clear" style="display: none;">
                                            <i data-v-61b17279 style="color: #d8d8d8;" class="el-icon-circle-close"></i>
                                        </div>
                                    </div>
                                </span>
                            </span>
                        </div>
                        <div data-v-61b17279 class="h_login">
                            <div data-v-61b17279 class="login_con">
                                <div v-if="!isLogin()">
                                    <span data-v-61b17279 class="h_login_login txt"
                                        @click="dialogFormVisible = true">登录</span>
                                    <span data-v-61b17279 class="h_login_login bttn">注册</span>
                                </div>

                                <el-popover v-if="isLogin()" popper-class="el-popper" placement="bottom" trigger="hover"
                                    width="312">
                                    <div data-v-61b17279 class="sys-menu">
                                        <ul class="h_login_menu_pcc">
                                            <li class="user-info">
                                                <div class="user-name">Hi~{{ $store.state.user.username }}</div>
                                            </li>
                                            <li>
                                                <span class="menu-list">
                                                    <router-link to="/profiles/myCourse/current">
                                                        <i class="el-icon-reading" style="font-size: 18px;"></i>
                                                        我的课程
                                                    </router-link>
                                                </span>
                                                <span class="menu-list">
                                                    <router-link to="/profiles/my-order">
                                                        <i class="el-icon-tickets" style="font-size: 18px;"></i>
                                                        购买记录
                                                    </router-link>
                                                </span>
                                                <span class="menu-list">
                                                    <router-link to="/profiles/account">
                                                        <i class="el-icon-present" style="font-size: 18px;"></i>
                                                        我的学币
                                                    </router-link>
                                                </span>
                                                <span class="menu-list">
                                                    <router-link to="/profiles/mine">
                                                        <i class="el-icon-user" style="font-size: 18px;"></i>
                                                        个人资料
                                                    </router-link>
                                                </span>
                                            </li>
                                            <li class="basicReturn clearfix">
                                                <a href="#" target="_blank">
                                                    帮助与反馈
                                                    <i class="help-icon"></i>
                                                </a>
                                                <div>
                                                    <span @click="exit()">安全退出</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <span slot="reference" class="el-popover__reference-wrapper">
                                        <div data-v-61b17279 class="img-circle el-popover__reference" tabindex="0"
                                            aria-describedby="el-popover-2858">
                                            <router-link to="/profiles/mine">
                                                <img data-v-61b17279 :src="$store.state.user.avatar">
                                                <span data-v-61b17279 class="img-circle-point"></span>
                                            </router-link>
                                        </div>
                                    </span>
                                </el-popover>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div data-v-0e4b0658 data-v-00b9cfae class="app-main_appMain" style="min-height: calc(-278px + 100vh);" const
            futuredate="new">
            <div data-v-5e0fd50b data-v-0e4b0658 class="courseSearch">
                <div data-v-5e0fd50b class="content">
                    <div data-v-5e0fd50b class="leftSearch">
                        <p data-v-5e0fd50b class="title">课程筛选</p>
                        <div data-v-5e0fd50b class="leftCon">
                            <div data-v-5e0fd50b class="typeCon">
                                <div data-v-5e0fd50b>
                                    <p data-v-5e0fd50b class="t1">上课状态</p>
                                    <span data-courseStatus="0" data-v-5e0fd50b class="t3 active">全部</span>
                                    <span data-courseStatus="1" data-v-5e0fd50b class="t3">即将开课</span>
                                    <span data-courseStatus="2" data-v-5e0fd50b class="t3">开课中</span>
                                    <span data-courseStatus="3" data-v-5e0fd50b class="t3">已结课</span>
                                </div>
                            </div>
                            <div data-v-5e0fd50b class="typeCon">
                                <div data-v-5e0fd50b>
                                    <p data-v-5e0fd50b class="t1">学科分类</p>
                                    <span data-courseType="0" data- data-v-5e0fd50b class="t3 active">全部</span>
                                    <span data-courseType="4" data-v-5e0fd50b class="t3">计算机</span>
                                    <span data-courseType="5" data-v-5e0fd50b class="t3">经济管理</span>
                                    <span data-courseType="17" data-v-5e0fd50b class="t3">农林园艺</span>
                                    <span data-courseType="7" data-v-5e0fd50b class="t3">医药卫生</span>
                                    <span data-courseType="10" data-v-5e0fd50b class="t3">理学</span>
                                    <span data-courseType="6" data-v-5e0fd50b class="t3">文史哲</span>
                                    <span data-courseType="16" data-v-5e0fd50b class="t3">法学</span>
                                    <span data-courseType="11" data-v-5e0fd50b class="t3">艺术设计</span>
                                    <span data-courseType="8" data-v-5e0fd50b class="t3">外语</span>
                                    <span data-courseType="3" data-v-5e0fd50b class="t3">教育教学</span>
                                    <span data-courseType="9" data-v-5e0fd50b class="t3">工学</span>
                                    <span data-courseType="0" data-v-5e0fd50b class="t3">其他</span>
                                </div>
                            </div>
                            <div data-v-5e0fd50b class="typeCon">
                                <div data-v-5e0fd50b>
                                    <p data-v-5e0fd50b class="t1">课程类型</p>
                                    <span data-courseOrPlan="0" data-v-5e0fd50b class="t3 active">全部</span>
                                    <span data-courseOrPlan="1" data-v-5e0fd50b class="t3">微学位</span>
                                    <span data-v-5e0fd50b class="t3">直播课</span>
                                    <span data-v-5e0fd50b class="t3">高校认证</span>
                                    <span data-v-5e0fd50b class="t3">训练营</span>
                                </div>
                            </div>
                            <div data-v-5e0fd50b class="typeCon">
                                <div data-v-5e0fd50b>
                                    <p data-v-5e0fd50b class="t1">学校</p>
                                    <span data-courseSchool="" data-v-5e0fd50b class="t3 active">全部</span>
                                    <span data-courseSchool="清华大学" data-v-5e0fd50b class="t3">清华大学</span>
                                    <span data-courseSchool="北京大学" data-v-5e0fd50b class="t3">北京大学</span>
                                    <span data-courseSchool="圣彼得堡国立大学" data-v-5e0fd50b class="t3">圣彼得堡国立大学</span>
                                    <span data-courseSchool="康奈尔大学" data-v-5e0fd50b class="t3">康奈尔大学</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-v-5e0fd50b class="rightReault" style="padding-bottom: 85px;">
                        <div data-v-5e0fd50b class="result">
                            <div data-v-5e0fd50b class="resulttitle">
                                <span data-v-5e0fd50b class="title1">
                                    搜索到
                                    <span style="color:#333333;">{{ this.count }}门</span>
                                    相关课程
                                </span>
                            </div>
                            <div v-for="item in courseList" :key="item.id" data-v-5e0fd50b class="resultListCon">
                                <router-link style="text-decoration: none;" :to="'/courseDetail/'+item.id">
                                    <div data-v-5e0fd50b class="leftImg">
                                        <div data-v-5e0fd50b></div>
                                        <img data-v-5e0fd50b src="" class="icon rightt">
                                        <img data-v-5e0fd50b :src="item.coverUrl" alt class>
                                        <span data-v-5e0fd50b></span>
                                        <div data-v-5e0fd50b class="hover"></div>
                                    </div>
                                    <div data-v-5e0fd50b class="rightcon">
                                        <p data-v-5e0fd50b class="title">
                                            <span data-v-5e0fd50b class="titletext">{{ item.title }}</span>
                                        <div data-v-5e0fd50b data-v-390af96e class="xt-tag"></div>
                                        </p>
                                        <p data-v-5e0fd50b class="teacher">
                                            <span data-v-5e0fd50b class="teacher_con">
                                                <span data-v-5e0fd50b>代方梅&nbsp;史文文</span>
                                            </span>
                                            <span data-v-5e0fd50b class="org_con">
                                                <i data-v-5e0fd50b class="iconfont"
                                                    style="font-size: 16px; position: relative;top: -1px;">&#xe661;</i>
                                                <span style="margin-left: 3px;" data-v-5e0fd50b>{{ item.schoolName
                                                    }}</span>
                                            </span>
                                            <span data-v-5e0fd50b>
                                                <i data-v-5e0fd50b class="iconfont"
                                                    style="font-size: 16px; position: relative; top: -1px; margin-right: 2px;">&#xe600;</i>
                                                {{ item.popularity }}人
                                            </span>
                                        </p>
                                        <p data-v-5e0fd50b class="info">
                                            {{ item.descr }}
                                        </p>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                        <el-pagination data-v-5e0fd50b class="pageFix" layout="prev, pager, next"
                            @current-change="CurrentChange" :page-size="10" :total="count">
                        </el-pagination>
                    </div>
                </div>
            </div>

        </div>

        <div data-v-af85527e data-v-00b9cfae id="footer" class="footer">
            <div data-v-af85527e class="footer-body">
                <div data-v-af85527e class="container">
                    <div data-v-af85527e class="row">
                        <div data-v-af85527e class="col-md-12 footer-body--links">
                            <ul data-v-af85527e class="list-inline" style="color: #a8a8a8;">
                                <li data-v-af85527e class="language">
                                    <span data-v-af85527e class="current-lang-text">中文</span>
                                    <span data-v-af85527e class="border-line">|</span>
                                </li>
                                <li data-v-af85527e style="float:left ;cursor: pointer;color: #a8a8a8;">
                                    课程入驻
                                </li>
                                <li data-v-af85527e style="float:left ;cursor: pointer;color: #a8a8a8;">
                                    关于我们
                                </li>
                                <li data-v-af85527e style="float:left ;cursor: pointer;color: #a8a8a8;">
                                    联系我们
                                </li>
                                <li data-v-af85527e style="float:left ;cursor: pointer;color: #a8a8a8;">
                                    招兵买马
                                </li>
                                <li data-v-af85527e style="float:left ;cursor: pointer;color: #a8a8a8;">
                                    服务协议和隐私政策
                                </li>
                                <li data-v-af85527e style="float:left ;cursor: pointer;color: #a8a8a8;">
                                    帮助与反馈
                                </li>
                                <li data-v-af85527e style="float:left ;cursor: pointer;color: #a8a8a8;">
                                    侵权投诉
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div data-v-af85527e class="row" style="margin-bottom:40px">
                        <div data-v-af85527e class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                            <ul style="text-align: left;" data-v-af85527e class="list-unstyled">
                                <li data-v-af85527e style="font-size: 24px;margin-top: 40px;">创新教育 改变世界</li>
                                <li data-v-af85527e>New Education, New World</li>
                                <li data-v-af85527e style="font-size: 12px;margin-top: 40px;">
                                    <ul data-v-af85527e class="list-inline">
                                        <li data-v-af85527e>
                                            <span data-v-af85527e>Copyright 2013-2025 北京慕华信息科技有限公司</span>
                                        </li>
                                        <li data-v-af85527e>
                                            <span data-v-af85527e>
                                                京ICP备14019655号 |
                                            </span>
                                            <img data-v-af85527e
                                                src="https://static-cdn.xuetangx.com/xtassets/xtassets/copyright/copyright-icon.png"
                                                style="position: relative; display: inline-block;margin-left: 5px;margin-right: 5px;width: 20px;">
                                            京公网安备 11010802033054号
                                        </li>
                                        <li data-v-af85527e>
                                            <span data-v-af85527e>
                                                广播电视节目制作经营许可证（京）字第05791号
                                            </span>
                                        </li>
                                    </ul>
                                </li>
                                <li data-v-af85527e>地址：北京市海淀区清华科技园科建大厦7层</li>
                            </ul>
                        </div>
                        <div data-v-af85527e class="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-right"></div>
                    </div>
                </div>
            </div>
        </div>





        <div data-v-c6eed236 data-v-0e4b0658 class="loginWrap">
            <el-dialog :visible.sync="dialogFormVisible" @close="close()">
                <div data-v-2bb13dfb data-v-c6eed236 class="all-box pla-all">
                    <div data-v-2bb13dfb class="login-box">
                        <ul data-v-2bb13dfb class="login-type-list">
                            <li data-v-2bb13dfb> 账号密码登录 </li>
                        </ul>
                        <div data-v-2bb13dfb class="login-content-list">
                            <div data-v-2bb13dfb class="input-login" style>
                                <el-form :model="user" :rules="rules" label-width="auto" style>
                                    <el-form-item class="el-form-item--medium" prop="username">
                                        <el-input placeholder="请输入账号" prefix-icon="User" style="width: 344px"
                                            v-model="user.username" />
                                    </el-form-item>
                                    <el-form-item class="el-form-item--medium" prop="password">
                                        <el-input placeholder="请输入密码" type="password" prefix-icon="Lock"
                                            style="width:344px" v-model="user.password" />
                                    </el-form-item>
                                </el-form>
                                <div data-v-2bb13dfb class="other-ope-con">
                                    <div data-v-2bb13dfb class="other-ope">
                                        <span data-v-2bb13dfb>忘记密码</span>
                                        <span data-v-2bb13dfb>
                                            去注册
                                        </span>
                                    </div>
                                </div>
                                <button data-v-2bb13dfb class="submit-btn" @click="login()">登录</button>
                            </div>
                        </div>
                    </div>
                </div>
            </el-dialog>
        </div>
    </div>

</template>
<script>
import _axios from '@/axios/myaxios';

const option = {
    data: function () {
        return {
            rules: {
                username: [
                    { required: true, message: '请输入账号', trigger: 'blur' },
                    { min: 4, max: 16, message: '长度应该在4到16之间', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            },
            user: {
                username: '',
                password: ''
            },
            dialogFormVisible: false,
            search: "",
            courseStatus: 0,
            courseType: 0,
            courseOrPlan: 0,
            courseSchool: "",
            currentPage: 1,
            courseList: [],
            planList: [],
            count: 0,
            searchName: "",
            pageSize:10,
        }
    },
    methods: {
        exit() {
        _axios.post("/user/exit").then(resp => {
          if (resp.data.code == 1) {
            this.$message({
              message: '退出成功',
              type: 'success'
            });
            sessionStorage.clear('jwt');
            sessionStorage.clear('user');
            window.location.reload();
          }
        })
      },
        close() {
            this.user = {
                username: '',
                password: ''
            }
        },
        login() {
            _axios.post("/user/login", this.user).then(resp => {
                if (resp.data.code == 1) {
                    this.$message({
                        message: '恭喜您，登陆成功',
                        type: 'success',
                        duration: 1000
                    });
                    this.user = resp.data.data
                    this.avatar = this.user.avatar

                    this.$store.commit('updateUser', this.user)
                    sessionStorage.setItem("jwt", JSON.stringify(resp.data.data.token));
                } else {
                    this.$message({
                        message: resp.data.msg,
                        type: 'error',
                        duration: 2000
                    });
                }
            })
            this.dialogFormVisible = false
        },
        isLogin() {
            return sessionStorage.getItem('jwt') != null;
        },
        CurrentChange(val) {
            this.currentPage = val;
            this.queryPage()
        },
        queryPage() {
            const param = new URLSearchParams
            param.append("pageSize",this.pageSize)
            param.append("courseStatus", this.courseStatus)
            param.append("courseType", this.courseType)
            param.append("courseSchool", this.courseSchool)
            param.append("currentPage", this.currentPage)
            param.append("searchName", this.searchName)
            _axios.get("/course/all?" + param).then(resp => {
                this.courseList = resp.data.data.records
                this.count = resp.data.data.count
            })

        },
        changeSpanStatus() {
            const typeCons = document.querySelectorAll(".typeCon");
            const spans = document.querySelectorAll("span.t3");

            spans.forEach(span => {
                span.addEventListener('click', () => {
                    this.searchName = ""
                    const spanTree = span.parentNode.querySelectorAll('span.t3');
                    spanTree.forEach(s => s.classList.remove('active'));
                    span.classList.add('active');
                    if (typeCons[0].contains(span)) {
                        this.courseStatus = span.getAttribute('data-courseStatus');
                        this.currentPage = 1
                    } else if (typeCons[1].contains(span)) {
                        this.courseType = span.getAttribute('data-courseType');
                        this.currentPage = 1
                    } else if (typeCons[2].contains(span)) {
                        this.courseOrPlan = span.getAttribute('data-courseOrPlan');
                        this.currentPage = 1
                    } else if (typeCons[3].contains(span)) {
                        this.courseSchool = span.getAttribute('data-courseSchool');
                        this.currentPage = 1
                    }
                    this.queryPage();
                });
            });
        },

        onCourse() {
            this.queryPage()
        },
        bindMenuClickEvents() {
            //切换状态栏的函数
            var lia = document.querySelectorAll('.h_menus li a')
            for (var i = 0; i < lia.length; i++) {
                lia[i].addEventListener('click', this.changeTab);
            }
        },
        // .header .h_login .h_login_login.txt[data-v-61b17279] 
        changeTab(event) {
            // 获取当前点击的链接
            const target = event.currentTarget;
            // 移除所有链接的 active 类
            const lia = document.querySelectorAll('.h_menus li a');
            lia.forEach((link) => {
                link.classList.remove('active');
            });
            // 为当前点击的链接添加 active 类
            target.classList.add('active');
        },


        bindSearchInputEvent() {
            // 绑定搜索框的输入事件
            document.querySelector('.header .h_search .header-search-body input')
                .addEventListener('input', function () {
                    if (this.value !== '') {
                        // 有文本内容时添加类名
                        this.classList.add('search-txt');
                        document.querySelector('.header .h_search .header-search-body .clear').style = ""
                    } else {
                        // 没有文本内容时移除类名
                        this.classList.remove('search-txt');
                        document.querySelector('.header .h_search .header-search-body .clear').style = " display: none;"
                    }
                })
        },

        bindClearIconEvents() {
            // 绑定清除按钮的交互事件
            var clear = document.querySelector('.header .h_search .header-search-body .clear i')
            clear.addEventListener('mouseenter', function () {
                this.classList.remove('el-icon-circle-close')
                this.classList.add('el-icon-error')
            })
            clear.addEventListener('mouseleave', function () {
                this.classList.remove('el-icon-error')
                this.classList.add('el-icon-circle-close')
            })
            clear.addEventListener('click', function () {
                document.querySelector('.header .h_search .header-search-body input')
                    .value = ''
                document.querySelector('.header .h_search .header-search-body .clear').style = " display: none;"
            })
        },
        bindLoginAndRegister() {
            // 登录和注册按钮的功能
            var login = document.querySelector('.header .h_login .h_login_login.txt[data-v-61b17279]')
            login.addEventListener('mouseenter', function () {
                this.style.color = '#1769fe'
            })
            login.addEventListener('mouseleave', function () {
                this.style.color = '#696e7b'
            })
            var register = document.querySelector('.header .h_login .h_login_login.bttn[data-v-61b17279]')
            register.addEventListener('mouseenter', function () {
                this.style.background = '#155fe5'
            })
            register.addEventListener('mouseleave', function () {
                this.style.background = '#1769fe'
            })
        }

    },

    mounted() {
        // this.bindLoginAndRegister()
        this.bindMenuClickEvents();
        this.bindSearchInputEvent();
        this.bindClearIconEvents();
        this.searchName = this.$store.state.searchName
        this.changeSpanStatus()
        this.queryPage()
    }
}
export default option;

</script>
  <style>
  /* 在这里重新写一行来改变el-popover增加的样式 */
  .el-popper {
      padding: 0 !important;
      font-size: 16px;
      font-style: normal;
  }

  .loginWrap[data-v-c6eed236] .all-box .other-ope-con span:hover {
    background: rgba(123, 135, 178, .15);
    border-radius: 4px;
    color: #656a72;
}

.loginWrap[data-v-c6eed236] .all-box .other-ope-con span:hover {
    background: rgba(123, 135, 178, .15);
    border-radius: 4px;
    color: #656a72;
}


  </style>
  <style scoped>
  /* 如果加了scoped参数的话，对于和app同级的dom就不能生效了 */
  li {
      list-style: none;
  }
  
  
  .header_con[data-v-61b17279] {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      z-index: 999;
      background: #fff;
      height: auto;
  }
  
  .img-circle[data-v-61b17279] {
      cursor: pointer;
      height: 40px;
      position: relative;
      width: 40px;
  }
  .img-circle {
      border-radius: 50%;
  }
  
  .img-circle img[data-v-61b17279] {
      border-radius: 50%;
      height: 40px;
      position: relative;
      vertical-align: middle;
      width: 40px;
      z-index: 2;
  }
  
  img{
    border: 0;
  }
  
  .img-circle .img-circle-point[data-v-61b17279] {
      background: url(https://proxt-cdn.xuetangx.com/fe-proxtassets/xuetangX/1015/head-bg.png) no-repeat;
      background-size: contain;
      height: 46px;
      left: -3px;
      position: absolute;
      top: -3px;
      width: 56px;
      z-index: 1;
  }
  
  .header .h_menus li[data-v-61b17279] {
      margin-right: 32px;
      flex-shrink: 0;
  }
  
  .main[data-v-00b9cfae] {
      position: relative;
  }
  
  .main.view {
      padding-top: 88px;
  }
  
  .header .h_menus li a[data-v-61b17279] {
      padding-bottom: 10px;
      position: relative;
      color: #333;
      font-size: 16px;
      text-decoration: none;
  }
  
  .header .h_menus li a.active[data-v-61b17279], .header .h_menus li a[data-v-61b17279]:hover {
      color: #1769fe;
  }
  
  
  
  .header[data-v-61b17279] {
      padding-left: 64px;
      padding-right: 64px;
      margin: 0 auto;
  }
  
  .header .h_flex[data-v-61b17279] {
      display: flex;
      flex-direction: row;
      height: 88px;
      align-items: center;
  }
  
  .header .h_logo[data-v-61b17279] {
      width: auto;
      height: 40px;
      margin-right: 32px;
  }
  
  .header .h_menus[data-v-61b17279] {
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 0;
      margin-top: 0;
      padding-left: 0;
  }
  
  a {
      background-color: transparent;
  }
  
  a, input, select {
      outline: none;
  }
  
  .header .h_search .header-search-body[data-v-61b17279] {
      background: #fcfcfc;
      border: 1px solid #ebebeb;
      border-radius: 6px;
      flex-shrink: 0;
      padding: 8px 0 8px 16px;
      position: relative;
  }
  
  .header .h_search .header-search-body input[data-v-61b17279] {
      background-color: hsla(0, 0%, 100%, 0) !important;
      border: none;
      color: #333;
      font-size: 14px;
      height: 20px;
      line-height: 20px;
      outline: none;
      padding: 0 40px 0 0;
      position: relative;
      width: 200px;
  }
  
  button, input, select, textarea {
      font-family: inherit;
  }
  button, input, optgroup, select, textarea {
      font: inherit;
      margin: 0;
  }
  
  .header .h_login[data-v-61b17279] {
      margin-left: 20px;
      flex-shrink: 0;
  }
  
  .header .h_login .login_con[data-v-61b17279] {
      display: inline-flex;
      align-items: center;
      justify-content: center;
  }
  .header .h_login .h_login_login[data-v-61b17279] {
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
      line-height: 22px;
      min-width: 72px;
      padding: 7px;
      text-align: center;
  }
  
  .header .h_login .h_login_login.txt[data-v-61b17279] {
      color: #696e7b;
  }
  
  .header .h_login .h_login_login.bttn[data-v-61b17279] {
      background: #1769fe;
      color: #fff;
      font-weight: 700;
      margin-left: 4px;
  }
  
  
  .header .h_search .header-search-body .iconfont-search[data-v-61b17279] {
      color: #a8a8a8;
      cursor: pointer;
      font-size: 20px;
      margin-top: -10px;
      position: absolute;
      right: 14px;
      top: 50%;
      z-index: 1;
  }
  
  i{
    line-height: 1em;
  }
  
  .header .h_search .header-search-body input.search-txt[data-v-61b17279] {
      padding-right: 65px;
  }
  
  .header .h_search .header-search-body .clear[data-v-61b17279] {
      /* background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgY2xhc3M9Imljb24iIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGZpbGw9IiNEOEQ4RDgiIGQ9Im01NTcuOTEgNTEyLjQ3IDIyNS43MDYgMjI1LjcwNmEzMiAzMiAwIDAgMS00NS4yNDggNDUuMjQ4TDUxMi42NjEgNTU3LjcxNyAyODYuMjkzIDc4NC4wODVhMzIgMzIgMCAwIDEtNDUuMjY5LTQ1LjI0OGwyMjYuMzktMjI2LjM2OC0yMjYuODM4LTIyNi44MzdhMzIgMzIgMCAwIDEgNDUuMjI3LTQ1LjI0OEw1MTIuNjgzIDQ2Ny4ybDIyNi4xNzYtMjI2LjE3NmEzMiAzMiAwIDAgMSA0NS4yNDggNDUuMjd6Ii8+PC9zdmc+) 50% no-repeat;
      background-size: 18px 18px;
      color: #d8d8d8; */
      cursor: pointer;  /* 使得鼠标移动上去的时候变成手指 */
      display: inline-block;
      font-size: 18px;
      height: 18px;
      position: absolute;
      right: 41px;
      top: 10px;
      width: 18px;
  }
  
  .el-popper[x-placement^=bottom] {
      margin-top: 12px;
  }
  
  
  .el-popover {
      background: #fff;
      border: 1px solid #ebeef5;
      border-radius: 4px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
      color: #606266;
      font-size: 14px;
      line-height: 1.4;
      min-width: 150px;
      text-align: justify;
      word-break: break-all;
  }
  
  .h_login_menu_pcc {
      display: block;
      font-size: 0;
      margin-bottom: 0;
      padding: 26px 20px;
  }
  .h_login_menu_pcc li .menu-list:hover{
    color: #1769fe;
  }
  
  
  .h_login_menu_pcc .user-info {
      color: #666;
      display: flex;
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
      margin-bottom: 20px;
      padding-left: 10px;
      align-items: center;
  }
  .h_login_menu_pcc .user-info .user-name {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 1px;
  }
  
  ol, ul {
      margin-bottom: 10px;
      margin-top: 0;
  }
  body, dd, dl, fieldset, h1, h2, h3, h4, h5, h6, input, legend, ol, option, p, td, textarea, ul {
      margin: 0;
      padding: 0;
  }
  
  .h_login_menu_pcc .user-info {
      color: #666;
      display: flex;
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
      margin-bottom: 20px;
      padding-left: 10px;
      align-items: center;
  }
  
  .h_login_menu_pcc .user-info .user-name {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;    /* 使得文章超过的部分由省略号显示 */
      white-space: nowrap;      /*  禁止文本换行 */
      width: 1px;
  }
  
  .h_login_menu_pcc .menu-list:nth-of-type(odd) {
      margin-right: 10px;
  }
  .h_login_menu_pcc .menu-list {
      background: #f9f9fa;
      border-radius: 4px;
      color: #333;
      display: inline-block;
      display: inline-flex;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 10px;
      padding: 8px 12px 8px 16px;
      width: 130px;
      align-items: center;
      cursor: pointer;
      word-break: break-word;
  }
  
  .h_login_menu_pcc .menu-list i.big {
      font-size: 22px;
  }
  .h_login_menu_pcc .menu-list i {
      font-size: 20px;
      margin-right: 8px;
      text-align: center;
      width: 20px;
  }
  .iconfont {
      font-family: iconfont !important;
      font-size: 16px;
      font-style: normal;
  }
  
  .h_login_menu_pcc .menu-list i.small {
      font-size: 18px;
  }
  
  .h_login_menu_pcc .basicReturn {
      border-top: 1px solid #ebebeb;
      color: #999;
      
      margin-top: 20px;
      padding: 18px 10px 0;
  }
  
  .clearfix:after {
      clear: both;
  }
  .clearfix:after, .clearfix:before {
      content: " ";
      display: table;
  }
  .clearfix:after {
      overflow: hidden;
  }
  .clearfix {
      zoom: 1;      /*  联合上方的after和before伪类样式来清除浮动带来的影响 */
  }
  
  .h_login_menu_pcc .basicReturn a {
      color: #999;
      display: block;
      float: left;
      font-size: 12px;
      line-height: 17px;
      padding-right: 21px;
      position: relative;
      text-decoration: none;
  }
  
  a {
      color: #337ab7;
      text-decoration: none;
  }
  a {
      background-color: transparent;
  }
  
  .h_login_menu_pcc .basicReturn a .help-icon {
      background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9Imljb24iIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGZpbGw9IiM4YThhOGEiIGQ9Ik00ODkuMjY3IDEwMi40YzIyNS44NDMgMCA0MDkuNiAxNzIuMjM3IDQwOS42IDM4NS41MzYgMCAyMTMuMjQ4LTE4My43NTcgMzg1LjQ4NS00MDkuNiAzODUuNDg1LTE3LjA1IDAtMzMuODk0LTEuMDI0LTUwLjU4NS0yLjkxOWgtLjgyYy00Ljk2Ni0uMDUtMTcuNDA4IDQuMDQ1LTQwLjk2IDEzLjYybC0yMS4zNSA4LjkwOC0zOS44MzQgMTcuMjA0Yy03My4yNjcgMzEuNzQ0LTk4LjQ1NyAzOS45MzYtMTIwLjMyIDMxLjU5LTIzLjUtOC45MDktMjYuNzc3LTMwLjAwMy0xOS44NjUtNTQuOTM4bC43MTctMi41NmMxLjg0My02LjE0NCAzLjk5My0xMi4wODMgNy4zNzItMjAuMDdsMy43OS04LjgwNiAxMS4zNjYtMjQuOTM1YzcuOTg3LTE3LjQ1OSAxMS44NzgtMjYuOTgyIDE0LjIzMy0zNS4zNzlsLjUxMi0yLjA0OC43MTctMy40M2MtOTYuNzY4LTcyLjU1LTE1NC42MjQtMTgyLjYzLTE1NC42MjQtMzAxLjc3MyAwLTIxMy4yNDggMTgzLjc1Ny0zODUuNDg1IDQwOS42LTM4NS40ODV6bTAgNDguMThjLTE5OS45MzYgMC0zNjEuNDcyIDE1MS4zOTgtMzYxLjQ3MiAzMzcuMzA1IDAgMTA1LjM3IDUyLjEyMiAyMDIuNzUyIDEzOS42NzQgMjY2LjM0MmwyLjUwOSAxLjg5NWMxOS45NjggMTUuODIgMTkuMjUgMzIuNDEgMi41MDggNzIuMTkybC00LjUwNSAxMC4zOTMtMTYuMDI2IDM1LjIyNmE0MjIgNDIyIDAgMCAwLTQuNjU5IDEwLjc1MmwtMi4yNTMgNS42ODMtMS40ODUgNC4xNDdjMTQuNDM5LTQuNDU0IDQyLjAzNi0xNS4wMDEgODAuMTgtMzEuNTlsNDEuNzc5LTE4LjA3NGM0Ny4xMDQtMTkuOTY4IDYyLjIwOC0yNC4xMTUgNzguNjk0LTIyLjIybDExLjE2MiAxLjEyNmMxMS4yNjQgMS4wMjQgMjIuNTI4IDEuNDg1IDMzLjg5NCAxLjQ4NSAxOTkuOTM2IDAgMzYxLjM3LTE1MS4zOTkgMzYxLjM3LTMzNy4zNTcgMC0xODUuOTA3LTE2MS40MzQtMzM3LjMwNi0zNjEuMzctMzM3LjMwNm0tNy4xMTcgNDg1LjczNGMxMS44NzkgMCAyMi4wMTYgMy4zNzkgMjkuOTUyIDExLjI2NCA3LjkzNiA3LjMyMSAxMS44NzkgMTYuODk2IDExLjg3OSAyOC42NzIgMCAxMS44MjctNC41MDYgMjEuNDAxLTEyLjQ0MiAyOS4yODZhNDIgNDIgMCAwIDEtMjIuNzMzIDEwLjc1MmwtNi42NTYuNTEyYTQwLjYgNDAuNiAwIDAgMS0yNS4yNDEtOC4yNDNsLTQuMDk2LTMuNTg0YTM4Ljk2IDM4Ljk2IDAgMCAxLTExLjkzLTI4LjY3MmMwLTExLjgyNyAzLjk5NC0yMS40MDIgMTEuODc5LTI4LjY3MmE0MC4xNCA0MC4xNCAwIDAgMSAyOS4zODgtMTEuMjY0ek00OTIuMzQgMzA3LjJjMzYuMTQ2IDAgNjUuNTM1IDkuNTc0IDg4LjE2NiAyOS43OTggMjIuNTc5IDE5LjcxMiAzMy44OTQgNDYuNjk1IDMzLjg5NCA4MC40ODcgMCAyNy41NDUtNy4zMjIgNTAuNjM3LTIxLjUwNCA2OC42MDgtNC41NTcgNS42MzItMTcuODE4IDE4LjAyMi0zOS43ODIgMzcuMjIybC03LjY4IDYuNjU2Yy05Ljc4IDguMDktMTcuOTIgMTguMDIzLTIzLjcwNiAyOS4yODdhNzUuMjYgNzUuMjYgMCAwIDAtOS4wNjIgMzcuMTJ2OS41NzRINDUyLjI1di05LjU3NGMwLTIwLjc4OCAzLjMyOC0zOC44MSAxMS4yNjQtNTMuNDUzIDcuMzIxLTE1LjcxOSAyOC44MjUtMzguODEgNjMuODQ2LTY5LjczNWw5LjYyNi0xMC43NTJjMTAuMTg4LTEyLjkwMiAxNS44Mi0yNi40MTkgMTUuODItNDEuMDEgMC0xOS43MTMtNS42MzItMzQuOTItMTYuMzg0LTQ2LjEzMi0xMS4yNjQtMTEuMjY0LTI3LjY5OS0xNi44OTYtNDguMDI1LTE2Ljg5Ni0yNS40NDcgMC00NC4wODMgNy44ODUtNTUuMzk5IDI0LjIxOC0xMC4xODggMTMuNDY1LTE1LjI1NyAzMi42MTQtMTUuMjU3IDU3LjM0NEgzNTguNGMwLTQxLjA2MyAxMS44NzgtNzMuMTE0IDM1LjU4NC05Ni43NjggMjMuODA4LTI0LjE2NyA1Ni41NzYtMzUuOTk0IDk4LjMwNC0zNS45OTR6Ii8+PC9zdmc+) 50% no-repeat;
      background-size: 83% auto;
      display: inline-block;
      height: 16px;
      margin-left: 6px;
      vertical-align: sub;
      width: 20px;
  }
  
  .h_login_menu_pcc .basicReturn div {
      cursor: pointer;
      float: right;
      font-size: 12px;
      line-height: 17px;
  }
  
  .el-popper[x-placement^=bottom] .popper__arrow {
      border-bottom-color: #ebeef5;
      border-top-width: 0;
      left: 50%;
      margin-right: 3px;
      top: -6px;
  }
  
  .el-popper .popper__arrow {
      border-width: 6px;
      filter: drop-shadow(0 2px 12px rgba(0, 0, 0, .03));
  }
  .el-popper .popper__arrow, .el-popper .popper__arrow:after {
      border-color: transparent;
      border-style: solid;
      display: block;
      height: 0;
      position: absolute;
      width: 0;
  }
  
  li {
      display: list-item;
      unicode-bidi: isolate;
  }
  
  
  .footer[data-v-af85527e] {
      height: inherit;
      overflow: hidden;
  }
  .footer-body[data-v-af85527e] {
      background: #282c2f;
      color: #a8a8a8;
  }
  
  .footer-body--links[data-v-af85527e] {
      margin-top: 40px;
  }
  @media (min-width: 1008px) {
      .col-md-12[data-v-af85527e] {
          width: 100%;
      }
  }
  
  
  
  .list-inline[data-v-af85527e] {
      margin-left: -5px;
  }
  
  .list-inline[data-v-af85527e], .list-unstyled[data-v-af85527e] {
      list-style: none;
      padding-left: 0;
  }
  ol[data-v-af85527e], ul[data-v-af85527e] {
      margin-bottom: 10px;
      margin-top: 0;
  }
  .footer-body .language[data-v-af85527e] {
      cursor: pointer;
      float: left;
      min-width: 70px;
      position: relative;
  }
  .list-inline>li[data-v-af85527e] {
      display: inline-block;
      padding-left: 5px;
      padding-right: 5px;
  }
  .list-inline>li {
      display: inline-block;
      padding-left: 5px;
      padding-right: 5px;
  }
  
  .footer-body .language .current-lang-text[data-v-af85527e] {
      float: left;
  }
  .footer-body .language .border-line[data-v-af85527e] {
      float: right;
      margin-left: 7px;
      margin-top: -1px;
  }
  @media (min-width: 1008px) {
      .col-md-10[data-v-af85527e] {
          width: 83.3333333333%;
      }
  }
  
  .list-inline[data-v-af85527e], .list-unstyled[data-v-af85527e] {
      list-style: none;
      padding-left: 0;
  }
  
  @media (min-width: 1008px) {
      .container[data-v-af85527e] {
          padding-left: 64px;
          padding-right: 64px;
          width: auto;
      }
  }
  
  
  
  
  /* .header .h_search .header-search-body .clear .iconfont[data-v-61b17279] {
      cursor: pointer;
      display: none;
      font-size: 18px;
  } */

  
.courseSearch .el-pager li.active {
    background: #4182fa;
    border-radius: 50%;
    color: #fff;
}

.courseSearch .el-pager li {
    color: #999;
    font-size: 12px;
    height: 2em;
    line-height: 2em;
    margin: 0 8px;
    min-width: 2em;
    padding: 0;
    text-align: center;
    vertical-align: baseline;
    width: 2em;
}

</style>
<style scoped>
.courseSearch[data-v-5e0fd50b] {
    min-height: calc(100vh - 308px);
}
.content[data-v-5e0fd50b] {
    background: #fff;
    font-size: 0;
    height: 100%;
    margin: auto;
    max-width: 1130px;
    padding: 24px 0;
}

.content .leftSearch[data-v-5e0fd50b] {
    background: #fff;
    border-radius: 4px;
    display: inline-block;
    margin: 0 38px 0 0;
    min-height: 654px;
    padding: 0;
    vertical-align: top;
    width: 230px;
}

.content .leftSearch .title[data-v-5e0fd50b] {
    color: #333;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    margin: 16px auto 20px;
}

body[data-v-5e0fd50b], dd[data-v-5e0fd50b], dl[data-v-5e0fd50b], fieldset[data-v-5e0fd50b], h1[data-v-5e0fd50b], h2[data-v-5e0fd50b], h3[data-v-5e0fd50b], h4[data-v-5e0fd50b], h5[data-v-5e0fd50b], h6[data-v-5e0fd50b], input[data-v-5e0fd50b], legend[data-v-5e0fd50b], ol[data-v-5e0fd50b], option[data-v-5e0fd50b], p[data-v-5e0fd50b], td[data-v-5e0fd50b], textarea[data-v-5e0fd50b], ul[data-v-5e0fd50b] {
    margin: 0;
    padding: 0;
}

.content .leftSearch .leftCon[data-v-5e0fd50b] {
    -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .1);
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .1);
    padding: 12px;
}

.content .leftSearch .typeCon[data-v-5e0fd50b] {
    font-size: 0;
    margin-bottom: 16px;
    overflow: hidden;
    position: relative;
}

.content .leftSearch .typeCon .t1[data-v-5e0fd50b] {
    background: #f6f6f6;
    color: #666;
    font-size: 14px;
    line-height: 30px;
    margin-bottom: 5px;
    padding-left: 8px;
}

.content .leftSearch .typeCon p.active[data-v-5e0fd50b], .content .leftSearch .typeCon span.active[data-v-5e0fd50b] {
    color: #1769fe;
}
.content .leftSearch .typeCon .t3[data-v-5e0fd50b] {
    color: #999;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    line-height: 28px;
    margin: 5px 9px 0;
    vertical-align: middle;
}

.content .leftSearch .typeCon .t3[data-v-5e0fd50b]:hover {
    color: #1769fe;
}

.content .rightReault[data-v-5e0fd50b] {
    background: #fff;
    border-radius: 4px;
    display: inline-block;
    min-height: 654px;
    padding: 0 0 85px;
    position: relative;
    vertical-align: top;
    width: 852px;
}

.content .rightReault .result[data-v-5e0fd50b] {
    font-size: 0;
    padding-top: 16px;
}

.content .rightReault .result .resulttitle[data-v-5e0fd50b] {
    margin-bottom: 20px;
}

.content .rightReault .result .title1[data-v-5e0fd50b] {
    color: #999;
    display: inline-block;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 22px;
    margin: 0 0 0 20px;
    vertical-align: middle;
}

.content .rightReault .result .resultListCon[data-v-5e0fd50b] {
    border: 1px solid #fff;
    border-radius: 4px;
    cursor: pointer;
    overflow: hidden;
    padding: 20px 20px 20px 306px;
    position: relative;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
}

.content .rightReault .result .resultListCon .leftImg[data-v-5e0fd50b] {
    border-radius: 6px;
    height: 150px;
    left: 20px;
    position: absolute;
    top: 20px;
    width: 266px;
}

.content .rightReault .result .resultListCon .leftImg .icon.rightt[data-v-5e0fd50b] {
    border-radius: 2px 6px 2px 14px;
    left: auto;
    max-height: 24px;
    right: 0;
    top: 0;
}
.content .rightReault .result .resultListCon .leftImg .icon[data-v-5e0fd50b] {
    height: auto;
    position: absolute;
    width: auto;
    z-index: 4;
}
.content .rightReault .result .resultListCon .leftImg img[data-v-5e0fd50b] {
    border-radius: 6px;
    display: block;
    height: 100%;
    opacity: 1;
    position: relative;
    -webkit-transition: opacity .3sease 0s;
    -o-transition: opacity .3s ease 0s;
    transition: opacity .3sease 0s;
    width: 100%;
    z-index: 1;
}
img {
    vertical-align: middle;
}
img {
    border: 0;
}

.content .rightReault .result .resultListCon .leftImg .hover[data-v-5e0fd50b] {
    background: url(data:image/png;base64,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) no-repeat;
    background-size: contain;
    border-radius: 6px;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;
}


.content .rightReault .result .resultListCon .rightcon[data-v-5e0fd50b] {
    height: 150px;
}

.content .rightReault .result .resultListCon .title[data-v-5e0fd50b] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
;
    font-size: 0;
    margin-top: 8px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
}

.content .rightReault .result .resultListCon .title .titletext[data-v-5e0fd50b] {
    -webkit-box-flex: 1;
    color: #333;
    -ms-flex: 1;
    flex: 1;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    margin-top: 1px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    vertical-align: middle;
    white-space: nowrap;
}

.xt-tag .tag[data-v-390af96e], .xt-tag[data-v-390af96e] {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.xt-tag[data-v-390af96e] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
;
}

.content .rightReault .result .resultListCon .teacher[data-v-5e0fd50b] {
    color: #999;
    font-size: 0;
    line-height: 17px;
    padding: 12px 0;
}

.content .rightReault .result .resultListCon .teacher .teacher_con[data-v-5e0fd50b] {
    border-right: 1px solid #999;
    margin-right: 32px;
    padding-right: 32px;
}
.content .rightReault .result .resultListCon .teacher>span[data-v-5e0fd50b] {
    display: inline-block;
    font-size: 12px;
}

.content .rightReault .result .resultListCon .teacher .org_con[data-v-5e0fd50b] {
    margin-right: 32px;
}

.content .rightReault .result .resultListCon .teacher .iconfont[data-v-5e0fd50b] {
    display: inline-block;
    font-size: 12px;
    vertical-align: middle;
}

.content .rightReault .result .resultListCon .info[data-v-5e0fd50b] {
    color: #999;
    font-size: 14px;
    height: 66px;
    line-height: 22px;
    overflow: hidden;
    position: relative;
}

.content .rightReault .result .resultListCon[data-v-5e0fd50b]:not(.isMobile):hover {
    background: #fff;
    border-radius: 4px;
    -webkit-box-shadow: 0 2px 14px 0 rgba(0, 0, 0, .1);
    box-shadow: 0 2px 14px 0 rgba(0, 0, 0, .1);
    z-index: 1;
}

.content .rightReault .pageFix[data-v-5e0fd50b] {
    bottom: 26px;
    display: block;
    left: 0;
    position: absolute;
    width: 100%;
}

.courseSearch .el-pagination {
    text-align: center;
}
  
</style>
  
