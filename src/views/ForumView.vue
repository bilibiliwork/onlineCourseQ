<template>
    <div data-v-021f445a data-v-5d41576e role="bar" class="app-main_appMain"
        style="background-color: #ffffff; height: calc(-94px + 100vh);">
        <div data-v-021f445a class="classDiscussWrap">
            <div class="classDiscussBox">
                <div class="discussBoxLeft">
                    <div class="discussSearch">
                        <el-input placeholder="请输入要搜索的帖子" suffix-icon="el-icon-search" v-model="input1">
                        </el-input>
                    </div>
                    <ul class="tabList">
                        <li class="tabLiChoice">
                            <i class="iconfont">&#xe8b9;</i>
                            &nbsp;全部帖子
                            <i class="iconfont right-arrow">&#xe60d;</i>
                        </li>
                        <li>
                            <i class="iconfont">&#xe600;</i>
                            &nbsp;我发布的
                            <i class="iconfont right-arrow">&#xe60d;</i>
                        </li>
                        <li>
                            <i class="iconfont">&#xe61a;</i>
                            &nbsp;老师参与
                            <i class="iconfont right-arrow">&#xe60d;</i>
                        </li>
                        <li>
                            <i class="iconfont">&#xe604;</i>
                            &nbsp;讨论单元
                            <i class="iconfont right-arrow">&#xe60d;</i>
                        </li>
                    </ul>
                </div>
                <div class="discussBoxRight">
                    <div class="postTopic">
                        <div class="areaText">
                            <div class="areaTitBox">
                                <div class="titCount">0/60</div>
                                <el-input suffix-icon size="medium" class="area1" type="textarea" :rows="2"
                                    placeholder="请输入讨论标题" v-model="textarea1">
                                </el-input>
                            </div>
                            <div class="tseUeditor" style="height: auto;">
                                <el-input suffix-icon size="medium" class="area1" type="textarea" :rows="2"
                                    placeholder="请输入内容" v-model="textarea2">
                                </el-input>
                            </div>
                        </div>
                        <div class="pushTopic">
                            <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card"
                                :limit="limit" :on-exceed="handleExceed" :on-success="uploadSuccess"
                                :on-remove="uploadRemove">
                                <img src="https://onlinecourseweb.oss-cn-beijing.aliyuncs.com/plus.png"
                                    class="upload-icon" style="display: none;">
                            </el-upload>
                        </div>
                        <div class="postBtn">
                            <div id="imgC" class="imgC">
                                <i class="iconfont">&#xe997;</i>
                                <span>图片</span>
                            </div>
                            <div id="tip" class="tip">
                                <i class="iconfont tip-attention">&#xe648;</i>
                                最多还可上传{{ fileCount }}张
                            </div>
                            <el-button data-v-cb59604a class="el-button--medium buttonhoverblank "
                                @click="commentFunction1()">发布</el-button>
                        </div>
                    </div>
                    <div class="postTopicBottom"></div>
                    <div class="topicList">
                        <div class="topicBox">
                            <div class="imgTip" style="display: none;">
                                <img
                                    src="https://onlinecourseweb.oss-cn-beijing.aliyuncs.com/f9009a329628431506717624f2f6f87f.noCourse.png">
                                <p>这里空空如也</p>
                            </div>
                            <div v-for="discuss in discussList" :key="discuss.id" class="single">
                                <div class="topicPost">
                                    <router-link :to="'/video/' + cid + '/learn/discuss/' + discuss.id">
                                        <div class="topicTop">
                                            <div class="tit">#来自{{ discuss.chapter }}/{{ discuss.title }}#</div>
                                        </div>
                                    </router-link>
                                    <div class="topicInfoB">
                                        <router-link :to="'/video/' + cid + '/learn/discuss/' + discuss.id">
                                            <div class="imgBox">
                                                <i class="iconfont">&#xe602;</i>
                                            </div>
                                            <div class="infoBox">
                                                <div>
                                                    <i class="iconfont">&#xe602;</i>
                                                    {{ discuss.title }}
                                                </div>
                                                <div>自：{{ discuss.chapter }}</div>
                                            </div>
                                        </router-link>
                                    </div>
                                    <div class="judgeNumBox">
                                        <div class="nameInfo">
                                            <div class="names">
                                                <div class="div1"
                                                    :style="{background: `url('${discuss.user.avatar}') center center / cover no-repeat`}">
                                                </div>
                                                <span class="span1">
                                                    {{ discuss.user.username }}
                                                    <span class="spanTeacher" style="margin-right: ">
                                                        (老师)
                                                    </span>
                                                </span>
                                                <span class="span2">2025-02-02/22:31</span>
                                            </div>
                                        </div>
                                        <!-- <div class="judgeNum">
                                            <span class="delTopicCli" style="margin-top: 17px; display: none;">删除</span>
                                            <span class="hover-change">
                                                <i class="iconfont is_praised"></i>
                                                <i class="iconfont">&#xe651;</i>
                                                0
                                            </span>
                                            <span class="goCliJudge hover-change">
                                                <i class="iconfont">&#xe8b9;</i>
                                                1
                                            </span>
                                        </div> -->
                                    </div>
                                    <!-- <div class="judgePos" >
                                        <div class="textInp">
                                            <el-input @blur="blur()" @focus="focus()" class="el-input--medium"
                                                type="textarea" :rows="2" placeholder="请输入内容" v-model="comment1">
                                            </el-input>
                                        </div>
                                        <div class="pushJudgeTopic">
                                            <div>
                                                <el-upload action="https://www.mocky.io/v2/5185415ba171ea3a00704eed/posts/"
                                                    list-type="picture-card" :limit="limit2" :on-exceed="handleExceed2"
                                                    :on-success="uploadSuccess2" :on-remove="uploadRemove2">
                                                    <img src="https://onlinecourseweb.oss-cn-beijing.aliyuncs.com/plus.png"
                                                        class="upload-icon">
                                                </el-upload>
                                            </div>
                                        </div>
                                        <div class="judgeCliP">
                                            <div id="imgC" class="imgC">
                                                <i class="iconfont">&#xe997;</i>
                                                <span>图片</span>
                                            </div>
                                            <div id="tip" class="tip" style="display: none;">
                                                <i class="iconfont tip-attention">&#xe648;</i>
                                                最多还可上传{{fileCount2}}张
                                            </div>
                                            <el-button
                                                class="el-button--medium buttonhoverblank " @click="commentFunction1(discuss.id)">发布</el-button>
                                        </div>
                                    </div> -->
                                    <div v-for="item in discuss.commentVoList" :key="item.id" class="singleJudge">
                                        <div class="singleJudgeInfo">
                                            <div class="div1"
                                                :style="{background: `url('${item.user.avatar}') center center / cover no-repeat`}">
                                            </div>
                                            <div class="div2">
                                                <span>{{ item.user.username }}</span>
                                                <span class="spanTeacher" style="display: none;">(老师)</span>
                                            </div>
                                        </div>
                                        <div class="singleWen" style="text-align: left;">
                                            {{ item.comment }}
                                        </div>
                                        <div class="judgeImgView"></div>
                                        <div class="singleT">
                                            <div class="time">{{item.createTime}}</div>
                                            <div class="singleCli">
                                                <div class="del" @click="deleteComment(discuss.id,item.id)"
                                                    v-if="item.user.id == $store.state.user.id">删除</div>
                                                <div class="sureCli">
                                                    <i v-if="item.isLike == true" class="iconfont is_praised"
                                                        style="font-size: 16px;" @click="unLike(item.id)">&#xe62d;</i>
                                                    <i v-if="item.isLike == false" class="iconfont i1"
                                                        @click="like(item.id)">&#xe651;</i>
                                                    <span>{{ item.like }}</span>
                                                </div>
                                                <div class="comment" @click="toggleShow(item.id,item.grande)">
                                                    <i class="iconfont">&#xe8b9;</i>
                                                    <span>1</span>
                                                </div>
                                            </div>
                                        </div>
                                        <el-collapse-transition>
                                            <div v-show="showStates[item.id]" class="replyFirstInputBoxContainer">
                                                <div class="replyFirstInputBox">
                                                    <el-input @blur="blur()" @focus="focus()" class="el-input--medium"
                                                        type="textarea" :rows="2" placeholder="请输入内容"
                                                        v-model="comment2">
                                                    </el-input>
                                                    <div class="replyBtns">
                                                        <div class="btns">
                                                            <div type="text" class="btn1"
                                                                @click="toggleShow(item.id,item.grande)">取消</div>
                                                            <el-button class="btn2 el-button--medium buttonhoverblank "
                                                                @click="commentFunction2(item.userId,item.id,discuss.id)">回复</el-button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-collapse-transition>
                                        <div v-if="item.commentVoTrees != null" class="replyBox">
                                            <div v-for="treeNodes in item.commentVoTrees" :key="treeNodes.id"
                                                class="replyWrap">
                                                <div v-if="treeNodes.isgrande == 2" class="replyA">
                                                    <div class="replyAInfo">
                                                        <span class="span1">{{ treeNodes.user.username }}</span>
                                                        <span class="spanTeacher">(老师)</span>
                                                        <span class="span3">：</span>
                                                        <span class="span4">{{ treeNodes.comment }}</span>
                                                    </div>
                                                    <div class="replySingleT">
                                                        <div class="time">{{treeNodes.createTime}}</div>
                                                        <div class="singleCli">
                                                            <div class="del"
                                                                @click="deleteComment(discuss.id,treeNodes.id)"
                                                                v-if="treeNodes.user.id == $store.state.user.id">删除
                                                            </div>
                                                            <div class="sureCli">
                                                                <i v-if="treeNodes.isLike == true"
                                                                    class="iconfont is_praised" style="font-size: 16px;"
                                                                    @click="unLike(treeNodes.id)">&#xe62d;</i>
                                                                <i v-if="treeNodes.isLike == false" class="iconfont i1"
                                                                    @click="like(treeNodes.id)">&#xe651;</i>
                                                                <span>{{ treeNodes.like }}</span>
                                                            </div>
                                                            <div class="commenting"
                                                                @click="toggleShow(treeNodes.id,treeNodes.grande)">回复
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <el-collapse-transition>
                                                        <div v-show="showStates[treeNodes.id]"
                                                            class="replyInputBoxContainer">
                                                            <div class="replyInputBox">
                                                                <el-input @blur="blur()" @focus="focus()"
                                                                    class="el-input--medium" type="textarea" :rows="2"
                                                                    placeholder="请输入内容" v-model="comment3">
                                                                </el-input>
                                                                <div class="replyBtns">
                                                                    <div class="btns">
                                                                        <div type="text" class="btn1"
                                                                            @click="toggleShow(treeNodes.id,treeNodes.grande)">
                                                                            取消</div>
                                                                        <el-button
                                                                            class="btn2 el-button--medium buttonhoverblank "
                                                                            @click="commentFunction3(treeNodes.userId,item.id,treeNodes.id,discuss.id)">回复</el-button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </el-collapse-transition>
                                                </div>
                                                <div v-if="treeNodes.isgrande == 3" class="replyB">
                                                    <div class="replyBInfo">
                                                        <span class="span1">{{ treeNodes.user.username }}</span>
                                                        <span class="spanTeacher">(老师)</span>
                                                        <span class="span2">回复</span>
                                                        <span class="span3">{{ treeNodes.toUser.username }}</span>
                                                        <span class="spanTeacher">(老师)</span>
                                                        ：
                                                        <span class="span4">{{ treeNodes.comment }}</span>
                                                    </div>
                                                    <div class="replySingleT">
                                                        <div class="time">{{ treeNodes.createTime }}</div>
                                                        <div class="singleCli">
                                                            <div class="del"
                                                                @click="deleteComment(discuss.id,treeNodes.id)"
                                                                v-if="treeNodes.user.id == $store.state.user.id">删除
                                                            </div>
                                                            <div class="sureCli">
                                                                <i v-if="treeNodes.isLike == true"
                                                                    class="iconfont is_praised" style="font-size: 16px;"
                                                                    @click="unLike(treeNodes.id)">&#xe62d;</i>
                                                                <i v-if="treeNodes.isLike == false" class="iconfont i1"
                                                                    @click="like(treeNodes.id)">&#xe651;</i>
                                                                <span>{{ treeNodes.like }}</span>
                                                            </div>
                                                            <div class="commenting"
                                                                @click="toggleShow(treeNodes.id,treeNodes.grande)">
                                                                回复
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <el-collapse-transition>
                                                        <div v-show="showStates[treeNodes.id]"
                                                            class="replyInputBoxContainer">
                                                            <div class="replyInputBox">
                                                                <el-input @blur="blur()" @focus="focus()"
                                                                    class="el-input--medium" type="textarea" :rows="2"
                                                                    placeholder="请输入内容" v-model="comment4">
                                                                </el-input>
                                                                <div class="replyBtns">
                                                                    <div class="btns">
                                                                        <div type="text" class="btn1"
                                                                            @click="toggleShow(treeNodes.id,treeNodes.grande)">
                                                                            取消</div>
                                                                        <el-button
                                                                            class="btn2 el-button--medium buttonhoverblank "
                                                                            @click="commentFunction4(treeNodes.userId,item.id,treeNodes.id,discuss.id)">回复</el-button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </el-collapse-transition>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="viewAllComments">
                                        <router-link :to="'/video/' + cid + '/learn/discuss/' + discuss.id" >
                                            <span>
                                                查看全部评论
                                                <i class="el-icon-arrow-right">
                                                </i>
                                            </span>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pagBox"></div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import _axios from '@/axios/myaxios';
