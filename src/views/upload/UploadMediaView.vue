<template>
    <el-dialog title="视频上传" border :visible.sync="addMediaVisible">
            <el-table :data="mediaDataList">
                <el-table-column property="date" align="center" label="文件名"></el-table-column>
                <el-table-column property="name" align="center" label="大小"></el-table-column>
                <el-table-column property="address" align="center" label="上传进度"></el-table-column>
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

export default {
    props: {
        visible: {
            type: Boolean,
            required: true
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
        }
    },
    methods: {
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
            
            const maxSizeInBytes = 4000 * 1024 * 1024; // 600MB
            
            if (file.size <= maxSizeInBytes) {
                this.selectedVideo = file;
                this.videoName = file.name.split(".mp4")[0];
                this.hash = await this.fhash(this.selectedVideo);
                this.upload()  
            } else {
                // 文件大小超出限制
                this.$message("视频太大了~");
            }
        },
        async upload() {
            if (!this.selectedVideo) {
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
                        this.$message.error("上传失败")
                        this.isFailed = true;
                        this.isPause = true;
                    }
                }catch{
                    this.$message.error("文件上传失败")
                    return;
                }
                // 暂停上传
                if (this.isPause) {
                    // 取消上传彻底删除已上传分片
                    if (this.isCancel) {
                        await this.cancelUpload(this.hash);
                        this.isCancel = false;
                    }
                    return;
                }
                this.progress = Math.round(((this.current + 1) / chunks.length) * 100); // 实时改进度条
            }
            this.progress = 100;    // 上传完成再次确认为100%
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