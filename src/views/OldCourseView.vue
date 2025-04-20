<template>
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
                                <span data-courseSchool="全部" data-v-5e0fd50b class="t3 active">全部</span>
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
                                <img data-v-5e0fd50b
                                    :src="item.coverUrl" alt
                                    class>
                                <span data-v-5e0fd50b></span>
                                <div data-v-5e0fd50b class="hover"></div>
                            </div>
                            <div data-v-5e0fd50b class="rightcon">
                                <p data-v-5e0fd50b class="title">
                                    <span data-v-5e0fd50b class="titletext">{{ item.title  }}</span>
                                <div data-v-5e0fd50b data-v-390af96e class="xt-tag"></div>
                                </p>
                                <p data-v-5e0fd50b class="teacher">
                                    <span data-v-5e0fd50b class="teacher_con">
                                        <span data-v-5e0fd50b>代方梅&nbsp;史文文</span>
                                    </span>
                                    <span data-v-5e0fd50b class="org_con">
                                        <i data-v-5e0fd50b class="iconfont"
                                            style="font-size: 16px; position: relative;top: -1px;">&#xe661;</i>
                                        <span style="margin-left: 3px;" data-v-5e0fd50b>{{ item.schoolName }}</span>
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
                    <el-pagination 
                     data-v-5e0fd50b class="pageFix" 
                     layout="prev, pager, next" 
                     @current-change="CurrentChange"
                     :page-size="10"
                     :total="count">
                    </el-pagination>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import _axios from '@/axios/myaxios';


const options={
    data:function() {
      return {
        courseStatus:0,
        courseType:0,
        courseOrPlan:0,
        courseSchool:"",
        currentPage:1,
        courseList:[],
        planList:[],
        count:0,
        searchName:""
      }
    },
    methods: {
        CurrentChange(val){
            this.currentPage = val;
            this.queryPage()
        },
        queryPage(){
            const param = new URLSearchParams
            param.append("courseStatus",this.courseStatus)
            param.append("courseType",this.courseType)
            param.append("courseSchool",this.courseSchool)
            param.append("currentPage",this.currentPage)
            param.append("searchName",this.searchName)
            _axios.get("/course/all?"+param).then(resp => {
                this.courseList = resp.data.data.records
                this.count = resp.data.data.count
            })

        },
        changeSpanStatus() {
        const typeCons = document.querySelectorAll(".typeCon");
        const spans = document.querySelectorAll("span.t3");

        spans.forEach(span => {
            span.addEventListener('click', () => { 
                const spanTree = span.parentNode.querySelectorAll('span.t3');
                spanTree.forEach(s => s.classList.remove('active'));
                span.classList.add('active');
                if (typeCons[0].contains(span)) {
                    this.courseStatus = span.getAttribute('data-courseStatus');
                } else if (typeCons[1].contains(span)) {
                    this.courseType = span.getAttribute('data-courseType');
                } else if (typeCons[2].contains(span)) {
                    this.courseOrPlan = span.getAttribute('data-courseOrPlan');
                } else if (typeCons[3].contains(span)) {
                    this.courseSchool = span.getAttribute('data-courseSchool');
                }
                this.queryPage();
            });
        });
    }
    },
    mounted() {
        this.searchName = this.$store.state.searchName
        this.changeSpanStatus()
        this.queryPage()
    },


}
export default options
</script>
<style>

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