import WebSocketService from '@/websocket/websocketService';


const options = {
    /* created() {
        console.log(this.discussList)
        this.discussList.commentVoList.forEach(item => {
            this.$set(this.showStates, item.id, false);
            if (item.commentVoTrees) {
                item.commentVoTrees.forEach(treeNode => {
                    this.$set(this.showStates, treeNode.id, false);
                });
            }
        });
    }, */
    watch:{
        isFile(val){
            if(!val){
                document.querySelector("#imgC").style.display = "block"
                document.querySelector("#tip").style.display = "none"
                document.querySelector(".el-upload.el-upload--picture-card.el-upload-change").classList.remove("el-upload-change")
            }else{
                document.querySelector("#imgC").style.display = "none"
                document.querySelector("#tip").style.display = "block"
                document.querySelector(".el-upload.el-upload--picture-card").classList.add("el-upload-change")
            }
        }
    },
    data () {
        return {
            textarea1: "",
            textarea2: "",
            fileCount:10,
            fileCount2:10,
            isFile:false,
            showStates: [], // 存储每个 treeNodes 的显示状态
            limit:10,
            input1:"",
            comment1:"",
            comment2:"",
            comment3:"",
            comment4:"",
            isFile2:false,
            limit2:10,
            comment:{},
            discussList:[],
            discussId:0,
            cid:0,
            clientId:this.generateClientId(),
        }
    },
    methods: {
        generateClientId() {
            return Math.random().toString(36).substr(2);
        },
        focus(){
            document.querySelector(".judgePos").style.borderColor = "#1769fe"
        },
        blur(){
            document.querySelector(".judgePos").style.borderColor = "#ebebeb"
        },
        like(treeNodeId){
            console.log(treeNodeId)
            let treeNode = this.discussList.flatMap(discuss => discuss.commentVoList).find(item => item.id === treeNodeId);

            // 如果未找到，则在 commentVoTrees 中查找
            if (!treeNode) {
                treeNode = this.discussList.flatMap(discuss => discuss.commentVoList.flatMap(item => item.commentVoTrees)).find(treeNode => treeNode.id === treeNodeId);
            }
            console.log(2)
            if (treeNode) {
                _axios.post("/comment/like",treeNode)
                treeNode.isLike = true
                treeNode.like += 1;
            }
        },
        commentFunction1(discussId){
            this.comment.discussId = discussId
            this.comment.isgrande = 1
            this.comment.comment = this.comment1
            this.comment.grande = 1
            this.comment.parentid = 1
            this.addComment();
        },
        commentFunction2(UserId,parentid,discussId){
            this.comment.discussId = discussId
            this.comment.isgrande = 2
            this.comment.toUserId = UserId
            this.comment.grande = 2
            this.comment.parentid = parentid
            this.comment.comment = this.comment2
            this.addComment(parentid);
        },
        commentFunction3(UserId,parentid,showId,discussId){
            this.comment.discussId = discussId
            this.comment.isgrande = 3
            this.comment.toUserId = UserId
            this.comment.grande = 2
            this.comment.parentid = parentid
            this.comment.comment = this.comment3
            this.addComment(showId);
        },
        commentFunction4(UserId,parentid,showId,discussId){
            this.comment.discussId = discussId
            this.comment.isgrande = 3
            this.comment.toUserId = UserId
            this.comment.grande = 2
            this.comment.parentid = parentid
            this.comment.comment = this.comment4
            this.addComment(showId);
        },
        unLike(treeNodeId){
            console.log(1)
            let treeNode = this.discussList.flatMap(discuss => discuss.commentVoList).find(item => item.id === treeNodeId);

            // 如果未找到，则在 commentVoTrees 中查找
            if (!treeNode) {
                treeNode = this.discussList.flatMap(discuss => discuss.commentVoList.flatMap(item => item.commentVoTrees)).find(treeNode => treeNode.id === treeNodeId);
            }
            if (treeNode && treeNode.like > 0) {
                _axios.post("/comment/disLike",treeNode).then(resp => {
                    if(resp.data.code == 1){
                    }
                })
                treeNode.isLike = false
                treeNode.like -= 1;
            }
        },
        deleteComment(discussId,commentId){
            _axios.delete("/comment/delete/" + commentId).then(resp => {
                if (resp.data.code === 1) {
                    this.$message({
                        message: '删除成功!',
                        type: 'success'
                    });
                    var discuss = this.discussList.find(discuss => discuss.id == discussId)
                    discuss.commentVoList = discuss.commentVoList.filter(item => item.id !== commentId);
                    const removeCommentFromTree = (tree) => {
                        return tree.filter(node => {
                            if (node.id === commentId) {
                                return false; // 删除当前节点
                            }
                            /* if (node.commentVoTrees?.length) {
                                // 递归处理子节点
                                node.commentVoTrees = removeCommentFromTree(node.commentVoTrees);
                            } */
                            return true;
                        });
                    };
                    // 遍历所有主评论，清理其嵌套树
                    discuss.commentVotList = discuss.commentVoList.map(item => {
                        if (item.commentVoTrees?.length) {
                            item.commentVoTrees = removeCommentFromTree(item.commentVoTrees);
                        }
                        return item;
                    });
                }
            })
        },
        getDiscussList(){
            _axios.get("/discuss/list/"+this.cid).then(resp => {
                if(resp.data.code == 1){
                    this.discussList = resp.data.data
                }
            })
        },
        handleMessage(event) {
            this.reply = JSON.parse(event.data)
            if (this.reply.code == 1) {
                this.commentDto = this.reply.data
                var discuss = this.discussList.find(discuss => discuss.id === this.commentDto.discussId)
                if (this.commentDto.parentid == 1) {
                    discuss.commentVoList.push(this.commentDto);
                    console.log("item添加完成")
                } else {
                    const item = discuss.commentVoList.find(item => item.id === this.commentDto.parentid)
                    if (!item) {
                        console.error("父评论不存在");
                        return;
                    }
                    if(!item.commentVoTrees) {
                        this.$set(item, 'commentVoTrees', []); // 使用 $set 初始化数组
                    }
                    item.commentVoTrees.push(this.commentDto);
                    console.log("treenode添加完成")
                }
            } else {
                this.$message({
                    message: this.reply.msg,
                    type: 'error'
                });
            }
            this.reply = {}
            this.commentDto = {}
        },
        setupWebSocket() {
            this.websocketServer = new WebSocketService("ws://localhost:8089/ws/comment/"+this.clientId);
            this.websocketServer.setMessageHandler(this.handleMessage.bind(this)); // 设置消息处理的回调函数
        },
        addComment(showId){
            if (this.comment.comment.trim() === "") {
                this.$message('你还没有评论！');
                this.comment1 = ""
                this.comment2 = ""
                this.comment3 = ""
                this.comment4 = ""
                this.comment = {}
                return;
            }
            this.showStates[showId] = false
            this.comment.userId = this.$store.state.user.id;
            this.websocketServer.websocket.send(JSON.stringify(this.comment));
            this.$message({
                message: '发送成功',
                type: 'success'
            });
            this.comment1 = ""
            this.comment2 = ""
            this.comment3 = ""
            this.comment4 = ""
        },
        uploadRemove(file, fileList){
            this.fileCount = 10 - fileList.length  
            if(fileList.length == 0){
                this.isFile = false
            }
        },
        uploadRemove2(file, fileList){
            this.fileCount = 10 - fileList.length  
            if(fileList.length == 0){
                this.isFile = false
            }
        },
        toggleShow(id, grande) {
            this.comment2 = "";
            this.comment3 = "";
            this.comment4 = "";
            this.discussList.forEach(discuss => {
                discuss.commentVoList.forEach(item => {
                    if (item.grande === grande && item.id !== id) {
                        this.$set(this.showStates, item.id, false);
                       
                    }
                    if (item.commentVoTrees) {
                        item.commentVoTrees.forEach(treeNode => {
                            if (treeNode.grande === grande && treeNode.id !== id) {
                                this.$set(this.showStates, treeNode.id, false);
                                
                            }
                        });
                    }
                })
            });
            this.$set(this.showStates, id, !this.showStates[id]);
        },
        uploadSuccess(response, file, fileList){
            this.isFile = true;
            this.fileCount = 10 - fileList.length  
        },
        uploadSuccess2(response, file, fileList){
            this.isFile2 = true;
            this.fileCount2 = 10 - fileList.length  
        },
        handleExceed(files, fileList){
            this.isFile = false
        },
        handleExceed2(files, fileList){
            this.isFile2 = false
        },
        addTextareaStyle(){
            var area = document.querySelectorAll(".area1 textarea")
            area.forEach(item => {
                item.style.height = "34px"
                item.style.resize = "none"
                item.style.minHeight = "34px"
            })
        },
        changeTableList(){
            var table = document.querySelectorAll(".tabList li")
            table.forEach(item => {
                item.addEventListener('click',function(){
                    table.forEach(li => {
                        li.classList.remove('tabLiChoice')
                    })
                    item.classList.add('tabLiChoice')
                })
            })
        }
    },
    mounted() {
        this.cid = this.$route.params.mid
        this.setupWebSocket()
        this.getDiscussList()
        this.addTextareaStyle()
        this.changeTableList()
        
    },

}
export default options
</script>
<style>
a {

    text-decoration: none;
    color: inherit;

}
.area1 textarea {
    color: #333;
    font-size: 16px;
    width: 670px;
}
.area1  textarea {
    background: transparent;
    border: none;
    font-size: 14px;
}
.topicBox .single .topicPost .judgePos .textInp textarea {
    background-color: #ffffff !important;
    border: none;
    height: 50px !important;
    min-height: 50px !important;
}

