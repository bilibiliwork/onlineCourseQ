<template>
    <div data-v-021f445a data-v-5d41576e role="bar" class="app-main_appMain" style="height: calc(-94px + 100vh);">
        <div data-v-648695f9 data-v-021f445a class="courseActionLesson">
            <div data-v-a401eb78 data-v-648695f9 class="courseAction_lesson_left lesson_left">
                <div data-v-a401eb78 class="totalinfo clearfix"></div>
                <div data-v-a401eb78 class="tab">
                    <p data-v-a401eb78 class="text class">
                        目录
                        <span data-v-a401eb78 class="title">
                            <el-popover v-model="visible" trigger="hover" popper-class="courseAction_lesson_left2"
                                data-v-a401eb78 placement="bottom" width="80">
                                <div data-v-a401eb78 class="testDetail_j">
                                    <p data-v-a401eb78 class="active">全部</p>
                                    <p data-v-a401eb78>视频</p>
                                    <p data-v-a401eb78>讨论</p>
                                    <p data-v-a401eb78>考试</p>
                                </div>
                                <span class="big" data-v-a401eb78 slot="reference">
                                    <span data-v-a401eb78 class="tt">{{ targetOption }}</span>
                                    <i style="color: #fc4a39; margin-left: 3px; font-size: 18px;" data-v-a401eb78
                                        class="iconfont">
                                        &#xe73d;</i>
                                </span>
                            </el-popover>
                        </span>
                    </p>

                </div>
                <div data-v-a401eb78 class="list">
                    <div data-v-a401eb78 class="listScroll">
                        <ul v-for="item in teachPlan" :key="'item'+item.id" data-v-a401eb78 class="first" :class="{ active: activeId == item.id }">
                            <li data-v-a401eb78 class="title open">
                                <i data-v-a401eb78 style="font-size: 14px;" class="iconfont">&#xe73d;</i>
                                <span data-v-a401eb78 class="titlespan" style="width: 224px;">{{ item.name }}</span>
                            </li>

                            <li v-for="treeNodes in item.teachPlanTreeNodes" :key="'treeNode'+treeNodes.id" data-v-a401eb78
                                class="detail">
                                <ul data-v-a401eb78 class="second">
                                    <li data-v-a401eb78 class="title" >
                                        <span data-v-a401eb78 class="titlespan" style="width: 224px;">
                                            {{ treeNodes.name }}
                                        </span>
                                    </li>
                                    <li v-for=" media in treeNodes.teachplanMediaList" :key="'media'+media.id" data-v-a401eb78
                                        class="detail">
                                        <router-link :to="'/video/'+ cid +'/learn/media/'+media.id" >
                                            <ul data-v-a401eb78 class="third">
                                                <li data-v-a401eb78>
                                                    <div data-v-a401eb78 class="title" :class="{ active: isActive('/video/' + cid + '/learn/media/' + media.id,item.id) }">
                                                        <i data-v-a401eb78 style="font-size: 14px;"
                                                            class="iconfont left">&#xe624;</i>
                                                        <span data-v-a401eb78 class="titlespan noScore">{{
                                                            media.mediaFilename }}
                                                        </span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </router-link>
                                    </li>
                                    <li v-for=" discuss in treeNodes.discussList" :key="'discuss'+discuss.id" data-v-a401eb78
                                        class="detail">
                                        <router-link :to="'/video/' + cid + '/learn/discuss/' + discuss.id" >
                                            <ul data-v-a401eb78 class="third">
                                                <li data-v-a401eb78>
                                                    <div data-v-a401eb78 class="title" :class="{ active: isActive('/video/' + cid + '/learn/discuss/' + discuss.id,item.id) }">
                                                        <i data-v-a401eb78 style="font-size: 14px;"
                                                            class="iconfont left">&#xe8b9;</i>
                                                        <span data-v-a401eb78 class="titlespan noScore">
                                                            {{ treeNodes.name }}
                                                        </span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </router-link>
                                    </li>
                                </ul>
                            </li>

                            <li v-for=" media in item.teachplanMediaList" :key="'media'+media.id" data-v-a401eb78
                                class="detail">
                                <router-link :to="'/video/'+ cid +'/learn/media/'+media.id" >
                                    <ul data-v-a401eb78 class="third">
                                        <li data-v-a401eb78>
                                            <div data-v-a401eb78 class="title" :class="{ active: isActive('/video/' + cid + '/learn/media/' + media.id,item.id) }">
                                                <i data-v-a401eb78 style="font-size: 14px;"
                                                    class="iconfont left">&#xe624;</i>
                                                <span data-v-a401eb78 class="titlespan noScore">{{ media.mediaFilename
                                                    }}
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </router-link>
                            </li>
                            <li v-for=" discuss in item.discussList" :key="'discuss'+discuss.id" data-v-a401eb78 class="detail">
                                <router-link :to="'/video/' + cid + '/learn/discuss/' + discuss.id" >
                                    <ul data-v-a401eb78 class="third">
                                        <li data-v-a401eb78>
                                            <div data-v-a401eb78 class="title" :class="{ active: isActive('/video/' + cid + '/learn/discuss/' + discuss.id,item.id) }">
                                                <i data-v-a401eb78 class="iconfont left">&#xe8b9;</i>
                                                <span data-v-a401eb78 class="titlespan noScore">{{ discuss.content }}
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </router-link>
                            </li>
                        </ul>
                        <ul></ul>
                    </div>
                </div>
                <div data-v-a401eb78 class="bottomTran"></div>
            </div>

            <!-- 替换页面 -->
            <router-view />
        </div>

    </div>
