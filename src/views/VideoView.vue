<template>
    <div data-v-5d41576e class="main view lang_zh" style="padding-top: 0px;">
        <div data-v-6ffe4334 data-v-5d41576e class="header_study header blue" hidead="true">
            <div data-v-6ffe4334 class="headerCon">
                <div data-v-6ffe4334 class="header_logo">
                    <router-link to="/main">
                        <img data-v-6ffe4334
                            src="https://onlinecourseweb.oss-cn-beijing.aliyuncs.com/%E5%AD%A6%E5%A0%82logo%E6%97%A0%E5%9F%9F%E5%90%8D-%E7%99%BD%E8%89%B2.png"
                            alt>
                    </router-link>
                </div>
                <p data-v-6ffe4334 class="className">
                    <i data-v-6ffe4334></i>
                    <span data-v-6ffe4334>{{ course.title }}（2025春）</span>
                </p>
                <div data-v-6ffe4334 class="tablist">
                    <router-link :to="'/video/' + this.cid + '/learn'">
                        <p data-v-6ffe4334 :class="{active:isActive('/video/' + this.cid + '/learn')}">
                            上课
                        </p>
                    </router-link>
                    <router-link :to="'/video/' + this.cid + '/forum'">
                        <p data-v-6ffe4334 :class="{active:isActive('/video/' + this.cid + '/forum')}">讨论</p>
                    </router-link>
                    <router-link :to="'/video/' + this.cid + '/learn'">
                        <p data-v-6ffe4334 :class="{active:isActive('/video/' + this.cid + '/progress')}">成绩</p>
                    </router-link>
                </div>
                <div data-v-6ffe4334 class="h_login">
                    <div data-v-6ffe4334 class="login_con">
                        <!--  <span data-v-6ffe4334 class="h_login_login txt">登录</span>
                <span data-v-6ffe4334 class="h_login_login bttn">注册</span> -->
                        <el-popover data-v-6ffe4334 popper-class="el-popper1" placement="bottom" trigger="hover"
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
                                <div data-v-6ffe4334 class="img-circle el-popover__reference" tabindex="0"
                                    aria-describedby="el-popover-2858">
                                    <router-link to="/profiles/mine">
                                        <img data-v-6ffe4334 :src="$store.state.user.avatar">
                                        <span data-v-6ffe4334 class="img-circle-point"></span>
                                    </router-link>
                                </div>
                            </span>
                        </el-popover>
                    </div>
                </div>
            </div>
        </div>
        <!-- 替换页面 -->
        <router-view />
    </div>

</template>
<script>
import _axios from '@/axios/myaxios';

const options = {
    data () {
        return {
            cid:0,
            course:{}
        }
    },
    methods: {
        isActive(url){
            return this.$route.path.includes(url);
        },
        getCourseTeachPlan(){
            _axios.get("course/"+this.cid).then(resp => {
                this.course = resp.data.data;
            })
        },
        exit() {
            sessionStorage.clear('jwt');
            sessionStorage.clear('user');
            this.$router.push("/main")
            /* window.location.reload(); */
        },
        changeTag(){
            var active = document.querySelectorAll('.tablist p')
            for(var i=0;i<active.length;i++){
                active[i].addEventListener('click',function(){
                    active.forEach(p => {
                        p.classList.remove('active')
                    })
                    this.classList.add('active')
                })
            }
        }
        
    },
    mounted() {
        this.cid = this.$route.params.mid
        this.changeTag()
        this.getCourseTeachPlan()
    },
}
export default options;
</script>
<style>
/* 在这里重新写一行来改变el-popover增加的样式 */
.el-popper1{
    padding: 0 !important;
    font-size: 16px;
    font-style: normal;
    top: 64px !important;
}

</style>
<style scoped>



