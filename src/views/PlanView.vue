<template>
    <div data-v-0e4b0658 data-v-00b9cfae class="app-main_appMain" style="min-height: calc(-278px+100vh);">
        <div data-v-0e4b0658 class="training_index">
            <div data-v-0c0502ff class="training">
                <div data-v-0c0502ff class="training-header">
                    <div data-v-0c0502ff>
                        <div data-v-0c0502ff :style="{ background: `url('${planDetail.headerImage}') center center / cover no-repeat` }">
                        </div>
                    </div>
                </div>
                <div data-v-0c0502ff class="training-container">
                    <div data-v-0c0502ff class="training-buy">
                        <div data-v-0c0502ff class="buy-body card">
                            <div data-v-0c0502ff class="card-left">
                                <div data-v-0c0502ff class="card-left-name">
                                    <div data-v-0c0502ff class="card-left-name-txt">{{planDetail.title}}</div>
                                    <div data-v-0c0502ff data-v-390af96e class="xt-tag combine-task-list"></div>
                                </div>
                                <div data-v-0c0502ff style="text-align: left;" class="card-left-desc">由{{ planDetail.school }}组织开设，授课教师为{{ planDetail.teachers }}老师</div>
                                <div data-v-0c0502ff class="card-left-class">
                                    <el-dropdown trigger="click">
                                        <div data-v-0c0502ff class="el-dropdown-inner">
                                            <span data-v-0c0502ff class="class-name">
                                                2025年第1期（{{ planDetail.beginTime }} 开课）
                                            </span>
                                            <i class="el-icon-arrow-down el-icon--right"></i> 
                                        </div>
                                        <el-dropdown-menu data-v-0c0502ff class="el-dropdown-menu--medium" slot="dropdown">
                                            <el-dropdown-item data-v-0c0502ff>
                                                <div data-v-0c0502ff style="color: rgb(23, 105, 254);line-height: 40px;">
                                                    2025年第1期（{{ planDetail.beginTime }} 开课）
                                                </div>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                </div>
                            </div>
                            <div data-v-0c0502ff class="card-right">
                                <div data-v-0c0502ff class="price-wrap">
                                    <span data-v-0c0502ff class="rmb">¥</span>
                                    <span data-v-0c0502ff class="current">
                                        <span class="iconfont" style="font-size: 34px;">2333</span>
                                    </span>
                                </div>
                                <div data-v-0c0502ff class="btn-join">加入学习</div>
                            </div>
                        </div>
                    </div>
                    <div v-for="item in planDetail.images" :key="item.url" data-v-0c0502ff class="contentImage">
                        <div data-v-0c0502ff >
                            <div data-v-0c0502ff :style="{background: `url('${item.url}') center top / 1920px no-repeat`}"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import _axios from '@/axios/myaxios';

const options={
    data() {
        return {
            headerImage:"",
            images:[],
            planDetail:{},
            pid:0,
        }
    },
    methods: {

        getPlanDetail(){
            _axios.get("plan/detail/"+this.pid).then(resp => {
                this.planDetail = resp.data.data
                this.images = this.planDetail.images
                this.setImageHeight()
                this.setHeaderImageHeight()
            })
        },

        setHeaderImageHeight(){
            var img = new Image();
            img.onload = () => {
                var imgWidth = img.width;
                var imgHeight = img.height;
                var newHeight = (imgHeight / imgWidth) * 1920;
                document.querySelector('.training-header > div').style.minHeight = newHeight + 'px'
                // document.querySelector('training-header > div').style.paddingTop =  
            };
            img.src = this.planDetail.headerImage
        },


        setImageHeight() {
            this.images.forEach((imageUrl, index) => {
                var img = new Image();
                img.onload = () => {
                    var imgWidth = img.width;
                    var imgHeight = img.height;
                    var newHeight = (imgHeight / imgWidth) * 1920;

                    // 使用 querySelectorAll 获取所有 .contentImage > div 元素
                    const contentDivs = document.querySelectorAll('.contentImage > div');
                    
                    // 为当前对应的 div 设置高度
                    if (contentDivs[index]) {
                        contentDivs[index].style.height = newHeight + 'px';
                    }
            };
            img.src = imageUrl.url;
            });
            
        },
        
    },
    mounted() {
        this.pid = this.$route.params.pid
        this.getPlanDetail()
        window.scrollTo(0,0)
    },
    computed:{

    }
}
export default options
</script>
<style>

