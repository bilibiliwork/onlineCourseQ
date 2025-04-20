
<template>
    <div data-v-0e4b0658 data-v-00b9cfae id="courseDetail" class="app-main-appMain" style="min-height: calc(-278px + 100vh);">
        <div data-v-0e4b0658 data-v-517ad970 class="aboutSingle">
            <div data-v-517ad970 class="banner">
                <div data-v-517ad970 class="meng"></div>
                <div data-v-517ad970 class="con">
                    <img data-v-517ad970 :src="schoolLogo1" alt
                        class="logo">
                    <p data-v-517ad970 class="title f32 c_f">{{ courseDetail.title }}</p>
                    <div data-v-517ad970 class="tip-org-teacher">由{{ courseDetail.schoolName }}组织开设，授课老师为{{  }}等</div>
                    <div data-v-517ad970 style="position: relative;">
                        <p data-v-517ad970 class="select f16 c_f">{{detailTime.vagueTime}}</p>
                        <el-select data-v-517ad970 @change="queryDetailTime" class="classList el-select--medium" v-model="courseTimeId" placeholder>
                            <el-option v-for="item in courseTime" :key="item.id" :label="item.vagueTime"
                                :value="item.id" >
                            </el-option>
                        </el-select>
                    </div>
                    <p data-v-517ad970 class="f16 c_f kksj" style="opacity: 1;">
                        <span data-v-517ad970 class="start-time">开课时间：</span>
                        {{ detailTime.startTime }}
                        <span data-v-517ad970>至{{ detailTime.endTime }}</span>
                    </p>
                    <div data-v-517ad970 class="f16 c_f jrrs df" style="margin-top: 44px;">
                        <span data-v-517ad970 class="entry-count">{{ courseDetail.popularity }}人已报名</span>
                    </div>
                    <router-link :to="'/video/'+this.cid+'/learn'">
                        <button data-v-517ad970 class="join f16 c_3">
                            <span v-if="isEndTimeAfterCurrentTime(detailTime.endTime)">
                            去学习 
                            </span>
                            <span v-if="!isEndTimeAfterCurrentTime(detailTime.endTime)">
                                课程已结束
                            </span>
                        </button>
                    </router-link>
                </div>
            </div>
            <div data-v-517ad970 class="bx">
                <div data-v-517ad970 class="clearfix kcjs p10">
                    <div data-v-517ad970 class="shortInfo">
                        <p data-v-517ad970 class="f34 c_3">课程介绍</p>
                        <div data-v-517ad970 class="short-info-box">
                            <div data-v-517ad970 class="short-info-con">
                                <p data-v-517ad970 class="f14 c_6 lh23">
                                    {{ courseDetail.descr }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div data-v-517ad970 class="video">
                        <img data-v-517ad970
                            src="https://pzwtxdy.oss-cn-beijing.aliyuncs.com/9e628d97d20c6cd434d13156f90ab228.Artboard.png"
                            alt class="bb">
                        <div data-v-517ad970 class="trailer_cover"
                        :style="{ 'background-image': `url('${courseDetail.coverUrl}')` }">
                        </div>
                    </div>
                </div>
                <div data-v-517ad970 class="p10">
                    <div data-v-517ad970 class="studyInfo clearfix">
                        <div data-v-517ad970 class="table-cell">&nbsp;</div>
                        <div data-v-517ad970 class="list list1">
                            <p data-v-517ad970 class="f14 c_9 lh20">开课时间</p>
                            <p data-v-517ad970 class="f16 c_3 lh20">{{ detailTime.startTime }}</p>
                        </div>
                        <div data-v-517ad970 class="table-cell">&nbsp;</div>
                        <div data-v-517ad970 class="list list2">
                            <p data-v-517ad970 class="f14 c_9 lh20">教学时长</p>
                            <p data-v-517ad970 class="f16 c_3 lh20"></p>
                        </div>
                        <div data-v-517ad970 class="table-cell">&nbsp;</div>
                        <div data-v-517ad970 class="list list3">
                            <p data-v-517ad970 class="f14 c_9 lh20">学习投入</p>
                            <p data-v-517ad970 class="f16 c_3 lh20"></p>
                        </div>
                        <div data-v-517ad970 class="table-cell">&nbsp;</div>
                    </div>
                </div>
                <div data-v-517ad970 class="detailInfo w720">
                    <p v-if="courseDetail.prerequisiteKnowledge != null" data-v-517ad970 class="f16 c_3">先修知识</p>
                    <p v-if="courseDetail.prerequisiteKnowledge != null" data-v-517ad970 class="f14 lh23 c_6 text-left">{{ courseDetail.prerequisiteKnowledge }}</p>
                    <p v-if="courseDetail.referenceMaterials != null" data-v-517ad970 class="f16 c_3">参考资料</p>
                    <p v-if="courseDetail.referenceMaterials != null" v-html="courseDetail.referenceMaterials" data-v-517ad970 class="f14 lh23 c_6 text-left reference">
                    </p>
                    <p v-if="courseDetail.detailDesc != null" data-v-517ad970 class="f16 c_3">详细介绍</p>
                    <p v-if="courseDetail.detailDesc != null" data-v-517ad970 class="f14 lh23 c_6 text-left long_intro">
                        <span v-html="courseDetail.detailDesc" class="custom_ueditor_cn_body">
                        </span>
                    </p>
                    <div v-if="courseDetail.detailDesc != null" data-v-517ad970 class="expend">
                        展开
                        <i data-v-517ad970 style="color: #fc4a39;" class="iconfont">&#xe73d;</i>
                    </div>
                </div>
                <div data-v-517ad970 class="detailInfo">
                    <p data-v-517ad970 class="f34 c_3">开课机构</p>
                    <div data-v-517ad970 class="org_list">
                        <div data-v-517ad970 class="scroll">
                            <div data-v-517ad970 class="logo" style="transform: translateX(0px);">
                                <img data-v-517ad970
                                    :src="this.schoolLogo2" alt>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-v-517ad970 class="teacherInfo">
                <p data-v-517ad970 class="f34 c_3">教师团队</p>
                <div data-v-517ad970 class="lists">
                    <div data-v-517ad970 class="scroll">
                        <div v-for="item in courseDetail.teachers" :key="item.tid" data-v-517ad970 class="list" style="transform: translateX(0px);">
                            <div data-v-517ad970 class="head_img"
                            :style="{ 'background-image': `url('${item.avatar}')` }">
                            </div>
                            <div data-v-517ad970>
                                <p data-v-517ad970 index="0name" class="c_18 oe item-desc teacher_name item">
                                    <span data-v-517ad970 class="f18">{{item.name}}</span>
                                </p>
                            </div>
                            <div data-v-517ad970>
                                <p data-v-517ad970 class="teacher_org oe f14 c_9 lh20 item-desc item">
                                    {{item.school}}&nbsp;{{ item.department }}
                                </p>
                            </div>
                            <div data-v-517ad970>
                                <p data-v-517ad970 class="teacher_job oe f14 c_9 lh20 item-desc item">
                                    {{ item.job }}
                                </p>
                            </div>
                            <div data-v-517ad970 class="line"
                                style="margin-left: 10px; margin-right: 10px; width: auto;">
                            </div>
                            <p data-v-517ad970 class="teacher_info f14 c_6 lh20">
                                <span>
                                    {{ item.descr }}
                                </span>
                            </p>
                            <div data-v-517ad970 class="expend">
                                展开
                                <i data-v-517ad970 style="color: #fc4a39;" class="iconfont">&#xe73d;</i>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div data-v-517ad970 class="structure">
                <p data-v-517ad970 class="f34 c_3">课程章节</p>
                <div data-v-517ad970 class="lists">
                    <div v-for="(item,index) in courseDetail.teachPlanVo" :key="item.id"  data-v-517ad970 class="list">
                        <div data-v-517ad970 :class="['chapter', { pointer: item.teachPlanTreeNodes && item.teachPlanTreeNodes.length > 0 }]">
                            <span data-v-517ad970 class="number bm">{{ index+1 }}</span>
                            <span data-v-517ad970 class="name bm ellipsis">{{ item.name }}</span>
                            <i  data-v-517ad970 style="color: #fc4a39;font-size: 20px;" v-if="item.teachPlanTreeNodes != null" class="iconfont arrow bm"> 
                                &#xe73d;
                            </i>
                        </div>
                        <div data-v-517ad970 class="sectionlist">
                            <div v-for="treeNodes in item.teachPlanTreeNodes" :key="treeNodes.id" data-v-517ad970 class="section ellipsis point">
                                <span data-v-517ad970 class="name">{{ treeNodes.name }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-v-517ad970 class="service">
                <p data-v-517ad970 class="f34 c_3">课程服务</p>
                <div data-v-517ad970 class="lists">
                    <div data-v-517ad970 class="scroll">
                        <div data-v-517ad970 class="list" style="transform: translateX(0px);">
                            <div data-v-517ad970 class="price">
                                <span data-v-517ad970 class="f20">免费</span>
                            </div>
                            <p data-v-517ad970 class="f24 c_3" style="width: 55%;white-space: normal;">免费学习</p>
                            <p data-v-517ad970 class="f16 c_6">
                                <i data-v-517ad970 class="iconfont">&#xe602;</i>
                                2025-01-15
                                至
                                2025-07-22

                            </p>
                            <p data-v-517ad970 class="f16 c_6">
                                <i data-v-517ad970 class="iconfont">&#xe604;</i>
                                60 天回顾学习时长
                            </p>
                            <p data-v-517ad970 class="f16 c_6">
                                <i data-v-517ad970 class="iconfont">&#xe60a;</i>
                                80 小节
                            </p>
                                
                            <div data-v-517ad970 class="line"></div>
                            <div data-v-517ad970 class="blockheight"></div>
                            <button data-v-517ad970 class="join">
                                去学习
                            </button>
                        </div>
                    </div>
                </div>
                <p data-v-517ad970 class="f34 c_3 outzs">认证证书</p>
            </div>
            <div data-v-517ad970 class="qwrzzs">
                <div data-v-517ad970 class="qwrzzsw">
                    <div data-v-517ad970 class="zs">
                        <!-- <p data-v-517ad970 class="f34 c_3 inzs">认证证书</p> -->
                        <div data-v-517ad970 class="zsbg">
                            <div data-v-517ad970 class="detail clearfix">
                                <div data-v-517ad970 class="fr">
                                    <p data-v-517ad970>
                                        <i data-v-517ad970 style="color: #c9c9f4;" class="iconfont">&#xe6dc;</i>
                                        学堂在线和高校共同颁发 、导师签名认证，是对您学习成果的认可
                                    </p>
                                    <p data-v-517ad970>
                                        <i data-v-517ad970 style="color: #c9c9f4;" class="iconfont">&#xe6dc;</i>
                                        可同时获得精美纸质证书*和电子版证书，支持防伪查询
                                    </p>
                                    <p data-v-517ad970>
                                        <i data-v-517ad970 style="color: #c9c9f4;" class="iconfont">&#xe6dc;</i>
                                        在求职求学中，希望帮助你以更专业的知识获得面试青睐
                                    </p>
                                    <p data-v-517ad970>
                                        <i data-v-517ad970 style="color: #c9c9f4;" class="iconfont">&#xe6dc;</i>
                                        在个人提升的路上，希望帮助你成为终身学习的践行者
                                    </p>
                                    <p data-v-517ad970 class="f12">*注：证书样式排版等不定时升级，以收到实物为准</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import _axios from '@/axios/myaxios'

/* eslint-disable */
const options = {
    data() {
        return {
            courseTime: [],
            courseTimeId: "",
            cid:0,
            courseDetail:{},
            schoolLogo1:"",
            schoolLogo2:"",
            detailTime:{}
        }
    },
    methods: {
        
        queryCourseTime(){
            _axios.get("/course-time/"+this.cid).then(resp => {
                this.courseTime = resp.data.data
                this.detailTime = this.courseTime[0]
            })
        },
        queryDetailTime(){
            _axios.get("/course-time/one/"+this.courseTimeId).then(resp => {
                this.detailTime = resp.data.data
                this.isEndTimeAfterCurrentTime(this.detailTime.endTime)
            })
        },
        courseOutline(){
            this.$nextTick(() => {
                var courseExpend = document.querySelectorAll('.chapter.pointer')
                for(var i=0;i<courseExpend.length;i++){
                    courseExpend[i].addEventListener('click',function(){
                        this.nextElementSibling.classList.toggle('show')
                        if(this.nextElementSibling.classList.contains('show')){
                            this.lastElementChild.innerHTML = '&#xe731;'
                        }else{
                            this.lastElementChild.innerHTML = '&#xe73d;'
                        }
                        
                    })
                }
            })
        },
        queryCourseDetail(){
            _axios.get('/course/detail/'+this.cid).then(resp => {
                this.courseDetail = resp.data.data
                this.schoolLogo1 = this.courseDetail.school.logo1
                this.schoolLogo2 = this.courseDetail.school.logo2
                
            })
        },
        checkHeightAndToggle() {
            // document.addEventListener('DOMContentLoaded',function(){
            this.$nextTick(() => {
                var longIntro = document.querySelector('.long_intro span')
                var teacherInfo = document.querySelectorAll('.teacher_info span')
                if(longIntro && longIntro.offsetHeight < 114){
                    longIntro.nextElementSibling.style.display = 'none'
                }
                for(var i=0;i<teacherInfo.length;i++){
                    if(teacherInfo[i] && teacherInfo[i].offsetHeight < 140){
                        teacherInfo[i].parentNode.nextElementSibling.style.display = 'none'
                    }
                    
                }
            })
        },
        expandDesc(){
            this.$nextTick(() => {
                var expend = document.querySelectorAll(".expend");
                for(var i=0;i<expend.length;i++){
                    expend[i].addEventListener('click', function () {
                        this.classList.toggle('closeqq');
                        this.previousElementSibling.classList.toggle('expend')
                        this.previousElementSibling.classList.toggle('expends')
                        var icon = this.querySelector('i');
                        if (this.classList.contains('closeqq')) {
                            icon.innerHTML = '&#xe731;'; // 收起图标
                            this.firstChild.nodeValue = '收起';
                        } else {
                            icon.innerHTML = '&#xe73d;'; // 展开图标
                            this.firstChild.nodeValue = '展开';
                        }
                    });
                }
            });
        },
        isEndTimeAfterCurrentTime(endTime) {
                const newEndTime = new Date(endTime);
                const currentTime = new Date();
                return newEndTime > currentTime;
        }
    },
    mounted() {
        this.cid = this.$route.params.cid
        this.queryCourseTime()
        this.queryCourseDetail()
        
    },
    updated() {
        this.expandDesc()
        this.checkHeightAndToggle()
        this.courseOutline()
    },
}
export default options;
</script>

<style>

.aboutSingle .classList .el-input__inner {
    background: transparent;
    border-color: #fff !important;
    color: transparent;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    padding-right: 43px;
}


.aboutSingle .classList .el-input__suffix {
    right: 12px;
}
.el-input__suffix {
    height: 100%;
    pointer-events: none;
    right: 5px;
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
}
.el-input__prefix, .el-input__suffix {
    position: absolute;
    text-align: center;
    top: 0;
}
.el-input__prefix, .el-input__suffix {
    color: #c0c4cc;
}

.el-input__suffix-inner {
    pointer-events: all;
}

.aboutSingle .classList .el-icon-arrow-up {
    color: #fff !important;
    /* font-size: 32px !important; */
    position: relative;
    transform: rotate(0) !important;
    transition: none;
    width: 32px;
}

.el-select .el-input .el-select__caret {
    color: #c0c4cc;
    cursor: pointer;
    font-size: 14px;
    transform: rotate(180deg);
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s, -webkit-transform .3s;
}
.el-input--medium .el-input__icon {
    line-height: 36px;
}
.el-input__icon {
    line-height: 40px;
    text-align: center;
    width: 25px;
}
.el-input__icon, .el-input__prefix {
    height: 100%;
    transition: all .3s;
}

.aboutSingle .classList .el-icon-arrow-up.is-reverse {
    top: -1px;
    -webkit-transform: rotate(-180deg) !important;
    transform: rotate(-180deg) !important;
}

.el-select .el-input .el-select__caret.is-reverse {
    -webkit-transform: rotate(0);
    transform: rotate(0);
}

</style>
<style scoped>




[class*=" el-icon-"], [class^=el-icon-] {
    font-family: element-icons !important;
    speak: none;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    line-height: 1;
    text-transform: none;
    vertical-align: baseline;
}



.aboutSingle[data-v-517ad970] {
    font-weight: 400;
    min-width: 320px;
    overflow: hidden;
    padding: 0;
    width: 100%;
}

.aboutSingle .banner[data-v-517ad970] {
    background: url(https://pzwtxdy.oss-cn-beijing.aliyuncs.com/course_new.png) no-repeat 50%;
    background-size: cover;
    min-height: 366px;
    position: relative;
    width: 100%;
    z-index: 99;
}

.aboutSingle .banner .meng[data-v-517ad970] {
    background: rgba(0, 0, 0, .5);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
}

.aboutSingle .banner .con[data-v-517ad970] {
    margin: auto;
    max-width: 1202px;
    padding: 55px 16px 41px;
    position: relative;
    z-index: 2;
}

.aboutSingle .banner .con .logo[data-v-517ad970] {
    max-height: 60px;
    max-width: 220px;
    position: absolute;
    right: 16px;
    top: 52px;
    z-index: 3;
}
img {
    vertical-align: middle;
}
img {
    border: 0;
}

.aboutSingle .banner .con .title[data-v-517ad970] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    max-width: 670px;
    position: relative;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
}

.aboutSingle .c_f[data-v-517ad970] {
    color: #fff;
}
.aboutSingle .f32[data-v-517ad970] {
    font-size: 32px;
    line-height: 1.4;
}
body[data-v-517ad970], dd[data-v-517ad970], dl[data-v-517ad970], fieldset[data-v-517ad970], h1[data-v-517ad970], h2[data-v-517ad970], h3[data-v-517ad970], h4[data-v-517ad970], h5[data-v-517ad970], h6[data-v-517ad970], input[data-v-517ad970], legend[data-v-517ad970], ol[data-v-517ad970], option[data-v-517ad970], p[data-v-517ad970], td[data-v-517ad970], textarea[data-v-517ad970], ul[data-v-517ad970] {
    margin: 0;
    padding: 0;
}

.aboutSingle .banner .con[data-v-517ad970] .tip-org-teacher {
    color: #fff;
    font-size: 14px;
    margin-top: 12px;
}

.aboutSingle .df[data-v-517ad970] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.aboutSingle .entry-count[data-v-517ad970] {
    margin-right: 24px;
}

.aboutSingle .banner .con .join[data-v-517ad970] {
    background: #fcfcfc;
    border-radius: 6px;
    cursor: pointer;
    padding: 13px 0;
    position: absolute;
    right: 16px;
    text-align: center;
    top: 265px;
    width: 240px;
}


button[data-v-517ad970] {
    background: none;
    border: none;
    outline: none;
    padding: 0;
}
button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
button, html input[type=button], input[type=reset], input[type=submit] {
    -webkit-appearance: button;
    cursor: pointer;
}
button, select {
    text-transform: none;
}
button {
    overflow: visible;
}
button, input, optgroup, select, textarea {
    color: inherit;
    font: inherit;
    margin: 0;
}

.aboutSingle .banner .con .select[data-v-517ad970] {
    left: 15px;
    overflow: hidden;
    position: absolute;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    top: 10px;
    white-space: nowrap;
    width: 133px;
}

.aboutSingle .f16[data-v-517ad970] {
    font-size: 16px;
    line-height: 1.4;
}


.aboutSingle .classList {
    display: block;
    margin-bottom: 12px;
    margin-top: 46px;
    width: 196px;
}
.el-select {
    display: inline-block;
    position: relative;
}

.el-select>.el-input {
    display: block;
}
.el-input {
    font-size: 14px;
    position: relative;
}

.aboutSingle .bx[data-v-517ad970] {
    margin: auto;
    max-width: 1202px;
    padding: 0 20px;
}

.aboutSingle .p10[data-v-517ad970] {
    padding: 0 10px;
}

.aboutSingle .kcjs[data-v-517ad970] {
    display: flex;
    margin-top: 64px;
    align-items: stretch;
}
.clearfix {
    zoom: 1;
}

.aboutSingle .shortInfo[data-v-517ad970] {
    display: inline-flex;
    padding-right: 20px;
    width: 50%;
    flex-direction: column;
}

.aboutSingle .c_3[data-v-517ad970] {
    color: #333;
}
.aboutSingle .f34[data-v-517ad970] {
    font-size: 34px;
    line-height: 1.4;
}

.aboutSingle .kcjs .short-info-box[data-v-517ad970] {
    -webkit-box-flex: 1;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex: 1;
    flex: 1;
    height: 1px;
    margin-top: 24px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}

.aboutSingle .kcjs .short-info-box .short-info-con[data-v-517ad970] {
    height: 1px;
    position: relative;
    flex: 1;
    overflow: hidden;
}

.aboutSingle .kcjs .short-info-box .short-info-con p[data-v-517ad970] {
    position: absolute;
}
.aboutSingle .c_6[data-v-517ad970] {
    color: #666;
}
.aboutSingle .lh23[data-v-517ad970] {
    line-height: 23px;
}
.aboutSingle .f14[data-v-517ad970] {
    font-size: 14px;
}

.clearfix:after, .clearfix:before {
    content: " ";
    display: table;
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

.aboutSingle .video[data-v-517ad970] {
    border-radius: 4px;
    padding-left: 20px;
    position: relative;
    width: 50%;
}

.aboutSingle .video .bb[data-v-517ad970] {
    display: block;
    height: auto;
    width: 100%;
}
img {
    vertical-align: middle;
}
img {
    border: 0;
}
.aboutSingle .video .trailer_cover[data-v-517ad970] {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 4px;
    height: 100%;
    left: 20px;
    position: absolute;
    top: 0;
    width: calc(100% - 20px);
    z-index: 1;
}

.aboutSingle .p10[data-v-517ad970] {
    padding: 0 10px;
}

.aboutSingle .studyInfo[data-v-517ad970] {
    background: #f8f8f8;
    border-radius: 4px;
    display: table;
    margin-top: 48px !important;
    padding: 46px 0 42px;
    table-layout: auto;
    width: 100%;
}

.aboutSingle .studyInfo .table-cell[data-v-517ad970] {
    display: table-cell;
}

.aboutSingle .studyInfo .list1[data-v-517ad970] {
    background: url(https://pzwtxdy.oss-cn-beijing.aliyuncs.com/05086da96cc7f66a4c06709f0a910478.new_about_1.png) no-repeat 0 0;
    background-size: 48px;
    padding-left: 64px;
    width: 264px;
}

.aboutSingle .studyInfo .list[data-v-517ad970] {
    display: table-cell;
    height: 47px;
    padding-left: 59px;
}

.aboutSingle .c_9[data-v-517ad970] {
    color: #999;
}
.aboutSingle .lh20[data-v-517ad970] {
    line-height: 20px;
}

.aboutSingle .studyInfo .list .f16[data-v-517ad970] {
    font-weight: 500;
    margin-top: 7px;
}


.aboutSingle .studyInfo .list2[data-v-517ad970] {
    background: url(https://pzwtxdy.oss-cn-beijing.aliyuncs.com/77736526194e75b104830fb0e802ea58.new_about_2%20%281%29.png) no-repeat 4px 3px;
    background-size: 38px 41px;
    width: 239px;
}

.aboutSingle .studyInfo .list3[data-v-517ad970] {
    background: url(https://pzwtxdy.oss-cn-beijing.aliyuncs.com/ea47300947509ece2157010460d3c87c.new_about_3.png) no-repeat 4px 2px;
    background-size: 38px 42px;
    width: 239px;
}

.aboutSingle .w720[data-v-517ad970] {
    margin: auto;
    max-width: 720px;
}

@media screen and (min-width: 720px) {
    .aboutSingle .detailInfo[data-v-517ad970] {
        padding: 0;
    }
}

.aboutSingle .detailInfo[data-v-517ad970] {
    margin-top: 8px;
    text-align: center;
}

.aboutSingle .detailInfo .f16[data-v-517ad970] {
    font-weight: 500;
    margin-top: 40px;
}

.aboutSingle .detailInfo .f14[data-v-517ad970] {
    margin-top: 24px;
}


.text-left[data-v-517ad970] {
    text-align: left;
}

.aboutSingle .long_intro.reference[data-v-517ad970], .aboutSingle .reference.reference[data-v-517ad970] {
    max-height: 138px;
}

.aboutSingle .long_intro[data-v-517ad970], .aboutSingle .reference[data-v-517ad970] {
    max-height: 115px;
    overflow: hidden;
}

.aboutSingle .long_intro.expend[data-v-517ad970], .aboutSingle .reference.expend[data-v-517ad970] {
    max-height: none;
}

.aboutSingle .expend[data-v-517ad970] {
    color: #414a67;
    cursor: pointer;
    /* font-size: 12px; */
    /* line-height: 17px; */
    margin: 16px auto;
}

.aboutSingle .expend .iconfont[data-v-517ad970] {
    display: inline-block;
    font-size: 20px;
    left: 5px;
    position: relative;
    top: -2px;
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    -o-transition: transform .3s;
    transition: transform .3s;
    transition: transform .3s, -webkit-transform .3s;
    vertical-align: middle;
}

@media screen and (min-width: 1197px) {
    .aboutSingle .detailInfo .org_list[data-v-517ad970] {
        width: 1082px;
    }
}
.aboutSingle .detailInfo .org_list[data-v-517ad970] {
    margin: 22px auto 24px;
    position: relative;
    width: 725px;
}
.aboutSingle .detailInfo .logo[data-v-517ad970]:last-child {
    margin-bottom: 80px;
}

.aboutSingle .detailInfo .org_list .logo[data-v-517ad970] {
    margin: 0 auto;
}
.aboutSingle .detailInfo .logo[data-v-517ad970] {
    display: block;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    border: 4px solid #eee;
    justify-content: center;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    height: 135px;
    padding: 30px;
    width: 340px;
}

.aboutSingle .detailInfo .f34[data-v-517ad970] {
    margin-top: 64px;
}

.aboutSingle .detailInfo .logo img[data-v-517ad970] {
    display: block;
    height: auto;
    margin: 0 auto;
    max-height: 100%;
    max-width: 100%;
    width: auto;
}

.aboutSingle .teacherInfo[data-v-517ad970] {
    background: #f8f8f8;
    min-height: 597px;
    padding: 60px 0 40px;
    position: relative;
    text-align: center;
    z-index: 1;
}

.aboutSingle .teacherInfo .f34[data-v-517ad970] {
    margin-bottom: 29px;
}

.aboutSingle .teacherInfo .lists[data-v-517ad970] {
    margin: 0 auto;
    position: relative;
    text-align: center;
    width: 993px;
}

.aboutSingle .teacherInfo .lists .scroll[data-v-517ad970] {
    overflow: hidden;
    padding-bottom: 20px;
    position: relative;
    white-space: nowrap;
}

.aboutSingle .teacherInfo .lists .list[data-v-517ad970]:first-child {
    margin-left: 0;
}
.aboutSingle .teacherInfo .lists .list[data-v-517ad970] {
    background: #fff;
    border-radius: 9px;
    display: inline-block;
    margin: 0 16px;
    min-height: 400px;
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    -o-transition: transform .3s;
    transition: transform .3s;
    transition: transform .3s, -webkit-transform .3s;
    vertical-align: top;
    width: 352px;
}

.aboutSingle .teacherInfo .lists .list .head_img[data-v-517ad970] {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    display: block;
    height: 64px;
    margin: 24px auto 0;
    width: 64px;
}

.aboutSingle .teacherInfo .lists .list .oe[data-v-517ad970] {
    cursor: pointer;
    overflow: hidden;
    padding: 0 16px;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: keep-all;
}
.aboutSingle .teacherInfo .lists .teacher_name[data-v-517ad970] {
    font-size: 0;
}
.aboutSingle .c_18[data-v-517ad970] {
    color: #181818;
}

.aboutSingle .teacherInfo .lists .list .f18[data-v-517ad970] {
    margin: 8px 0 6px;
}
.aboutSingle .teacherInfo .lists .teacher_name span[data-v-517ad970] {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: keep-all;
}
.aboutSingle .f18[data-v-517ad970] {
    font-size: 18px;
    line-height: 1.4;
}

.aboutSingle .teacherInfo .teacher_job[data-v-517ad970], .aboutSingle .teacherInfo .teacher_org[data-v-517ad970] {
    padding: 0 16px;
    white-space: normal;
    word-break: break-word;
}
.aboutSingle .teacherInfo .teacher_job[data-v-517ad970], .aboutSingle .teacherInfo .teacher_org[data-v-517ad970] {
    padding: 0 16px;
    white-space: normal;
    word-break: break-word;
}

.aboutSingle .teacherInfo .lists .list .line[data-v-517ad970] {
    background: #ebebeb;
    height: 1px;
    margin-bottom: 16px;
    margin-top: 24px;
    width: 100%;
}

.aboutSingle .teacherInfo .lists .list .teacher_info[data-v-517ad970] {
    height: 143px;
    overflow: hidden;
    padding: 0 20px 0 24px;
    text-align: left;
    white-space: normal;
}

.aboutSingle .teacherInfo .lists .list .teacher_info.expends[data-v-517ad970] {
    height: auto;
}

.aboutSingle .teacherInfo .lists .list.big[data-v-517ad970] {
    background: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    max-width: 752px;
    width: 100%;
}

.aboutSingle .structure[data-v-517ad970] {
    margin: 80px auto 84px;
    width: 800px;
}

.aboutSingle .structure .f34[data-v-517ad970] {
    margin-bottom: 51px;
    text-align: center;
}
.aboutSingle .structure .lists[data-v-517ad970] {
    cursor: default;
    user-select: none;
}
.aboutSingle .structure .lists .list .chapter.pointer[data-v-517ad970] {
    cursor: pointer;
}

.aboutSingle .structure .lists .list .chapter.pointer:hover .arrow[data-v-517ad970], .aboutSingle .structure .lists .list .chapter.pointer:hover .name[data-v-517ad970], .aboutSingle .structure .lists .list .chapter.pointer:hover .number[data-v-517ad970] {
    color: #1769fe;
}


.aboutSingle .structure .lists .list .chapter[data-v-517ad970] {
    border-bottom: 1px solid #ebebeb;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 0;
    line-height: 71px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.aboutSingle .structure .lists .list .chapter .number[data-v-517ad970] {
    color: #c8c8c8;
    font-size: 40px;
    padding: 0 26px 0 15px;
    text-align: right;
    width: 86px;
}
.aboutSingle .structure .bm[data-v-517ad970] {
    display: inline-block;
    vertical-align: middle;
}

.aboutSingle .structure .lists .list .chapter .name[data-v-517ad970] {
    color: #333;
    font-size: 18px;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}

.aboutSingle .structure .ellipsis[data-v-517ad970] {
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.aboutSingle .structure .lists .list .chapter .arrow[data-v-517ad970] {
    color: #999;
    font-size: 14px;
    padding: 0 40px 0 20px;
}


.aboutSingle .structure .lists .list .sectionlist.show[data-v-517ad970] {
    height: auto;
}
.aboutSingle .structure .lists .list .sectionlist[data-v-517ad970] {
    height: 0;
    overflow: hidden;
    -webkit-transform: height 1s;
    transform: height 1s;
}
.show {
    display: block !important;
}

.aboutSingle .structure .lists .list .section[data-v-517ad970] {
    color: #333;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    line-height: 52px;
    margin-left: 63px;
    padding-right: 40px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.aboutSingle .structure .lists .list .section .name[data-v-517ad970] {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
}
.aboutSingle .structure .lists .list .point[data-v-517ad970]:before {
    background: #cbcbcb;
    border-radius: 50%;
    content: "";
    display: inline-block;
    height: 8px;
    margin-right: 20px;
    vertical-align: middle;
    width: 8px;
}


.aboutSingle .service[data-v-517ad970] {
    background: url(https://onlinecourseweb.oss-cn-beijing.aliyuncs.com/20e3f870ee7b813223c4148a4d8177a6.bg.png) #f8f8f8 no-repeat;
    background-position: calc(50% + 430px) 100%;
    background-size: 700px 679px;
    margin-top: 84px;
    padding: 76px 0 52px;
}

.aboutSingle .service .f34[data-v-517ad970] {
    text-align: center;
}

@media screen and (min-width: 1197px) {
    .aboutSingle .service .lists[data-v-517ad970] {
        width: 1155px;
    }
}
.aboutSingle .service .lists[data-v-517ad970] {
    font-size: 0;
    margin: auto;
    padding: 52px 0 80px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: 757px;
}

.aboutSingle .service .scroll[data-v-517ad970] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    overflow: hidden;
    white-space: nowrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.aboutSingle .service .lists .list[data-v-517ad970]:first-child {
    margin-left: 0;
}
.aboutSingle .service .lists .list[data-v-517ad970] {
    background: #fff;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .06);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .06);
    min-height: 530px;
    width: 350px;
    -ms-flex-negative: 0;
    border-radius: 4px;
    flex-shrink: 0;
    margin: 0 24px;
    padding: 24px 24px 40px;
    position: relative;
    text-align: left;
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    -o-transition: transform .3s;
    transition: transform .3s;
    transition: transform .3s, -webkit-transform .3s;
}

.aboutSingle .service .lists .list .price[data-v-517ad970] {
    color: #999;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
;
    height: 55px;
    line-height: 28px;
    position: absolute;
    right: -9px;
    text-align: right;
    top: 17px;
    width: 155px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 26px 10px;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}

.aboutSingle .f20[data-v-517ad970] {
    font-size: 20px;
    line-height: 1.4;
}

.aboutSingle .service .lists .c_3[data-v-517ad970] {
    font-weight: 500;
    margin-bottom: 28px;
}

.aboutSingle .service .lists .c_6[data-v-517ad970] {
    margin-bottom: 16px;
}

.aboutSingle .service .lists .iconfont[data-v-517ad970] {
    margin-right: 8px;
}

.aboutSingle .service .lists .iconfont[data-v-517ad970] {
    margin-right: 8px;
}

.aboutSingle .service .blockheight[data-v-517ad970] {
    min-height: 229px;
    padding-bottom: 42px;
}

.aboutSingle .service .lists .join[data-v-517ad970] {
    background: #fff;
    border: 1px solid #ff9243;
    border-radius: 4px;
    bottom: 40px;
    color: #ff9243;
    cursor: pointer;
    display: block;
    font-size: 16px;
    left: 40px;
    line-height: 1.1;
    margin: auto;
    min-height: 40px;
    padding: 5px;
    position: absolute;
    text-align: center;
    white-space: normal;
    width: 270px;
    word-break: break-word;
}

.aboutSingle .service .lists .join[data-v-517ad970]:hover{
    background: #ff9243;
    color: #fff;
}

.aboutSingle .f24[data-v-517ad970] {
    font-size: 24px;
    line-height: 1.4;
}

.aboutSingle .service .lists .line[data-v-517ad970] {
    background: #ebebeb;
    height: 1px;
    margin-bottom: 19px;
    margin-top: 15px;
    width: 100%;
}

@media screen and (min-width: 900px) {
    .aboutSingle .outzs[data-v-517ad970] {
        display: block;
    }
}

.aboutSingle .qwrzzs[data-v-517ad970] {
    background: #f8f8f8;
}

.aboutSingle .qwrzzs .qwrzzsw[data-v-517ad970] {
    margin: 0 auto;
    padding: 0 16px 40px;
    position: relative;
    text-align: center;
    width: 1202px;
}

.aboutSingle .qwrzzs .qwrzzsw .zs[data-v-517ad970] {
    background: #333d60;
    border-radius: 4px;
    padding-right: 24px;
    position: relative;
}

.aboutSingle .qwrzzs .qwrzzsw .zs .zsbg[data-v-517ad970] {
    background: url(https://onlinecourseweb.oss-cn-beijing.aliyuncs.com/74c838848084470b262c7005942ec825.meijia.png) no-repeat 100% 100%;
    background-origin: content-box;
    background-size: 514.5px 734px;
}

.aboutSingle .qwrzzs .qwrzzsw .zs .zsbg .detail[data-v-517ad970] {
    background: url(https://onlinecourseweb.oss-cn-beijing.aliyuncs.com/bfc6756370ffcd75edda2f54f169c3c8.hua.png) no-repeat -401px bottom;
    background-size: 673px 605px;
    color: #e5e5e5;
    font-size: 16px;
    padding: 24px 478px 24px 0;
}
.aboutSingle .qwrzzs .qwrzzsw .zs .zsbg .detail .fr[data-v-517ad970] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 402px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}
.fr {
    float: right;
}
.aboutSingle .qwrzzs .qwrzzsw .zs .zsbg .detail p[data-v-517ad970] {
    line-height: 22px;
    margin-bottom: 8px;
    max-width: 535px;
    padding-left: 19px;
    position: relative;
    text-align: left;
}

.aboutSingle .qwrzzs .qwrzzsw .zs .zsbg .detail p .iconfont[data-v-517ad970] {
    color: #ffd781;
    display: inline-block;
    font-size: 16px;
    left: 0;
    position: absolute;
    /* top: 2px; */
    /* transform: rotate(-45deg); */
    vertical-align: top;
}

.aboutSingle .qwrzzs .qwrzzsw .zs .zsbg .detail .fr p[data-v-517ad970]:nth-of-type(n+2) {
    margin-top: 22px;
}
.aboutSingle .qwrzzs .qwrzzsw .zs .zsbg .detail .f12[data-v-517ad970] {
    font-size: 12px;
}



</style>