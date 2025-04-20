<template>
    <div data-v-6c0cdb3a data-v-c3d629dc class="myCourseBox">
        <ul data-v-6c0cdb3a class="myCourseTabList">
            <el-row :gutter="20">
                <el-col :span="3">
                    <el-link style="font-size: 16px;" :underline="false"
                    href="/#/profiles/myCourse/current"
                    :class="{active: isActive('/profiles/myCourse/current')}"
                    >正在上课</el-link>
                </el-col>
                <el-col :span="3">
                    <el-link style="font-size: 16px;" :underline="false"
                    href="/#/profiles/myCourse/future"
                    :class="{active: isActive('/profiles/myCourse/future')}"
                    >即将开课</el-link>
                </el-col>
                <el-col :span="3">
                    <el-link style="font-size: 16px;" :underline="false"
                    href="/#/profiles/myCourse/completed"
                    :class="{active: isActive('/profiles/myCourse/completed')}"
                    >已结课</el-link>
                </el-col>
                <el-col :span="3">
                    <el-link style="font-size: 16px;" :underline="false"
                    href="/#/profiles/myCourse/deleted"
                    :class="{active: isActive('/profiles/myCourse/deleted')}"
                    >已退课</el-link>
                </el-col>
            </el-row>
        </ul>
        <router-view />
        
    </div>

</template>
<script>
/* import Swiper from 'swiper';
import 'swiper/css'; */
const options = {
    data () {
        return {
            
        }
    },
    methods: {

        isActive(route){
            return this.$route.path === route
        }
        
    },
    mounted() {

    },
    
}

export default options
</script>
<style>

.el-link.el-link--default.active[data-v-2ea9c766]{
    color: #409EFF;
}
</style>
<style scoped>


.el-col {
    border-radius: 4px;
}
.bg-purple-dark {
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}

.myCourseBox {
    min-height: 660px;
    padding-bottom: 30px;
}
.myCourseBox .myCourseTabList {
    border-bottom: 1px solid #ebebeb;
    font-size: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    padding-bottom: 15px;
    padding-top: 16px;
    position: relative;
    white-space: nowrap;
}
ol, ul {
    margin-bottom: 10px;
    margin-top: 0;
}



</style>