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
                                    <video id="my-player" class="video-js" controls preload="auto"
                                        >
                                        <source />
                                    </video>
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
import videojs from 'video.js'
import "video.js/dist/video-js.min.css"
import lang_zhcn from "video.js/dist/lang/zh-CN.json"
import _axios from '@/axios/myaxios';
videojs.addLanguage('zh-CN', lang_zhcn);


const options = {
    watch:{
        videoUrl(newUrl, oldUrl){
            if(newUrl != oldUrl){
                videojs('my-player').dispose()
                var video = document.querySelector(".xtVideo")
                video.innerHTML = "<video id='my-player' class='video-js' controls preload='auto'><source /></video>" 
            }
            this.restartVideoPlayer();
        },
        '$route.params.vid': {
            immediate: true,
            handler(newVid) {
                this.mediaId = newVid;
                this.getCurrentTime();
                this.getMedia();
                this.setMedia();
            }
        }

    },
    data () {
        return {
            mediaId:0,
            media:{},
            videoUrl:"//vjs.zencdn.net/v/oceans.mp4",
            coverUrl:"//vjs.zencdn.net/v/oceans.png",
            
        }
    },
    methods: {
        setMedia(){
            this.$nextTick(() => {
                let options = {
                    width: 791,
                    height: 445,
                    language: 'zh-CN',
                    playbackRates: [0.50, 1.00, 1.25, 1.50, 2.00],
                    poster: this.coverUrl,
                    sources: [
                        {
                            src: this.videoUrl,
                            type: "video/mp4"
                        }
                    ]
                }
                videojs('my-player', options, function () {
                });
            })
        },
        getCurrentTime(){
            document.addEventListener('DOMContentLoaded', function () {
                var player = videojs('my-player');

                function formatTime(seconds) {
                    var hours = Math.floor(seconds / 3600);
                    var minutes = Math.floor((seconds % 3600) / 60);
                    var remainingSeconds = Math.floor(seconds % 60);
                    hours = hours < 10 ? '0' + hours : hours;
                    minutes = minutes < 10 ? '0' + minutes : minutes;
                    remainingSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
                    return hours + ':' + minutes + ':' + remainingSeconds;
                }
                player.on('timeupdate', function () {
                    var currentTime = player.currentTime();
                    var formattedTime = formatTime(currentTime);
                    document.getElementById('current-time').innerText = formattedTime;
                });
            });
        },
        getMedia(){
            _axios.get("/teachplan-media/detail/"+this.mediaId).then( resp => {
                this.media = resp.data.data
                this.videoUrl = this.media.videoUrl
                this.coverUrl = this.media.coverUrl
            })
        },
        restartVideoPlayer() {
            this.$nextTick(() => {
                this.setMedia();
            })
        },
    },
    mounted() {
        this.mediaId = this.$route.params.vid;
        this.getCurrentTime()
        this.getMedia()
        this.setMedia()
    },
    updated() {
        
    },
}
export default options;
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