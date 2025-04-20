<template>
    <div data-v-c3d629dc class="base">
        <div data-v-0cb8b7a8 class="myDiscussBox">
            <ul data-v-0cb8b7a8 class="myDiscussTabList">
                <router-link to="/profiles/myComments/post">
                    <li data-v-0cb8b7a8>
                        <span data-v-0cb8b7a8 :class="{ spanCli: isActive('/profiles/myComments/post') }">我发布的(0)</span>
                    </li>
                </router-link>
                <router-link to="/profiles/myComments/like">
                    <li data-v-0cb8b7a8>
                        <span data-v-0cb8b7a8 :class="{ spanCli: isActive('/profiles/myComments/like') }">我的赞评({{ this.commentCount }})</span>
                    </li>
                </router-link>
                <div data-v-0cb8b7a8 class="line" 
                :class="{ one: isActive('/profiles/myComments/post'), two: isActive('/profiles/myComments/like') }"
                ></div>
            </ul>
            <div data-v-0cb8b7a8 class="myDiscussTabBox">
                <router-view />
            </div>
        </div>
    </div>

</template>
<script>
import _axios from '@/axios/myaxios';

export default {
    data () {
        return {
            commentCount:0
        }
    },
    methods: {
        isActive(routePath) {
            return this.$route.path === routePath;
        },
        changTag(){
            var spans = document.querySelectorAll(".myDiscussTabList li span")
            for(let i=0;i<spans.length;i++){
                spans[i].addEventListener('click',function(){
                    spans.forEach(span => {
                        span.classList.remove("spanCli")
                    })
                    spans[i].classList.add("spanCli")
                    if(i===0){
                        var line = document.querySelector(".line")
                        line.classList.remove("two")
                        line.classList.add("one")
                    }else{
                        var line = document.querySelector(".line")
                        line.classList.remove("one")
                        line.classList.add("two")
                    }
                })
            }
        },
        getCommentCount(){
            _axios.get("/user/commentCount").then(resp => {
                this.commentCount = resp.data.data
            })
        }
    },
    mounted() {
        this.changTag()
        this.getCommentCount()
    },
}
</script>
<style scoped>
.myDiscussBox[data-v-0cb8b7a8] {
    min-width: 600px;
}
.myDiscussBox {
    padding-bottom: 30px;
    padding-left: 30px;
    padding-right: 30px;
}
.myDiscussBox .myDiscussTabList {
    border-bottom: 1px solid #eee;
    padding: 0px;
    height: 60px;
    line-height: 60px;
    position: relative;
}

ol, ul {
    margin-bottom: 10px;
    margin-top: 0;
}
.myDiscussBox .myDiscussTabList li {
    color: #666;
    float: left;
    font-size: 16px;
    font-weight: 400;
    padding-right: 40px;
}
li {
    list-style: none;
}
.myDiscussBox .myDiscussTabList li .spanCli, .myDiscussBox .myDiscussTabList li span:hover {
    color: #4182fa;
}
.myDiscussBox .myDiscussTabList li span {
    cursor: pointer;
    float: left;
    height: 56px;
}
.myDiscussBox .myDiscussTabList .one {
    left: 15px;
    transition: all .3s;
}

.myDiscussBox .myDiscussTabList .line {
    background: #1769fe;
    border-radius: 2px;
    bottom: 0;
    height: 4px;
    position: absolute;
    width: 40px;
}

.myDiscussBox .myDiscussTabList .two {
    left: 135px;
    transition: all .3s;
}
.myDiscussBox .myDiscussTabBox {
    height: 100%;
    position: relative;
    width: 100%;
}
</style>