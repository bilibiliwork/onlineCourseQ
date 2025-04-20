import axios from "axios";
import Router from "@/router/index";

const baseUrl = '/api';
            
const _axios = axios.create(
    { 
        baseURL: baseUrl,
        withCredentials:true 
    }
)


_axios.interceptors.request.use(
    function(config){
        config.headers = {
            token: JSON.parse(sessionStorage.getItem("jwt")) 
        }
        return config;     //状态码为2xx走这里
    },
    function(error){
        return Promise.reject(error);    //非2xx走这里
    }
)

_axios.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        if (error.response && error.response.status === 401) {
            /* this.$message({
                message: '您还未登陆',
                type: 'warning'
              }); */
            // console.log('用户未登录, 直接跳转至登录页面');
            Router.push("/main");
        }
        return Promise.reject(error);
    }
)



export default _axios;