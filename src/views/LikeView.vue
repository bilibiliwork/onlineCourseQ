<template>
    <div data-v-0cb8b7a8 class="praWrap">
        <div class="praBox">
            <div data-v-ea416b8a v-for="item in myCommentVoList" :key="item.id" class="singleModule">
                <router-link :to="'/video/' + item.courseId + '/learn/discuss/' + item.id" >
                    <div data-v-ea416b8a class="singleTitle">{{ item.courseName }}/{{ item.chapter }}/{{ item.title }}
                    </div>
                </router-link>
                <div data-v-ea416b8a class="singleInfo clearfix">
                    <div data-v-ea416b8a class="infoLeft">
                        <div data-v-ea416b8a>
                            <i data-v-ea416b8a class="iconfont">&#xe854;</i>
                            &nbsp;时间：{{item.createTime}}
                        </div>
                        <div data-v-ea416b8a>
                            <i data-v-ea416b8a class="iconfont">&#xe605;</i>
                            &nbsp;发布于：{{ item.courseName }}
                        </div>
                    </div>
                    <div data-v-ea416b8a class="infoRight">
                        <div data-v-ea416b8a>
                            <i data-v-ea416b8a class="iconfont">&#xe651;</i>
                            &nbsp;0
                        </div>
                        <div data-v-ea416b8a>
                            <i data-v-ea416b8a class="iconfont">&#xe8b9;</i>
                            &nbsp;{{ item.commentCount }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import _axios from '@/axios/myaxios';


export default {
    data () {
        return {
            myCommentVoList:[]
        }
    },
    methods: {
        getMyComment(){
            _axios.get("/comment/userLike").then(resp => {
                if(resp.data.code == 1){
                    this.myCommentVoList = resp.data.data
                }
            })
        }
    },
    mounted() {
        this.getMyComment()
    },
}
</script>
<style scoped>
.praWrap {
    min-height: 562px;
    position: relative;
}


.praWrap .pubBox {
    min-height: 490px;
}
.singleModule[data-v-ea416b8a] {
    border-bottom: 1px solid rgba(207, 207, 207, 0.31);
    min-height: 100px;
}
.singleModule[data-v-ea416b8a] {
    border-bottom: 1px solid hsla(0, 0%, 81%, .31);
    min-height: 100px;
}

.singleModule .singleTitle[data-v-ea416b8a] {
    color: rgb(51, 51, 51);
    font-size: 16px;
    font-weight: 500;
    height: 58px;
    line-height: 58px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
}

.singleModule .singleTitle[data-v-ea416b8a] {
    color: #333;
    font-size: 16px;
    font-weight: 500;
    height: 58px;
    line-height: 58px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
}
.singleModule .singleInfo[data-v-ea416b8a] {
    color: rgb(153, 153, 153);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    min-height: 18px;
}
.singleModule .singleInfo[data-v-ea416b8a] {
    color: #999;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    min-height: 18px;
}
.clearfix {
    zoom: 1;
}

.singleModule .singleInfo .infoLeft[data-v-ea416b8a] {
    float: left;
    overflow: hidden;
}
.singleModule .singleInfo .infoLeft[data-v-ea416b8a] {
    float: left;
    overflow: hidden;
}

.singleModule .singleInfo .infoLeft div[data-v-ea416b8a]:first-of-type {
    margin-right: 20px;
}
.singleModule .singleInfo .infoLeft div[data-v-ea416b8a]:first-of-type {
    margin-right: 20px;
}
.singleModule .singleInfo .infoLeft div[data-v-ea416b8a] {
    float: left;
}
.singleModule .singleInfo .infoLeft div[data-v-ea416b8a] {
    float: left;
}
.singleModule .singleInfo .infoLeft div i[data-v-ea416b8a] {
    float: left;
    font-size: 12px;
    position: relative;

}

.singleModule .singleInfo .infoRight[data-v-ea416b8a] {
    float: right;
    overflow: hidden;
}
.singleModule .singleInfo .infoRight[data-v-ea416b8a] {
    float: right;
    overflow: hidden;
}
.singleModule .singleInfo .infoRight div[data-v-ea416b8a]:first-of-type {
    margin-right: 16px;
}
.singleModule .singleInfo .infoRight div[data-v-ea416b8a]:first-of-type {
    margin-right: 16px;
}
.singleModule .singleInfo .infoRight div[data-v-ea416b8a] {
    float: left;
}
.singleModule .singleInfo .infoRight div i[data-v-ea416b8a] {
    float: left;
    font-size: 12px;
    position: relative;
}
.singleModule .singleTitle[data-v-ea416b8a]:hover {
    color: rgb(65, 130, 250);
    cursor: pointer;
}
</style>