.el-dropdown-menu--medium {
    padding: 6px 0 !important;
}

</style>
<style scoped>
.training[data-v-0c0502ff] {
    background: #fff;
}
.training-header[data-v-0c0502ff] {
    min-width: 1160px;
    position: relative;
}
.training-header div[data-v-0c0502ff] {
    height: 0;
    overflow: hidden;
    position: relative;
}
.training-header div div[data-v-0c0502ff] {
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
}

.training-container[data-v-0c0502ff] {
    margin: 0 auto;
    min-height: 600px;
    min-width: 1160px;
    overflow: hidden;
}

.training-buy[data-v-0c0502ff] {
    margin-top: -92px;
    overflow: hidden;
    padding-top: 12px;
    position: absolute;
    width: 100%;
    z-index: 7;
}

.training-buy .buy-body[data-v-0c0502ff] {
    background: #fff;
    border-radius: 12px;
    -webkit-box-shadow: 0 0 12px #bbb;
    box-shadow: 0 0 12px #bbb;
    height: 160px;
    height: inherit;
    margin: 0 auto;
    width: 1160px;
}

.card[data-v-0c0502ff] {
    display: flex;
    padding: 28px 40px;
    flex-direction: row;
    align-items: flex-end;
}

.card-left[data-v-0c0502ff] {
    flex: 1;
    width: 0;
}

.card-left-name[data-v-0c0502ff] {
    display: flex;
    flex-direction: row;
    line-height: 34px;
    align-items: flex-start;
}

.card-left-name-txt[data-v-0c0502ff] {
    color: #2b2e35;
    font-size: 24px;
    font-weight: 600;
    line-height: 34px;
    max-width: 648px;
}

.card-left-desc[data-v-0c0502ff] {
    color: #656a72;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    margin-top: 8px;
}

.card-left-class .el-dropdown-inner[data-v-0c0502ff], .card-left-class[data-v-0c0502ff] {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.card-left-class[data-v-0c0502ff] {
    margin-top: 24px;
}
.card-left-class .el-dropdown-inner[data-v-0c0502ff] {
    width: 360px;
    background: #eef0f5;
    border-radius: 6px;
    cursor: pointer;
    height: 46px;
    justify-content: center;
}

.card-left-class .el-dropdown-inner[data-v-0c0502ff], .card-left-class[data-v-0c0502ff] {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.card-left-class .el-dropdown-inner .class-name[data-v-0c0502ff] {
    color: #656a72;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 271px;
}
.el-icon--right {
    margin-left: 5px;
}
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

.card-right[data-v-0c0502ff] {
    margin-left: 10px;
    width: 224px;
}

.card-right .price-wrap[data-v-0c0502ff] {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.card-right .price-wrap .rmb[data-v-0c0502ff] {
    align-self: flex-end;
    color: #fa4949;
    font-size: 24px;
    font-weight: 600;
    line-height: 38px;
}
.card-right .price-wrap .current[data-v-0c0502ff] {
    align-self: flex-end;
    color: #fa4949;
    font-size: 40px;
    font-weight: 600;
    line-height: 44px;
    margin-left: 4px;
}

.iconfont {
    font-family: iconfont !important;
    font-size: 16px;
    font-style: normal;
}
.card-right .btn-join[data-v-0c0502ff] {
    margin-left: 0;
    margin-top: 16px;
}
.training .btn-join[data-v-0c0502ff] {
    background: #fa4949;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    height: 48px;
    line-height: 48px;
    text-align: center;
    width: 224px;
    align-items: center;
    justify-content: center;
    margin-left: 12px;
}

.training .contentImage[data-v-0c0502ff] {
    min-width: 1160px;
    position: relative;
}
.training .contentImage div[data-v-0c0502ff] {
    height: 0;
    overflow: hidden;
    position: relative;
}

.training .contentImage div div[data-v-0c0502ff] {
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
}

</style>