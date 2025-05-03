<template>
    <div data-v-0e4b0658 data-v-00b9cfae class="app-main_ appMain" style="min-height: calc(-278px + 100vh);">
        <div data-v-0e4b0658 data-v-0f845e1f class="universityDetail">
            <div data-v-0f845e1f class="banner">
                <div data-v-0f845e1f class="content">
                    <router-link to="/school">
                        <span data-v-0f845e1f class="back">
                            <i data-v-0f845e1f class="iconfont">&#xe6c1;</i>
                            返回
                        </span>
                    </router-link>
                    <span data-v-0f845e1f class="school_logo">
                        <img data-v-0f845e1f alt :src="school.logo1">
                    </span>
                    <p data-v-0f845e1f class="school_name">{{ school.name }}</p>
                    <p data-v-0f845e1f class="school_remark">{{ school.descr }}</p>
                </div>
            </div>
            <p data-v-0f845e1f class="title">
                <span data-v-0f845e1f>
                    全部课程
                </span>
            </p>
            <div data-v-0f845e1f class="list">

                <div data-v-0f845e1f class="course" v-for="item in courseList" :key="item.id">
                    <router-link :to="'/courseDetail/'+item.id">
                        <div data-v-0f845e1f class="cover" :style="{ 'background-image': `url('${item.coverUrl}')` }">
                        </div>
                        <div data-v-0f845e1f class="detail">
                            <p data-v-0f845e1f class="name">{{ item.title }}</p>
                            <div data-v-0f845e1f class="person">
                                <p data-v-0f845e1f class="teacher" v-if="item.teachers != null">
                                    <span data-v-0f845e1f v-for="teacher in item.teachers.slice(0, 2)"
                                        :key="teacher.tid">
                                        {{ teacher.name }}
                                        <span>、</span>
                                    </span>
                                    <span data-v-0f845e1f v-if="item.teachers.length > 2">等老师</span>
                                </p>
                                <span data-v-0f845e1f class="count">
                                    <i data-v-0f845e1f class="iconfont">&#xe600;</i>
                                    {{ item.popularity }}
                                </span>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <el-pagination data-v-0f845e1f data-v-405c42cb @current-change="CurrentChange" :page-size="16" class="pageFix"
                layout="prev, pager, next" :total="count">
            </el-pagination>
        </div>
    </div>

</template>
<script>
import _axios from '@/axios/myaxios'