.classDiscussWrap .classDiscussBox .discussBoxLeft .discussSearch .el-input[data-v-0a4f679c] .el-input__inner {
    background: #f9f9f9;
    border: 1px solid transparent;
    color: #333;
    line-height: 12px;
    padding-bottom: 12px;
    padding-right: 50px;
    padding-top: 12px;
}

.iconfont[data-v-0a4f679c]{
    font-size: 16px;
}

.classDiscussWrap .classDiscussBox .discussBoxRight .postTopic .pushTopic .el-upload {
    bottom: -46px;
    height: 30px;
    left: 0;
    margin-bottom: 16px;
    opacity: 0;
    position: absolute;
    width: 80px;
}

</style>
<style scoped>
button, i, input, select, textarea {
    font-family: -apple-system, SF UI Text, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
    line-height: 1em;
}
.el-button[data-v-cb59604a] {
    background-color: #7fd6f5;
    border-color: #7fd6f5;
    color: #fff;
    float: right;
    font-size: 14px;
    height: 28px;
    margin-bottom: 16px;
    margin-right: 20px;
    padding: 0;
    width: 100px;
}


.classDiscussWrap .classDiscussBox .discussBoxRight .postTopic .pushTopic .el-upload-list {
    overflow: hidden;
}

.classDiscussWrap .classDiscussBox .discussBoxRight .postTopic .pushTopic .upload-icon {
    height: 35px;
    left: 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 35px;
}
.classDiscussWrap .classDiscussBox .discussBoxRight .postTopic .pushTopic .el-upload .el-upload__input {
    display: none;
}



