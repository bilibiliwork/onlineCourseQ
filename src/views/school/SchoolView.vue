<template>
    <div data-v-0e4b0658 data-v-00b9cfae class="app-main_ appMain" style="min-height: calc(-278px + 100vh);">
        <div data-v-0e4b0658 data-v-405c42cb class="universityAll">
            <div data-v-405c42cb class="banner">
                <p data-v-405c42cb class="text"></p>
                <div data-v-405c42cb class="searchOrgCon">
                    <el-input class="searchOrg" placeholder="搜索院校名称" size="medium" v-model="searchSchoolInput">
                        <!-- <el-button slot="append" icon="el-icon-search"></el-button> -->

                    </el-input>
                    <i data-v-405c42cb slot="suffix" class="iconfont" @click="searchSchoolName()">&#xe69c;</i>
                </div>
            </div>
            <p data-v-405c42cb class="title">-开课院校-</p>
            <div data-v-405c42cb class="list">
                <div data-v-405c42cb class="school" v-for="item in schoolList" :key="item.sid">
                    <span data-v-405c42cb class="logo" :style="{ 'background-image': `url('${item.avatar}')` } ">
                    </span>
                    <div data-v-405c42cb style="height: 120px;">
                        <p data-v-405c42cb class="name_cn">{{ item.name }}</p>
                        <p data-v-405c42cb class="name_en">Tsinghua University</p>
                    </div>
                    <p data-v-405c42cb class="count">{{ item.courseCount }}门课程</p>
                    <div data-v-405c42cb class="back">
                        <i data-v-405c42cb :style="{'background-image': `url('${item.avatar}')` } "></i>
                        <p data-v-405c42cb class="remark">
                            <span data-v-405c42cb>{{ item.motto }}</span>
                        </p>
                        <router-link :to="'schoolDetail/'+item.sid">
                            <button data-v-405c42cb class="toDetail">
                                查看详情
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
            <el-pagination data-v-405c42cb @current-change="CurrentChange" :page-size="16" class="pageFix"
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
            count: 10,
            searchSchoolInput: "",
            schoolList:[],
            currentPage: 1
        }
    },
    methods: {
        CurrentChange(val) {
            this.currentPage = val;
            this.queryPage()
        },
        searchSchoolName(){
            this.currentPage = 1
            this.getSchoolList()
        },
        getSchoolList(){
            const params = new URLSearchParams
            params.append("schoolName",this.searchSchoolInput)
            params.append("currentPage",this.currentPage)
            _axios.get("/school/list?"+params).then(resp => {
                if(resp.data.code === 1 ){
                    this.schoolList = resp.data.data.records
                    this.count = resp.data.data.count
                }
            })
        }
    },
    mounted() {
        this.getSchoolList()
    },
}
export default options
</script>
<style>

.universityAll .banner .searchOrgCon[data-v-405c42cb] .searchOrg .el-input__inner {
    background: hsla(0, 0%, 100%, .3);
    border: none;
    border-radius: 20px;
    color: #fff;
    font-size: 16px;
    font-weight: 700;   /*  设置文字粗细程度 */
    height: 42px;
    line-height: 40px;
    padding-right: 50px;
}

.universityAll .el-pager li.active {
    background: #4182fa;
    border-radius: 50% !important;
    color: #fff !important;
}
.universityAll .el-pager li {
    color: #999;
    font-size: 12px;
    height: 2em;
    line-height: 2em;
    margin: 0 8px !important;
    min-width: 2em !important;
    padding: 0;
    text-align: center;
    vertical-align: baseline;
    width: 2em;
}

</style>
<style scoped>

.universityAll .title[data-v-405c42cb] {
    color: #333;
    font-size: 34px;
    font-weight: 700;
    line-height: 48px;
    padding: 40px 0;
    text-align: center;
}

