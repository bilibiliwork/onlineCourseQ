<template>
    <div data-v-648695f9 class="lesson_rightcon">

        <div data-v-648695f9 data-v-0f935fab class="lesson_right content_right" showtlstatu="0"
            score_info="[object object]">
            <div data-v-0f935fab class="hover_overflow" style="height: 100%;">
                <div data-v-0f935fab style="width: 791px; padding-bottom: 70px;">
                    <p data-v-0f935fab class="title">
                        脑科学研究的历史
                    </p>
                    <div data-v-0f935fab class="list">
                        <div data-v-0f935fab class="t2 fuwenben xmodule_display xmodule_HtmlModule">
                            <div class="custom_ueditor_cn_body">
                                <p>{{ discuss.content }}</p>
                            </div>
                        </div>
                    </div>
                    <div data-v-0f935fab data-v-13a92561 class="control"></div>
                    <div data-v-0f935fab class="list">
                        <p data-v-0f935fab class="t1" style="margin-bottom: 0px;">
                            评论({{ total }} 条)
                        </p>
                        <div data-v-0f935fab class="topicBox" provider="xuetang">
                            <div class="imgTip" style="display: none;">
                                <img src="">
                                <p>这里空空如也</p>
                            </div>
                            <div class="single">
                                <div class="topicPost">
                                    <div class="judgePos show" style="border-color: rgb(235,235, 235);">
                                        <div class="textInp">
                                            <el-input @blur="blur()" @focus="focus()" class="el-input--medium"
                                                type="textarea" :rows="2" placeholder="请输入内容" v-model="comment1">
                                            </el-input>
                                        </div>
                                        <div class="pushJudgeTopic">
                                            <div>
                                                <el-upload action="https://www.mocky.io/v2/5185415ba171ea3a00704eed/posts/"
                                                    list-type="picture-card" :limit="limit" :on-exceed="handleExceed"
                                                    :on-success="uploadSuccess" :on-remove="uploadRemove">
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
                                            <div id="tip" class="tip">
                                                <i class="iconfont tip-attention">&#xe648;</i>
                                                最多还可上传{{fileCount}}张
                                            </div>
                                            <el-button
                                                class="el-button--medium buttonhoverblank " @click="commentFunction1()">发布</el-button>
                                        </div>
                                    </div>
                                    <div v-for="item in commentList" :key="item.id" class="singleJudge ifInStudy">
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
                                                <div class="del" @click="deleteComment(item.id)" v-if="item.user.id == $store.state.user.id" >删除</div>
                                                <div class="sureCli">
                                                    <i v-if="item.isLike == true" class="iconfont is_praised" style="font-size: 16px;" @click="unLike(item.id)">&#xe62d;</i>
                                                    <i v-if="item.isLike == false" class="iconfont i1"  @click="like(item.id)">&#xe651;</i>
                                                    <span>{{ item.like }}</span>
                                                </div>
                                                <div class="comment"  @click="toggleShow(item.id,item.grande)">
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
                                                            <div type="text" class="btn1" @click="toggleShow(item.id,item.grande)">取消</div>
                                                            <el-button
                                                                class="btn2 el-button--medium buttonhoverblank " @click="commentFunction2(item.userId,item.id)">回复</el-button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-collapse-transition>
                                        <div v-if="item.commentVoTrees != null"
                                         class="replyBox">
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
                                                            <div class="del" @click="deleteComment(treeNodes.id)" v-if="treeNodes.user.id == $store.state.user.id" >删除</div>
                                                            <div class="sureCli">
                                                                <i v-if="treeNodes.isLike == true" class="iconfont is_praised" style="font-size: 16px;" @click="unLike(treeNodes.id)" >&#xe62d;</i>
                                                                <i v-if="treeNodes.isLike == false"  class="iconfont i1"  @click="like(treeNodes.id)">&#xe651;</i>
                                                                <span>{{ treeNodes.like }}</span>
                                                            </div>
                                                                <div class="commenting" @click="toggleShow(treeNodes.id,treeNodes.grande)">回复</div>
                                                        </div>
                                                    </div>
                                                    <el-collapse-transition>
                                                        <div v-show="showStates[treeNodes.id]" class="replyInputBoxContainer">
                                                            <div class="replyInputBox">
                                                                <el-input @blur="blur()" @focus="focus()"
                                                                    class="el-input--medium" type="textarea" :rows="2"
                                                                    placeholder="请输入内容" v-model="comment3">
                                                                </el-input>
                                                                <div class="replyBtns">
                                                                    <div class="btns">
                                                                        <div type="text" class="btn1" @click="toggleShow(treeNodes.id,treeNodes.grande)">取消</div>
                                                                        <el-button
                                                                            class="btn2 el-button--medium buttonhoverblank " @click="commentFunction3(treeNodes.userId,item.id,treeNodes.id)">回复</el-button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </el-collapse-transition>
                                                </div>
                                                <div v-if="treeNodes.isgrande == 3"
                                                 class="replyB">
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
                                                            <div class="del" @click="deleteComment(treeNodes.id)" v-if="treeNodes.user.id == $store.state.user.id" >删除</div>
                                                            <div class="sureCli">
                                                                <i v-if="treeNodes.isLike == true" class="iconfont is_praised" style="font-size: 16px;" @click="unLike(treeNodes.id)">&#xe62d;</i>
                                                                <i v-if="treeNodes.isLike == false"  class="iconfont i1"  @click="like(treeNodes.id)">&#xe651;</i>
                                                                <span>{{ treeNodes.like }}</span>
                                                            </div>
                                                            <div class="commenting" @click="toggleShow(treeNodes.id,treeNodes.grande)">
                                                                回复
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <el-collapse-transition>
                                                        <div v-show="showStates[treeNodes.id]" class="replyInputBoxContainer">
                                                            <div class="replyInputBox">
                                                                <el-input @blur="blur()" @focus="focus()"
                                                                    class="el-input--medium" type="textarea" :rows="2"
                                                                    placeholder="请输入内容" v-model="comment4">
                                                                </el-input>
                                                                <div class="replyBtns">
                                                                    <div class="btns">
                                                                        <div type="text" class="btn1" @click="toggleShow(treeNodes.id,treeNodes.grande)">取消</div>
                                                                        <el-button
                                                                            class="btn2 el-button--medium buttonhoverblank " @click="commentFunction4(treeNodes.userId,item.id,treeNodes.id)">回复</el-button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </el-collapse-transition>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import _axios from '@/axios/myaxios'
