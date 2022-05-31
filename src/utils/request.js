// 请求模块封装

import axios from 'axios'

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
})

// 请求拦截器
// 响应拦截器

// 导出 request模块
export default request
