<template>
    <div data-v-6c0cdb3a class="myCourseTabBox">
        <div data-v-6c0cdb3a data-v-412cf952 class="singleCourseWrap">
            <div data-v-412cf952 class="singleCourseMin">
                <div data-v-412cf952 class="singleCourseBox">
                    <div data-v-412cf952 class="singleCourseMin">
                        <div data-v-412cf952 data-v-f8f8f73a>
                            <div v-for="item in myCourse" :key="item.id" data-v-f8f8f73a class="singleCourse">
                                <router-link :to="'/video/'+item.id+'/learn'">
                                    <div data-v-f8f8f73a class="courseLeft">
                                        <div data-v-f8f8f73a class="imgBox">
                                            <img data-v-f8f8f73a :src="item.coverUrl">
                                        </div>
                                    </div>
                                    <div data-v-f8f8f73a class="courseCenter">
                                        <div data-v-f8f8f73a class="center1">
                                            <span data-v-f8f8f73a
                                                class="center1-name">{{ item.title }}（{{ item.vagueTime }}）</span>
                                            <i data-v-f8f8f73a class="iconfongt refund_icon_mobile"></i>
                                        </div>
                                        <div data-v-f8f8f73a class="center2">
                                            <div data-v-f8f8f73a class="blueblue">免费学习</div>
                                            <div data-v-f8f8f73a class="courseRight">
                                                <div data-v-f8f8f73a class="btn">
                                                    <i data-v-f8f8f73a class="iconfont"></i>
                                                    &nbsp;开始学习
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-f8f8f73a class="center3">
                                            <div data-v-f8f8f73a class="tip">
                                                {{ item.endTime }}结课,可回顾学习
                                                <span>{{ item.day }}</span>
                                                天
                                                <span>{{ item.hour }}</span>
                                                时
                                                <span>{{ item.minutes }}</span>
                                                分
                                            </div>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import _axios from '@/axios/myaxios';

const options = {
    data () {
        return {
            myCourse:[]
        }
    },
    methods: {
        getMyCourse(){
            _axios.get("/user-course/user/current").then(resp => {
                if(resp.data.code == 1){
                    this.myCourse = resp.data.data
                }
            })
        }
        
    },
    mounted() {
        this.getMyCourse()
    },

}
export default options
</script>
<style>
@media screen and (min-width: 630px) {
    .singleCourse:hover .center1 .center1-name[data-v-f8f8f73a] {
            color: #1769fe !important;
        }
}

</style>
<style scoped>


a {
    text-decoration: none;
}

@media screen and (min-width: 630px) {
    .singleCourse[data-v-f8f8f73a]:hover {
        background: #fff;
        border-radius: 4px;
        -webkit-box-shadow: 0 2px 14px 0 rgba(0, 0, 0, .1);
        box-shadow: 0 2px 14px 0 rgba(0, 0, 0, .1);
        z-index: 1;
    }
}

.myCourseBox .myCourseTabBox {
    padding-top: 12px;
    position: relative;
}
.singleCourseWrap {
    min-height: 560px;
    position: relative;
}
.singleCourseWrap .singleCourseBox .singleCourseMin {
    min-height: 460px;
}
.singleCourse[data-v-f8f8f73a] {
    border-radius: 4px;
    cursor: pointer;
    height: 170px;
    margin: 12px auto;
    overflow: hidden;
    padding-left: 280px;
    padding-right: 30px;
    padding-top: 20px;
    position: relative;
    -webkit-transition: -webkit-box-shadow .4s;
    transition: -webkit-box-shadow .4s;
    -o-transition: box-shadow .4s;
    transition: box-shadow .4s;
    transition: box-shadow .4s, -webkit-box-shadow .4s;
    width: 100%;
}
.singleCourse .courseLeft[data-v-f8f8f73a] {
    height: 150px;
    left: 30px;
    overflow: hidden;
    padding-bottom: 20px;
    position: absolute;
    top: 20px;
    width: 230px;
}
.singleCourse .courseLeft .imgBox[data-v-f8f8f73a] {
    border: 1px solid #e4e7ed;
    border-radius: 5px;
    height: 100%;
    overflow: hidden;
    position: relative;
    width: 100%;
}
.singleCourse .courseLeft .imgBox img[data-v-f8f8f73a] {
    height: 100%;
    width: 100%;
}
.singleCourse .courseCenter[data-v-f8f8f73a] {
    height: 130px;
    position: relative;
}
.singleCourse .courseCenter .center1[data-v-f8f8f73a] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
}
.singleCourse .courseCenter .center1 .center1-name[data-v-f8f8f73a] {
    -webkit-box-flex: 1;
    color: #333;
    -ms-flex: 1;
    flex: 1;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    max-height: 44px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: normal;
}
.refund_icon_mobile[data-v-f8f8f73a] {
    display: none;
}
.singleCourse .courseCenter .center2[data-v-f8f8f73a] {
    font-size: 0;
    min-height: 40px;
    padding: 20px 0;
    position: relative;
}
.singleCourse .courseCenter .center2 .blueblue[data-v-f8f8f73a] {
    background: #eef5ff;
    border: 1px solid #1769fe;
    border-radius: 13px;
    color: #4f8bfa;
    display: inline-block;
    font-size: 12px;
    height: 20px;
    line-height: 18px;
    max-width: 150px;
    min-width: 90px;
    overflow: hidden;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.singleCourse .courseRight[data-v-f8f8f73a] {
    bottom: 50%;
    position: absolute;
    right: 0;
    transform: translateY(50%);
}
.singleCourse .courseRight .btn[data-v-f8f8f73a] {
    background: #1769fe;
    border: 1px solid #1769fe;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    height: 32px;
    line-height: 32px;
    padding: 0;
    text-align: center;
    width: 120px;
}
.singleCourse .courseRight .btn i[data-v-f8f8f73a] {
    display: none;
    font-size: 14px;
}
.singleCourse .courseCenter .center3[data-v-f8f8f73a] {
    bottom: 0;
    color: #999;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
;
    font-size: 14px;
    left: 0;
    position: absolute;
    width: 100%;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.singleCourse .tip[data-v-f8f8f73a] {
    color: #b1b1b1;
}


</style>