import WebSocketService from '@/websocket/websocketService';

const options = {
    /* created() {
        console.log(this.commentList)
        this.commentList.forEach(item => {
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
            console.log("执行了函数")
            if(!val){
                document.querySelector("#imgC").style.display = "block"
                document.querySelector("#tip").style.display = "none"
                document.querySelector(".el-upload.el-upload--picture-card.el-upload-change").classList.remove("el-upload-change")
            }else{
                document.querySelector("#imgC").style.display = "none"
                document.querySelector("#tip").style.display = "block"
                document.querySelector(".el-upload.el-upload--picture-card").classList.add("el-upload-change")
                document.querySelector(".el-button.el-button--medium.buttonhoverblank.el-button--default").classList.remove("canNotCli")
            }
        }
    },
    data () {
        return {
            comment:{},
            discuss:{},
            discussId:0,
            commentList:[],
            textarea:"",
            fileCount:10,
            isFile:false,
            limit:10,
            showStates: [], // 存储每个 treeNodes 的显示状态
            comment1:"",
            comment2:"",
            comment3:"",
            comment4:"",
            toUserId:0,
            websocketServer: null,
            commentDto:{},       //接收websocket发送的comment类，添加成功之后就重置为{}
            clientId:this.generateClientId(),
            reply:{},
            total:0
        }
    },
    methods: {
        generateClientId() {
            return Math.random().toString(36).substr(2);
        },
        toggleShow(id, grande) {
            this.comment2 = "";
            this.comment3 = "";
            this.comment4 = "";
            this.commentList.forEach(item => {
                if(item.grande === grande && item.id !== id){
                    this.$set(this.showStates, item.id, false);
                }
                if (item.commentVoTrees) {
                    item.commentVoTrees.forEach(treeNode => {
                        if (treeNode.grande === grande && treeNode.id !== id) {
                            this.$set(this.showStates, treeNode.id, false);
                        }
                    });
                }
            });
            this.$set(this.showStates, id, !this.showStates[id]);
        },
        uploadRemove(file, fileList){
            this.fileCount = 10 - fileList.length  
            if(fileList.length == 0){
                this.isFile = false
            }
        },
        uploadSuccess(response, file, fileList){
            this.isFile = true;
            this.fileCount = 10 - fileList.length  
        },
        handleExceed(files, fileList){
            this.isFile = false
        },
        focus(){
            document.querySelector(".judgePos.show").style.borderColor = "#1769fe"
        },
        blur(){
            document.querySelector(".judgePos.show").style.borderColor = "#ebebeb"
        },
        getDiscuss(){
            _axios.get("/discuss/"+this.discussId).then(resp => {
                this.discuss = resp.data.data
            })
        },
        deleteComment(commentId){
            _axios.delete("/comment/delete/" + commentId).then(resp => {
                if (resp.data.code === 1) {
                    this.$message({
                        message: '删除成功!',
                        type: 'success'
                    });
                    this.commentList = this.commentList.filter(item => item.id !== commentId);
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
                    this.commentList = this.commentList.map(item => {
                        if (item.commentVoTrees?.length) {
                            item.commentVoTrees = removeCommentFromTree(item.commentVoTrees);
                        }
                        return item;
                    });
                }
            })
        },
        getCommentByDid(){
            _axios.get("/comment/discuss/"+this.discussId).then(resp => {
                this.commentList = resp.data.data
            })
        },
        like(treeNodeId){
            console.log(1)
            let treeNode = this.commentList.find(item => item.id === treeNodeId);
            if (!treeNode) {
                treeNode = this.commentList.flatMap(item => item.commentVoTrees).find(treeNode => treeNode.id === treeNodeId);
            }
            console.log(2)
            if (treeNode) {
                _axios.post("/comment/like",treeNode).then(resp => {
                    if(resp.data.code === 1){
                    }
                })
                treeNode.isLike = true
                treeNode.like += 1;
            }
        },
        unLike(treeNodeId){
            console.log(1)
            let treeNode = this.commentList.find(item => item.id === treeNodeId);
            if (!treeNode) {
                treeNode = this.commentList.flatMap(item => item.commentVoTrees).find(treeNode => treeNode.id === treeNodeId);
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
        commentFunction1(){
            this.comment.isgrande = 1
            this.comment.comment = this.comment1
            this.comment.grande = 1
            this.comment.parentid = 1
            this.addComment();
        },
        commentFunction2(UserId,parentid){
            this.comment.isgrande = 2
            this.comment.toUserId = UserId
            this.comment.grande = 2
            this.comment.parentid = parentid
            this.comment.comment = this.comment2
            this.addComment(parentid);
        },
        commentFunction3(UserId,parentid,showId){
            this.comment.isgrande = 3
            this.comment.toUserId = UserId
            this.comment.grande = 2
            this.comment.parentid = parentid
            this.comment.comment = this.comment3
            this.addComment(showId);
        },
        commentFunction4(UserId,parentid,showId){
            this.comment.isgrande = 3
            this.comment.toUserId = UserId
            this.comment.grande = 2
            this.comment.parentid = parentid
            this.comment.comment = this.comment4
            this.addComment(showId);
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
            this.comment.discussId = this.discussId
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
        handleMessage(event) {
            this.reply = JSON.parse(event.data)
            if (this.reply.code == 1) {
                
                this.commentDto = this.reply.data
                if (this.commentDto.parentid == 1) {
                    this.commentList.push(this.commentDto);
                    console.log("item添加完成")
                } else {
                    const item = this.commentList.find(item => item.id === this.commentDto.parentid)
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
        getCommentTotal(){
            _axios.get("/comment/total/"+this.discussId).then(resp => {
                this.total = resp.data.data
            })
        }
    },
    mounted() {
    
        this.setupWebSocket()
        this.discussId = this.$route.params.did
        this.getCommentTotal()
        this.getCommentByDid()
        this.getDiscuss()
    },
    beforeDestroy() {
        if (this.websocketServer.websocket) {
            this.websocketServer.websocket.close();
        }
    },
    updated() {
        
    },
    
}
export default options;
</script>
<style>
/* 只有进入页面时才让滚动条出现 */

.hover_overflow[data-v-0f935fab]:hover {
    overflow: auto;
}

.topicBox .single .topicPost .judgePos .textInp textarea {
    border: none;
    height: 50px !important;
    min-height: 50px !important;
    resize: none;
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
.topicBox .single .topicPost .judgePos .pushJudgeTopic .el-upload-list li {
    height: 80px;
    margin: 0 16px 16px 0;
    width: 80px;
}

.topicBox .single .topicPost .judgePos .pushJudgeTopic .el-upload-change {
    bottom: 0;
    height: 80px;
    left: 0;
    opacity: 1;
    position: relative;
    width: 80px;
}


.topicBox .single .topicPost .singleJudge .replyFirstInputBoxContainer .replyFirstInputBox .el-textarea textarea {
    background: transparent;
    border: none;
    border-bottom: 1px solid #ebebeb;
    height: 60px !important;
    min-height: 60px !important;
    padding-top: 15px;
}

.topicBox .single .topicPost .singleJudge .replyBox .replyA .replyInputBoxContainer .replyInputBox .el-textarea textarea {
    background: transparent;
    border: none;
    border-bottom: 1px solid #ebebeb;
    height: 60px !important;
    min-height: 60px !important;
    padding-top: 15px;
}



</style>
<style scoped>


.topicBox .single .topicPost .singleJudge .replyBox .replyB .replyBInfo .span2 {
    color: #666;
    font-size: 14px;
    font-weight: 400;
    margin-left: 5px;
    margin-right: 5px;
}



.topicBox .single .topicPost .judgePos .judgeCliP {
    overflow: hidden;
}


.topicBox .single .topicPost .singleJudge .singleT .singleCli .sureCli:hover {
    color: #1769fe;
}

.topicBox .single .topicPost .singleJudge .singleT .singleCli .comment:hover {
    color: #1769fe;
}

.lesson_rightcon[data-v-648695f9] {
    height: 100%;
    overflow: hidden;
    position: relative;
    width: 100%;
    z-index: 100;
}

.lesson_right[data-v-0f935fab] {
    height: calc(100vh - 112px);
    min-height: 500px;
    padding-bottom: 50px;
    padding-left: 24px;
    position: relative;
}
.hover_overflow {
    overflow: hidden;
}
.lesson_right .title[data-v-0f935fab] {
    color: #333;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0;
    margin-bottom: 20px;
    position: relative;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
body[data-v-0f935fab], dd[data-v-0f935fab], dl[data-v-0f935fab], fieldset[data-v-0f935fab], h1[data-v-0f935fab], h2[data-v-0f935fab], h3[data-v-0f935fab], h4[data-v-0f935fab], h5[data-v-0f935fab], h6[data-v-0f935fab], input[data-v-0f935fab], legend[data-v-0f935fab], ol[data-v-0f935fab], option[data-v-0f935fab], p[data-v-0f935fab], td[data-v-0f935fab], textarea[data-v-0f935fab], ul[data-v-0f935fab] {
    margin: 0;
    padding: 0;
}
p {
    margin: 0 0 10px;
}
.lesson_right .list[data-v-0f935fab] {
    letter-spacing: 0;
    margin-bottom: 40px;
}

.lesson_right .list .t2[data-v-0f935fab] {
    color: #666;
    font-size: 14px;
    margin: 0 0 20px;
}

.fuwenben, .fuwenben.breadWord {
    word-break: break-word;
}
.fuwenben {
    white-space: normal;
    word-wrap: break-word;
    font-family: -apple-system, SF UI Text, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif !important;
    text-align: left;
}
.xmodule_display.xmodule_HtmlModule * {
    font-size: 16px;
    line-height: 1.8em !important;
}
.custom_ueditor_cn_body {
    font-family: sans-serif;
    font-size: 16px;
    line-height: normal;
}
.lesson_right .list .t1[data-v-0f935fab] {
    color: #333;
    font-size: 16px;
    font-weight: 500;
    margin: 16px 0;
}
button, i, input, select, textarea {
    font-family: -apple-system, SF UI Text, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
    line-height: 1em;
}
.topicBox {
    width: 791px;
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

img {
    vertical-align: top;
}
.topicBox .imgTip p {
    color: #666;
    font-size: 12px;
    font-weight: 400;
    line-height: 30px;
    text-align: center;
}
.topicBox .single {
    border-bottom: 1px solid #ebebeb;
    padding-top: 24px;
}

.topicBox .single .topicPost .judgePos.show {
    display: block;
    margin-bottom: 15px;
}
.topicBox .single .topicPost .judgePos {
    background: #fff;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    display: none;
    height: auto;
    margin-top: 5px;
}

.show {
    display: block !important;
}
.topicBox .single .topicPost .judgePos .textInp {
    border-bottom: 1px solid #ebebeb;
    margin-top: 10px;
}
.el-input--medium {
    font-size: 14px;
}


button, input, optgroup, select, textarea {
    color: inherit;
    font: inherit;
    margin: 0;
}
.topicBox .single .topicPost .judgePos .pushJudgeTopic {
    padding-left: 20px;
    padding-top: 16px;
    position: relative;
    width: 100%;
}



.el-upload-list--picture-card {
    display: inline;
    margin: 0;
    vertical-align: top;
}
.el-upload-list {
    list-style: none;
    margin: 0;
    padding: 0;
}

.el-upload--picture-card {
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
    height: 148px;
    line-height: 146px;
    vertical-align: top;
    width: 148px;
}
.topicBox .single .topicPost .judgePos .pushJudgeTopic .upload-icon {
    display: inline-block;
    height: 35px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 35px;
}
.topicBox .single .topicPost .judgePos .pushJudgeTopic .el-upload .el-upload__input {
    display: none;
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
.topicBox .single .topicPost .judgePos .judgeCliP .el-button:hover{
    background-color: #00aeec;
    border-color: #00aeec;
}

.canNotCli {
    background: #ddd !important;
    border: none !important;
    box-shadow: none !important;
    color: #999 !important;
    cursor: not-allowed !important;
}


.el-upload--picture-card:hover, .el-upload:focus {
    border-color: #409eff;
    color: #409eff;
}

.topicBox .single .topicPost .judgePos .judgeCliP .tip {
    color: #9b9b9b;
    float: left;
    margin-left: 20px;
    margin-top: 5px;
    display: none;
}
.topicBox .single .topicPost .judgePos .judgeCliP .tip .tip-attention {
    margin-right: 10px;
}

.topicBox .single .topicPost .singleJudge+.singleJudge {
    border: 0;
}

.topicBox .single .topicPost .singleJudge.ifInStudy {
    margin-left: 30px;
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

.topicBox .spanTeacher {
    color: #ff9243;
    font-size: 12px;
    font-weight: 400;
}

.topicBox .jingpin {
    background: #fff4f5;
    border-radius: 4px;
    color: #fa4b4c;
    display: inline-block;
    font-size: 12px;
    height: 24px;
    line-height: 24px;
    margin-left: 5px;
    margin-top: 3px;
    padding: 0 6px;
    text-align: center;
    vertical-align: baseline;
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

.is_praised {
    font-size: 18px;
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
.topicBox .single .topicPost .singleJudge .singleT .singleCli div i {
    float: left;
    font-size: 14px;
}

.topicBox .single .topicPost .singleJudge .singleT .singleCli div span {
    float: left;
    line-height: 16px;
    margin-left: 3px;
}


/* .topicBox .single .topicPost .singleJudge .replyFirstInputBoxContainer {
    display: none;
} */
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

.el-input--medium {
    font-size: 14px;
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
    background: #7fd6f5;
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
.topicBox .single .topicPost .singleJudge .replyFirstInputBoxContainer .replyFirstInputBox .replyBtns .btns .btn2:hover{
    background: #00aeec;
    border-color: #00aeec;

}



.el-button--primary {
    background-color: #1769fe;
    border-color: #1769fe;
}
.el-button--medium {
    border-radius: 4px;
    font-size: 14px;
    padding: 10px 20px;
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

.topicBox .spanTeacher {
    color: #ff9243;
    font-size: 12px;
    font-weight: 400;
}

.topicBox .single .topicPost .singleJudge .replyBox .replyA .replyAInfo .span4 {
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

.topicBox .single .topicPost .singleJudge .replyBox .replySingleT .singleCli:hover .del {
    color: #fa4949;
    display: block;
}

.topicBox .single .topicPost .singleJudge .singleT .singleCli:hover .del {
    color: #fa4949;
    display: block;
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
.topicBox .single .topicPost .singleJudge .replyBox .replySingleT .singleCli div i {
    float: left;
    font-size: 14px;
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
    background: #7fd6f5;
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

.topicBox .single .topicPost .singleJudge .replyBox .replyA .replyInputBoxContainer .replyInputBox .replyBtns .btns .btn2:hover{
    background: #00aeec;
    border-color: #00aeec;
}

.topicBox .single .topicPost .singleJudge .replyBox .replyB {
    padding-top: 10px;
}
.topicBox .single .topicPost .singleJudge .replyBox .replyB .replyBInfo .span1 {
    color: #333;
    font-size: 14px;
    font-weight: 500;
}

.topicBox .single .topicPost .singleJudge .replyBox .replyB .replyBInfo .span3 {
    color: #333;
    font-size: 14px;
    font-weight: 500;
}
.topicBox .single .topicPost .singleJudge .replyBox .replyB .replyBInfo .span4 {
    color: #666;
    font-size: 14px;
    font-weight: 400;
    white-space: pre-wrap;
    word-wrap: break-word;
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
    background: #7fd6f5;
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
.topicBox .single .topicPost .singleJudge .replyBox .replyB .replyInputBoxContainer .replyInputBox .replyBtns .btns .btn2:hover{
    background: #00aeec;
    border-color: #00aeec;
}

.topicBox .single .topicPost .singleJudge .replyBox .replySingleT .singleCli:hover .commenting:hover, .topicBox .single .topicPost .singleJudge .replyBox .replySingleT .singleCli:hover .sureCli:hover {
    color: #1769fe;
}

.topicBox .single .topicPost .singleJudge .replyBox .replySingleT .singleCli .commenting {
    margin-left: 7px;
    margin-top: -1px;
}

</style>