</template>
<script>
import _axios from '@/axios/myaxios';



const options = {
    watch: {
        visible() {
            this.updateIcon()
        }
    },
    data() {
        return {
            targetOption: "全部",
            visible: false,
            teachPlan:[],
            cid:0,
            activeId: 0,
            activeTreeId:""
        }
    },
    methods: {
        changeThirdStatus(){
            var active = document.querySelectorAll('.third .title')
            for(var i=0;i<active.length;i++){
                active[i].addEventListener('click',function(){
                    active.forEach(p => {
                        p.classList.remove('active')
                    })
                    this.classList.add('active')
                })
            }
        },
        updateIcon() {
            var i = document.querySelector('.big i');
            if (this.visible) {
                i.innerHTML = '&#xe731;';
            } else {
                i.innerHTML = '&#xe73d;';
            }
        },
        expandDesc() {
            this.$nextTick(() => {
                var expend = document.querySelectorAll(".first li.title.open");
                for (var i = 0; i < expend.length; i++) {
                    expend[i].addEventListener('click', function () {
                        this.parentNode.classList.toggle('active');
                        var icon = this.querySelector('.iconfont');
                        if (this.parentNode.classList.contains('active')) {
                            icon.innerHTML = '&#xe731;'; // 收起图标
                        } else {
                            icon.innerHTML = '&#xe73d;'; // 展开图标
                        }
                    });
                }
            })
        },
        changePopperTag() {
            var active = document.querySelectorAll('.testDetail_j p')
            active.forEach(p => {
                p.addEventListener('click', () => {
                    active.forEach(el => {
                        el.classList.remove('active')
                    })
                    p.classList.add('active')
                    this.targetOption = p.innerText
                })
            })
        },
        isActive(route,id) {
            if (this.$route.path === route) {
                sessionStorage.setItem("itemId", id)
                this.activeId = JSON.parse(sessionStorage.getItem('itemId'))
            }
            return this.$route.path === route;
        },
        async queryCourseMedia() {
            const resp = await _axios.get("/course/media/" + this.cid)
            this.teachPlan = resp.data.data;
            this.$nextTick(() => {
                this.expandDesc()
                this.changePopperTag()
                this.changeThirdStatus()
                // this.navigateToFirstPage()
            })
        },

        // navigateToMedia(media) {
        //     this.activeId = 'media' + media.id;
        //     this.activeTreeId = 'media' + media.id;
        //     this.$router.push(`/video/${this.cid}/learn/media/${media.id}`, null, { query: { fromFirstPage: true } });
        // },

        // navigateToDiscuss(discuss) {
        //     this.activeId = 'discuss' + discuss.id;
        //     this.activeTreeId = 'discuss' + discuss.id;
        //     this.$router.push(`/video/${this.cid}/learn/discuss/${discuss.id}`, null, { query: { fromFirstPage: true } });
        // },

        /* navigateToFirstPage() {
            const findFirstPage = (teachPlan) => {
                for (let i = 0; i < teachPlan.length; i++) {
                    const item = teachPlan[i];
                    if (item) {
                        if (item.teachplanMediaList && item.teachplanMediaList.length > 0) {
                            this.activeId = 'item'+item.id
                            this.activeTreeId = 'media'+item.teachplanMediaList[0].id
                            this.$router.push(`/video/${this.cid}/learn/media/${item.teachplanMediaList[0].id}`);
                            return true;
                        } else if (item.discussList && item.discussList.length > 0) {
                            this.activeId = 'item'+item.id
                            this.activeTreeId = 'discuss'+item.discussList[0].id
                            this.$router.push(`/video/${this.cid}/learn/discuss/${item.discussList[0].id}`);
                            return true;
                        }
                        if (item.teachPlanTreeNodes) {
                            for (let j = 0; j < item.teachPlanTreeNodes.length; j++) {
                                const firstTreeNode = item.teachPlanTreeNodes[j];
                                if (firstTreeNode.teachplanMediaList && firstTreeNode.teachplanMediaList.length > 0) {
                                    this.activeId = 'item'+item.id
                                    this.activeTreeId = 'media'+ firstTreeNode.teachplanMediaList[0].id
                                    this.$router.push(`/video/${this.cid}/learn/media/${firstTreeNode.teachplanMediaList[0].id}`);
                                    return true;
                                } else if (firstTreeNode.discussList && firstTreeNode.discussList.length > 0) {
                                    this.activeId = 'item'+item.id
                                    this.activeTreeId = 'discuss'+ firstTreeNode.discussList[0].id
                                    this.$router.push(`/video/${this.cid}/learn/discuss/${firstTreeNode.discussList[0].id}`);
                                    return true;
                                }
                            }
                        }
                    }
                }
                return false;
            };

            if (this.teachPlan.length > 0 && this.cid && !this.$route.query.fromFirstPage) {
                findFirstPage(this.teachPlan);
            }
        } */
    },
    mounted() {
        if(JSON.parse(sessionStorage.getItem('itemId'))){
            this.activeId = JSON.parse(sessionStorage.getItem('itemId'))
        }
        this.changePopperTag()
        /* const activeRoute = localStorage.getItem('activeRoute');
        if (activeRoute) {
            this.$router.push(activeRoute);
        } */
    },
    async created() {
        this.cid = this.$route.params.mid
        await this.queryCourseMedia();
        // this.navigateToFirstPage();
    },
    beforeDestroy() {
        sessionStorage.removeItem('itemId');
    },
}
export default options;
</script>
<style>