.classDiscussWrap .classDiscussBox .discussBoxRight .postTopic {
    background: #fff;
    border-radius: 4px;
    -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .1);
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .1);
    height: auto;
    overflow: hidden;
    padding: 20px 10px 0 20px;
    width: 791px;
}
.classDiscussWrap .classDiscussBox .discussBoxRight {
    height: calc(100vh - 110px);
    overflow: auto;
    padding: 24px 0 0 10px;
}




.classDiscussWrap .classDiscussBox .discussBoxLeft .tabList .tabLiChoice {
    background: rgba(80, 150, 245, .06);
    border-left: 3px solid #0897B4;
    color: #0897B4;
    font-weight: 500;
}

.classDiscussWrap {
    height: auto;
    width: 100%;
}
.classDiscussWrap .classDiscussBox {
    margin: 0 auto;
    min-height: calc(100vh - 90px);
    overflow: hidden;
    padding: 0 0 0 calc(-242px + 50%);
    position: relative;
    width: 100%;
}
.classDiscussWrap .classDiscussBox .discussBoxLeft {
    background: #fff;
    border-radius: 4px;
    -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .1);
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .1);
    height: calc(100vh - 134px);
    left: calc(50% - 600px);
    min-height: 300px;
    position: absolute;
    top: 24px;
    width: 320px;
}

.classDiscussWrap .classDiscussBox .discussBoxRight .postTopicBottom {
    border-bottom: 1px solid #ebebeb;
    height: 30px;
    width: 791px;
}


.classDiscussWrap .classDiscussBox .discussBoxLeft .discussSearch {
    height: 80px;
    position: relative;
}
.classDiscussWrap .classDiscussBox .discussBoxLeft .discussSearch .el-input {
    font-size: 14px;
    height: 40px;
    margin-left: 20px;
    margin-top: 24px;
    width: 280px;
}
.classDiscussWrap .classDiscussBox .discussBoxLeft .tabList li i {
    font-size: 18px;
    margin-left: 35px;
    margin-right: 5px;
}

.classDiscussWrap .classDiscussBox .discussBoxLeft .tabList {
    margin-top: 5px;
    padding: 0px
}
.classDiscussWrap .classDiscussBox .discussBoxLeft .tabList li:hover {
    color: #0897B4;
}
.classDiscussWrap .classDiscussBox .discussBoxLeft .tabList .tabLiChoice {
    background: rgba(80, 150, 245, .06);
    border-left: 3px solid #0897B4;
    color: #0897B4;
    font-weight: 500;
}