const options = {
    data () {
        return {
            school: {},
            courseList:[],
            schoolId:0,
            currentPage:1,
            count:0
        }
    },
    methods: {
        CurrentChange(val) {
            this.currentPage = val;
            this.getCourseListBySchoolId()
        },
        getSchoolById(){
            _axios.get("/school/"+this.schoolId).then( resp => {
                this.school = resp.data.data
            }
            )
        },
        getCourseListBySchoolId(){
            const params = new URLSearchParams()
            params.append("schoolId",this.schoolId)
            params.append("currentPage",this.currentPage)
            _axios.get("/course/school?"+params).then(resp => {
                this.courseList = resp.data.data.records
                this.count = resp.data.data.count
            })
        }
    },
    mounted() {
        this.schoolId = this.$route.params.schoolId
        this.getSchoolById()
        this.getCourseListBySchoolId()
    },
}
export default options
</script>
<style>
.universityDetail .el-pager li.active {
    background: #4182fa;
    border-radius: 50%;
    color: #fff;
}
.universityDetail .el-pager li {
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

.universityDetail .pageFix[data-v-0f845e1f] {
    margin: 32px 0 64px;
    width: 100%;
}

.universityDetail .pageFix[data-v-0f845e1f] {
    margin: 32px 0 64px;
    width: 100%;
}

.universityDetail .el-pagination {
    text-align: center;
}

.universityDetail .banner[data-v-0f845e1f] {
    background: url(https://onlinecourseweb.oss-cn-beijing.aliyuncs.com/school/faabde43d830b2d690dc24fd9d30ab4c.banner_bg.png) repeat 50%;
    background-size: contain;
    color: #fff;
    height: 312px;
    min-width: 1120px;
    text-align: center;
}
.universityDetail .banner .content[data-v-0f845e1f] {
    margin: 0 auto;
    padding-top: 24px;
    position: relative;
    width: 1120px;
}
.universityDetail .banner .content .back[data-v-0f845e1f] {
    background: hsla(0, 0%, 100%, .1);
    border-radius: 25px;
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 14px;
    font-weight: 700;
    height: 32px;
    line-height: 32px;
    text-align: center;
    width: 72px;
}

.universityDetail .banner .content .back .iconfont[data-v-0f845e1f] {
    display: inline-block;
    font-weight: 400;
    margin-right: 5px;
}
.universityDetail .banner .content .school_logo[data-v-0f845e1f] {
    background: hsla(0, 0%, 100%, .1);
    border-radius: 4px;
    height: 168px;
    padding-top: 84px;
    position: absolute;
    right: 0;
    top: 72px;
    width: 328px;
}
.universityDetail .banner .content .school_logo img[data-v-0f845e1f] {
    display: block;
    height: auto;
    margin: 0 auto;
    max-height: 88px;
    max-width: 280px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: auto;
}

img {
    vertical-align: middle;
}
img {
    border: 0;
}

.universityDetail .banner .content .school_name[data-v-0f845e1f] {
    color: #fff;
    font-size: 34px;
    font-weight: 700;
    height: 48px;
    line-height: 48px;
    margin-top: 24px;
    overflow: hidden;
    text-align: left;
    width: 760px;
}

body[data-v-0f845e1f], dd[data-v-0f845e1f], dl[data-v-0f845e1f], fieldset[data-v-0f845e1f], h1[data-v-0f845e1f], h2[data-v-0f845e1f], h3[data-v-0f845e1f], h4[data-v-0f845e1f], h5[data-v-0f845e1f], h6[data-v-0f845e1f], input[data-v-0f845e1f], legend[data-v-0f845e1f], ol[data-v-0f845e1f], option[data-v-0f845e1f], p[data-v-0f845e1f], td[data-v-0f845e1f], textarea[data-v-0f845e1f], ul[data-v-0f845e1f] {
    margin: 0;
    padding: 0;
}
.universityDetail .banner .content .school_remark[data-v-0f845e1f] {
    color: #fff;
    font-size: 16px;
    line-height: 24px;
    margin-top: 16px;
    text-align: left;
    width: 760px;
}
.universityDetail .title span[data-v-0f845e1f]:after {
    background: #1769fe;
    border-radius: 2px;
    bottom: -10px;
    content: "";
    display: block;
    height: 3px;
    left: 50%;
    position: absolute;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 50%;
}
.universityDetail .title[data-v-0f845e1f] {
    border-bottom: 1px solid #ebebeb;
    color: #333;
    font-size: 0;
    margin: 0 auto 32px;
    padding: 31px 8px 8px;
    width: 1120px;
}
.universityDetail .title span[data-v-0f845e1f] {
    display: inline-block;
    font-size: 16px;
    line-height: 22px;
    position: relative;
}

.universityDetail .list[data-v-0f845e1f] {
    font-size: 0;
    margin: 0 auto;
    width: 1120px;
}

.universityDetail .list .course[data-v-0f845e1f] {
    background: #fff;
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    margin: 0 32px 32px 0;
    position: relative;
    -webkit-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s;
    vertical-align: top;
    width: 352px;
}

.universityDetail .list .course[data-v-0f845e1f]:hover {
    box-shadow: 0 0 12px #ddd;
    transform: translateY(-8px);
}





.universityDetail .list .course .cover[data-v-0f845e1f] {
    background-position: 50%;
    background-size: cover;
    border: solid #efefef;
    border-radius: 4px 4px 0 0;
    border-width: 1px 1px 0;
    height: 200px;
    position: relative;
    width: 352px;
}
.universityDetail .list .course .detail[data-v-0f845e1f] {
    border: 1px solid #efefef;
    border-radius: 0 0 4px 4px;
    border-top: 0 solid #efefef;
    height: 91px;
    padding: 20px 16px;
    position: relative;
    width: 352px;
}
.universityDetail .list .course .detail .name[data-v-0f845e1f] {
    color: #333;
    font-size: 16px;
    font-weight: 700;
    height: 22px;
    line-height: 22px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.universityDetail .list .course .detail .person[data-v-0f845e1f] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    color: #999;
    font-size: 14px;
    justify-content: center;
    line-height: 18px;
    margin: 9px 0 0;
}
.universityDetail .list .course .detail .person .teacher[data-v-0f845e1f] {
    width: 1px;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding-right: 10px;
}
.universityDetail .list .course .detail .person .count[data-v-0f845e1f] {
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.universityDetail .list .course .detail .person .count .iconfont[data-v-0f845e1f] {
    margin-right: 4px;
}

.universityDetail .list .course[data-v-0f845e1f]:nth-of-type(3n) {
    margin-right: 0;
}

</style>