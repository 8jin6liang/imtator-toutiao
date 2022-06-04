import request from '@/utils/request.js'

const login = (data) => {
  return request({
    method: 'POST',
    url: '/login/authorizations',
    data
  })
}

export { login }
