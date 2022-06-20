import axios from "axios";
import { response } from "express";
import qs from "qs";
import serverConfig from "./api";

//创建axios实例
const http = axios.create({
    baseURL: serverConfig.baseURL, // baseURL
    timeout: 5000 //超时处理
})


// 这里取决于登录的时候将 token 存储在哪里
const token = localStorage.getItem('token')

// 请求拦截
// 这里面接受两个回调函数，一个是成功，另一个是失败
http.interceptors.request.use(
    (config)=>{
        if(config.method === "post"){
            config.headers["content-type"] = "application/x-www-form-urlencoded";
            config.data = qs.stringify(config.data);
        }
        token && (config.headers.Authorization = token);
        return config;
    }, 
    (error)=>{
        return Promise.reject(error);
    }
)

//响应拦截
http.interceptors.response.use(
    (res)=>{
        if(res.status === 200){
            return res.data;
        }else{
            return Promise.reject(res);
        }
    },
    (error)=>{
        switch (error.response.status) {
            case 401:
                break
            case 403:
                break
            case 404:
                break
            case 500:
                break
            default:
                console.log('其他错误信息')
        }
        return Promise.reject(error);
    }
)

export default http;