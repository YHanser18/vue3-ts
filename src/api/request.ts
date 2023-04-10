import axios from 'axios'

const request = axios.create({
  baseURL: '/api', // 所有的请求地址前缀部分(没有后端请求不用写)
  timeout: 80000, // 请求超时时间(毫秒)
  withCredentials: true // 异步请求携带cookie
  // headers: {
  // 'Content-Type': 'application/json',// 设置后端需要的传参类型
  // 'token': x-auth-token', // 一开始就要token
  // 'X-Requested-With': 'XMLHttpRequest',
  // },
})

// request拦截器
request.interceptors.request.use(
  (config) => {
    // 如果你要去localStor获取token
    // let token = localStorage.getItem("x-auth-token");
    // if (token) {
    //添加请求头
    // config.headers['Authorization'] = 'Bearer ' + token
    // }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// response 拦截器
request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default request