.classDiscussWrap .classDiscussBox .discussBoxLeft .tabList li {
    border-left: 3px solid #fff;
    color: #666;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    height: 48px;
    line-height: 48px;
    position: relative;
}

.classDiscussWrap .classDiscussBox .discussBoxLeft .tabList li .right-arrow {
    margin-right: 0;
    position: absolute;
    right: 20px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}
li{
    list-style-type: none
}
.classDiscussWrap .classDiscussBox .discussBoxRight .postTopic .areaText {
    background: #fafafa;
    border-radius: 4px;
    height: auto;
    min-height: 143px;
    width: 731px;
}
.classDiscussWrap .classDiscussBox .discussBoxRight .postTopic .areaText .areaTitBox {
    position: relative;
}
.classDiscussWrap .classDiscussBox .discussBoxRight .postTopic .areaText .areaTitBox .titCount {
    bottom: 10px;
    color: #666;
    position: absolute;
    right: 15px;
}
.classDiscussWrap .classDiscussBox .discussBoxRight .postTopic .areaText .areaTitBox .area1 {
    background: -o-linear-gradient(#eee, #eee) no-repeat;
    background: -webkit-gradient(linear, left top, left bottom, from(#eee), to(#eee)) no-repeat;
    background: linear-gradient(#eee, #eee) no-repeat;
    background-position: 50% 100%;
    background-size: 731px 1px;
    padding: 5px 0;
}
.classDiscussWrap .classDiscussBox .discussBoxRight .postTopic .areaText .tseUeditor {
    height: auto !important;
}

.tseUeditor {
    padding-left: 10px;
    padding-right: 10px;
}
.classDiscussWrap .classDiscussBox .discussBoxRight .postTopic .pushTopic {
    font-size: 0;
    padding-top: 20px;
    position: relative;
    width: 711px;
}

.classDiscussWrap .classDiscussBox .discussBoxRight .postTopic .postBtn {
    height: 50px;
    overflow: hidden;
}
.classDiscussWrap .classDiscussBox .discussBoxRight .postTopic .postBtn .imgC {
    background: rgba(80, 150, 245, .1);
    border-radius: 15px;
    color: #4182fa;
    cursor: pointer;
    float: left;
    font-size: 12px;
    font-weight: 400;
    height: 30px;
    line-height: 30px;
    text-align: center;
    width: 80px;
}
.classDiscussWrap .classDiscussBox .discussBoxRight .postTopic .postBtn .imgC i {
    float: left;
    font-size: 14px;
    margin-left: 20px;
    margin-top: 8px;
}
.classDiscussWrap .classDiscussBox .discussBoxRight .postTopic .postBtn .imgC span {
    float: left;
    margin-left: 2px;
}
.classDiscussWrap .classDiscussBox .discussBoxRight .postTopic .postBtn .tip {
    color: #9b9b9b;
    float: left;
    margin-top: 5px;
    display: none;
}
.classDiscussWrap .classDiscussBox .discussBoxRight .postTopic .postBtn .tip .tip-attention {
    margin-right: 10px;
}

.el-button[data-v-cb59604a]:hover {
    background-color: #00aeec;
    border-color: #00aeec;
}
.classDiscussWrap .classDiscussBox .discussBoxRight .topicList {
    position: relative;
}
.topicBox {
    width: 791px;
}
.topicBox .imgTip {
    height: 200px;
    margin: 168px auto 0;
    width: 170px;
}
.topicBox .imgTip img {
    width: 100%;
}
img {
    vertical-align: middle;
}
img {
    border: 0;
}
.topicBox .imgTip p {
    color: #666;
    font-size: 12px;
    font-weight: 400;
    line-height: 30px;
    text-align: center;
}

p {
    margin: 0 0 10px;
}
.topicBox .single {
    border-bottom: 1px solid #ebebeb;
    padding-top: 24px;
}
.topicBox .single .topicPost .topicTop {
    height: 40px;
    overflow: hidden;
}
.topicBox .single .topicPost .topicTop .tit {
    color: #333;
    float: left;
    font-size: 18px;
    font-weight: 500;
    height: 25px;
    line-height: 28px;
    max-width: 545px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.topicBox .single .topicPost .topicInfoB {
    background: #fcfcfc;
    border-radius: 4px;
    cursor: pointer;
    height: 108px;
    width: 791px;
}
.topicBox .single .topicPost .topicInfoB .imgBox {
    background: url(https://onlinecourseweb.oss-cn-beijing.aliyuncs.com/bb28a824859b4d5e4e40cd3034f6524d.unit_bg.png) no-repeat 50%;
    background-size: 100% 100%;
    float: left;
    height: 84px;
    margin-left: 12px;
    margin-top: 12px;
    position: relative;
    width: 150px;
}
.topicBox .single .topicPost .topicInfoB .imgBox .iconfont {
    color: #fff;
    font-size: 32px;
    left: 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
.topicBox .single .topicPost .topicInfoB .infoBox {
    border-radius: 4px;
    float: left;
    height: 84px;
    margin-left: 12px;
    margin-top: 12px;
    width: 512px;
}
.topicBox .single .topicPost .topicInfoB .infoBox div:first-of-type {
    color: #333;
    font-size: 14px;
    font-weight: 400;
    height: 40px;
    line-height: 40px;
    margin-top: 10px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 512px;
}
.topicBox .single .topicPost .topicInfoB .infoBox div:first-of-type i {
    font-size: 16px;
    margin-right: 5px;
    vertical-align: middle;
}
.topicBox .single .topicPost .topicInfoB .infoBox div:nth-of-type(2) {
    color: #666;
    font-size: 12px;
    font-weight: 400;
    height: 17px;
    line-height: 17px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 512px;
}

.topicBox .single .topicPost .topicInfoB:hover {
    background: #f7f7f7;
}
.topicBox .single .topicPost .judgeNumBox {
    height: 50px;
    line-height: 50px;
    margin-bottom: 5px;
}
.topicBox .single .topicPost .judgeNumBox .nameInfo .names {
    float: left;
    overflow: hidden;
}
.topicBox .single .topicPost .judgeNumBox .nameInfo .names .div1 {
    background: url(https://onlinecourseweb.oss-cn-beijing.aliyuncs.com/bb28a824859b4d5e4e40cd3034f6524d.unit_bg.png) no-repeat 50% / cover;
    border-radius: 50%;
    float: left;
    height: 24px;
    margin-right: 8px;
    margin-top: 12px;
    overflow: hidden;
    width: 24px;
}
.topicBox .single .topicPost .judgeNumBox .nameInfo .names .span1 {
    font-weight: 500;
}
.topicBox .single .topicPost .judgeNumBox .nameInfo .names span {
    margin-right: 8px;
}

.topicBox .single .topicPost .judgeNumBox .nameInfo .names span {
    margin-right: 8px;
}


.topicBox .single .topicPost .judgeNumBox .nameInfo .names .span2 {
    color: #999;
    font-size: 12px;
}

.topicBox .single .topicPost .judgeNumBox .nameInfo .names span {
    margin-right: 8px;
}

.topicBox .single .topicPost .judgeNumBox .judgeNum {
    float: right;
}
.topicBox .single .topicPost .judgeNumBox .judgeNum .delTopicCli {
    display: none;
}

.topicBox .single .topicPost .judgeNumBox .judgeNum span {
    color: #666;
    cursor: pointer;
    float: left;
    font-size: 12px;
    height: 12px;
    line-height: 12px;
    margin-right: 8px;
    margin-top: 15px;
}
.topicBox .single .topicPost .judgeNumBox .judgeNum span {
    color: #666;
    cursor: pointer;
    float: left;
    font-size: 12px;
    height: 12px;
    line-height: 12px;
    margin-right: 8px;
    margin-top: 15px;
}
.topicBox .single .topicPost .judgeNumBox .judgeNum span i {
    font-size: 14px;
    margin-right: 3px;
    padding-top: 1px;
}

.is_praised {
    color: #ebebeb;
}
.topicBox .single .topicPost .judgeNumBox .judgeNum span i {
    font-size: 14px;
    margin-right: 3px;
    padding-top: 1px;
}
.topicBox .single .topicPost .judgeNumBox .judgeNum .goCliJudge {
    border-left: 1px solid #ebebeb;
    font-weight: 500;
    margin-right: 0;
    margin-top: 15px;
    padding-left: 8px;
}

.topicBox .single .topicPost .judgeNumBox .judgeNum span {
    color: #666;
    cursor: pointer;
    float: left;
    font-size: 12px;
    height: 12px;
    line-height: 12px;
    margin-right: 8px;
    margin-top: 15px;
}
.topicBox .single .topicPost .judgeNumBox .judgeNum .hover-change:hover {
    color: #ebebeb;
}
.topicBox .single .topicPost .judgeNumBox .judgeNum .hover-change:hover {
    color: #ebebeb;
}

.topicBox .single .topicPost .judgePos {
    background: #ffffff;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    height: auto;
    margin-top: 5px;
}

.topicBox .single .topicPost .judgePos .textInp {
    border-bottom: 1px solid #ebebeb;
    margin-top: 10px;
}
.el-input--medium {
    font-size: 14px;
}


.topicBox .single .topicPost .judgePos .pushJudgeTopic {
    padding-left: 20px;
    padding-top: 16px;
    position: relative;
    width: 100%;
}
.topicBox .single .topicPost .judgePos .pushJudgeTopic .el-upload-list {
    height: 70px;
    overflow: hidden;
    width: 100%;
}
.topicBox .single .topicPost .judgePos .pushJudgeTopic .el-upload {
    bottom: -46px;
    height: 30px;
    left: 20px;
    margin-bottom: 16px;
    opacity: 0;
    position: absolute;
    width: 80px;
}
.topicBox .single .topicPost .judgePos .pushJudgeTopic .upload-icon {
    height: 35px;
    left: 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 35px;
}
.topicBox .single .topicPost .judgePos .pushJudgeTopic .el-upload .el-upload__input {
    display: none;
}
.topicBox .single .topicPost .judgePos .judgeCliP {
    overflow: hidden;
}
.topicBox .single .topicPost .judgePos .judgeCliP .imgC {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
;
    float: left;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: rgba(80, 150, 245, .1);
    border-radius: 15px;
    color: #4182fa;
    font-size: 12px;
    font-weight: 400;
    height: 30px;
    line-height: 30px;
    margin-bottom: 16px;
    margin-left: 20px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
}
.topicBox .single .topicPost .judgePos .judgeCliP .imgC i {
    font-size: 14px;
}
.topicBox .single .topicPost .judgePos .judgeCliP .imgC span {
    margin-left: 2px;
}
.topicBox .single .topicPost .judgePos .judgeCliP .tip {
    color: #9b9b9b;
    float: left;
    margin-left: 20px;
    margin-top: 5px;
}
.topicBox .single .topicPost .judgePos .judgeCliP .tip .tip-attention {
    margin-right: 10px;
}
.topicBox .single .topicPost .judgePos .judgeCliP .el-button {
    background-color: #7fd6f5;
    border-color: #7fd6f5;
    color: #fff;
    float: right;
    font-size: 14px;
    height: 28px;
    margin-bottom: 16px;
    margin-right: 20px;
    padding: 0;
    width: 100px;
}
.el-button:hover {
    background-color: #00aeec !important;
    border-color: #00aeec !important;
}
.topicBox .single .topicPost .singleJudge {
    border-top: 1px solid #f3f3f3;
    height: auto;
    margin-left: 32px;
    padding-bottom: 20px;
    padding-top: 10px;
    width: 670px;
}
.topicBox .single .topicPost .singleJudge .singleJudgeInfo {
    height: 24px;
}
.topicBox .single .topicPost .singleJudge .singleJudgeInfo .div1 {
    border-radius: 50%;
    float: left;
    height: 24px;
    margin-left: 3px;
    margin-right: 12px;
    overflow: hidden;
    width: 24px;
}
.topicBox .single .topicPost .singleJudge .singleJudgeInfo .div2 {
    color: #333;
    float: left;
    font-size: 14px;
    font-weight: 500;
    height: 20px;
    line-height: 20px;
    margin-top: 2px;
}

.topicBox .single .topicPost .singleJudge .singleWen {
    color: #333;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    padding-bottom: 10px;
    padding-left: 40px;
    padding-top: 10px;
    text-align: justify;
    white-space: pre-wrap;
    word-wrap: break-word;
}
.topicBox .single .topicPost .singleJudge .judgeImgView {
    margin-top: -20px;
    padding-left: 40px;
}
.topicBox .single .topicPost .singleJudge .singleT {
    height: 33px;
    padding-top: 12px;
}
.topicBox .single .topicPost .singleJudge .singleT .time {
    color: #999;
    float: left;
    font-size: 12px;
    font-weight: 400;
    margin-left: 40px;
}
.topicBox .single .topicPost .singleJudge .singleT .singleCli {
    cursor: pointer;
    float: right;
}
.topicBox .single .topicPost .singleJudge .singleT .singleCli .del {
    border-right: 1px solid #ebebeb;
    color: #fa4949;
    display: none;
    height: 12px;
    line-height: 14px;
    margin-top: 2px;
    padding-right: 7px;
}

.topicBox .single .topicPost .singleJudge .singleT .singleCli div {
    color: #999;
    float: left;
    font-size: 12px;
    font-weight: 400;
}
.topicBox .single .topicPost .singleJudge .singleT .singleCli .sureCli {
    color: #666;
    margin-left: 7px;
}

.topicBox .single .topicPost .singleJudge .singleT .singleCli div {
    color: #999;
    float: left;
    font-size: 12px;
    font-weight: 400;
}
.topicBox .single .topicPost .singleJudge .singleT .singleCli div i {
    float: left;
    font-size: 14px;
}

.is_praised {
    color: #1769fe;
}
.topicBox .single .topicPost .singleJudge .singleT .singleCli div span {
    float: left;
    line-height: 16px;
    margin-left: 3px;
}
.topicBox .single .topicPost .singleJudge .singleT .singleCli .comment {
    color: #666;
    margin-left: 7px;
}

.topicBox .single .topicPost .singleJudge .singleT .singleCli div {
    color: #999;
    float: left;
    font-size: 12px;
    font-weight: 400;
}
.topicBox .single .topicPost .singleJudge .singleT .singleCli div i {
    float: left;
    font-size: 14px;
}
.topicBox .single .topicPost .singleJudge .singleT .singleCli div span {
    float: left;
    line-height: 16px;
    margin-left: 3px;
}
.topicBox .single .topicPost .singleJudge .replyFirstInputBoxContainer .replyFirstInputBox {
    border: 1px solid #1769fe;
    border-radius: 4px;
    height: auto;
    margin-bottom: 10px;
    margin-left: 40px;
    width: 630px;
}
.topicBox .single .topicPost .singleJudge .replyFirstInputBoxContainer .replyFirstInputBox .el-textarea {
    border: none;
}
.topicBox .single .topicPost .singleJudge .replyFirstInputBoxContainer .replyFirstInputBox .el-textarea textarea {
    background: transparent;
    border: none;
    border-bottom: 1px solid #ebebeb;
    height: 60px !important;
    min-height: 60px !important;
    padding-top: 15px;
}
.topicBox .single .topicPost .singleJudge .replyFirstInputBoxContainer .replyFirstInputBox .replyBtns {
    overflow: hidden;
    padding-bottom: 20px;
}
.topicBox .single .topicPost .singleJudge .replyFirstInputBoxContainer .replyFirstInputBox .replyBtns .btns {
    float: right;
}
.topicBox .single .topicPost .singleJudge .replyFirstInputBoxContainer .replyFirstInputBox .replyBtns .btns .btn1 {
    color: #666;
    cursor: pointer;
    float: left;
    font-size: 14px;
    font-weight: 500;
    height: 28px;
    line-height: 28px;
    margin-right: 40px;
    margin-top: 22px;
    text-align: center;
}
.topicBox .single .topicPost .singleJudge .replyFirstInputBoxContainer .replyFirstInputBox .replyBtns .btns .btn2 {
    background-color: #7fd6f5;
    border-color: #7fd6f5;
    color: #fff;
    cursor: pointer;
    float: left;
    height: 28px;
    margin-right: 20px;
    margin-top: 22px;
    padding: 0;
    width: 100px;
}
.topicBox .single .topicPost .singleJudge .replyBox {
    background: #fafafa;
    border-radius: 4px;
    margin-left: 38px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    width: 630px;
}
.topicBox .single .topicPost .singleJudge .replyBox .replyB {
    padding-top: 10px;
}
.topicBox .single .topicPost .singleJudge .replyBox .replyB .replyBInfo .span1 {
    color: #333;
    font-size: 14px;
    font-weight: 500;
}

.topicBox .single .topicPost .singleJudge .replyBox .replyB .replyBInfo .span2 {
    color: #666;
    font-size: 14px;
    font-weight: 400;
    margin-left: 5px;
    margin-right: 5px;
}
.topicBox .single .topicPost .singleJudge .replyBox .replyB .replyBInfo .span3 {
    color: #333;
    font-size: 14px;
    font-weight: 500;
}
.topicBox .spanTeacher {
    color: #ff9243;
    font-size: 12px;
    font-weight: 400;
}
.topicBox .single .topicPost .singleJudge .replyBox .replyB .replyBInfo .span4 {
    color: #666;
    font-size: 14px;
    font-weight: 400;
    white-space: pre-wrap;
    word-wrap: break-word;
}
.topicBox .single .topicPost .singleJudge .replyBox .replySingleT {
    height: 33px;
    padding-top: 3px;
}
.topicBox .single .topicPost .singleJudge .replyBox .replySingleT .time {
    color: #999;
    float: left;
    font-size: 12px;
    font-weight: 400;
}
.topicBox .single .topicPost .singleJudge .replyBox .replySingleT .singleCli {
    cursor: pointer;
    float: right;
}
.topicBox .single .topicPost .singleJudge .replyBox .replySingleT .singleCli .del {
    border-right: 1px solid #ebebeb;
    color: #fa4949;
    display: none;
    height: 12px;
    line-height: 14px;
    margin-top: 2px;
    padding-right: 7px;
}

.topicBox .single .topicPost .singleJudge .replyBox .replySingleT .singleCli div {
    color: #999;
    float: left;
    font-size: 12px;
    font-weight: 400;
}
.topicBox .single .topicPost .singleJudge .replyBox .replySingleT .singleCli .sureCli {
    margin-left: 7px;
}
.topicBox .single .topicPost .singleJudge .replyBox .replySingleT .singleCli div {
    color: #999;
    float: left;
    font-size: 12px;
    font-weight: 400;
}
.topicBox .single .topicPost .singleJudge .replyBox .replySingleT .singleCli div i {
    float: left;
    font-size: 14px;
}

.topicBox .single .topicPost .topicTop .tit:hover {
    color: #3963b1;
    cursor: pointer;
}

.is_praised {
    color: #1769fe;
}
.topicBox .single .topicPost .singleJudge .replyBox .replySingleT .singleCli div span {
    float: left;
    line-height: 16px;
    margin-left: 3px;
}.topicBox .single .topicPost .singleJudge .replyBox .replySingleT .singleCli .commenting {
    margin-left: 7px;
    margin-top: -1px;
}
.topicBox .single .topicPost .singleJudge .replyBox .replySingleT .singleCli div {
    color: #999;
    float: left;
    font-size: 12px;
    font-weight: 400;
}
.topicBox .single .topicPost .singleJudge .replyBox .replyB .replyInputBoxContainer {
    
    padding-bottom: 16px;
}
.topicBox .single .topicPost .singleJudge .replyBox .replyB .replyInputBoxContainer .replyInputBox {
    background-color: #fff;
    border: 1px solid #1769fe;
    border-radius: 4px;
    height: auto;
    overflow: hidden;
}

.topicBox .single .topicPost .singleJudge .replyBox .replyB .replyInputBoxContainer .replyInputBox .el-textarea {
    border: none;
}
.topicBox .single .topicPost .singleJudge .replyBox .replyB .replyInputBoxContainer .replyInputBox .el-textarea textarea {
    background: transparent;
    border: none;
    border-bottom: 1px solid #ebebeb;
    height: 60px !important;
    min-height: 60px !important;
    padding-top: 15px;
}
.topicBox .single .topicPost .singleJudge .replyBox .replyB .replyInputBoxContainer .replyInputBox .replyBtns {
    overflow: hidden;
    padding-bottom: 20px;
}
.topicBox .single .topicPost .singleJudge .replyBox .replyB .replyInputBoxContainer .replyInputBox .replyBtns .btns {
    float: right;
}
.topicBox .single .topicPost .singleJudge .replyBox .replyB .replyInputBoxContainer .replyInputBox .replyBtns .btns .btn1 {
    color: #666;
    cursor: pointer;
    float: left;
    font-size: 14px;
    font-weight: 500;
    height: 28px;
    line-height: 28px;
    margin-right: 40px;
    margin-top: 22px;
    text-align: center;
}
.topicBox .single .topicPost .singleJudge .replyBox .replyB .replyInputBoxContainer .replyInputBox .replyBtns .btns .btn2 {
    background-color: #7fd6f5;
    border-color: #7fd6f5;
    color: #fff;
    cursor: pointer;
    float: left;
    height: 28px;
    margin-right: 20px;
    margin-top: 22px;
    padding: 0;
    width: 100px;
}
.topicBox .single .topicPost .singleJudge .replyBox>div+div {
    border-top: 1px solid #ebebeb;
}
.topicBox .single .topicPost .singleJudge .replyBox .replyA {
    padding-top: 10px;
}
.topicBox .single .topicPost .singleJudge .replyBox .replyA .replyAInfo {
    overflow: hidden;
}
.topicBox .single .topicPost .singleJudge .replyBox .replyA .replyAInfo .span1 {
    color: #333;
    font-size: 14px;
    font-weight: 500;
}

.topicBox .single .topicPost .singleJudge .replyBox .replyA .replyAInfo span {
    line-height: 20px;
}
.topicBox .single .topicPost .singleJudge .replyBox .replyA .replyAInfo span {
    line-height: 20px;
}

.topicBox .single .topicPost .singleJudge .replyBox .replyA .replyAInfo span {
    line-height: 20px;
}
.topicBox .single .topicPost .singleJudge .replyBox .replyA .replyAInfo .span4 {
    color: #666;
    font-size: 14px;
    font-weight: 400;
    white-space: pre-wrap;
    word-wrap: break-word;
}

.topicBox .single .topicPost .singleJudge .replyBox .replyA .replyAInfo span {
    line-height: 20px;
}

.topicBox .single .topicPost .singleJudge .replyBox .replySingleT {
    height: 33px;
    padding-top: 3px;
}.topicBox .single .topicPost .singleJudge .replyBox .replySingleT .time {
    color: #999;
    float: left;
    font-size: 12px;
    font-weight: 400;
}
.topicBox .single .topicPost .singleJudge .replyBox .replySingleT .singleCli {
    cursor: pointer;
    float: right;
}
.topicBox .single .topicPost .singleJudge .replyBox .replySingleT .singleCli .del {
    border-right: 1px solid #ebebeb;
    color: #fa4949;
    display: none;
    height: 12px;
    line-height: 14px;
    margin-top: 2px;
    padding-right: 7px;
}
.topicBox .single .topicPost .singleJudge .replyBox .replySingleT .singleCli div {
    color: #999;
    float: left;
    font-size: 12px;
    font-weight: 400;
}
.topicBox .single .topicPost .singleJudge .replyBox .replySingleT .singleCli .sureCli {
    margin-left: 7px;
}
.topicBox .single .topicPost .singleJudge .replyBox .replySingleT .singleCli div {
    color: #999;
    float: left;
    font-size: 12px;
    font-weight: 400;
}
.topicBox .single .topicPost .singleJudge .replyBox .replySingleT .singleCli div i {
    float: left;
    font-size: 14px;
}
.is_praised {
    color: #1769fe;
}
.topicBox .single .topicPost .singleJudge .replyBox .replySingleT .singleCli div span {
    float: left;
    line-height: 16px;
    margin-left: 3px;
}
.topicBox .single .topicPost .singleJudge .replyBox .replySingleT .singleCli .commenting {
    margin-left: 7px;
    margin-top: -1px;
}

.topicBox .single .topicPost .singleJudge .replyBox .replySingleT .singleCli div {
    color: #999;
    float: left;
    font-size: 12px;
    font-weight: 400;
}
.topicBox .single .topicPost .singleJudge .replyBox .replyA .replyInputBoxContainer {
    padding-bottom: 16px;
}
.topicBox .single .topicPost .singleJudge .replyBox .replyA .replyInputBoxContainer .replyInputBox {
    background-color: #fff;
    border: 1px solid #1769fe;
    border-radius: 4px;
    height: auto;
}
.topicBox .single .topicPost .singleJudge .replyBox .replyA .replyInputBoxContainer .replyInputBox .el-textarea {
    border: none;
}

.topicBox .single .topicPost .singleJudge .replyBox .replyA .replyInputBoxContainer .replyInputBox .el-textarea textarea {
    background: transparent;
    border: none;
    border-bottom: 1px solid #ebebeb;
    height: 60px !important;
    min-height: 60px !important;
    padding-top: 15px;
}

.topicBox .single .topicPost .singleJudge .replyBox .replySingleT .singleCli:hover .del {
    color: #fa4949;
    display: block;
}

.topicBox .single .topicPost .singleJudge .replyBox .replyA .replyInputBoxContainer .replyInputBox .replyBtns {
    overflow: hidden;
    padding-bottom: 20px;
}
.topicBox .single .topicPost .singleJudge .replyBox .replyA .replyInputBoxContainer .replyInputBox .replyBtns .btns {
    float: right;
}

.topicBox .single .topicPost .singleJudge .replyBox .replyA .replyInputBoxContainer .replyInputBox .replyBtns .btns .btn1 {
    color: #666;
    cursor: pointer;
    float: left;
    font-size: 14px;
    font-weight: 500;
    height: 28px;
    line-height: 28px;
    margin-right: 40px;
    margin-top: 22px;
    text-align: center;
}

.topicBox .single .topicPost .singleJudge .replyBox .replyA .replyInputBoxContainer .replyInputBox .replyBtns .btns .btn2 {
    background-color: #7fd6f5;
    border-color: #7fd6f5;
    color: #fff;
    cursor: pointer;
    float: left;
    height: 28px;
    margin-right: 20px;
    margin-top: 22px;
    padding: 0;
    width: 100px;
}
.topicBox .single .topicPost .viewAllComments {
    color: #666;
    font-size: 12px;
    font-weight: 400;
    height: 40px;
    padding-top: 4px;
}
.topicBox .single .topicPost .viewAllComments span {
    cursor: pointer;
    margin-left: 40px;
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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.el-icon-arrow-right:before {
    content: "\E6E0";
}
.topicBox .single .topicPost .viewAllComments span:hover {
    color: #4182fa;
}


</style>