.courseAction_lesson_left2.el-popover {
    margin-top: 6px;
    max-width: 180px;
    min-width: 80px;
    padding: 0 10px;
    width: auto !important;
}
</style>
<style scoped>

.courseActionLesson[data-v-648695f9] {
    height: calc(100vh - 88px);
    margin: auto;
    min-width: 1200px;
    padding: 24px 0 0 calc(-256px + 50%);
    position: relative;
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
}

.lesson_left[data-v-648695f9] {
    background: #fff;
    border-radius: 4px;
    height: calc(100vh - 136px);
    left: calc(50% - 600px);
    position: absolute;
    top: 24px;
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
    width: 320px;
}
.courseAction_lesson_left[data-v-a401eb78] {
    -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .1);
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .1);
    font-weight: 400;
    padding: 24px 0 0;
}

.courseAction_lesson_left .totalinfo[data-v-a401eb78] {
    border-radius: 4px;
    font-size: 0;
    margin: 0 20px 20px 14px;
    position: relative;
}
.clearfix {
    zoom: 1;
}

.courseAction_lesson_left .tab[data-v-a401eb78] {
    background: #fcfcfc;
    font-size: 0;
    padding: 8px 20px;
    position: relative;
    text-align: center;
}

.courseAction_lesson_left .tab .text[data-v-a401eb78] {
    color: #333;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: .5px;
    text-align: left;
}
body[data-v-a401eb78], dd[data-v-a401eb78], dl[data-v-a401eb78], fieldset[data-v-a401eb78], h1[data-v-a401eb78], h2[data-v-a401eb78], h3[data-v-a401eb78], h4[data-v-a401eb78], h5[data-v-a401eb78], h6[data-v-a401eb78], input[data-v-a401eb78], legend[data-v-a401eb78], ol[data-v-a401eb78], option[data-v-a401eb78], p[data-v-a401eb78], td[data-v-a401eb78], textarea[data-v-a401eb78], ul[data-v-a401eb78] {
    margin: 0;
    padding: 0;
}

.courseAction_lesson_left .tab .title[data-v-a401eb78] {
    cursor: pointer;
    float: right;
    font-weight: 400;
}

.testDetail_j {
    padding: 0 6px;
}

.testDetail_j p.active, .testDetail_j p:hover {
    color: #1769fe;
}
.testDetail_j p {
    border-bottom: 1px solid #ebebeb;
    color: #666;
    cursor: pointer;
    font-size: 12px;
    letter-spacing: 0;
    line-height: 16px;
    padding: 7px 0;
    text-align: left;
}

