<template>
    <div class="page-container">
        <div class="course-list portal-content">
            <div data-v-09dc2cea class="org-banner">
                <div data-v-09dc2cea class="left">
                    <router-link to="/main">
                    <img data-v-09dc2cea
                        src="https://storagecdn.xuetangx.com/public_assets/xuetangx/bbs/cover/%E5%AD%A6%E5%A0%82%E6%97%A0%E5%9F%9F%E5%90%8Dlogo.png"
                        class="logo">
                    </router-link>
                </div>
                <div data-v-09dc2cea class="right">
                    <div data-v-09dc2cea class="top">学堂在线</div>
                    <div data-v-09dc2cea class="bottom">
                        <span data-v-09dc2cea class="create-time">创建时间：2016-12-12</span>
                    </div>
                </div>
            </div>
            <div data-v-09dc2cea class="nav-bar">
                <el-tabs v-model="activeName" type="card" @tab-click="handleTabClick">
                    <el-tab-pane label="课程管理" name="/teacherRoot/courseList"
                        :class="{ is_active: isActive('/teacherRoot/courseList') }"></el-tab-pane>
                    <el-tab-pane label="媒资管理" name="/teacherRoot/mediaList"
                        :class="{ is_active: isActive('/teacherRoot/mediaList') }"></el-tab-pane>
                    <el-tab-pane label="教师管理" name="/teacherRoot/teacherList"
                        :class="{ is_active: isActive('/teacherRoot/teacherList') }"></el-tab-pane>
                </el-tabs>
            </div>
            <router-view />
        </div>
    </div>

</template>
<script>
const options = {
    data () {
        return {
            activeName:this.$route.path,
        }
    },
    methods: {
        handleTabClick(tab) {
            const path = tab.name
            if (this.$route.path !== path) {
                this.$router.push(path)
            }
        },
        isActive(routePath) {
            return this.$route.path.includes(routePath);
        },
    },
    mounted() {
        
    },
}
export default options;
</script>
<style>
.nav-bar .el-tabs--card>.el-tabs__header .el-tabs__nav {
    border: 0px !important;
}

.nav-bar .el-tabs--card>.el-tabs__header .el-tabs__item {
    border-left: 0px;
}

.nav-bar .el-tabs.el-tabs--card.el-tabs--top {
    box-shadow: 0 2px 6px 0 #28446c83;
}

.el-tabs__header {
    margin: 0px !important;
}

.el-tabs .el-tabs__item.is-top {
    color: #feffef;
    border-radius: 6px 6px 0px 0px;
}
.el-tabs .el-tabs__item.is-top:hover{
    color: #d6eafe;
}

.nav-bar .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
    background-color: #feffef;
    border-right-color: #DCDFE6;
    border-left-color: #DCDFE6;
}
.nav-bar .el-tabs .el-tabs__item.is-top.is-active {
    color: #013153b4;
}
.nav-bar .el-tabs .el-tabs__nav-scroll {
    background-color: #28446c83;
    padding-left: 60px;
    padding-top: 6px;
}
</style>
<style scoped>

.course-list .nav-bar {
    margin-top: 16px;
    
}

.page-container {
    padding: 20px;
    min-height: 400px;
    background-color: #e5ddd7;
}
.portal-content {
    width: 1200px;
    min-height: 750px;
    margin: 0px auto;
}
.org-banner .left[data-v-09dc2cea] {
    float: left;
    padding-right: 16px;
}
.org-banner .left .logo[data-v-09dc2cea] {
    width: 121px;
    height: 69px;
    border: 1px solid #b9d2f0;
}
img {
    vertical-align: middle;
}
img {
    border: 0;
}
.org-banner .right[data-v-09dc2cea] {
    padding-top: 8px;
    height: 69px;
}
.org-banner .right .top[data-v-09dc2cea] {
    height: 28px;
    font-size: 20px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #003153;
    line-height: 28px;
}
.org-banner .right .bottom[data-v-09dc2cea] {
    margin-top: 5px;
}
.org-banner .right .bottom .create-time[data-v-09dc2cea] {
    display: inline-block;
    width: 160px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
    line-height: 20px;
}

</style>
