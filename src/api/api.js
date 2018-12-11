import axios from 'axios';
// import qs from 'qs';
// import { message } from 'antd';
import Config from './config';

const BASE_URL = Config.path;

const Axios = axios.create({
    baseURL: BASE_URL,
    timeout: 20000,
    withCredentials: true // 跨域请求时是否需要使用凭证
});

// axios.defaults.baseURL = 'https://txuedai.labifenqi.com/gateway2server/'; 

Axios.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        const data = response.data;
        
        if (data.code !== 1) {
            // message.error(data.msg || '网络异常，请稍后再试');
        }
        // console.log('请求后')
        return response;
    },
    error => {
        
        return Promise.reject(error);
    }
);


Axios.interceptors.request.use(
    request => {
        
        if (request.data instanceof FormData) {
            request.headers['Content-Type'] = 'multipart/form-data';
        }
        // else {
        //     request.data = qs.stringify(request.data);
        //     request.headers['Content-Type'] =
        //         'application/x-www-form-urlencoded';
        // }
        return request;
    },
    error => {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

export default Axios;