.header_logo img[data-v-6ffe4334] {
    height: 100%;
    -o-object-fit: contain;
    object-fit: contain;
    width: 100%;
}

 .h_login[data-v-6ffe4334] {
    margin-left: 20px;
    flex-shrink: 0;

}

 .h_login .login_con[data-v-6ffe4334] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
 .h_login .h_login_login[data-v-6ffe4334] {
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    line-height: 22px;
    min-width: 72px;
    padding: 7px;
    text-align: center;
}

 .h_login .h_login_login.txt[data-v-6ffe4334] {
    color: #696e7b;
}

 .h_login .h_login_login.bttn[data-v-6ffe4334] {
    background: #1769fe;
    color: #fff;
    font-weight: 700;
    margin-left: 4px;
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
.img-circle .img-circle-point[data-v-6ffe4334] {
    background: url(https://proxt-cdn.xuetangx.com/fe-proxtassets/xuetangX/1015/head-bg.png) no-repeat;
    background-size: contain;
    height: 46px;
    left: -3px;
    position: absolute;
    top: 21px;
    width: 56px;
    z-index: 1;
}

.img-circle[data-v-6ffe4334] {
    cursor: pointer;
    height: 40px;
    position: relative;
    width: 40px;
}

.img-circle[data-v-6ffe4334] {
    border-radius: 50%;
}
.img-circle img[data-v-6ffe4334]{
    border-radius: 50%;
    height: 40px;
    position: relative;
    vertical-align: middle;
    width: 40px;
    z-index: 2;
}

img[data-v-6ffe4334] {
    border: 0;
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
.el-popper[x-placement^=bottom] {
    margin-bottom: 12px;
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

.main[data-v-5d41576e] {
    min-width: 1240px;
    position: relative;
}

.header_study.blue[data-v-6ffe4334] {
    background-image: -o-linear-gradient(315deg, #3581df 0, #8789f5 100%);
    background-image: linear-gradient(135deg, #3581df, #8789f5);
    -webkit-box-shadow: 0 -7px 17px 10px rgba(13, 37, 62, .04);
    box-shadow: 0 -7px 17px 10px rgba(13, 37, 62, .04);
}
.header[data-v-5d41576e] {
    background: #fff;
    border-bottom: 1px solid #eee;
    -webkit-box-shadow: 0 -7px 17px 10px rgba(13, 37, 62, .04);
    box-shadow: 0 -7px 17px 10px rgba(13, 37, 62, .04);
    display: block;
    width: 100%;
}
.header_study[data-v-6ffe4334] {
    height: 88px;
    line-height: 88px;
    position: relative;
}

.headerCon[data-v-6ffe4334] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 0;
    margin: auto;
    width: 1200px;
    height: 88px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.header_logo[data-v-6ffe4334] {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex
;
    height: 40px;
    width: 135px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    vertical-align: middle;
}


img {
    vertical-align: middle;
}
img {
    border: 0;
}

.headerCon .className[data-v-6ffe4334] {
    -webkit-box-flex: 1;
    color: #fff;
    display: inline-block;
    -ms-flex: 1;
    flex: 1;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: .5px;
    line-height: 88px;
    margin: 0 20px 0 0;
    overflow: hidden;
    text-decoration: none;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    vertical-align: middle;
    white-space: nowrap;
}
p {
    margin: 0 0 10px;
}
body, dd, dl, fieldset, h1, h2, h3, h4, h5, h6, input, legend, ol, option, p, td, textarea, ul {
    margin: 0;
    padding: 0;
}

.headerCon .className i[data-v-6ffe4334] {
    background: hsla(0, 0%, 100%, .44);
    display: inline-block;
    height: 22px;
    margin: 0 20px;
    vertical-align: middle;
    width: 1px;
}
button, i, input, select, textarea {
    font-family: -apple-system, SF UI Text, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
    line-height: 1em;
}

.headerCon .className span[data-v-6ffe4334] {
    cursor: pointer;
}

.tablist[data-v-6ffe4334] {
    display: inline-block;
    line-height: 88px;
    vertical-align: middle;
}
.tablist p.active[data-v-6ffe4334] {
    color: #fff;
    font-size: 18px;
    letter-spacing: .56px;
    opacity: 1;
}

.tablist p[data-v-6ffe4334] {
    color: hsla(0, 0%, 100%, .89);
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0;
    margin: 0 12px;
    opacity: .6;
    vertical-align: middle;
}



</style>