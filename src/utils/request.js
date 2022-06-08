// 请求模块封装
import axios from 'axios'
import store from '@/store'

const request = axios.create({
  baseURL: 'http://127.0.0.1/api'
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  const { user } = store.state
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, function (err) {
  return Promise.reject(err)
})

// 响应拦截器

// 导出 request模块
export default request
