<template>
    <el-dialog title="视频上传" border :visible.sync="addMediaVisible">
            <el-table :data="mediaDataList">
                <el-table-column property="chapterName" align="center" label="章节名称"></el-table-column>
                <el-table-column property="name" align="center" label="文件名"></el-table-column>
                <el-table-column property="size" align="center" label="大小"></el-table-column>
                <el-table-column property="progress" align="center" label="上传进度">
                    <template slot-scope="scope">
                        <el-progress :percentage="scope.row.progress" :format="format"></el-progress>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="操作">
                    
                </el-table-column>
            </el-table>
            <span slot="footer" class="dialog-footer">
                <el-upload action="#" :auto-upload="false" :accept="'video/*'" :show-file-list="false"
                    :on-change="changeFile" 
                    :limit="4145728000">
                    <el-button>添加文件</el-button>
                </el-upload>
            </span>
        </el-dialog>
</template>
<script>
import SparkMD5 from 'spark-md5';
import _axios from '@/axios/myaxios';

export default {
    props: {
        visible: {
            type: Boolean,
            required: true
        },
        chapter: {
            type: Object,
            required: false
        }
    },
    computed: {

        addMediaVisible: {
            get() {
                return this.visible;
            },
            set(value) {
                this.$emit('update:visible', value);
            }
        }
    },
    data () {
        return {
            mediaDataList:[],
            selectedMedia: null,
            hash: null,
            videoName: "",            
            chunkSize: 10*1024*1024,  //分片长度
            current:0,     
            progress:0,   //上传进度
            isPause: false,     // 是否上传暂停中
            isCancel: false,    // 是否取消上传
            currentUploadIndex: 0,

        }
    },
    methods: {
        format(percentage) {
            return percentage === 100 ? '满' : `${percentage}%`;
        },
        // 根据整个文件的文件名和大小组合的字符串生成hash值，大概率确定文件的唯一性
        fhash(file) {
            // console.log("哈希字段: ", file.name+file.size.toString());
            return new Promise(resolve => {
                const spark = new SparkMD5();
                spark.append(file.name+file.size.toString());
                resolve(spark.end());
            })
        },
        async changeFile(file){
            if (!file) return;
            file = file.raw;
            if (file.type != "video/mp4") {
                this.$message('文件类型不符合');
                return;
            }
            const maxSizeInBytes = 4000 * 1024 * 1024; // 4000MB
            
            if (file.size <= maxSizeInBytes) {
                const fileInfo = {
                    id: this.chapter.id,
                    chapterName: this.chapter.name,
                    name: file.name,
                    size: file.size.toString(),
                    progress: 0,
                    file: file,
                    isPause: false,
                    isCancel: true,
                    chapter: this.chapter
                };
                this.mediaDataList.push(fileInfo);
                // 如果当前没有文件在上传，则开始上传新文件
                if (this.mediaDataList.length === 1) {
                    await this.uploadFile(this.mediaDataList[this.currentUploadIndex]);
                }
            } else {
                // 文件大小超出限制
                this.$message("视频太大了~");
            }
        },
        async uploadFile(fileInfo) {
            this.selectedMedia = fileInfo.file;
            this.videoName = fileInfo.name.split(".mp4")[0];
            this.hash = await this.fhash(this.selectedMedia);
            await this.upload(fileInfo);
            
            // 上传完成后更新状态并移除文件信息
            fileInfo.progress = 100;
            this.mediaDataList.splice(this.currentUploadIndex, 1);  // 移除文件信息
            this.currentUploadIndex = this.mediaDataList.length > 0 ? 0 : -1;
            // 检查是否有其他文件待上传
            if (this.mediaDataList.length > 0) {
                await this.uploadFile(this.mediaDataList[this.currentUploadIndex]);
            }
            this.currentUploadIndex = 0
        },
        async upload(fileInfo) {
            if (!this.selectedMedia) {
                this.$message.error('未选择文件');
                return;
            }
            const chunks = this.createChunks(this.selectedMedia)
            const result = await this.askCurrentChunk(this.hash)
            this.current = result.data.data;
            for (this.current; this.current < chunks.length; this.current++) {
                const chunk = chunks[this.current];
                const formData = new FormData();  //用于post请求的参数构造
                formData.append('chunk', chunk); // 将当前分片作为单独的文件上传
                formData.append('hash', this.hash);
                formData.append('index', this.current); // 传递分片索引
                try{
                    const res = await this.uploadChunk(formData);
                    if (res.data.code !== 1) {
                        this.$message.error(res.data.msg)
                        this.isFailed = true;
                        this.isPause = true;
                    }
                }catch{
                    this.$message.error("文件上传失败")
                    return;
                }
                // 暂停上传
                if (fileInfo.isPause) {
                    // 取消上传彻底删除已上传分片
                    if (fileInfo.isCancel) {
                        await this.cancelUpload(this.hash);
                        // 删除 fileInfo
                        this.mediaDataList.splice(this.mediaDataList.indexOf(fileInfo), 1);
                        this.currentUploadIndex = this.mediaDataList.length > 0 ? 0 : -1;
                        // 检查是否有其他文件待上传
                        if (this.mediaDataList.length > 0) {
                            await this.uploadFile(this.mediaDataList[this.currentUploadIndex]);
                        }
                        this.currentUploadIndex = 0
                        fileInfo.isCancel = false;
                    }
                    return;
                }
                this.progress = Math.round(((this.current + 1) / chunks.length) * 100); // 实时改进度条
                fileInfo.progress = this.progress;
                console.log(this.progress)
            }
            this.progress = 100;    // 上传完成再次确认为100%
            console.log(fileInfo.chapter)
            const formData = new FormData();  //用于post请求的参数构造
            formData.append('hash', this.hash);
            formData.append('teachPlanId',fileInfo.chapter.id)
            formData.append('courseId',fileInfo.chapter.courseId)
            formData.append('name',fileInfo.name)
            _axios.post("/video/merge",formData).then(resp => {
                if(resp.data.code == 1){
                    this.$message({
                        message: '已上传到服务器，稍后将添加该课程',
                        type: 'success'
                    });
                }
            })
        },
        

        // 请求
        // 获取当前还没上传的序号 断点续传
        async askCurrentChunk(hash) {
            const params = new URLSearchParams();
            params.append("hash",hash)
            return await _axios.get("/video/ask-chunk?"+params);
        },

        // 取消上传
        async cancelUpload(hash) {
            const params = new URLSearchParams();
            params.append("hash",hash)
            return await this.$get("/video/cancel-upload?"+params);
        },
        
        //文件分片
        createChunks(file) {
            const result = [];
            for (let i = 0; i < file.size; i += this.chunkSize) {
                result.push(file.slice(i, i + this.chunkSize));
            }
            return result;
        },

        // 上传分片
        async uploadChunk(formData) {
            return await _axios.post("/video/upload-chunk", formData)
        },
    },
    mounted() {
        
    },
}
</script>