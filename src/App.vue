<template>
  <div id="app" >
    
    <router-view/>
  </div>
</template>
<script>
const options = {
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    mounted() {
        const userString = sessionStorage.getItem("user");
        if (userString) {
                const user = JSON.parse(userString);
                this.$store.commit('updateUser',user);
        }
    },
    create(){
        /* const userString = sessionStorage.getItem("user");
        if (userString) {
            try {
                const user = JSON.parse(userString);
                this.$store.commit('updateUser', user);
            } catch (e) {
                console.error('Failed to parse user from sessionStorage:', e);
            }
        } */
    }
}
export default options
</script>
<style>

/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: 'iconfont';  /* Project id 4832446 */
  src: url('//at.alicdn.com/t/c/font_4832446_yzqqju5jm98.woff2?t=1743919884034') format('woff2'),
       url('//at.alicdn.com/t/c/font_4832446_yzqqju5jm98.woff?t=1743919884034') format('woff'),
       url('//at.alicdn.com/t/c/font_4832446_yzqqju5jm98.ttf?t=1743919884034') format('truetype');
}

a {
    text-decoration: none;
    /* 去除下划线 */
    color: inherit;
    /* 继承父元素的文本颜色 */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 18px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


.aboutSingle .classList .el-icon-arrow-up:before {
    font-family: iconfont !important;
    font-style: normal;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: .2px;
    -moz-osx-font-smoothing: grayscale;
    content: "\101de"
}

.el-input__icon:after {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    width: 0;
}


#app {
    font-family: -apple-system, SF UI Text, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, "sans-serif";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    position: relative;
    width: 100%;
}

body {
    background-color: #fff;
    color: #333;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.428571429;
}
html,body,#app{
        width: 100%;
        height: 100%;
        margin: 0;
        /* overflow: auto; */
 }


.header .h_menus li a.active[data-v-61b17279]:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    height: 3px;
    border-radius: 1.5px;
    width: 0;
    left: 0;
    width: 32px;
    left: 50%;
    margin-left: -16px;
    background: #1769fe;
}

.el-icon-arrow-down:before {
    content: "\E6DF";
}

.row:after, .row:before {
    content: " ";
    display: table;
}


*, :after, :before {
    box-sizing: border-box;
}

.row:after {
    clear: both;
}

.row[data-v-af85527e]:after {
    clear: both;
}

.container:after, .container:before {
    content: " ";
    display: table;
}

.container:after {
    clear: both;
}

.container[data-v-af85527e]:after, .container[data-v-af85527e]:before {
    content: " ";
    display: table;
}



.indexBoxWrap .newCourse-footer[data-v-1c1951e6]:before {
    background: #ebebeb;
    content: "";
    display: block;
    height: 1px;
    position: absolute;
    top: 50%;
    width: 100%;
}

/* .scrollbar::-webkit-scrollbar {
    width: 8px;
}

.scrollbar::-webkit-scrollbar-track {
    background: #e0e0e0;
    border-radius: 10px;
}

.scrollbar::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 10px;
} */



.prettycourse .item-footer[data-v-3e9c088e]:after {
    content: " ";
    display: block;
    height: 0;
    visible: hidden;
    clear: both;
}

.prettycourse-footer[data-v-3e9c088e]:before {
    background: #ebebeb;
    content: "";
    display: block;
    height: 1px;
    position: absolute;
    top: 50%;
    width: 100%;
}


:deep( .el-radio__original ){
  display: none !important; /* 隐藏原生 radio 输入，但仍然允许交互 */
}
 
:deep(.el-radio:focus:not(.is-focus):not(:active):not(.is-disabled) .el-radio__inner) {
    box-shadow: none !important;
}



</style>
