<template>
    <div data-v-648695f9 class="lesson_rightcon" >
        <div data-v-648695f9 data-v-6e8ee066 class="lesson_right content_right">
            <div data-v-6e8ee066 class="hover_overflow" style="height:100%">
                <div data-v-6e8ee066 style="width: 791px; padding-bottom: 70px;">
                    <p data-v-6e8ee066 class="title">课程简介</p>
                    <div data-v-6e8ee066 class="list lesson_video notshow videoshow">
                        <p data-v-6e8ee066 class="t1">
                            <i data-v-6e8ee066></i>
                            视频
                        </p>
                        <div data-v-6e8ee066>
                            <div data-v-6e8ee066>
                                <div data-v-6e8ee066 data-v-1dddb610 class="xtVideo"
                                    style="width: 791px; height: 445px;">
                                    <div id="J_prismPlayer"></div>
                                    <span data-v-6e8ee066 style="color: black;" id="current-time">00:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-v-6e8ee066 data-v-13a92561 class="control"></div>
        </div>
    </div>


</template>
<script>
import Aliplayer from 'aliyun-aliplayer';
import 'aliyun-aliplayer/build/skins/default/aliplayer-min.css';
import _axios from '@/axios/myaxios';

const options = {
    watch:{
        
        '$route.params.vid': {
            immediate: true,
            handler(newVid) {
                this.mediaId = newVid;
                this.getMedia();
            }
        }

    },
    data() {
        return {
            mediaId:0,
            media:{
                videoUrl:""
            },
            player: null,
            videoUrl:"//vjs.zencdn.net/v/oceans.mp4",
            coverUrl:"//vjs.zencdn.net/v/oceans.png",
            speedLevel:[
                { "key": 0.5, "text": "0.5" },
                { "key": 1, "text": "原速" },
                { "key": 1.25, "text": "1.25" },
                { "key": 1.5, "text": "1.5" },
                { "key": 2, "text": "2" }
            ]
        }
    },
    methods: {
        getMedia(){
            _axios.get("/teachplan-media/detail/"+this.mediaId).then( resp => {
                this.media = resp.data.data
                this.initVideo()
            })
        },
        initVideo() {
            // 销毁旧的播放器实例
            if (this.player) {
                this.player.dispose();
            }
            this.player = new Aliplayer(
                {
                    license: {
                        domain: "momo.com", // 申请 License 时填写的域名
                        key: "nP9qzHOy8cHoB2ZqGf266f4e778fb4131a454c19dea9822b1" // 申请成功后，在控制台可以看到 License Key
                    },
                    id: 'J_prismPlayer',
                    source: this.media.videoUrl, 
                    width: '791px',
                    height: '445px',
                    autoplay: true,      //是否自动播放
                    keyShortCuts: true,     //是否启用快捷键
                    keyFastForwardStep: 10,  //快进时间的长度
                    speedLevels: this.speedLevel,
                }, function (player) {
                    player.play();
                });
        }
    },
    mounted() {
        this.mediaId = this.$route.params.vid;
        this.getMedia()
    },
}
export default options
</script>
<style>


/* 只有进入页面时才让滚动条出现 */

.hover_overflow[data-v-6e8ee066]:hover {
    overflow: auto;
}

</style>

<style scoped>
.lesson_rightcon[data-v-648695f9] {
    height: 100%;
    overflow: hidden;
    position: relative;
    width: 100%;
    z-index: 100;
}

.lesson_right[data-v-6e8ee066] {
    height: calc(-112px + 100vh);
    min-height: 400px;
    padding-bottom: 50px;
    padding-left: 24px;
    position: relative;
}

.hover_overflow{
    overflow: hidden;
}

.lesson_right .title[data-v-6e8ee066] {
    color: rgb(51, 51, 51);
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0px;
    margin-bottom: 20px;
}
body[data-v-6e8ee066], dd[data-v-6e8ee066], dl[data-v-6e8ee066], fieldset[data-v-6e8ee066], h1[data-v-6e8ee066], h2[data-v-6e8ee066], h3[data-v-6e8ee066], h4[data-v-6e8ee066], h5[data-v-6e8ee066], h6[data-v-6e8ee066], input[data-v-6e8ee066], legend[data-v-6e8ee066], ol[data-v-6e8ee066], option[data-v-6e8ee066], p[data-v-6e8ee066], td[data-v-6e8ee066], textarea[data-v-6e8ee066], ul[data-v-6e8ee066] {
    margin: 0px;
    padding: 0px;
}

.lesson_right .list[data-v-6e8ee066] {
    letter-spacing: 0px;
    margin-bottom: 40px;
}
.lesson_right .lesson_video[data-v-6e8ee066] {
    position: relative;
}
.videoshow[data-v-6e8ee066] {
    height: auto;
    opacity: 1;
}

.notshow[data-v-6e8ee066] {
/*     height: 0px;
    opacity: 0; */
    overflow: hidden;
}


.lesson_right .list .t1[data-v-6e8ee066] {
    color: rgb(51, 51, 51);
    font-size: 16px;
    font-weight: 500;
    margin: 0px 0px 8px;
}

.lesson_right .list .t1 i[data-v-6e8ee066] {
    background: rgb(51, 51, 51);
    display: inline-block;
    height: 13px;
    margin-right: 8px;
    position: relative;
    top: -4px;
    vertical-align: bottom;
    width: 3px;
}
button, i, input, select, textarea {
    font-family: -apple-system, SF UI Text, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
    line-height: 1em;
}

.xtVideo[data-v-1dddb610] {
    background: rgb(0, 0, 0);
    position: relative;
}

</style>