.universityAll .banner[data-v-405c42cb] {
    background: url(https://onlinecourseweb.oss-cn-beijing.aliyuncs.com/73d1ffc4c92f37ad22939986526084c5.banner_bg.jpg) no-repeat 50%;
    background-size: cover;
    color: #fff;
    height: 440px;
    min-width: 1120px;
    padding-top: 158px;
    text-align: center;
}
.universityAll .banner .searchOrgCon[data-v-405c42cb] .searchOrg {
    display: block;
}

.universityAll .banner .searchOrgCon[data-v-405c42cb] {
    margin: 50px auto 0;
    position: relative;
    width: 450px;
}
.universityAll .banner .text[data-v-405c42cb] {
    background: url(https://onlinecourseweb.oss-cn-beijing.aliyuncs.com/f126be9033fda1ab14197938504d845a.banner_text.png) no-repeat;
    background-size: contain;
    height: 138px;
    margin: auto;
    width: 542px;
}
.universityAll .list[data-v-405c42cb] {
    font-size: 0;
    margin: 0 auto;
    width: 1120px;
}
.universityAll .list .school[data-v-405c42cb] {
    background: #fff;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    height: 344px;
    margin: 0 32px 32px 0;
    position: relative;
    vertical-align: top;
    width: 256px;
}
.universityAll .list .school .logo[data-v-405c42cb] {
    background-size: contain;
    display: block;
    height: 120px;
    margin: 24px auto 0;
    width: 120px;
}
.universityAll .list .school .name_cn[data-v-405c42cb] {
    color: #333;
    font-size: 24px;
    font-weight: 700;
    line-height: 33px;
    margin: 16px auto 0;
    max-height: 66px;
    min-height: 33px;
    text-align: center;
    width: 208px;
}
.universityAll .list .school .name_en[data-v-405c42cb] {
    color: #999;
    font-size: 14px;
    line-height: 23px;
    margin: 8px auto 0;
    max-height: 46px;
    min-height: 23px;
    text-align: center;
    width: 208px;
}
.universityAll .list .school .count[data-v-405c42cb] {
    color: #333;
    font-size: 20px;
    line-height: 22px;
    margin-top: 13px;
    text-align: center;
}
.universityAll .list .school .back[data-v-405c42cb] {
    background-color: #1769fe;
    border-radius: 4px;
    display: none;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    text-align: center;
    top: 0;
    width: 100%;
    z-index: 1;
}

.universityAll .banner .searchOrgCon .iconfont[data-v-405c42cb] {
    color: #fff;
    cursor: pointer;
    font-size: 24px;
    height: 100%;
    line-height: 42px;
    margin-right: 7px;
    position: absolute;
    right: 10px;
    top: 0;
}
.universityAll .list .school .back i[data-v-405c42cb] {
    background-size: contain;
    display: block;
    height: 300px;
    left: 37px;
    opacity: .08;
    position: absolute;
    top: -86px;
    width: 300px;
    z-index: 2;
}
.universityAll .list .school .back .remark[data-v-405c42cb] {
    color: #fff;
    font-size: 0;
    height: 200px;
    line-height: 50px;
    margin: 27px auto 0;
    padding-top: 100px;
    text-align: center;
    width: 156px;
    z-index: 3;
}
.universityAll .list .school .back .remark span[data-v-405c42cb] {
    display: inline-block;
    font-size: 36px;
    position: relative;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    vertical-align: middle;
    width: 100%;
    z-index: 4;
}
.universityAll .list .school .back .toDetail[data-v-405c42cb] {
    background: #fff;
    border: none;
    border-radius: 4px;
    color: #1769fe;
    cursor: pointer;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    margin: 27px auto 0;
    outline: none;
    position: relative;
    text-align: center;
    width: 120px;
    z-index: 3;
}
.universityAll .list .school .back .remark span[data-v-405c42cb]:before{
    color: #fff;
    content: "\201c";
    font-size: 48px;
    left: -31px;
    position: absolute;
    top: -16px;
    z-index: 5;
}
.universityAll .list .school .back .remark span[data-v-405c42cb]:after{
    color: #fff;
    bottom: -48px;
    content: "\201D";
    font-size: 48px;
    position: absolute;
    right: -31px;
    z-index: 5;
}
.universityAll .list .school:hover .back[data-v-405c42cb] {
    display: block;
}
.universityAll .pageFix[data-v-405c42cb] {
    margin: 32px 0 64px;
    width: 100%;
}

.universityAll .el-pagination {
    text-align: center;
}
</style>