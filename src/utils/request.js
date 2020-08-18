import axios from "axios"
const service = axios.create({
  //自动根据环境变量切换本地和线上 api。
  baseURL:process.env.VUE_APP_BASE_API,
  timeout:5000
})

//添加请求拦截器
service.interceptors.request.use(
  config=>{
    //在请求之前做些什么
    return config;
  },
  error=>{
    //对请求错误做些什么
    console.log(error)
    return Promise.reject(error)
  }
)

//添加响应拦截器
service.interceptors.response.use(
  response=>{
    //对响应数据做些什么
    return response;
  },
  error=>{
    //对响应错误做些什么
    return Promise.reject(error);
  }
)

export default service