.courseAction_lesson_left .list[data-v-a401eb78] {
    height: calc(100% - 183px);
    overflow: hidden;
    padding-top: 13px;
    position: relative;
}

.courseAction_lesson_left .listScroll[data-v-a401eb78] {
    height: 100%;
    overflow: hidden;
    position: relative;
    z-index: 1;
}

.courseAction_lesson_left .list .first .title[data-v-a401eb78] {
    color: #333;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    padding: 8px 20px 8px 43px;
    position: relative;
    width: 100%;
}
li {
    list-style: none;
}

.courseAction_lesson_left .list .first .title .iconfont.open[data-v-a401eb78] {
    display: none;
}
.courseAction_lesson_left .list .first .title .iconfont[data-v-a401eb78] {
    font-size: 12px;
    left: 20px;
    position: absolute;
    top: 8px;
}

.courseAction_lesson_left .list .first.active .detail[data-v-a401eb78], .courseAction_lesson_left .list .first.active .title .iconfont.open[data-v-a401eb78] {
    display: block;
}

.courseAction_lesson_left .list .first>.title .titlespan[data-v-a401eb78] {
    line-height: 16px;
}
.titlespan[data-v-a401eb78] {
    display: -webkit-box;
    overflow: hidden;
    position: relative;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
    vertical-align: top;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.courseAction_lesson_left .list .first .detail[data-v-a401eb78] {
    display: none;
}

.courseAction_lesson_left .list .first>.title[data-v-a401eb78]:hover {
    background: #f9f9f9;
}


.courseAction_lesson_left .list .first .detail .third .title .iconfont.left[data-v-a401eb78] {
    font-size: 18px;
    margin-right: 5px;
}





.courseAction_lesson_left .list .first .detail .second .title .titlespan[data-v-a401eb78] {
    line-height: 16px;
}

.courseAction_lesson_left .list .first .detail .third .title .titlespan[data-v-a401eb78] {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    line-height: 16px;
    padding: 1px 0;
}

.courseAction_lesson_left .list .first .detail .second .title .titlespan[data-v-a401eb78] {
    line-height: 16px;
}
.titlespan.noScore[data-v-a401eb78] {
    max-width: 202px !important;
}
.titlespan[data-v-a401eb78] {
    display: -webkit-box;
    overflow: hidden;
    position: relative;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
    vertical-align: top;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.titlespan.noScore[data-v-a401eb78] {
    max-width: 202px !important;
}


.courseAction_lesson_left .list .first .detail .third .title .iconfont[data-v-a401eb78] {
    display: block;
    position: static;
}


.courseAction_lesson_left .listScroll[data-v-a401eb78]:hover {
    overflow: auto;
}


.titlespan[data-v-a401eb78]:hover {
    display: block;
    overflow: unset;
    -o-text-overflow: unset;
    text-overflow: unset;
    
}



.titlespan[data-v-a401eb78]:hover {
    display: block;
    overflow: unset;
    -o-text-overflow: unset;
    text-overflow: unset;
}


.courseAction_lesson_left .list .first .detail .third .title[data-v-a401eb78]:hover {
    color: #333;
}
.courseAction_lesson_left .list .first .detail .third .title[data-v-a401eb78] {
    color: #666;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    padding: 9px 16px 9px 56px;
    position: relative;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    margin: 0;
}
.courseAction_lesson_left .list .first .detail .second .title[data-v-a401eb78] {
    margin-bottom: 5px;
    margin-top: 10px;
}
.courseAction_lesson_left .list .first .title[data-v-a401eb78] {
    color: #333;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    padding: 8px 20px 8px 43px;
    position: relative;
    width: 100%;
}


.bottomTran[data-v-a401eb78] {
    background-image: -webkit-gradient(linear, left top, left bottom, from(hsla(0, 0%, 100%, 0)), color-stop(70%, #fff));
    background-image: -o-linear-gradient(top, hsla(0, 0%, 100%, 0) 0, #fff 70%);
    background-image: linear-gradient(-180deg, hsla(0, 0%, 100%, 0), #fff 70%);
    border-radius: 4px;
    bottom: 0;
    left: 0;
    padding-top: 70px;
    position: absolute;
    width: 100%;
    z-index: 10;
}

.courseAction_lesson_left .list .first .detail .third .title.active[data-v-a401eb78] {
    color: #1769fe;
    font-weight: 500;
}

a {
    text-decoration: none;
}
</style>